---
title: Let Me Talk About Abstraction of Front-end Application Presentation Layer
description: >-
  In a complex front-end application, if it is not layered, its scalability and
  maintainability will be unbearable...
date: '2020-09-01 23:42:35 +0800'
categories:
  - web-development
tags:
  - software-engineering
  - software-architecture
  - frontend-web-development
  - frontend-engineering
  - frontend-architecture
series: let-me-talk-about-x
---

We live in an era of rapid change, whether in business or technology. A company that appears to be commercially successful may go public one day and then delist or even go bankrupt the next due to various reasons; a seemingly advanced technology may emerge, with various media racing to write about it and hype it up, but it might soon face competitors or alternatives.

In this fast-paced environment, traditional "web front-end development" has evolved into "universal client development", and front-end developers have been "forced" from being "configuration engineers" to becoming "software engineers". Development has become more complex, with more issues to handle, and the difficulty of entering the field has increased exponentially—front-end development is no longer simple.

One of the many issues that must be addressed is the compatibility of the presentation layer's runtime environment, such as cross-browser and cross-end, cross-platform, and cross-technology stack compatibility. Note that we are talking about the "presentation layer" rather than the "view layer".

### Presentation Layer vs. View Layer

The term "presentation layer" is translated as "presentation tier" or "presentation layer", depending on whether it is divided physically or logically; while "view layer" is translated as "view". The "presentation layer" is a superset of the "view layer", and depending on the architecture design of the front-end application, they can be unequal or equal.

### Presentation Layer

The term "presentation layer" comes from the classic three-tier architecture (or multi-tier architecture), which is one of the layers. The three-tier architecture includes the data layer, logic layer, and presentation layer, generally used in C/S architecture.

![Three-tier Architecture](three-tier-application.png)

Why is this mentioned in an article about front-end development? This is because, although it is not needed in some front-end applications, especially fast-food style applications, a front-end "three-tier architecture" is very necessary in complex enterprise-level front-end applications.

### View Layer

The "view layer" comes from the "view" in the commonly used "model-view-whatever" pattern in the presentation layer. Whether it is appropriate to add the word "layer" after "view" is not discussed here, and the term "view layer" is used throughout the article.

## Runtime Environment Compatibility

### Cross-browser

Due to inconsistencies in the implementation of standards by various browser vendors and the versions of browsers, issues such as different feature support and interface display bugs may arise. Fortunately, they are generally based on standards, so the syntax of the source code is almost the same during development.

The so-called "cross-browser" is actually about using the browser's additional proprietary features and technologies or supplementing with JS to "correct" browser bugs and support features.

### Cross-end, Cross-platform, and Cross-technology stack

Nowadays, the vast majority of front-end developers are engaged in universal client development—developing web applications, client applications, and various mini-programs.

When developing web applications, it is necessary to consider whether PC and mobile ends are separate or adapted? The technology selection is whether to use React, Vue? Or use Web Components? Or something else? When developing client applications and various mini-programs, these issues also face technology selection.

If a company's business functions cover all the above scenarios, how to support them? Unlike cross-browser, the source code syntax of different ends, platforms, and technology stacks is different, and to meet business needs, each must be developed separately. However, this is obviously too costly and somewhat risky.

So, how to solve this problem? Start from the source. The fundamental source is the business scenario, and then the product design, but these are not controllable by developers and are almost impossible to change. What can be completely controlled by developers is basically only the matters during the development phase, so start from the source of this stage—the source code writing.

If the code related to the business only needs to be written once to run on different ends, platforms, and technology stacks, that would be great! This will greatly reduce costs and risks!

## Abstraction of the Presentation Layer

To achieve the purpose of cross-end, cross-platform, and cross-technology stack, the presentation layer needs to be further divided into abstract layer, runtime layer, and adaptation layer. The abstract layer is to unify the way of source code writing, which can be DSL, configuration, etc., and it is a protocol or agreement; the runtime layer is the end, platform, and technology stack that need to be "crossed"; the adaptation layer is to convert the product of the abstract layer into the form needed for normal operation in the runtime layer.

What can be abstracted in the presentation layer includes view structure, component appearance, component behavior, etc.

### View Structure

In web front-end development, HTML is an abstraction of view structure, describing what is in the interface and their hierarchical relationships. The final display requires the browser to parse HTML and then call the operating system's GUI toolkit.

For business support, whether it is HTML or other ways of piecing together interfaces, it is relatively low-level (it is "low level" rather than "low"), and the granularity of view unit division is relatively fine, which will take more time when developing interfaces.

We need a view structure abstraction that can shield some unnecessary details. In this abstraction, each view unit has its significance in business, rather than being a role that can be there or not. For specific practices, please see the following text.

### Component Appearance

Most existing components have fixed visual presentations, that is, the size, shape, color, font, etc. of a component cannot be customized. If the same interaction is only because of visual differences, it is too painful to rewrite components or write styles externally to cover...

We can abstract those visual presentations that we hope to be customized into a part of the "theme", which can be called "skin". When customizing, it is divided into offline and online methods.

"Offline" refers to processing during the development stage before application deployment. In the current rich front-end build tools, when writing page styles, CSS is no longer written directly, but rather a programmable preprocessor like Sass. In this way, some Sass variables that control visual presentations can be extracted. When customizing, external variable assignment can be used for coverage, without the need to rewrite components or styles.

"Online" is to change dynamically according to runtime data after deployment. In scenarios such as skin customization preview and low-code platforms, there is basically no opportunity to modify Sass variables and go through the build process, even if it is technically feasible. With the help of CSS custom properties (CSS variables), it is relatively easy to achieve runtime changes in visual presentations.

### Component Behavior

In addition to appearance, the behavior of components should also be customizable. The first reaction to the word "behavior" is something related to user operations, but it also includes things related to the internal structure of the component.

For the outside of the component, the inside of the component is a black box. Some parts of its internal structure can be controlled by the aforementioned view structure, and some cannot:

![Search Component](search-component.jpg)

The above figure is a relatively complex search component. Although the appearance and layout look different, "they" are indeed the same component. The solution for different appearances has been roughly explained above. For layout issues that cannot be controlled by view structure, it is necessary to enumerate scenarios and support them within the component, and then exist as a part of the "theme".

Behavior related to user operations includes two categories: the component's own interaction rules and the combination with business logic.

There are two types of interaction rules: one is like whether the form is validated when the field value changes or when the button is clicked; the other is like whether the field value is updated when the input box value changes (`input` event) or when it loses focus (`change` event), or whether the drop-down menu's pop-up layer appears when hovering (`hover` event) or when clicking (`click` event).

The solution to the former is similar to the aforementioned layout issues that cannot be controlled by view structure, and the latter requires the component to support event mapping, that is, the external can specify the triggering event for some interactions of the component. Of course, both can also be part of the "theme".

One thing we need to avoid when writing components is often difficult to avoid—coupling business logic in components. What components should decide is only appearance and interaction form, and there should be no business-related logic involved. As long as it looks the same and operates the same, it should be the same component, and specific business-related logic is injected into it.

This very "personalized" business logic, in short, is to respond to changes in user operations and business data to change the internal state of the component:

```js
{
  // Component events
  events: {
    // A click event of the component
    'click-a': function() {},
    // Another click event of the component
    'click-b': function() {},
    // A change event of the component
    'change-c': function() {},
  },
  // Callback for business data changes
  watch: function( contextValue ) {},
}
```

At runtime, a context will be injected into the `this` of the above object methods, and the component can also add utility methods to the context. The built-in properties and methods of the context are:

```js
interface IDomainSpecificComponentContext {
  getState(key: string): any;
  setState(key: string, value: any): void;
  setState(stateMap: { [key: string]: any }): void;
}
```

## View Structure Description

The above mentioned that we need a more advanced view structure abstraction than HTML, so let's talk about the general idea of this part.

### Technology Selection

The most commonly used technologies in view structure abstraction are XML-based or XML-like and JSON-based technologies. XML-based and XML-like technologies both conform to XML syntax, the only difference is that the former must fully conform to XML's standard specifications, like Angular and Vue's templates are the latter; similarly, JSON-based technology is a technology that fully conforms to JSON's standard specifications, like JSON Schema.

Since the advent of React, its XML-like JSX has also been used for view structure abstraction, but it is basically limited to edit time. A piece of JSX code is not purely declarative, and as a view structure description, its readability is low, the parsing difficulty is high, and its universality is low.

JSON-based technology is the most friendly to the front-end runtime, with almost zero parsing cost; on the contrary, its readability is very low, JSON structure grows vertically, and the expressiveness within a specified area is very limited, and it is not intuitive to see the hierarchical relationship and view unit attributes:

```js
{
  "tag": "view",
  "attrs": {
    "widget": "form"
  },
  "children": [{
    "tag": "group",
    "attrs": {
      "title": "Basic Information",
      "widget": "fieldset"
    },
    "children": [{
      "tag": "field",
      "attrs": {
        "name": "name",
        "label": "Name",
        "widget": "input"
      }
    }, {
      "tag": "field",
      "attrs": {
        "name": "gender",
        "label": "Gender",
        "widget": "radio"
      }
    }, {
      "tag": "field",
      "attrs": {
        "name": "age",
        "label": "Age",
        "widget": "number"
      }
    }, {
      "tag": "field",
      "attrs": {
        "name": "birthday",
        "label": "Birthday",
        "widget": "date-picker"
      }
    }]
  }, {
    "tag": "group",
    "attrs": {
      "title": "Pets",
      "widget": "fieldset"
    },
    "children": [{
      "tag": "field",
      "attrs": {
        "name": "dogs",
        "label": "🐶",
        "widget": "select"
      }
    }, {
      "tag": "field",
      "attrs": {
        "name": "cats",
        "label": "🐱",
        "widget": "select"
      }
    }]
  }]
}
```

If the design of an application does not require manual writing of view structure descriptions, JSON-based technology can be considered.

XML-like technology like Angular and Vue's templates is relatively the most suitable for view structure descriptions—purely declarative, the structure grows in both horizontal and vertical directions, and both readability and expressiveness are stronger, the parsing difficulty is moderate, and it has universality.

The template code below describes the same content as the above JSON code. Take a deep breath and feel the difference between the two:

```xml
<view widget="form">
  <group title="Basic Information" widget="fieldset">
    <field name="name" label="Name" widget="input" />
    <field name="gender" label="Gender" widget="radio" />
    <field name="age" label="Age" widget="number" />
    <field name="birthday" label="Birthday" widget="date-picker" />
  </group>
  <group title="Pets" widget="fieldset">
    <field name="dogs" label="🐶" widget="select" />
    <field name="cats" label="🐱" widget="select" />
  </group>
</view>
```

At this point, there is no need to say more about which technology should be chosen for view structure descriptions.

### Design Ideas

Undoubtedly, the premise is that the template syntax must conform to XML syntax, and then customize and extend it based on needs. First, define the tag set. The so-called "tag set" is an element library, and each element in it must have a certain semantics, so that it has a meaningful existence in business. Then, formulate the schema for describing elements and implement the corresponding parsing, validation, and other logic.

The element schema is roughly like this:

```js
// Property value type
type PropType = 'boolean' | 'number' | 'string' | 'regexp' | 'json';

// Property descriptor
type PropDescriptor = {
  type: PropType | PropType[];
  required: boolean; // Whether it is required
};

// Element schema
type ElementSchema = {
  name: string; // Element name
  tag?: string; // Tag name, not specified when taking the element name
  props?: {
    [key: string]: PropDescriptor;
  };
  attrs?: {
    resolve: (key: string, val: any) => any;
  };
  // Node behavior, whether it exists as a child node of a parent node or as an attribute
  behavior?: {
    type: 'append' | 'attach';
    // The following are used when `type` is `'attach'`
    host?: string; // Host (attribute name)
    keyed?: boolean; // Whether it is a key-value pair collection, when `true` and `merge` is `false`, the node ID is used as the key
    merge?: boolean; // When `true`, the return value of `reduce` is merged with the value of the attribute specified by `host` and then reassigned to `host`
    reduce?: (node: ITemplateNode) => any; // Convert node information
    restore?: (reduced: any, node?: ITemplateNode) => ITemplateNode | Partial<ITemplateNode>;
  };
};
```

It can be seen that there are `props` and `attrs` in the schema, which together form the attributes (XML attributes) of the template element. The difference is: if the attributes after template parsing are defined in `props` and meet the restrictions specified by the `type` and `required` of the property descriptor, they will become the `props` attribute of the template node; the remaining attributes not defined in `props` will become the `attrs` attribute of the template node, and the `resolve` method can be used to convert the value of the attribute according to its own rules.

Although elements in the template always display hierarchical relationships in a nested form, an element is not necessarily the structure of its parent, but may also be a configuration. Therefore, the `behavior` in the element schema is used to set whether the current element exists as a child node of a node or as an attribute after template parsing.

The above template design is purely for view structure description, and only processes elements as "blocks". I think this is enough. Depending on the situation, it can be extended to support text, interpolation, and directives like Angular and Vue's templates.

If you are lazy and have no special requirements, the template parsing work can be handed over to a modified Vue 2.6 compiler, and then adapted to a template node tree.

The structure of each template node is roughly as follows:

```js
interface ITemplateNode {
  id: string;
  name: string;
  tag: string;
  props: {
    [key: string]: any;
  };
  attrs: {
    [key: string]: any;
  };
  parent: ITemplateNode | null;
  children: ITemplateNode[];
}
```

Finally, through the adaptation layer, the template node tree is converted into the component tree of the runtime layer, and the control of rendering is also handed over to the final runtime environment.

## Summary

In a complex front-end application, if it is not layered, its extensibility and maintainability will be really unbearable... It is usually the classic three-tier architecture, from bottom to top, respectively, the data layer, logic layer, and presentation layer. This article takes the presentation layer as an example and divides it into abstract layer, runtime layer, and adaptation layer, which can also be applied to the data layer and logic layer—like cutting four knives on a birthday cake—I call it the "nine-grid" model.

![Nine-grid Model](architecture-model.jpg)

In the various abstractions of the presentation layer, this article focuses on the technology selection and design ideas of view structure description. It can be seen that the XML-like template from writing to parsing to rendering is roughly consistent with the templates of Angular and Vue and HTML; other abstractions are only briefly mentioned, and will be expanded in the future.

I have also written several articles related to templates before: from the perspective of improving efficiency and comparing with "component-oriented" in "Let's Talk About Template-Based Front-End Development"; from the perspective of customizability in "Let's Talk About Configuration-Driven View Development"; from the core concept of "model-driven" in low-code platforms in "Let's Talk About Model-Driven Front-End Development". It can be said that the content of this article is the "foundation" of the description of the presentation layer in them.

Whether a company is doing a low-code platform or not, or whether there is a low-code platform inside, it should abstract the view structure description from the presentation layer, at least have such awareness.