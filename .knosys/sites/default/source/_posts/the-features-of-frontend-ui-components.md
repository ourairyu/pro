---
title: The Features of Front-end UI Components
description: >-
  Modeling front-end UI components according to their features allows us to
  understand all aspects of them as fully as possible and lays the foundation
  for how to design and establish a component system.
date: '2020-09-28 22:00:34 +0800'
categories:
  - web-development
tags:
  - software-engineering
  - frontend-web-development
  - frontend-engineering
series: talking-about-frontend-ui-components
---

This article is the second in the series "[Talking About Front-end UI Components](/series/talking-about-frontend-ui-components/)", and it is related to the previous article in this series, "[The Core Concepts of Front-end UI Components](/posts/the-core-concepts-of-frontend-ui-components/)". If you haven't read it yet, it is recommended to do so.

The main content of this article is to model frontend UI components based on their characteristics, allowing us to fully understand their various aspects and lay the foundation for designing and establishing a component system.

## Component Composition

Decompose UI components from the perspective of separation of concerns and analyze the variability of each part.

### Constituent Elements

The composition of a complete and functional UI component consists of three aspects: structure, presentation, and behavior. Why emphasize "complete and functional UI component"? It is because it represents the most comprehensive set of features, while other "UI components" may lack some features, making the analysis less complete.

When we see the words "structure", "presentation", and "behavior", as experienced frontend developers, we naturally think of the long-standing advocacy of separation of concerns in frontend development—HTML is responsible for organizing the page structure, CSS is responsible for the presentation style of web content, and JS is responsible for the interaction between users and web pages. They each play different but complementary roles.

![Separation of Concerns](separation-of-concerns.png)

However, here their meanings will be different—

The web content organized by HTML is indeed the "structure", but it is merely the structural level at the code level, unaffected by CSS. The final visual presentation, that is, the visual level of "structure", should also include CSS layout styles, such as positioning, floating, etc.

CSS styles that are not layout-related, such as color, font, text, border, size, whitespace, etc., as well as icons and images, are all "presentation". These are generally also referred to as "theme style" or "skin".

The event system that can run in JS, as well as functions and object methods for logical processing, are considered "behavior"—this is the interaction logic of UI components. Of course, the business logic integrated with the interaction logic is also a part of "behavior".

### Variability

The nature of each part that constitutes a UI component affects the variability of the corresponding part of the UI component—whether it is relatively stable or relatively unstable for component reuse.

<blockquote>
  <p>GUI has developed for decades, and the graphical elements and layout methods of human-computer interaction have become relatively fixed. As long as there is no revolutionary interactive device like Google Glass, there will be no major changes.</p>
  <footer>by Ourai in <cite><a href="/posts/template-based-frontend-web-development/">Let Me Talk About Template-based Front-end Development</a></cite></footer>
</blockquote>

As mentioned above, it is impossible to predict what kind of revolutionary interaction methods will appear in the future, but I believe that as long as it is something that needs to be seen with the eyes and operated with the hands, the interaction method will not escape the form that has not changed much in the past few decades. Therefore, the visual structure and interaction logic of UI components are the least variable, and both interaction modes and trigger events are enumerable.

If we simply look at the final HTML structure, it is also not very variable, but in modern frontend development, the HTML structure is basically dynamically generated and strongly depends on JS libraries/frameworks without a unified standard, such as React, Vue. In addition, there are platform-specific view structure description languages like [WXML](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/) and [AXML](https://opendocs.alipay.com/mini/framework/axml). Due to inconsistent syntax, this makes the page content structure less stable.

Generally speaking, the closer something is to the user, the more likely it is to change. The closest thing to the user in websites and applications is the GUI, and the closest thing to the user in the GUI is the theme style, which is the most intuitive thing for the user. The theme style will change with the aesthetic and ideas of GUI designers (usually designers), so it is the most variable.

Because business logic is the core of business-related processing, if the business rules change, the corresponding code implementation must also change, so business logic is also very variable. Business logic is very necessary and important for a website or application, but it is not so necessary for UI components, let alone important. In the frontend GUI layer, business logic should be an extension of interaction logic.

For convenience, the variability of each part of the UI component and its influencing factors are organized as follows:

| Constituent |  | Variability | Influencing Factors |
| --- | --- | --- | --- |
| Structure | Visual Structure | Not Variable | Content structure, layout styles |
|  | Content Structure | Moderately Variable | Source code of JS libraries/frameworks, platform-specific view structure description languages |
| Presentation | Theme Style | Highly Variable | Aesthetic and ideas of GUI designers, non-layout styles, icons and images |
| Behavior | Interaction Logic | Not Variable | Ideas of interaction designers |
|  | Business Logic | Highly Variable | Business rules |

From the table, it can be seen that "variability" is divided into three levels, which are explained in order from small to large:

- "Not Variable" — affected by interaction methods, it will not change as long as there are no revolutionary changes;
- "Moderately Variable" — affected by source code syntax, it will not change as long as the way the source code is written is determined;
- "Highly Variable" — affected by business and people, it will not change as long as the business field, business rules, and people's ideas do not change.

## Component Classification

Classify UI components from a more abstract perspective —

### Atomicity

From the perspective of whether a UI component contains other UI components internally, they are divided into "atomic components" and "composite components". "Atomic components" are indivisible UI components, that is, they do not contain other UI components internally, such as button components, icon components, divider components, etc.; "composite components" are composed of one or more atomic components, such as navigation menu components, tab components, dialog box components, etc.

### Generality

According to the generality of UI components, they can be divided into "general components" and "special components". "General components" are UI components that can meet most conventional scenarios, and their collection is usually packaged and released as a software package as a "component library"; "special components" are designed to meet the needs of certain special scenarios, such as data grids, various editors, etc., and these are generally packaged and released separately.

### Functionality

According to the role played by UI components, they can be roughly divided into the following categories:

| Component Category | Example Components |
| --- | --- |
| Command Input | Button component, dropdown menu component |
| Data Input | Input box component, radio button component, checkbox component, dropdown list component, date picker component |
| Data Output | List component, table component, data grid component |
| Information Display | Icon component, loading status component, tooltip component |
| Container | Accordion component, panel component, tab component, fieldset component |
| Navigation | Navigation menu component, breadcrumb component, hyperlink component |
| Special Window | Dialog box component, alert component |

This classification method does not have a strict definition, so it depends on individual opinions.

## Component Inheritance

Unlike inheritance in object-oriented programming, which is the reuse of behavior, the "inheritance" mentioned here refers to the reuse of presentation, and it can also be "multiple inheritance".

Before continuing, let's introduce the concept of a "virtual component". As its name suggests, it is a virtual, non-existent, conceptual component. It is a collection of several theme style attributes.

Input box components, dropdown list components, etc., all belong to [form controls](https://html.spec.whatwg.org/#forms), and they all inherit from the "form control" virtual component. If they do not specify color, font, border, and other theme style attributes, they will be displayed according to the settings in the virtual component. Similarly, dropdown list components, dropdown menu components, etc., all have pop-ups, and they all inherit from the "pop-up" virtual component.

You must have noticed that the dropdown list component inherits from both the "form control" and "pop-up" virtual components at the same time, which is the "multiple inheritance" mentioned above.

Those so-called "virtual components" also follow the same inheritance rules—if they do not specify specific theme style attributes, they will be displayed according to the settings of the parent. So, what is the "parent" of the virtual component? — It is the basic style.

Although the inheritance relationship described here looks a bit like CSS's [inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance), they are not the same.

## Summary

This article starts from the composition, classification, and inheritance relationships between components of frontend UI components, and discusses some points that need to be paid attention to in establishing a component system by analyzing the characteristics of components. Among them, the variability of each constituent element of UI components is the most important to pay attention to, as it will have a great impact on the reusability and extensibility of the component system.

In fact, HTML and WXML and AXML are at the same level, all are platform-specific view structure description languages—WXML is for WeChat Mini Program, AXML is for Alipay Mini Program, and HTML is for the "web browser" platform.

In dynamic web pages, especially when using template engines such as [Mustache](https://mustache.github.io/) and [Handlebars](https://handlebarsjs.com/) or libraries/frameworks such as React and Vue, the final content structure is basically generated by JS, which strengthens JS and weakens the control of HTML over the content structure.

The different HTML code generation methods of various JS libraries/frameworks and the different view structure description syntaxes, without a unified standard, have caused confusion—this is also the biggest challenge to the reusability of frontend UI components!