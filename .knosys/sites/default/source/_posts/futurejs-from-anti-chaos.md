---
title: Future.js from Anti-chaos
description: >-
  Let's talk a little about "Future.js", one of the two current subsystems of
  "Anti-chaos".
date: '2021-11-05 14:14:22 +0800'
categories:
  - open-source
tags:
  - frontend-web-development
  - frontend-engineering
  - open-source-software
  - anti-chaos
  - futurejs
series: talking-about-anti-chaos
---

Believing in the name "Future.js", one might recall the recently open-sourced "Modern.js", one of several front-end related projects from a certain company. Indeed! Just like "[Fxxk Design](/posts/fxxk-design-from-anti-chaos/)", this name is also "inspired" by it, packaging some ongoing and planned projects into a "conceptual framework".

From what is currently understood, Modern.js aims to build a "comprehensive and all-encompassing" system and create a "de facto standard". I support this goal, but oppose it being led by commercial organizations, especially domestic ones. It should be initiated and led by non-profit individuals/organizations, and co-built with the community—avoiding situations like KPI-driven open-source.

A "comprehensive and all-encompassing" system and a series of "de facto standards" complement each other. Such a system and standards can bring order to the current chaotic web front-end, allowing technology experts to focus on technology and business personnel to concentrate on business—this is also what "[Anti-chaos](/posts/hello-world-from-anti-chaos/)" aims to achieve.

## Industry Status Quo

In the jQuery era before the popularity of React/Vue, Babel/Webpack, and others, front-end development was "page-oriented", with virtually no involvement of build tools. The paradigm at that time could be described as "manual" or "manual labor"—DOM operations and data updates required writing a lot of code to handle.

When React/Vue, Babel/Webpack, and others became popular, front-end development shifted to a "component-based" approach. Not only did the cohesion of the code increase significantly, but DOM operations also became less of a concern—libraries/frameworks like React/Vue bind view structure changes with state, so when the state changes, the view structure changes accordingly.

At the same time, an "engineering" trend emerged, and the build toolchain became more mature, ushering in the prelude to "automated processes"—it can be considered that the current paradigm is "semi-automatic".

With the advent and development of Node.js, the front-end has been continuously expanding its capability boundaries—from GUI to CLI, from runtime to compile time, from front-end to back-end, and even jumping to non-JS languages like Rust and Dart...

However, these emerging technologies are undoubtedly unfriendly to business developers—

The most direct impact is the distraction of attention. The main focus of business developers should be on business-related matters, such as domain knowledge and the implementation of business requirements, not the constant "new technology" bombardment. It makes everyone anxious, eager to buy more courses and study hard, even while eating and going to the bathroom!

Then there is the increased complexity of business development. Recall what was needed when starting a new project in the past, and compare it with now, which one makes the page run more easily and simply? Which one is easier to find problems when they occur? To be honest, just hearing Babel/Webpack makes my veins throb.

The above are the two very obvious and influential problems that bring chaos to front-end development—this is (what I think) the next generation paradigm needs to focus on solving, and it is also the mission of "Anti-chaos"—to promote the industrialization process of the front-end and create an assembly-oriented industrial production line.

![Paradigm Shift Inspired by Modern.js](paradigm-shift.jpeg)

In recent years, there have also been other individuals/teams exploring in a similar direction, such as Fei Bing. However, some of their key features are not what I want—locked to a certain view library/framework, and backed by a commercial organization.

## Future.js

To govern this chaotic situation, there are two key points—standardizing and normalizing the communication between various levels and links of the system (in a broad sense), which requires a "comprehensive and all-encompassing" system and a series of "de facto standards"; sufficient abstraction and encapsulation, so that upper-level business developers do not need to pay too much attention to what specific technology is used and how to use it, and help them better and faster complete business requirements.

![Solution Layering](layers.jpg)

Some may say, "If everything is standardized and normalized, how can those who do business development still change jobs?!" I just want to say, "If you really want to improve yourself, after quickly completing the business requirements, why not use the saved time to participate in the construction of standards and infrastructure?"

As a sub-system of the "Anti-chaos" system, "Future.js" is the embodiment of the "comprehensive and all-encompassing" system and "de facto standards" at the tool level.

The name "Future" does not mean that it represents the "future approach" or "future direction", but rather "Future-oriented". Therefore, it is not a "comprehensive and all-encompassing" "framework", but a "comprehensive and all-encompassing", freely combinable, and progressive "ecological matrix".

The goal of "Future.js" is not only to bring order to front-end development but also to do the "main job" of the front-end well—connecting (product, UX/UI) design with the back-end. In this regard, the direction of "Future.js" is "configuration-driven".

![Trinity Inspired by Modern.js](trinity.jpeg)

In general, "Future.js" appears to be a JS-based solution, and in some scenarios, it will leverage the capabilities of other languages. Like "Fxxk Design", projects under this system will adopt a layered, low-coupling architecture as a basic principle.

### Under Construction

The first thing to solve is the configuration-driven development of back-end front-end applications. The current architecture combined with the "Fxxk Design" system is as follows—

![Combination of "Future.js" and "Fxxk Design"](futurejs-and-fxxk-design.jpeg)

The idea of the architecture shown in the figure has been explained in the series of articles "[Talking About Front-End of Web-Based Management Systems](/series/talking-about-frontend-of-web-based-management-systems/)", so it will not be repeated here. It can be seen that the whole is divided into two major parts: the underlying Organik and the upper Handie.

Organik is a configuration-driven, or rather, metadata-driven logic engine. Its main function is to collect various metadata, such as data type descriptions, model descriptions, UI component descriptions, rendering type descriptions, view descriptions, module descriptions, etc., and generate various contexts according to needs by associating them.

Handie is a "shell" wrapped around Organik and Petals, directly facing business developers. Its internal structure is divided into three layers—the technology-stack-independent `handie`; the technology-stack connectors `handie-vue` and `handie-react`, etc.; and the connectors between contexts and UI components, such as `@handie/bulbasaur` (Vue) and `@handie/squirtle` (React).

Handie is positioned as a "progressive metadata-driven back-end front-end application development solution". Therefore, it supports the gradual transformation of existing back-end front-end applications to complete configuration-driven development.

As mentioned above, React/Vue achieves responsive view structure updates by binding view structure changes with state, allowing upper-level developers to focus on state maintenance.

Handie aims to further simplify this process—by using a simpler way to shift the focus from state maintenance to business rule maintenance, focusing more on the business itself.

### Planned

The front-end territory is vast, and the field where "Future.js" is located is just a part of it. Although it has been working for a while, when looking further, it can only be said to be "just starting" at this stage, and there is still much to be done.

At present, Organik and Handie, plus Petals and Kokiri in "Fxxk Design", have only done some of the logic layer and presentation layer in the three-tier architecture, and the data layer can be said to have not been touched at all. Therefore, after they are relatively perfect, the first thing to do is some work on the data layer.

At present, having only a runtime engine cannot be considered a "framework"; supporting facilities must keep up! So CLI tools, scaffolding, IDE plugins, decorators, etc., are all on the agenda!

Looking a little further, solutions based on Web Components, visual editing, and so on are all to be developed.

Seeing this, you might think, "Hey, wait a minute! Isn't this just Fei Bing?"

Ah... This is a problem brought by "paradigm shift"—the paradigm has changed, but the demand has not, so under the guidance of the new paradigm, the things done under the old paradigm have to be done again—it's like rewriting a business system in a new language or technology.

## Summary

The above is not exhaustive. Off the top of my head, the boundary of "Future.js" is probably low-code/no-code tools/platforms! What specifically it includes and what to do, there is a lot of room for imagination! However, these are all appearances—the essence of "Future.js" is a "comprehensive and all-encompassing" system and "de facto standards."

Those who are anxious from the "new technology" bombardment, almost turning "banana green", and those who always complain about "can't learn anymore", and those who want to improve but are not in large factories or platform departments and are short of opportunities
, why not participate in "Future.js"?

Governing chaos and anti-chaos is not my business alone, it's everyone's business.

I am willing to be a pioneer!