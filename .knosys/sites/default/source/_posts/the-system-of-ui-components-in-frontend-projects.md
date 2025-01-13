---
title: The System of UI Components in Front-end Projects
description: >-
  Let's briefly talk about what a component system with the highest possible
  reusability looks like.
date: '2021-07-16 16:21:05 +0800'
categories:
  - web-development
tags:
  - software-engineering
  - frontend-web-development
  - frontend-engineering
  - frontend-ui-components
series: talking-about-frontend-of-web-based-management-systems
---

In my [other series](/series/talking-about-frontend-ui-components/) of articles, I mentioned that -

<blockquote>
  <p>In software engineering, a "component" generally refers to a reusable block of software, akin to the "building blocks" used in manufacturing. This is a fairly broad concept; it can be a software package, a web service, or a module, etc.</p>
  <p>However, in the realm of frontend development, a "component" typically refers to a view unit on a webpage, that is, a "UI component". It can be said that a "UI component" is a subset of a "component". You might also often hear the term "control". Don't worry, don't scratch your head; it's just another name for a "UI component".</p>
  <p>Ordinary components have poor versatility, meaning they can basically only be used in a specific system and cannot be replaced. There is a type of component that is developed based on standardized interface specifications and can be used in any system that interfaces with this specification, and can also be replaced by any component that conforms to this interface specification - this is known as an "interchangeable component", similar to "standard parts" used in manufacturing.</p>
  <p>Interchangeable UI components are the key to transitioning frontend GUI development from a cottage industry to automated assembly.</p>
  <footer>Ourai <cite><a href="/posts/the-core-concepts-of-frontend-ui-components/">The Core Concepts of Front-end UI Components</a></cite></footer>
</blockquote>

This article will briefly discuss what a highly reusable component system might look like in the development of frontend applications for mid-to-back offices.

Frontend development is GUI development, which involves both visual interaction and data logic. Therefore, when looking at frontend development, one should be able to consider it from both visual and data perspectives -

## Visual Perspective

From a visual standpoint, after receiving design drafts, one should mentally decompose various interfaces into several structured "blocks" with hierarchical relationships:

[![The "Block" in "BEM"](bem-block.png)](https://en.bem.info/methodology/key-concepts/#block)

These blocks can be roughly categorized into "controls", "widgets", and "pages" based on their responsibilities and granularity. Among them, "pages" have the largest granularity, while "controls" have the smallest, and anything smaller would be HTML elements, which are not within the scope of this discussion. The larger the granularity of a block, the lower its reusability.

### Controls

As mentioned at the beginning of this article, in common contexts, "controls" are synonymous with "UI components"; however, in the component system I am describing, they refer to those [business-agnostic atomic components](/posts/design-frontend-ui-components/#section-2), also known as "basic components".

Those who are particular might question the descriptions of "business-agnostic" and "atomic components", asking "what qualifies as business-agnostic" and "how to determine if a UI component is an atomic component".

To be honest, neither "business-agnostic" nor "atomic component" are concepts with clear boundaries. I cannot define them precisely - just like the concept of a "table". To clarify the boundaries of "business" and "atomic", one must consider the characteristics of the industry, enterprise, project, and the understanding of oneself and the team.

<blockquote>
  <p>What is a UI component? It can be considered a function that returns a view structure, with the properties (prop) and events of the UI component being the parameters of this "function". Properties are data for active communication between the external and internal parts of the UI component, while events are callback functions for passive communication.</p>
  <p>A well-encapsulated function should have as few parameters as possible, and each parameter's semantics should be clear and necessary - the design of UI component properties and events should follow the same principle.</p>
  <p>When designing the properties of a UI component, one should first consider whether the property to be added is a characteristic of the UI component itself. If not, what is the characteristic of the UI component that corresponds to the value of the property to be added? If neither of these questions is answered, then the property may not be necessary.</p>
  <p>The properties of a UI component should only be related to its own characteristics and not to business significance - its own characteristics are natural attributes, while business significance is an additional attribute.</p>
  <footer>Ourai <cite><a href="/posts/design-frontend-ui-components/">How To Design Front-end UI Components</a></cite></footer>
</blockquote>

This quotation, on one hand, states that the essence of a UI component is a "function that returns a view structure", with properties and events serving as the parameters of this "function". On the other hand, it emphasizes that the design of properties and events for UI components, or controls, should only be related to their inherent natural characteristics and should be as minimal as possible - the internal and external communication of controls mainly relies on properties and events.

As the smallest granularity view unit in the system, controls provide pure and clean reuse of structure (including visual and content structure), presentation (theme style), and interaction.

My research on controls will be covered in the article series "[Talking About Front-end UI Components](/series/talking-about-frontend-ui-components/)", so I won't elaborate further here.

### Widgets

During business development, one often encounters situations like this -

Several table pages or form pages look quite similar, with a lot of repeated code, and it seems that they can be encapsulated into a "business component", so that's what is done; when seeing the repeated code reduced by a large margin, there is a great sense of achievement, and one feels delighted.

However, as the number of such seemingly similar pages increases, the attributes of the encapsulated "business component" also multiply, and among those attributes, few are frequently used, leading to self-doubt: "Have I been deceived by the superficial appearance?!"

In the component system I am describing, such "business components" that are strongly dependent on specific scenarios and are encapsulated during business development are called "widgets".

Past experience has made one realize that in relatively large-granularity widgets, relying mainly on properties and events for communication, as in relatively small-granularity controls, is not ideal. So, what should be the main means of communication in widgets?

Do you still remember a "stock" frontend interview question that goes something like this: "Please explain how components communicate with each other?"

Those who have memorized the "stock answers" will immediately respond: "Parent and child components use properties and events, siblings use the parent component as an intermediary through properties and events; for cross-level communication, in Vue, use `provide` / `inject`, and in React, use `Context`; and then there are global state management tools like Vuex". - Such diligent preparation deserves a few claps from the interviewer.

Some interviewers might further ask: "What are cross-level communication contexts and state management? Why do they exist?" Hearing this question, the interviewee's heart skips a beat: "This... this is a bit beyond the syllabus! I didn't have this in my memorized stock answers..."

In my understanding, although there are some differences in details, both "context" and "state management" are a broader concept of "context" -

<blockquote>
  <p>In programming languages, "context" generally refers to a set of environmental variables that allow a program to execute normally, such as execution context; in application development, it usually evolves into an object used to maintain states that act within a certain scope.</p>
  <p>Constructing and passing or injecting "context" is a good practice to make UI components "slimmer" -</p>
  <p>In the UI component tree, from a certain layer downwards, the UI components included in several layers form a relatively independent subsystem. They collaborate to complete the same task, and the states and operations related to this task do not need to be scattered across various UI components. By centrally managing them through "context", states can be better maintained, and state changes can be more easily tracked.</p>
  <footer>Ourai <cite><a href="/posts/things-about-modules-in-frontend-projects/">Things About Modules in Front-end Projects</a></cite></footer>
</blockquote>

In relatively large-granularity widgets, if the main communication relies on properties and events, their numbers can easily get out of control, and the internal structure and logic will be distorted beyond recognition, making maintenance extremely difficult and unpleasant - it becomes a mess💩!

Therefore, things that are not related to the natural characteristics of UI components should not exist as their properties or events but as "context".

Let's use a person as an analogy to help understand this -

A person has a head, torso, limbs, brain, internal organs, etc., and can communicate and create through brain activities - these are the natural characteristics of a person. Are a person's occupation, role, and identity natural characteristics? Of course not! These are the results formed by the brain's operational mechanisms processing the received information in a specific environment or context.

It can be seen that a person's natural characteristics are limited, while the derived occupations, roles, and identities are infinite. Given this, if the non-natural characteristics of UI components are designed as properties, their numbers will be as numerous as stars. Those with business and configuration semantics should be part of the environment or context, "understood" by the program within the UI component that acts like the brain, and then the corresponding "reaction" or "action" is made.

In addition, UI components that integrate mechanisms such as "data context" (to be discussed in subsequent articles) provided by business application development frameworks are also called "widgets". These widgets come in various granularities, large and small, for example, the "fields" mentioned below are likely to be small-granularity ones.

In summary, "context" is a way of reusing business states and logic and is the main means of communication for "widgets"; "widgets" are the "adapters" that connect "context" with "controls".

### Pages

The general concept of a "page" refers to the entire webpage, but in this component system, it is a UI component with the functionality of a webpage layout, that is, it includes slots for the header, footer, sidebar, main area, etc.; a UI component with other slots filled except for the main area can also be called a "page":

![Webpage Layout](page-layout.png)

The main area and other parts can be seen as two isolated environments - the main area displays content centered on the domain/business, such as tables, forms, charts, etc.; while other parts display content centered on the (general sense of) page, such as navigation menus, breadcrumbs, etc.

Generally, there is no communication between the main area and other parts; if there is, it can be facilitated through application-level context.

The most significant impact on other parts is the routing configuration, because both the navigation menu, breadcrumbs, and page title can be calculated based on it and the URL; therefore, it is best not to configure routing directly using Vue Router or React Router, but to generate the structures they require after certain processing based on a custom structure.

## Data Perspective

From the data perspective, the blocks that bear the responsibilities of data input and output are called "views" and "fields" - list and object-structured data correspond to "views", and the properties/keys of object-structured data are "fields".

According to the inherent relationships between lists and objects, objects and properties/keys, and properties/keys and values, they also form a hierarchical structure -

![Data Form](data-diagram.png)

For more descriptions, please refer to the "[Data and Its Forms](/posts/the-core-concepts-of-frontend-ui-components/#section-5)" section in "[The Core Concepts of Front-end UI Components](/posts/the-core-concepts-of-frontend-ui-components/)".

The specific presentation of a "view" is lists, tables, forms, etc., and "fields" are input boxes, drop-down lists, text boxes, etc.

Theoretically, blocks that are unrelated to data input and output are not "views", but for the sake of architecture and engineering uniformity, large-granularity blocks that do not include the webpage layout part (mainly referring to those in the main area of the page or dialog) are all called "views" - this creates a distinction between narrow and broad senses.

Looking at the frontend from a data perspective is an important prerequisite for the "data context" to be discussed in subsequent articles.

## Summary

A person who does everything may know a little about everything, but may not be proficient in anything. This might be fine for making one's own "toys" that just need to "work", but when collaborating with others to create a "high-quality product", it often doesn't work - everyone needs to clarify their responsibilities, try to have no overlap in division of labor, and do their best in what they are responsible for.

The component system I describe also follows this principle, always adhering to the separation of concerns and the single responsibility principle, refining division of labor and having the ability to organically combine into a large and complex frontend application -

From a visual perspective, decompose the interface into several "blocks" with a hierarchical structure, and roughly divide them into "controls", "widgets", and "pages" based on responsibilities and granularity.

Among them, "controls" are business-agnostic atomic components, composed of "style components" (basically corresponding to so-called "Design Tokens"), "visual components", "headless components", and "structural components" (for details, see "[The System of Front-end UI Components](/posts/the-system-of-frontend-ui-components/)"), providing reuse capabilities for structure, presentation, and interaction; "widgets" are the "adapters" that connect "context" with "controls"; "pages" are UI components with webpage layout functions, including slots for headers, footers, sidebars, main areas, etc.

"Views" and "fields" divided from a data perspective give rise to the "data context" to be discussed in subsequent articles, providing a way to reuse business states and logic.

One of the goals of this component system is to achieve "light" UI - to strip non-interactive, display-related business logic from UI components, making UI components thinner and lighter; to make UI components less important, reduce their burden, and lower their status.

Ideally, in the end, one would find that - apart from business logic, it seems that almost all other parts are interfaces (interface) - the specific implementation can be arbitrarily removed and freely replaced!