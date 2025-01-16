---
title: Fxxk Design from Anti-chaos
description: >-
  Let's talk a little about "Fxxk Design", one of the two current subsystems of
  “Anti-chaos”.
date: '2021-10-31 20:57:35 +0800'
categories:
  - open-source
tags:
  - frontend-web-development
  - frontend-engineering
  - open-source-software
  - anti-chaos
  - fxxk-design
series: talking-about-anti-chaos
---

Just a few days ago, a company that has gathered many industry experts open-sourced several front-end related projects at once, two of which were UI component libraries. Wow! Two at the same time, which one are they trying to get us to use? Seems like they're trying to drive indecisive people crazy!

Both of these UI component libraries have the word 'Design' in their names, indicating that they are 'Design Systems' rather than ordinary 'UI Libraries'. This reminds me of the wave of 'Metaverse' companies that have been emerging lately. Hmm, a familiar taste.

However, this also gave me an idea—why not package the design-to-code related projects I am currently building and planning to do into a 'Fxxk Design'? This way, it sounds cool and people can roughly understand what kind of problems my projects are going to solve. This country-bumpkin, black-steel-level straight male coder has finally learned 'concept packaging', thanks to them!

For me, those two UI component libraries have almost no highlights, but each has one point that caught my attention—one mentioned the 'Foundation + Adapter' pattern, and the other's approach of packaging UI components separately to create a material market—these are very close to what I am doing and planning to do.

## Industry Status Quo

Before talking about 'Fxxk Design', let's first review some characteristics of the currently popular UI component libraries—

The most直观intuitive thing is that they are deeply bound to a specific technology stack and provided to users in the form of an entire UI component collection. The language people use in communication is 'React/Vue UI component library XXX', not 'XXX component'.

It can be said that this is a 'monolithic architecture'. If a UI component adds a feature or fixes a bug, the entire component library needs to be upgraded. It is impossible to upgrade at the component granularity. Moreover, even on the same technology stack, seamless migration between different component libraries does not exist.

In addition, those UI component libraries have fixed the form of the end—desktop UI component libraries, mobile UI component libraries.

The customization ability of the current popular UI component libraries is generally poor, mainly reflected in two aspects: there are no style variables or the granularity is not enough, resulting in the inability to customize the style or very limited customization; the customization of behavior is the same, which is also one of the reasons why they fix the form of the end.

Due to the poor customization ability, plus the situation mentioned above, they do not have the conditions to build a material market, and thus cannot form an ecosystem centered on them.

In my opinion, their design is mostly not 'atomic' and not 'pure' enough—for example, the `Input` component controls the specific display form of essentially different things through the `type` attribute; the `Button` component has properties such as `type` with values like `primary`, `text`, etc., which have nothing to do with its natural characteristics—such design can easily make a UI component appear 'bloated' and 'clumsy' in many aspects.

The documentation also uniformly lists APIs and demos, and almost never elaborates on which scenarios a UI component is suitable for, what limitations it has—lacking component-granularity UX/UI design pattern guidance and other content.

There is also a 'domestic characteristic'—providing 'Pro' for mid-to-back office scenarios. Most 'Pros' are free to use, but there are a few that are not only of poor quality but also require purchasing authorization to use.

## Fxxk Design

As mentioned at the beginning of the article, 'Fxxk Design' is a 'concept' that packages the projects related to design-to-code, just like a box specifically used for holding books.

'Fxxk Design' is not only going to solve design-to-code related problems but is also part of a larger vision. Therefore, the projects under this system will adopt a layered, loosely coupled architecture as the basic principle.

The following figure shows part of the current architecture of 'Fxxk Design'—

![Petals and Kokiri](architecture-of-petals-and-kokiri.png)

The idea of the architecture shown in the figure has been explained in the series of articles '[Talking About Front-end UI Components](/series/talking-about-frontend-ui-components/)', and will not be repeated here. It can be seen that the whole is divided into two parts: the underlying Petals and the upper Kokiri.

### Under Construction

Both Petals and Kokiri are projects under construction. They are the practice of the ideas mentioned in the article '[The System of Front-end UI Components](/posts/the-system-of-frontend-ui-components/)'.

Petals, as the infrastructure and soul of UI components, mainly includes 'style components' (theme style variables defined by Sass variables and CSS custom properties), 'visual components' (CSS rule sets), and 'headless components' (pure computational logic without DOM operations).

The 'structural components' mentioned in the article are actually the connectors between the libraries/frameworks that generate view structures such as React, Vue, and 'visual components' and 'headless components', which belong to the adapter layer—Kokiri is such a role, specifically responsible for docking with Vue and its UI component libraries.

Inside Kokiri, there are two layers—`@kokiri/core`, which connects Vue with 'visual components' and 'headless components'; and `@kokiri/element`, `@kokiri/view-ui`, etc., which adapt the APIs defined in Petals to existing UI component libraries.

In addition to these, since the UI components provided by existing UI component libraries cannot fully cover what is defined in Petals, a set of UI components—`kokiri`—has been implemented by itself.

In summary, regarding the adaptation to different runtime environments, there are currently two adaptation schemes under this system: one is cross-technology stack like `@kokiri/core`; the other is cross-component library like `@kokiri/element`, `@kokiri/view-ui`.

That is to say, if you want to support a new technology stack or a new UI component library, just do it as mentioned above.

In addition to the infrastructure directly related to UI components in Petals, it also integrates Nicolas Gallagher's normalize.css and SUIT CSS related styles, as well as Compass's functions, mixins, etc.

### Planned

The role of Petals and Kokiri can only be considered as basic operations in the UI component system. To create greater value for design-to-code, it is necessary to build a rich material market and connect with the UX/UI design环节环节.

The material market will not only have individual UI components but also UI component collections, UI component library adapters, themes, and more.

The new version of Buds being planned will include support for the material market—development, debugging, packaging, and publishing of UI components.

## Summary

Unlike the common practices in the current industry, 'Fxxk Design' pursues an atomic and loosely coupled design, making it easy to adapt to different runtime environments, such as technology stacks and UI component libraries.

Under this system, UI components are packaged separately and can be upgraded independently at the component level.

Due to the strong customizability, theme style changes, compatibility between desktop and mobile ends, and the creation of a material market are all relatively easier.

Finally, 'Fxxk Design' does not provide the so-called 'Pro'. Support for mid-to-back office scenarios is provided by the 'Future.js' system.