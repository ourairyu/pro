---
title: Patterns of Directory Structure in Front-end Projects
description: >-
  Let's talk about several patterns of dividing the directory structure of
  front-end projects.
date: '2021-06-12 14:36:44 +0800'
categories:
  - web-development
tags:
  - software-engineering
  - frontend-web-development
  - frontend-engineering
series: talking-about-frontend-of-web-based-management-systems
---

Before you continue reading, I hope everyone can first answer a question in their hearts - what is the significance of organizing directory structures?

## Significance

Regarding the question above, some people might answer: "To standardize the storage location of files for easy retrieval." This is not wrong, but it's too superficial and doesn't get to the essence.

Others might say: "The directory structure is actually a reflection of module division and is part of the architecture. Its division method should guide developers to place files in the correct locations." I think this statement gets to the essence and is also my current view.

Precisely because people have different understandings of the significance of organizing directory structures, various patterns of directory structure division have emerged.

## Patterns

For a front-end project, there are mainly three patterns of directory structure division:

### Wild

This is a very common pattern adopted by most projects, with a directory structure roughly as follows:

```
project/src
   ├── api
   │   └── ...
   ├── assets
   │   └── ...
   ├── components
   │   └── ...
   ├── pages
   │   └── ...
   ├── plugins
   │   └── ...
   ├── router
   │   └── ...
   ├── types
   │   └── ...
   ├── App.vue
   └── main.ts
```

Although this example is a Vue project, whether it's a React project, a jQuery project, or other non-Angular projects, this pattern is generally adopted.

The biggest feature of this pattern is that it is "intuitive," dividing according to the type of file or the "role" it plays: pure resource files are placed in `assets`, UI components in `components`, and all pages in `pages`...

What about the advantages of this pattern? If being "intuitive" can be considered an advantage, I think that's its only one... This "advantage" allows for high flexibility in development; as long as there's a demand, just go for it, regardless of the consequences!

However, in reality, being "intuitive" is the root cause of many of its disadvantages—

It easily leads to a "page-driven" mindset, meaning that whether it's product requirements, UI design, or development, everything is thought about, communicated, and collaborated around pages, rather than domains or businesses; the consequence is that neither product requirements, UI design, nor development is systematic.

Pages tend to couple a lot of logic that is not directly related to display and interaction, and these logics cannot be well automated tested.

Modules are usually divided according to the menu structure, and resources of the same module are scattered everywhere. If the business requirements corresponding to the module change, one has to search everywhere for the files to modify. When the project or personnel become complex, code maintenance becomes more difficult.

The dependency relationships between modules are chaotic, with situations like B module pages depending on UI components defined in A module page folders, and B module pages depending on A module HTTP APIs while A module pages also depend on B module HTTP APIs in reverse.

Moreover, it is difficult to see the shape of the front-end architecture in this pattern, and it lacks guidance and constraints for developers.

The reason I call this pattern "wild" is that it is "intuitive," "instinctive," and has no constraints, not "tamed" by business requirements.

It might seem like this pattern should not exist at all! But it does have its applicable scenarios, such as projects with a short life cycle, relatively simple functions, and no long-term maintenance.

### Layered

When a project that needs long-term maintenance becomes increasingly complex, if it initially adopts the "wild" pattern, it may be time to consider a refactoring to solve and avoid the various problems it brings.

A pattern more suitable for complex front-end projects than the "wild" pattern is the "presentation-domain-data" separation "layered" directory structure. It should be noted that the "domain" here does not necessarily mean the strict "domain logic," but can also be "business logic."

![Presentation-Domain-Data Layered Architecture](layered-architecture.png)

Although it is "presentation-domain-data," in a front-end project, most of the time only "presentation-domain" is enough:

```
project/src
   ├── domain
   │   └── ...
   ├── presentation
   │   └── ...
   ├── shared
   │   └── ...
   ├── App.vue
   └── main.ts
```

It can be seen that, compared with the "wild" pattern, the `src` folder is divided into three folders named with relatively broad terms - the `presentation` and `domain` folders corresponding to "presentation-domain," and the `shared` folder for storing shared resources.

Shared resources are type definitions, utility functions, global styles, basic components, and other areas and business-irrelevant:

```
shared
   ├── components
   │   ├── button
   │   │   └── ...
   │   ├── icon
   │   │   └── ...
   │   ├── ...
   │   └── index.ts
   ├── styles
   │   ├── normalize.scss
   │   ├── reset.scss
   │   └── utils.scss
   ├── types
   │   ├── ...
   │   └── index.ts
   ├── utils
   │   ├── date.ts
   │   ├── url.ts
   │   ├── ...
   │   └── index.ts
   └── ...
```

The domain layer only contains view library/framework-agnostic code, so even if the view library/framework is changed from Vue to React, etc., it will not affect the core domain logic/business logic.

Drawing on the ideas of Domain-Driven Design (DDD), first divide modules according to domains or businesses, and then maintain relevant files of domain models and business rules in each module; this part of the code will not change with the change of pages, but only with the change of business or the improvement of abstraction:

```
domain
   ├── knowledge-base
   │   ├── model.ts
   │   ├── repository.ts
   │   ├── ...
   │   └── index.ts
   ├── knowledge-graph
   │   ├── model.ts
   │   ├── repository.ts
   │   ├── ...
   │   └── index.ts
   ├── robot
   │   ├── model.ts
   │   ├── repository.ts
   │   ├── ...
   │   └── index.ts
   └── ...
```

`model.ts` describes the domain model or business entity, and `repository.ts` is mainly used for resource storage and retrieval; the structure of the data displayed and operated on the page is described in `model.ts`, and needs to be sent through the methods defined in `repository.ts` by requests or other ways to push or pull:

```js
// model.ts

type RobotEntity = {
  id?: string;
  name: string;
  description: string;
};

// repository.ts

class RobotRepository {
  public async getAll(): Promise<RobotEntity[]> {}

  public async getList(condition: any): Promise<RobotEntity[]> {}

  public async getOneById(id: string): Promise<RobotEntity> {}

  public async insert(data: RobotEntity): Promise<void> {}

  public async update(data: RobotEntity): Promise<void> {}

  public async deleteOneById(id: string): Promise<void> {}
}
```

The data structure described in `model.ts` does not necessarily have to be consistent with what the backend returns, depending on the situation whether to be consistent and to what extent.

In the `presentation` folder, maintain the code related to domains and businesses and affected by view libraries/frameworks:

```
presentation
   ├── aspects
   │   ├── http.ts
   │   ├── router.ts
   │   ├── ...
   │   └── index.ts
   ├── layouts
   │   └── ...
   ├── router
   │   └── ...
   ├── views
   │   ├── knowledge-base
   │   │   ├── knowledge-base-detail
   │   │   │   ├── KnowledgeBaseDetail.vue
   │   │   │   ├── ...
   │   │   │   └── style.scss
   │   │   ├── knowledge-base-form
   │   │   │   ├── KnowledgeBaseForm.vue
   │   │   │   ├── ...
   │   │   │   └── style.scss
   │   │   ├── knowledge-base-list
   │   │   │   ├── KnowledgeBaseList.vue
   │   │   │   ├── ...
   │   │   │   └── style.scss
   │   │   ├── helper.ts
   │   │   └── KnowledgeBaseView.ts
   │   └── ...
   └── widgets
       └── ...
```

Among them, `views` are the views/pages divided by domains or businesses (corresponding to the domain layer); `widgets` are cross-module components/business components; `layouts` are overall layouts used by views/pages; `router` is the route configuration divided by menu structure; `aspects` are request interceptors, route guards, and other aspects.

In this pattern, the dependency relationships between modules are roughly as follows:

![Dependency Relationships in 'Layered' Mode](layered.png)

Obviously, compared with the "wild" pattern, the "layered" pattern can see the shape of the front-end architecture and leaves room for project expansion; the dependency relationships between modules are clearer and will not make the person reading the code feel confused; the logic that is not directly related to display and interaction is stripped away from various UI components, making the presentation layer as thin as Sophie and allowing this part of the logic to be better automated tested.

More importantly, this pattern will prompt developers to think about what kind of code they are going to write and what the dependency relationships are before writing code, and then look at the drawn boundaries and dug pits, and decide which pit to put it in.

If the "wild" pattern is the "primitive society," then the "layered" pattern has entered the "civilized society" - there are constraints when writing code, and more emphasis is placed on process and system.

### Modular

The "layered" pattern seems to have no disadvantages of the "wild" pattern and can cope with increasingly complex front-end projects. It looks very perfect. Why is there still this "modular" pattern? Aren't the "wild" pattern and the "layered" pattern modular?

Of course, the two patterns mentioned above are modular, and the "layered" pattern is also sufficient to cope with complex front-end projects, but it still lacks a bit of strength - the cohesion is not as high as desired.

From the module dependency relationship diagram of the "layered" pattern, it can be seen that the same module (green block) divided according to domains or businesses is separated by layers; thus, although it seems to be a module, it has actually been split into two modules, and the module dependency relationship is not complete.

The "modular" pattern is to make up for the shortcomings of the "layered" pattern, thereby improving the cohesion of the module and the completeness of the dependency relationship.

The directory structure division method of the "layered" pattern is to first divide vertically and then horizontally according to domains or businesses; the "modular" pattern is just the opposite - first divide horizontally according to domains or businesses and then vertically in each module as needed - just as Master Tao described in "What is Coupling, What is Cohesion" - "by moving the boundaries of inclusion, achieve cohesion."

The result of the directory structure adjustment based on the "layered" pattern is roughly as follows:

```
project/src
   ├── [domain-specific-module]
   │   ├── views
   │   │   ├── [detail-view]
   │   │   │   ├── [DetailViewComponent].vue
   │   │   │   ├── ...
   │   │   │   └── style.scss
   │   │   ├── [form-view]
   │   │   │   ├── [FormViewComponent].vue
   │   │   │   ├── ...
   │   │   │   └── style.scss
   │   │   └── [list-view]
   │   │       ├── [ListViewComponent].vue
   │   │       ├── ...
   │   │       └── style.scss
   │   ├── widgets
   │   │   └── [domain-specific-widget]
   │   │       └── ...
   │   ├── helper.ts
   │   ├── index.ts
   │   ├── model.ts
   │   ├── repository.ts
   │   └── ...
   ├── entry
   │   ├── aspects
   │   │   ├── http.ts
   │   │   ├── router.ts
   │   │   ├── ...
   │   │   └── index.ts
   │   ├── layouts
   │   │   └── ...
   │   └── router
   │       └── ...
   ├── shared
   │   └── ...
   ├── App.vue
   └── main.ts
```

The differences between the adjusted directory structure and the previous one are as follows:

- Remove `views` and `widgets` from `presentation` and rename it to `entry`, which, as the name suggests, is the "entry" that collects resources from other modules.

- Integrate `domain` with `views` and `widgets` to form modules completely divided by domains or businesses. The naming in the directory structure diagram above with square brackets is formal, and the actual operation should be named according to the specific domains or businesses represented by the modules.

- The meaning of the integrated `widgets` has changed; they are no longer cross-module but specific to the current module. However, they can still be used by other modules - through the form of module dependency designation.

- There is an `index.ts` file under each domain/business module, which describes the dependencies of this module on what resources (request services, components/business components, etc.) of other modules, and what resources it provides to other modules.

To improve flexibility, it is best to design and implement a set of module registration and lookup mechanisms to replace the conventional `import` and `export`. Ideally, each module can be used across applications.

How should developers view these modules? Just treat them as npm packages or Git Submodules.

The improved dependency relationships are shown in the following figure:

![Dependency Relationships in 'Modular' Mode](modularized.png)

Compared with the "layered" pattern, the "modular" pattern has entered the "industrial age" - highly cohesive and easy to integrate.

## Summary

The three patterns of directory structure division discussed in this article are based on conventional manual front-end projects. The first two patterns correspond one-to-one with the first two componentization systems mentioned by Uncle in "Is the World Flat? - Looking at the Front End from Different Perspectives"; the third pattern is somewhat similar to his third system.

Although these three patterns are in a progressive relationship, with the latter being more perfect than the former, it is not necessarily the case that the latter is more suitable for the scenarios faced by the project, and the composition of the team members must also be considered. In short, it is necessary to teach according to the aptitude and adapt to local conditions.