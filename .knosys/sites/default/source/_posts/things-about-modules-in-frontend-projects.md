---
title: Things About Modules in Front-end Projects
description: Let's talk about some things related to modules in front-end projects.
date: '2021-07-06 10:34:57 +0800'
categories:
  - web-development
tags:
  - software-engineering
  - frontend-web-development
  - frontend-engineering
  - modular-design
  - modularization
series: talking-about-frontend-of-web-based-management-systems
---

In the article "[Patterns of Directory Structure in Front-end Projects](/posts/patterns-of-directory-structure-in-frontend-projects/)", three modes of directory structure division were discussed: "wild", "layered", and "modular". This article, assuming that the project has already adopted the "modular" mode with the highest cohesion for directory structure division, will delve into matters related to modules.

## Module Boundaries

Modules must have clear boundaries of responsibility and effective means of constraint; otherwise, they will quickly become bloated and difficult to maintain. Eventually, they may spiral out of control and explode, turning the application into an unmanageable mess.

![Cell about to explode](cell.jpeg)

While some guiding principles and indicators can be provided to determine module boundaries, it largely depends on the subjective judgment of the person splitting the modules based on their knowledge and experience.

### Module Splitting Criteria

Whether using the "modular" or "layered" mode to divide the directory structure, the basic criterion is to split modules according to domains or business areas.

So, what exactly do "domains" and "business areas" refer to, and what is the difference between them?

Generally, in relatively simple contexts, "domains" and "business areas" can be considered equivalent, without the need for strict differentiation; they can be understood as a block of business logic. However, in more complex contexts, it may be necessary to clarify the relationship between them—"business areas" are more specific and closely tied to the actual business activities of an enterprise; "domains" are more generalized and can serve as the underlying foundation for multiple "business areas", being neutral with respect to specific business concerns.

In business systems, both "domains" and "business areas" can encompass models composed of entities, relationships, and rules (domain models or business models), which are the manifestations of business requirements in architecture or code.

A module represents a domain or business area, corresponding to a model; the various elements within the same module should have a close relationship, that is, high cohesion, with as little unrelated content as possible—this is the second basic criterion.

Enhancing module cohesion or refining models is a gradual, long-term task that progresses with a deeper understanding of the business and the accumulation of related knowledge. It is not static and cannot be done perfectly from the outset.

Each module is a subsystem of the business system, and they are each composed of sub-systems such as entity/model definitions, request services, and UI components; the parts are both independent and interconnected—internal module layering is the third basic criterion.

It can be said that the principles of separation of concerns and single responsibility are always贯穿throughout the entire process of module splitting.

For a more in-depth discussion, see the [Business Logic Splitting Patterns](https://autonomy.design/) organized by [Master Tao](/people/taowen/).

### File Reference Methods

For individuals, seeking "convenience" is a natural human tendency (laziness), and while "convenience" can sometimes lead to errors and confusion, it must be restricted in the pursuit of order and stability in collaborative work among multiple people.

Therefore, to ensure that the functional boundaries and dependency relationships of modules are clear and easy to understand, it is sometimes necessary to deliberately increase the cost of referencing external module resources, such as constraining file reference paths.

In built frontend applications, it is common to configure `@` as an alias for the source code folder, and then during development, any reference to other file resources uses `@/*`. While this appears convenient on the surface, it actually causes many difficulties in understanding the system and maintaining functionality—much like the misuse of inheritance mechanisms.

Given this, constraints should be placed on the paths for referencing internal and external module files—

Module internal file references should use relative paths; module external references should only be made to `shared` and similar folders containing general resources and infrastructure, using the `@/*` form; framework-provided or custom (see below) rather than standard module systems like ES Modules and CommonJS should be used to reference resources from other modules, which may not necessarily be file-to-file references.

## Module Systems

When discussing the "modular" mode, it was mentioned that—

<blockquote>
  <p>Under each domain/business module, there is an <code>index.ts</code> file that describes which resources (request services, components/business components, etc.) the module depends on from other modules, as well as what resources it provides to other modules.</p>
  <p>To increase flexibility, it is best to design and implement a module registration and lookup mechanism to replace the conventional <code>import</code> and <code>export</code>. Ideally, each module should be usable across applications.</p>
  <footer>Ourai <cite><a href="/posts/patterns-of-directory-structure-in-frontend-projects/">Patterns of Directory Structure in Front-end Projects</a></cite></footer>
</blockquote>

And as mentioned earlier, when referencing resources from other modules, a framework-provided or custom module system should be used. According to current development practices, there are hardly any module systems that meet project or architectural requirements, so it is almost necessary to customize or design one's own.

A module system can be simple or complex, but its basic function is dependency management, that is, the collection and loading of dependencies.

### Module Registration

Module registration consists of two steps—

First, design a module descriptor to describe module information. The simplest version only needs to include the module name, the resources it depends on from other modules, the resources it provides to other modules, and the UI components it will use:

```js
export default {
  name: 'module-name',
  imports: ['[module-name].[resource-type].[resource-name]'],
  exports: {
    '[resource-type]': {
      '[resource-name]': 'foo',
    },
  },
  components: {
    '[LocalComponentName]': '[DependencyRefName]',
  },
};
```

Here, `[module-name]` is the module name; `[resource-type]` is the type of resource, which can be `services` (request services), `utils` (utility functions), `widgets` (components/business components), and other arbitrary categories of resources; `[resource-name]` is the name of the resource.

`components` are a special type of dependency resource, declaring the UI components that the module will use—these can be either controls/basic components or components/business components. `[LocalComponentName]` is the name used for the UI component within the module, and `[DependencyRefName]` is the reference identifier of the dependent UI component.

Next, design and implement a module registration function that takes the module descriptor as input. Generally, a `Map` is used to store the processed module information in memory:

```js
const moduleMap = new Map();

function resolveModule(descriptor) {
  // Interpret the module descriptor and return the processed information
}

function registerModule(descriptor) {
  moduleMap.set(descriptor.name, resolveModule(descriptor));
}
```

In `resolveModule()`, not only should the module descriptor be interpreted, but it is also advisable to check for circular dependencies and implement some other more "advanced" features.

Then, in the entry file of the frontend application (such as the `main.ts` of a Vue application), register the modules uniformly.

### Module Lookup

Looking up modules is to obtain the dependent resources of a specified module and to construct the module context (discussed later).

Obtaining the dependent resources declared through the `imports` in the module descriptor is relatively straightforward; simply retrieve them based on the dependency reference from the module information saved in `moduleMap`. However, obtaining the UI components declared in `components` is a bit more complicated in terms of rules—

When `[DependencyRefName]` is a string in the form of `[module-name].widgets.[resource-name]`, it refers to a component/business component defined by another module; otherwise, it is a control/basic component. If `[DependencyRefName]` is `true`, look for the control/basic component according to `[LocalComponentName]`, otherwise search for it based on `[DependencyRefName]`.

Theoretically, module lookup should be performed when using the module, ideally after all modules have been registered during application initialization. However, in practice, it is quite possible that a module tries to obtain its own information before it has been registered.

For example, in the module descriptor, it is declared that a component/business component will be provided to other modules, and this component/business component itself uses resources from other modules. At this point, it is necessary to look up the current module and load its dependencies:

```js
// `animation/index.ts` file

import AnimationTable from './widgets/animation-table/AnimationTable.vue';

export default {
  name: 'animation',
  imports: [
    'common.widgets.TableView', // Depends on the `TableView` component/business component from another module
  ],
  exports: {
    widgets: {
      AnimationTable, // Provides the `AnimationTable` component/business component to other modules
    },
  },
  components: {
    DataTable: 'common.widgets.TableView', // The `DataTable` component used in this module is the `TableView` component/business component provided by the `common` module
  },
};
```

```vue
<!-- `animation/widgets/animation-table/AnimationTable.vue` file -->

<template>
  <div class="AnimationTable">
    <data-table />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import context from '../../context'; // Module context

@Component({
  components: context.getComponents(),
})
export default class AnimationTable extends Vue {}
</script>

<style lang="scss" src="./style.scss" scoped></style>
```

Logically, in this situation, the specific dependent resource cannot be found.

The reason for this issue is that the conventional `import` is static and synchronous, and the introduction of the component/business component provided to other modules precedes the module registration, which is a timing issue.

There are currently three solutions—

The first is to change the static and synchronous `import '*'` to dynamic and asynchronous `import('*')`, provided that the runtime environment or build tool supports it:

```js
// `animation/index.ts` file

export default {
  name: 'animation',
  imports: [
    'common.widgets.TableView',
  ],
  exports: {
    widgets: {
      AnimationTable: () => import('./widgets/animation-table/AnimationTable.vue'),
    },
  },
  components: {
    DataTable: 'common.widgets.TableView',
  },
};
```

The second is to obtain the dependent resources of the component/business component during rendering:

```vue
<!-- `animation/widgets/animation-table/AnimationTable.vue` file -->

<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Vue, Component } from 'vue-property-decorator';

import context from '../../context'; // Module context

@Component
export default class AnimationTable extends Vue {
  private render(h: CreateElement): VNode {
    const { DataTable } = context.getComponents();

    return h('div', { staticClass: 'AnimationTable' }, [h(DataTable)]);
  }
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
```

The last one is a bit tricky; when obtaining dependent resources, if the specified module does not exist, create a corresponding empty object as a placeholder on `moduleMap` and return it. In this way, the component/business component has a memory reference address for the dependent resource; since the dependent resource is only actually used/called when the component/business component is rendered, and by that time the module has already been registered, the dependent resource can be successfully found.

## Module Context

In programming languages, "context" generally refers to a set of environmental variables that allow a program to execute normally, such as execution context; in application development, it is often derived as an object used to maintain states that act within a certain scope.

Constructing and passing or injecting "context" is a good practice to make UI components "slim"—

In the UI component tree, the UI components contained in a relatively independent subsystem from a certain layer downwards collaborate to complete the same task. States and operations related to this task do not need to be scattered across various UI components. By managing them centrally through "context", states can be better maintained, and state changes can be more easily tracked.

Additionally, because the core logic is isolated from the UI components, frontend automated testing becomes easier.

In the series of articles discussed [here](/series/talking-about-frontend-of-web-based-management-systems/), there are mainly module contexts and view contexts. This article only discusses the module context, and the view context will be explained in subsequent articles.

The "module context" is a module-level or model-level context, and relatively speaking, it is not very important and only plays a supporting role. What is more important is the "view context" that will be discussed later.

The main function of the module context is to obtain dependent resources and send requests:

```js
interface ModuleContext<R> {
  getModuleName: () => string;
  getDependencies: (refPath?: string) => ModuleDependencies | ModuleResources | undefined;
  getComponents: () => { [key: string]: VueConstructor };
  execute: RepositoryExecutor<keyof R>;
}
```

In addition, it can be combined with Vuex for [module-level state management](https://vuex.vuejs.org/zh/guide/modules.html), providing namespace-encapsulated `commit` and `dispatch` methods, etc.

## Summary

"Modularization" is the application of divide and conquer or reductionism in the realm of human-made objects; it is a fundamental approach to dealing with complex problems.

However, in software development, many times complex problems are not really well solved, which indicates that mere formal "modularization" is of little use. A series of measures must be taken around "modules".

A few months ago, I suddenly had a doubt—why can't software be designed like hardware?

The current conclusion is that the low threshold and various costs of software development are one of the reasons for poor quality and low reusability.

What do you think?