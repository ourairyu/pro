---
title: Things About Contexts in Front-end Projects
description: >-
  I can finally write a separate article to talk specifically about things
  related to "context".
date: '2021-07-19 20:46:25 +0800'
categories:
  - web-development
tags:
  - software-engineering
  - frontend-web-development
  - frontend-engineering
series: talking-about-frontend-of-web-based-management-systems
---

After the two articles "[Things About Modules in Front-end Projects](/posts/things-about-modules-in-frontend-projects/)" and "[The System of UI Components in Front-end Projects](/posts/the-system-of-ui-components-in-frontend-projects/)", we can finally dedicate an article to the topic of "context" specifically.

## Concept Clarification

Before delving into the main subject, let's first clarify several concepts closely related to the theme: state, state management, and context.

### State

Sometimes, two groups of people engage in a heated debate—one group claims, "Frontend is all about state; there is no data. It's state that drives the view, not data". The other group retorts, "Isn't state just data? What else could it be?"—Both sides are not wrong; they are simply standing from different perspectives.

Generally speaking, "data" refers to the persistent data stored in databases or file systems, which is "static" and "persistent", often used as a shorthand for "data source"; "state", on the other hand, is the transient data kept in memory, which is "dynamic" and "temporary", originating from data read through HTTP requests or local storage, as well as user operations on the interface—yet, they are both data.

In other words, it can be considered that in the classic three-layer architecture, all data above the data layer are "states":

![Layered Architecture](layered-architecture.png)

For frontend, the communication counterpart of the data layer is the server and local storage.

### State Management

What is "state management"? As the name suggests, it is the "management" of "state". Although the term has become a buzzword in the frontend community with the popularity of Redux and the like, it is not a new concept.

Everything in the world requires management; however, when it is not complex enough, there is no need to discuss it as a separate discipline or methodology.

Due to the separation of frontend and backend and the emergence of single-page applications, the state in frontend has become more complex, making effective management a challenge, thus leading to the current situation where many people pay attention to and discuss "state management".

In the frontend projects I have encountered, the state management solutions are "polarized"—either scattered among various UI components or centralized in a so-called "global store"—I do not quite agree with either approach.

### Context

In the articles "[Things About Modules in Front-end Projects](/posts/things-about-modules-in-frontend-projects/)" and "[The System of UI Components in Front-end Projects](/posts/the-system-of-ui-components-in-frontend-projects/)", the concept of "context" has been described. Simply put, it serves a role in programs akin to the "context" that helps people understand things and make corresponding reactions, after all, their English term is also "context".

In practical applications, "context" is likely an object with many attributes and methods for reading and writing operations on them. The variables that have been exposed or not exposed are the aforementioned "states", and the exposed methods or functions are for managing these "states"—together, they constitute the "context".

A context can be implemented using a class approach:

```js
class ValueContext {
  private value;

  constructor({ initialValue }) {
    this.value = initialValue;
  }

  public getValue() {
    return this.value;
  }

  public setValue(value) {
    return this.value = value;
  }
}

const context = new ValueContext({ initialValue: 'Hello, Ourai!' });
```

Or using a functional approach:

```js
function createValueContext({ initialValue }) {
  let value = initialValue;

  return {
    getValue: () => value,
    setValue: newValue => (value = newValue),
  };
}

const context = createValueContext({ initialValue: 'Hello, Ourai!' });
```

Regardless of the implementation method or specific logic, for consumers of the context, it is an API—"context" is the interface that connects various parts of logic and has a certain degree of generalized business semantics.

## Components and State

Interaction and state are inseparable. Apart from purely display-oriented UI components, generally, UI components will have associated states, albeit maintained in different places.

Based on whether a UI component maintains its own state internally, they can be divided into "stateless components" and "stateful components".

Purely display-oriented UI components are undoubtedly "stateless components". For interactive UI components, if the state is maintained externally, they are "stateless components"; otherwise, they are "stateful components"—

```vue
<template>
  <input :value="value" @input="handleInput" />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class StatefulInput extends Vue {
  private value: string = '';

  private handleInput(evt): void {
    this.value = evt.target.value;
  }
}
</script>
```

The above example is a stateful component, while the one below is a stateless component:

```vue
<template>
  <input :value="value" @input="handleInput" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class StatelessInput extends Vue {
  @Prop({ type: String, default: '' })
  private readonly value!: string;

  private handleInput(evt): void {
    this.$emit('input', evt.target.value);
  }
}
</script>
```

In comparison, stateful components can expose fewer properties and events while ensuring normal functionality, but their reusability is reduced. Stateless components are the opposite.

Controls are typically designed as stateless components, especially those with simple interactions and purely display-oriented ones; to ensure basic functionality, complex interactive controls may be designed as stateful components.

When encapsulating components, most people's approach is similar to encapsulating controls, which leads to—

<blockquote>
  <p>In relatively large-grained components, if they mainly rely on properties and events for communication, their numbers can easily get out of control, and the internal structure and logic will also be distorted beyond recognition, making maintenance extremely difficult and unpleasant—it becomes a mess💩!</p>
  <footer>Ourai <cite><a href="/posts/the-system-of-ui-components-in-frontend-projects/">The System of UI Components in Front-end Projects</a></cite></footer>
</blockquote>

Encapsulating components in the same way as controls can easily lead to an uncontrollable number of properties and events, or an expansion of internal logic, making the components very bloated—either way, it increases the maintenance cost.

I believe that components should ideally not have interaction logic or business logic internally, nor should they maintain any state—the state and logic of the business should be elevated to the context, interaction logic should be sunk into the controls, and the display state should be calculated from the business state—ideally, the only logic in the components is the conversion between business and interaction/display.

In an ideal scenario, all dependencies within components are obtained through the context, rather than being imported from somewhere else.

In short, in the "organism" of a frontend application, controls and components are the "tissues" and "organs" that produce specific functions, while the context is the "nerves" and "blood vessels" that convey information and nutrients to them.

## Context Overview

In addition to the states to be maintained and their read/write methods/functions mentioned earlier, the basic elements that make up a context also include a synchronization mechanism, mostly based on the observer pattern, to keep the data inside and outside the context consistent.

In the system described in this series of articles, contexts are roughly divided into three categories: application context, module context, and data context.

The "application context" is a context that acts on the entire application. If there is only one application running, it can be considered a "global" context; if there are multiple applications running, then each application has its own application context.

The application context maintains states shared within a single application, such as routing, theme, internationalization configuration information, and user basic information and permissions.

The "module context" is mainly used to maintain states centered around "modules", such as dependency information on other modules' resources that a specific module relies on and the available resources it provides to other modules, as well as metadata such as the module's model, view, and server actions (functions for HTTP requests to communicate with the server).

The "data context" is the main force that makes data flow in frontend applications, which will be elaborated later.

## Data Context

Before continuing with the "data context", it is essential to understand the "[viewing frontend from the perspective of data](/posts/the-system-of-ui-components-in-frontend-projects/#Data-Perspective)" mentioned in "[The System of UI Components in Front-end Projects](/posts/the-system-of-ui-components-in-frontend-projects/)".

The "data context" is further divided into "view context" and "search context", and depending on the complexity of the entire system, they can be further divided into "field context" and "filter context". In fact, the "search context" can be considered a specialized "view context" for collecting list data filtering conditions.

### Abstraction of "Value"

The common feature of various "data contexts" is the operation on "values", so some abstractions can be made around "values"—

Based on their usage, there are three states of "values"—the "current value" that is always active, represented by `value`; the "initial value" and "default value" used for assignment during initialization and reset, represented by `initialValue` and `defaultValue`, respectively.

The meaning of the "current value" varies in different specific data contexts. For example, in the object view context, it refers to the collection of field key-value pairs that change with user operations, while in the list view context, it refers to the selected records.

In practical applications, the main difference between "initial value" and "default value" is the priority. The "initial value" has a higher priority than the "default value", meaning that the "default value" is used only in the absence of an "initial value".

There are basically only four operations related to "values", which are reading and writing the "current value" with `getValue()` and `setValue()`, passing the "current value" outward/upward with `submit()`, and restoring the "current value" to the "initial value" or "default value" with `reset()`.

Accordingly, there are four "events" for external data synchronization at different times—the `ready` event indicating that the data is ready; the `change` event triggered by each change of the "current value"; and the corresponding `submit` and `reset` events triggered when calling `submit()` or `reset()`.

Regarding the `ready` event, there is a use case: after the webpage is loaded, the list data needs to wait for the filtering conditions to be collected before making a request to obtain it, but the filtering conditions need to be restored first from the URL query parameters—this requires the list view context to listen to the `ready` event of the search context to then make a request to get the data.

### Validation of "Value"

To ensure the safety and purity of data, it is a fundamental operation to perform legality or validity checks before processing data, so there will be an internal check when calling `setValue()`.

The validation of "values" is essentially the execution of various constraints according to priority. This implies that constraints can be explicitly defined and are extensible.

The constraints of "values" can be divided into natural constraints from data types and structures, and non-natural constraints originating from model relationships and business rules. The term "natural" here is purely from the perspective of data characteristics.

## Summary

When the term "application" is mentioned, many people's first reaction is: "This thing is so heavy and huge!" In their minds, it is like the huge boulder of the Five Elements Mountain that pressed down on Sun Wukong.

However, a better perspective is to view "application" as a combination of "interfaces" and "implementations". More accurately, it might be a "production line" and "materials"—generalize and interface the parts that are less likely to change and have relatively fixed relationships and rules, connecting them to form a "production line"; the parts that are more likely to change exist as "materials" flowing on the "production line".

As I said at the end of "[The System of UI Components in Front-end Projects](/posts/the-system-of-ui-components-in-frontend-projects/)"—

<blockquote>
  <p>Ideally, it will be found that—except for business logic, it seems that almost all other parts are interfaces (interface)—the specific implementation can be arbitrarily removed and freely replaced!</p>
  <footer>Ourai <cite><a href="/posts/the-system-of-ui-components-in-frontend-projects/">The System of UI Components in Front-end Projects</a></cite></footer>
</blockquote>

Without further explanation, the above description might be a bit confusing—

In a mid-backend frontend application, the most changeable parts are business logic and UI design, while the least changeable parts are the natural constraints of "values", the inherent relationships between "views" and "fields", and the properties and events of controls.

Construct a system where the changeable parts become metadata or configurations existing as "materials", and the interconnected contexts become the "production line".