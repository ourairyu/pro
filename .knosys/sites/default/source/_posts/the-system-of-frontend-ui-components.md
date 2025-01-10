---
title: The System of Front-end UI Components
description: >-
  Based on the feature model obtained in the previous article of this series,
  let’s discuss how to design and build a front-end UI component system.
date: '2020-10-16 20:40:15 +0800'
categories:
  - web-development
tags:
  - software-engineering
  - frontend-web-development
  - frontend-engineering
series: talking-about-frontend-ui-components
---

This article is the third in the series "[Talking About Front-end UI Components](/series/talking-about-frontend-ui-components/)".

In the previous article of this series, "[The Features of Front-end UI Components](/posts/the-features-of-frontend-ui-components/)", we analyzed the composition of frontend UI components from the perspective of separation of concerns and categorized UI components in a rather abstract way. We also described the inheritance relationships that allow components to exhibit reusability, thereby establishing a feature model for frontend UI components.

Building on the feature model derived in the previous article, this article will explore how to design and establish a frontend UI component system.

The most crucial aspect of component system design is to genuinely aim to make UI components reusable, much like the materials used in manufacturing—creating interchangeable UI components.

The variability of UI component constituents has a significant impact on the design of the component system. For ease of reference, the table from the previous article, which lists the variability and influencing factors of the constituents, is reproduced here:

| Constituent | | Variability | Influencing Factors |
| --- | --- | --- | --- |
| Structure | Visual Structure | Not Easily Variable | Content structure, layout-related styles |
|  | Content Structure | More Easily Variable | Source code of JS libraries/frameworks for generating HTML, platform-specific view structure description languages |
| Presentation | Theme Style | Very Easily Variable | GUI designer's aesthetics and ideas, non-layout styles, icons, and images |
| Behavior | Interaction Logic | Not Easily Variable | Interaction designer's ideas |
|  | Business Logic | Very Easily Variable | Business rules |

## Component Architecture

All the UI component constituents listed in the table can exist as separate components. If we consider the UI component as the "end product", then the components corresponding to the UI component constituents are the "intermediate products".

<blockquote>
  <p>In software engineering, a "component" generally refers to a reusable block of software, akin to the "parts" used in manufacturing. This is a broad concept that can encompass software packages, web services, or modules, etc.</p>
  <p>However, in the frontend context, a "component" usually refers to a view unit on a webpage, i.e., a "UI component". It can be said that "UI components" are a subset of "components".</p>
  <footer>Ourai <cite><a href="/posts/the-core-concepts-of-frontend-ui-components/">The Core Concepts of Front-end UI Components</a></cite></footer>
</blockquote>

Given the above, it is necessary to clarify that the term "component" mentioned as "existing separately" refers to a "reusable block of software", not a "UI component".

### Style Components

In the previous article, the concept of a "virtual component" was introduced—

<blockquote>
  <p>Before proceeding, let's introduce the concept of a "virtual component". As the name suggests, it is a virtual entity that does not actually exist but is a conceptual component. It is a collection of several theme style attributes.</p>
  <footer>Ourai <cite><a href="/posts/the-features-of-frontend-ui-components/">The Features of Front-end UI Components</a></cite></footer>
</blockquote>

Similarly, a "style component" is also a collection of theme style attributes, which roughly includes:

![Style Component Composition](style-component.png)

If we were to represent this in code, we could use variables in CSS preprocessors. Here is an example using Sass:

```css
// Primary colors
$sc--primary: #cce5ff !default;
$sc--secondary: #e2e3e5 !default;
$sc--info: #d1ecf1 !default;
$sc--success: #d4edda !default;
$sc--warning: #fff3cd !default;
$sc--danger: #f8d7da !default;

// Text colors
$sc--text-primary: #303133 !default;
$sc--text-secondary: #696c71 !default;
$sc--text-heading: #2c405a !default;
$sc--text-regular: #333 !default;
$sc--text-placeholder: #c0c4cc !default;

// Font sizes
$sc--font-size: 14px !default;
$sc--font-size-lg: 16px !default;
$sc--font-size-sm: 12px !default;

// Font weights
$sc--font-weight-light: 300 !default;
$sc--font-weight-normal: 400 !default;
$sc--font-weight-bold: 700 !default;

// Border widths
$sc--border-width: 1px !default;

// Border colors
$sc--border-color: #dcdfe6 !default;

// Border radii
$sc--border-radius: 4px !default;
$sc--border-radius-lg: 6px !default;
$sc--border-radius-sm: 2px !default;
```

Style components are closely related to the inheritance of presentation reuse—

<blockquote>
  <p>Input components, dropdown list components, and others that belong to form controls all inherit from the "form control" virtual component. If they do not specify their own color, font, border, and other theme style attributes, they will display according to the settings in the virtual component. Similarly, dropdown list components and dropdown menu components, which have pop-ups, inherit from the "pop-up" virtual component.</p>
  <p>You may have noticed that the dropdown list component inherits from both the "form control" and "pop-up" virtual components, which is the "multiple inheritance" mentioned earlier.</p>
  <p>These so-called "virtual components" also follow the same inheritance rules—if they do not specify particular theme style attributes, they will display according to the settings of their parent. So, what is the "parent" of a virtual component?—It is the base style.</p>
  <footer>Ourai <cite><a href="/posts/the-features-of-frontend-ui-components/">The Features of Front-end UI Components</a></cite></footer>
</blockquote>

The Sass variables defined in the example above constitute the "base style".

Taking "form control" as an example, a virtual component that inherits the base style can be represented in code as follows:

```css
$sc--form-control-font-size: $sc--font-size !default;
$sc--form-control-font-size-lg: $sc--font-size-lg !default;
$sc--form-control-font-size-sm: $sc--font-size-sm !default;

$sc--form-control-height: 36px !default;
$sc--form-control-height-lg: 40px !default;
$sc--form-control-height-sm: 32px !default;

$sc--form-control-color: $sc--text-regular !default;
$sc--form-control-placeholder-color: $sc--text-placeholder !default;
$sc--form-control-bg: #fff !default;
$sc--form-control-box-shadow: none !default;

$sc--form-control-border-width: $sc--border-width !default;
$sc--form-control-border-color: $sc--border-color !default;
$sc--form-control-border-radius: $sc--border-radius !default;
$sc--form-control-border-radius-lg: $sc--border-radius-lg !default;
$sc--form-control-border-radius-sm: $sc--border-radius-sm !default;
```

Correspondingly, the style component part of an input component would be roughly as follows:

```css
$sc--input-font-size: $sc--form-control-font-size !default;
$sc--input-font-size-lg: $sc--form-control-font-size-lg !default;
$sc--input-font-size-sm: $sc--form-control-font-size-sm !default;

$sc--input-height: $sc--form-control-height !default;
$sc--input-height-lg: $sc--form-control-height-lg !default;
$sc--input-height-sm: $sc--form-control-height-sm !default;

$sc--input-color: $sc--form-control-color !default;
$sc--input-placeholder-color: $sc--form-control-placeholder-color !default;
$sc--input-bg: $sc--form-control-bg !default;
$sc--input-box-shadow: $sc--form-control-box-shadow !default;

$sc--input-border-width: $sc--form-control-border-width !default;
$sc--input-border-color: $sc--form-control-border-color !default;
$sc--input-border-radius: $sc--form-control-border-radius !default;
$sc--input-border-radius-lg: $sc--form-control-border-radius-lg !default;
$sc--input-border-radius-sm: $sc--form-control-border-radius-sm !default;
```

### Visual Components

Although the final presentation of a UI component requires a content structure to support it as a framework, if the goal is merely to outline the contour of the UI component's visual structure, CSS alone can suffice. A series of modular, reusable, and combinable CSS rules constitute a "visual component", also known as a "CSS component".

In visual components, it is advisable to use naming conventions such as BEM for CSS class selectors. A derivative of BEM is recommended:

```css
/* Component */
.ComponentName {}

/* Component descendant */
.ComponentName-descendentName {}

/* Component modifier */
.ComponentName--modifierName {}

/* Component state */
.ComponentName.is-stateOfComponent {}
```

A complete visual component already includes a style component. Taking a button component as an example, its visual component would be roughly as follows:

```css
$sc--button-font-size: $sc--form-control-font-size !default;
$sc--button-font-size-lg: $sc--form-control-font-size-lg !default;
$sc--button-font-size-sm: $sc--form-control-font-size-sm !default;

$sc--button-padding-y: 10px !default;
$sc--button-padding-y-lg: 12px !default;
$sc--button-padding-y-sm: 9px !default;

$sc--button-padding-x: 20px !default;
$sc--button-padding-x-lg: 20px !default;
$sc--button-padding-x-sm: 15px !default;

$sc--button-color: $sc--form-control-color !default;
$sc--button-bg: $sc--form-control-bg !default;
$sc--button-box-shadow: $sc--form-control-box-shadow !default;

$sc--button-border-width: $sc--form-control-border-width !default;
$sc--button-border-color: $sc--form-control-border-color !default;
$sc--button-border-radius: $sc--form-control-border-radius !default;
$sc--button-border-radius-lg: $sc--form-control-border-radius-lg !default;
$sc--button-border-radius-sm: $sc--form-control-border-radius-sm !default;

$sc--button-disabled-color: $sc--text-placeholder !default;
$sc--button-disabled-bg: #eee !default;

/* ----- Above is the style component part ----- */

.Button {
  padding: $sc--button-padding-y $sc--button-padding-x;
  font-size: $sc--button-font-size;
  color: $sc--button-color;
  background-color: $sc--button-bg;
  border: $sc--button-border-width solid $sc--button-border-color;
  border-radius: $sc--button-border-radius;
  box-shadow: $sc--button-box-shadow;

  &-icon,
  &-text {
    display: inline-block;
    vertical-align: middle;
  }

  &-icon + &-text {
    margin-left: 5px;
  }

  // Large button
  &--large {
    padding: $sc--button-padding-y-lg $sc--button-padding-x-lg;
    font-size: $sc--button-font-size-lg;
    border-radius: $sc--button-border-radius-lg;
  }

  // Small button
  &--small {
    padding: $sc--button-padding-y-sm $sc--button-padding-x-sm;
    font-size: $sc--button-font-size-sm;
    border-radius: $sc--button-border-radius-sm;
  }

  // Button disabled state
  &.is-disabled {
    color: $sc--button-disabled-color;
    background-color: $sc--button-disabled-bg;
  }
}
```

From the code example above, it can be seen that the button component includes "icon" and "text" as descendants that are horizontally arranged and vertically centered, and it has three specifications: "regular", "large", and "small", as well as two states: "normal" and "disabled" – the visual structure and characteristics of the UI component are depicted through CSS.

### Headless Components

The term "headless" is translated from "headless" in the computer field, representing hardware or software that operates without relying on GUI-related devices or libraries. Here, a "headless component" refers to the interaction logic of a UI component, as well as the business logic integrated with it.

The responsibility of a headless component is to listen for and receive notifications from the event system, providing functions or methods for handling the state of the UI component and data transformation logic. It should not concern itself with anything beyond interaction logic.

In headless components, what is listened to and received are not the real events provided by the runtime environment, but rather custom "proxy events", which are placeholders for real events. The main reason for this is that the same behavior, although it may be triggered by different real events, has the same semantic meaning for the UI component – proxy events are used to express the real semantic meaning for the UI component.

Taking the dropdown menu component as an example, the display of its pop-up layer can be triggered by the `click` or `mouseover` real events of the button it contains, but the real semantic meaning for the UI component is "pop-up" rather than "click" or "hover", hence the use of the proxy event `pop-up` as a substitute.

The statement above that a headless component is "the interaction logic and integrated business logic of a UI component", and yet "should not concern itself with anything beyond interaction logic", may seem contradictory at first glance, but it is not –

<blockquote>
  <p>Business logic is essential and important for a website or application, but for a UI component, it is not so necessary, let alone important. In the frontend GUI layer, business logic should be an extension of interaction logic.</p>
  <footer>Ourai <cite><a href="/posts/the-features-of-frontend-ui-components/">The Features of Front-end UI Components</a></cite></footer>
</blockquote>

In a UI component, business logic is closely related to events, not just UI events, such as sending an HTTP request after clicking a button; but also data events, such as updating the displayed text after business data changes. Therefore, business logic is an extension of interaction logic. This requires headless components to provide extension points when handling interaction logic, such as "event mapping", so that business logic can exist as an extension of the headless component, rather than being integrated into it.

Headless components will call event handling functions based on proxy events. In the absence of specification, proxy events will default to a real event, and the event handling function will execute a default set of logic; the role of event mapping is to change the real event that the proxy event points to, as well as the logic of the event handling function.

The interface definition of a headless component might look like this:

```js
// Proxy event
type EventBroker = string;
// Real event
type EventName = string;
// Event handling function
type EventHandler = (params: any) => void;
// Event object
type EventObject = { name: EventName; handler: EventHandler };
// Event mapping
type EventMap = { [key: string]: EventName | EventHandler | EventObject };

interface IHeadlessComponent {
  // Event mapping
  setEventMap(map: EventMap): void;
  // Get real event
  getEventName(broker: EventBroker): EventName;
  // Get event handling function
  getEventHandler(broker: EventBroker): EventHandler;
}
```

### Structural Components

As the name suggests, "structural components" are used to generate the content structure of UI components, but their role is not limited to this; they also handle the integration of visual components with headless components.

<blockquote>
  <p>If we look solely at the final HTML structure, it may seem stable, but in modern frontend development, the structure of HTML is dynamically generated and heavily dependent on JS libraries/frameworks like React and Vue, which lack a unified standard. Additionally, there are platform-specific view structure description languages such as WXML and AXML. The inconsistency in these writing methods makes the page content structure less stable.</p>
  <footer>Ourai <cite><a href="/posts/the-features-of-frontend-ui-components/">The Features of Front-end UI Components</a></cite></footer>
</blockquote>

As mentioned above, the content structure of UI components depends on the view structure description syntax, which in turn depends on the platform or runtime environment, making structural components the most variable among the components that constitute a UI component. They are the easiest to replace.

Using the class component writing method of Vue 2.x as an example, the structural component of a dropdown menu component would be roughly as follows:

```html
<template>
  <div :class="$style.Dropdown">
    <button :class="$style['Dropdown-trigger']" @[popUpEventName]="handlePopUp">Show Pop-up</button>
    <div :class="[$style['Dropdown-popup'], { [$style['is-shown']]: isPopUpShown }]">I am the pop-up</div>
  </div>
</template>

<!-- Visual component -->
<style lang="scss" src="./style.scss" module></style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

// Headless component
import DropdownHeadlessComponent from './headless';

@Component
export default class DropdownComponent extends Vue {
  // Event mapping configuration is externalized
  @Prop({ type: Object, default: () => ({}) })
  private readonly eventMap!: { [key: string]: any };

  private popUpEventName: string = '';

  private isPopUpShown: boolean = false;

  private handlePopUp(): void {
    this.isPopUpShown = true;
  }

  // Initialize the headless component instance and related aspects
  private initHeadless(): void {
    const hc = new DropdownHeadlessComponent();

    hc.setEventMap(this.eventMap);

    this.popUpEventName = hc.getEventName('pop-up');
  }

  public created(): void {
    this.initHeadless();
  }
}
</script>
```

If you want to support multiple technology stacks and platforms, there are currently two main strategies: implementing structural components separately in each technology stack and platform; or using tools like [Taro](https://taro.jd.com/) and [uni-app](https://uniapp.dcloud.io/) for transpilation.

## Customizability

The component architecture described above divides a UI component, which could easily become a mishmash, into style components, visual components, headless components, and structural components according to the separation of concerns. This architecture greatly enhances the reusability of each part. Except for the structural components, which have the strongest variability, the other components will remain largely unchanged once they reach a certain level of maturity. If you need to switch technology stacks or support a new platform, you only need to implement the structural components once, and the other components can be used as is.

Not only is reusability improved, but customizability is also enhanced. Based on the stage of the program lifecycle in which custom code/configuration is combined with the program, customizability is organized into the following table:

| Customizable Point | Edit Time/Compile Time | Runtime |
| --- | --- | --- |
| Theme Style | ✓ | ✓ |
| Visual Structure | ✓ | ✓ |
| Trigger Events | ✓ | ✓ |
| Business Logic | ✓ | ✓ |
| Content Structure | ✓ | ✗ |

If the code of the style component is written as in the example, it does not support runtime customization. It needs to be slightly modified:

```css
// Unmodified
$sc--font-size: 14px !default;

// Modified using CSS custom properties
$sc--font-size: var(--sc-font-size, 14px) !default;
```

## Component Specifications

Each UI component should be regarded as an independent software package or module, so all aspects of it should be complete – in addition to the code that implements the UI component, there should also be detailed usage documentation, interactive online demos, comprehensive test code, and metadata for some automated processing.

Still taking the dropdown menu component as an example, the directory structure of the related files would be roughly as follows:

```
dropdown
   ├── demo
   │   └── ...
   ├── test
   │   └── ...
   ├── changelog.md
   ├── headless.ts
   ├── index.ts
   ├── metadata.yml
   ├── package.json
   ├── readme.md
   ├── structure.vue
   └── style.scss
```

For code writing, you can refer to the code style guide that I have summarized and organized: [https://ntks.ourai.ws/guides/coding-style/](https://ntks.ourai.ws/guides/coding-style/).

Additionally, when integrating visual components in structural components, use [CSS Modules](https://github.com/css-modules/css-modules) to avoid unexpected effects caused by external style code.

## Conclusion

Based on the feature model derived in the previous article of this series, this article proposes a component architecture aimed at "constructing interchangeable UI components", mainly consisting of style components, visual components, headless components, and structural components. Except for structural components, the reusability of the other components is very high.

When a UI component is interchangeable, it becomes possible to do some interesting and valuable things around it.

In the end, the example code in the text is written to help with understanding and is for reference only. ;-)