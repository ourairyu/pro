---
title: How To Design Front-end UI Components
description: This article is an introduction to the flag set by WeChat Moments.
date: '2021-01-28 12:00:00 +0800'
categories:
  - web-development
tags:
  - software-engineering
  - frontend-web-development
  - frontend-engineering
series: talking-about-frontend-ui-components
---

In the series of articles on "[Talking About Front-end UI Components](/series/talking-about-frontend-ui-components/)", the article "[The System of Front-end UI Components](/posts/the-system-of-frontend-ui-components/)" initially outlined the architectural design of UI components. This article will further elaborate on the parts that were briefly mentioned in that article and discuss the points to consider when designing a UI component.

## Directory Structure

Based on the directory structure listed in "[The System of Front-end UI Components](/posts/the-system-of-frontend-ui-components/)", some adjustments have been made:

```
component
   ├── demo                       # Files related to examples
   │   └── ...
   ├── test                       # Files related to testing
   │   └── ...
   ├── style                      # Files related to styling
   │   ├── _functions.scss        # Sass functions (optional)
   │   ├── _properties.scss       # CSS custom properties (required), part of the style component, for external runtime customization of theme styles
   │   ├── _variables.scss        # Sass variables (required), part of the style component, for external edit time/compile time customization of theme styles
   │   ├── _mixins.scss           # Sass mixins (optional)
   │   └── _rules.scss            # CSS rules (required), visual components, with the role of constraining structure
   ├── typing                     # Files related to types
   │   ├── custom-properties.ts   # CSS custom property configuration (required), for runtime generation of CSS custom properties
   │   ├── aliases.ts             # Type aliases (optional)
   │   ├── interfaces.ts          # Structural component interfaces (required)
   │   └── index.ts               # Unified export of types
   ├── HeadlessComponent.ts       # Headless component, UI component logic unrelated to structure
   ├── Component.vue              # Structural component, influenced by the source code of JS libraries/frameworks for generating HTML, platform-specific view structure description languages
   ├── index.ts                   # Unified export of the module
   ├── changelog.md               # Component change log
   ├── readme.md                  # Component documentation
   ├── metadata.yml
   └── package.json
```

## Naming Conventions

### HTML & CSS class

Before the popularization of component-based development, also known as "componentization", in the web frontend field, there was a magical way of naming classes that could be considered a methodology—atomic classes.

Those who started their career in frontend development during the reign of React and Vue might have never heard of or seen what "atomic classes" are:

```html
<style>
.w-100 { width: 100px; }
.w-150 { width: 150px; }
.h-100 { height: 100px; }
.h-150 { height: 150px; }

.m-10 { margin: 10px; }
.m-20 { margin: 20px; }
.mt-10 { margin-top: 10px; }
.ml-15 { margin-left: 15px; }

.bgc-red { background-color: red; }
.bgc-green { background-color: green; }

.c-fff { color: #fff; }
.c-000 { color: #000; }

.f-l { float: left; }
.f-r { float: right; }
</style>

<div class="w-150 h-150 f-l mt-10 ml-15 bgc-red c-000">
  <div class="w-100 h-100 f-r m-20 bgc-green c-fff">Atomic classes</div>
</div>
```

As you can see, this methodology emphasizes breaking down each combination of CSS properties and values into classes, with naming typically in the form of "property name + property value". Whether the property names and values are abbreviated and whether there are separators like `-` or `_` depends on the writer's discipline and mood.

The "advantage" of atomic classes is that they break down classes to a very fine level, very "atomic"; the atomic nature brings strong combinability, so any page can be achieved through the organic combination of atomic classes. There's only what you can't think of, not what you can't do! One day, if the designer says to change the button's left margin from 15 pixels to 10 pixels—no problem! Just replace the `<button>`'s `.ml-15` with `.ml-10`! A piece of cake!

Why are the "advantages" mentioned above in quotes? I wonder, apart from possibly writing fewer characters, what's the difference between atomic classes and inline styles? Are they more semantic? Is readability better? Does it reduce the mental burden? Is it easier to maintain in medium to large projects?

With the popularization of component-based development in the web frontend field, the身影 of atomic classes gradually disappeared; but recently, due to the rising popularity of a certain CSS framework, atomic classes have made a comeback...

So, are atomic classes or style atomization wrong? No, it's all the fault of the times! Ah, no! It's all the fault of the utility-first mindset!

Classes should be semantic, especially in component-based development, allowing one to understand what it is at a glance in the view structure, not what it looks like.

Additionally, one of the characteristics of component-based development is encapsulation, shielding internal details from the outside; the utility-first mindset, on the other hand, exposes details, which is "incompatible" with the philosophy of component-based development.

In a component-based development system, classes should be component-first, that is, applying CSS components, with utility classes as auxiliary. In other words, when the styles of a CSS component do not exactly match the actual requirements, utility classes are used for "fine-tuning", rather than rewriting the styles of the CSS component from the outside—this is also a form of combination.

For example, a button CSS component itself will not stretch horizontally to fill the container, but the designer wants it to take up a full line—

```html
<style>
.Button {
  display: inline-block;
  text-align: center;
}

.u-block {
  display: block !important;
}
</style>

<div>
  <button class="Button u-block">CSS component</button>
</div>
```

In the UI component system described in this series of articles, CSS components are called "visual components", and class naming follows a variant of BEM—the [SUIT CSS naming convention](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md).

[SUIT CSS](http://suitcss.github.io/) was founded around 2013 by [Nicolas Gallagher](http://nicolasgallagher.com/), the author of [Normalize.css](http://necolas.github.io/normalize.css/). Although it is now essentially unmaintained, its ideas based on component development still have relevance.

I have been using the SUIT CSS naming convention since 2014 and will continue to use it. In the CSS-related example code of this series of articles, class naming follows this convention. In a component-based development system, it is strongly recommended to follow the SUIT CSS naming convention for class naming—

```scss
/* Component */
.ComponentName {}

/* Component modifier */
.ComponentName--modifierName {}

/* Component descendant */
.ComponentName-descendentName {}

/* Component state */
.ComponentName.is-stateOfComponent {}

/* Utility */
.u-utilityName {}
```

The component base class `.ComponentName` and its descendants `.ComponentName-descendentName` are easy to understand; they naturally have a hierarchical relationship and共同describe the structure of a UI component—

```html
<!-- Using semantic HTML tags -->
<article class="Article">
  <header class="Article-header">
    <h1 class="Article-title">Article Title</h1>
  </header>
  <section class="Article-section">
    <h2>Section Title</h2>
    <p>Section paragraph</p>
  </section>
  <footer class="Article-footer">Some other information</footer>
</article>

<!-- Using non-semantic HTML tags, which better highlights the role of semantic class naming -->
<div class="Article">
  <div class="Article-header">
    <h1 class="Article-title">Article Title</h1>
  </div>
  <div class="Article-section">
    <h2>Section Title</h2>
    <p>Section paragraph</p>
  </div>
  <div class="Article-footer">Some other information</div>
</div>
```

However, component modifiers `.ComponentName--modifierName` and component states `.ComponentName.is-stateOfComponent` can sometimes be difficult to distinguish when to use which. Take the button CSS component as an example, its color, availability, and size, which should use modifiers? Which are considered states?

I provide a simple criterion: if it is a characteristic of the UI component, that is, it will not change due to any conditions, use a modifier; if it changes due to the satisfaction of a certain condition, then it is a state—

```html
<!-- Using semantic HTML tags, large (size) primary (functional color) action button -->
<button class="Button Button--primary Button--large">Add</button>

<!-- Using non-semantic HTML tags, disabled (state) danger (functional color) action button -->
<span class="Button Button--danger is-disabled">Batch Delete</span>
```

It should be noted that component modifiers and component states are both directly added to the root node of the UI component, that is, they should follow the component base class and should not be used on component descendants. If a component descendant needs to programmatically change its own style, use utility classes instead of state classes. When the structure, function, etc., of a component descendant becomes complex, it should be encapsulated into a new component.

### Sass Variables and CSS Custom Properties

In the UI component system described in this series of articles, Sass variables and CSS custom properties are collectively referred to as "style components", which are responsible for theme customization and serve as the integration point with the design system. Among them, Sass variables are for edit time/compile time, while CSS custom properties are for runtime.

Here, the naming conventions for Sass variables and CSS custom properties are similar, roughly in the form of `<namespace>-<component-name>[-descendent-name|-modifier-name][-state]-(variable-name|property-name)`.

Since I am working on a semi-finished UI component set called "[Petals](https://petals-ui.github.io/)" based on the ideas described in this series of articles, the `<namespace>` part in the subsequent example code will basically use `petals`.

Sass variables start with `$__petals` or `$petals`, connected to the component name with `--`, the former is for internal use (private), which upper-level developers do not need to care about, and the latter is for external customization during edit time/compile time; CSS custom properties start with `--petals`, connected to the component name with `-`—

```scss
/* Actual form: <namespace>-<component-name>-(variable-name|property-name) */
$__petals--button-font-size: --petals-button-font-size;
$__petals--button-line-height: --petals-button-line-height;

/* Actual form: <namespace>-<component-name>-<modifier-name>-<state>-(variable-name|property-name) */
$petals--button-primary-focus-color: var($__petals--primary-active-color, $petals--primary-active-color) !default;
$petals--button-primary-focus-bg: var($__petals--primary-active-bg, $petals--primary-active-bg) !default;
```

The CSS components mentioned above, that is, visual components, encapsulate styles and shield details from the outside; style components do the opposite, achieving style customizability by dynamically exposing the CSS property values used by visual components, which becomes like utility-first atomic classes that expose style details.

However, unlike utility-first CSS frameworks, style components only bring mental burden to those who perform theme customization, and have no impact on other upper-level developers.

## Business-agnostic

The main subject of this series of articles is business-agnostic UI components, and when simply saying "UI components" or "components", it also refers to this; business-related UI components are called "widgets" in the UI component system described in this series of articles.

<blockquote>
  <p>Based on the generality of UI components, they can be divided into "general components" and "specialized components". "General components" are UI components that can meet most conventional scenarios, and their collection is usually packaged and released as a software package as a "component library"; "specialized components" exist to solve the needs of some special scenarios, such as data grids, various editors, etc., which are generally packaged separately.</p>
  <footer>Ourai <cite><a href="/posts/the-features-of-frontend-ui-components/">The Features of Front-end UI Components</a></cite></footer>
</blockquote>

The "general components" and "specialized components" mentioned above are both business-agnostic UI components.

What is a UI component? It can be considered a function that returns a view structure, and the properties (prop) and events of a UI component are the parameters of this "function". Properties are data for active communication between the external and internal parts of the UI component, and events are callback functions for passive communication.

A well-encapsulated function should have as few parameters as possible, each parameter should be clear in semantics, and there must be a real reason for its existence—the design of UI component properties and events should also be like this.

When designing UI component properties, first consider whether the property to be added belongs to the characteristics of the UI component itself? If not, what is the characteristic of the UI component corresponding to the value of the property to be added? If neither of these questions is answered, then this property may not be necessary.

UI component properties should only be related to their own characteristics and not to business significance—natural characteristics are inherent, while business significance is an additional characteristic.

For example, a button component usually has several semantics related to business, such as "primary", "secondary", and "danger". How should the component's properties be designed to meet this demand?

[Ant Design](https://ant.design/components/button-cn/) and [Element](https://element.eleme.cn/#/zh-CN/component/button) use `type` attribute values or separate them into individual attributes—

```html
<Button type="primary">Primary button in Ant Design</Button>
<Button>Secondary (default) button in Ant Design</Button>
<Button danger>Danger button in Ant Design</Button>

<el-button type="primary">Primary button in Element</el-button>
<el-button>Secondary (default) button in Element</el-button>
<el-button type="danger">Danger button in Element</el-button>
```

According to the UI component property design principles mentioned above, "primary", "secondary", and "danger" mainly manifest as color changes when applied to the button component. Therefore, the natural characteristic "color" of the button should be used to meet the same demand with the `color` attribute—

```html
<button color="primary">Primary button</button>
<button>Secondary (default) button</button>
<button color="danger">Danger button</button>

<!-- You can also extend to any number of other colored buttons -->
<button color="f00">Red button</button>
<button color="yellow">Yellow button</button>
<button color="blue">Blue button</button>
```

If a set of characteristics of a UI component is binary oppositional, such as "disabled" and "enabled", choose the one that is not effective by default as the attribute, and the attribute value is a boolean, with a default value of `false`.

Still taking the button component as an example: if the default is "disabled", then design an `enabled` attribute representing "enabled", with a default value of `false`. As long as the component is passed `enabled` when it is used, it becomes "enabled"; vice versa.

Additionally, the values of UI component properties should be as simple data types as possible, that is, numbers, strings, etc.

## Business-related

Business-related UI components, that is, the "widgets" mentioned above, have different focuses from business-agnostic UI components, so the principles followed and the considerations in design are also not the same, and may even be quite different. Generally, techniques such as context and dependency injection are used.

Since business-related UI components are not the main subject of this series of articles, they will not be discussed further here.

## Summary

A few days ago, I made a pledge in my social circle—

![Pledge](flag.jpeg)

This article is the "prelude" to that pledge.