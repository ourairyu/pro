---
title: Let Me Talk About Model-driven Front-end Development
date: '2020-05-28 12:30:49 +0800'
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

If we think of the "client" as a building and "data" as water—then the "Model" is the building's reservoir, providing ample water supply; the "ViewModel" is the place where the water from the reservoir is purified and processed before being delivered to each household; the "View" part, with each UI component, is like "each household," where the water is consumed.

## Everything is a Model

A model is the result of classifying and abstracting things based on their characteristics, and modeling is a way for people to understand the world.

### Model-driven

The digital world, a virtual space, is inherently empty and needs to be cultivated. So, how can people build the digital world?

Just as described in the Bible—God created Adam, the first human, in His own image, and then created Eve, the second human, from one of Adam's ribs. Here, God used Himself as a reference to extract features and abstract the model of "human," and then created "Adam" and "Eve" based on this model.

When people build the digital world, they inevitably refer to the world they exist in and can recognize, because it is impossible to imagine things they cannot recognize. The models of real-world things that people abstract become the foundation for building the digital world, and data becomes the basic unit for constructing the digital world, making the digital world a reflection of the real world.

A model is the concept of everything in the digital world, and a program is the tool to materialize the concept. Building the digital world starts with modeling.

### Domain-driven

As mentioned above, when building the digital world, the first step is to establish a model and then start building around it. So, how should one model?

So far, after so many years of software engineering development, many methodologies have emerged. Among them, "Domain-Driven Design" is a widely adopted practice for building large-scale software. Its core is to analyze and establish domain models for the problem domain, and to clarify the relationships between models and business logic.

Domain-Driven Design is most commonly used for business-level models, such as a product model containing information like name, number, specifications, and manufacturing date. It can also be used for technical-level models, such as a model that describes information about models, including name, code, fields, relationships, and constraints. The former is called a "business model," and the latter is a "meta-model". Business models can be described by meta-models.

If models are mapped to database tables, then each record in the table corresponding to the meta-model is metadata, and each record in the table corresponding to the business model is business data.

## MVVM Architecture

The standard MVVM architecture consists of three parts: Model-View-ViewModel.

[![MVVM Architecture](mvvm-pattern.png)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)

However, the architecture described here is as follows:

![MVAVM Architecture](mvavm-model.jpg)

From the diagram, it can be seen that there is an additional "Action", so it should actually be Model-View-ViewModel-Action, four parts in total. They are separated from each other and work together in a combined manner.

For the sake of symmetry, this architecture is simply referred to as "MVAVM".

### Model

The main responsibility of the model is to handle front-end and back-end protocols, as well as to perform read and write operations on data.

The handling of front-end and back-end protocols includes metadata adaptation and HTTP request construction. All work related to interfacing with the back-end is controlled at this layer, and the operation of other layers is based on the results adapted from this layer.

The data read and written in this layer includes both business data and metadata. Metadata is loaded only once, and the adapted results are cached; business data is temporarily cached for records that are in a draft state and not yet persisted, and it is deleted after persistence.

### ViewModel

The responsibility of the VM is very simple, which is to handle the logic related to the flow of business data, i.e., the distribution, summarization, and linkage of data. In theory, no processing related to requesting services or executing actions should be performed directly in this layer.

As mentioned at the beginning of the article—data in an application flows like water. In this process, the VM should act as a pipeline for laying out and processing data at specific nodes. Based on this characteristic, the [Pipes and Filters pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/pipes-and-filters) can be considered.

[![Pipes and Filters Pattern](pipes-and-filters-pattern.png)](https://docs.microsoft.com/en-us/azure/architecture/patterns/pipes-and-filters)

#### Relationship Between Instances and Data

Each VM instance originates from data and is a transformation of data, a data entity with capabilities.

Depending on the form of the data source, VM instances can be roughly divided into three types: lists, objects, and values. If the value is a simple type such as a boolean, number, or string, it terminates immediately; if the value is a complex type such as an object or list, it needs to be recursively processed until the end is a simple type.

It should be noted that VM instances correspond one-to-one with data, and their essence is the data itself, not a container for data. In other words, VM instances are not bottles that hold water and can be emptied to hold different water, but rather they are discarded together.

#### Life Cycle

The life cycle of any object can be roughly divided into three stages: initialization, activity, and destruction.

During initialization, the data source is obtained according to the strategy, a data pipeline is formed by connecting with the stream created by the parent VM instance, and then a stream for pushing out its own changes is created.

During the activity period, it is constantly exchanging data with the outside world:

1. When the view input changes, the corresponding VM instance submits its own data changes.
2. When processing the submitted input data, it retains the data and sends a signal that there is a data submission.
    1. Changes in its own data flow through the data pipeline to the child VM instances.
    2. The external (mainly the parent) receives the signal and performs some subsequent processing.

During destruction, some cleanup and follow-up work is done, such as removing child VM references and canceling subscriptions.

#### Data Flow

During the activity period, as data flows through the data pipelines connected by each layer of VM instances, it changes. To facilitate processing data in different scenarios, it is necessary to back up the data source when initializing the VM instance and generate several copies: initial value, default value, data source, and current value.

Among them, the initial value is the value at the moment the data source is obtained, and the default value is the same as the initial value if not specified. They are both unchangeable after initialization; the current value is the data change within a certain period of time, the latest but uncertain value, which can be understood as a draft state value; the data source only changes when the parent's current value changes, when receiving data submitted by the child, or when forced to update. It is a stage-wise determined value and can be considered reliable data.

The term "original" in "data source" may be misleading. Here, it means that it is "original" relative to the "current value", and it can be used as a reference, rather than the "initial value". The term "initial value" is used to express the meaning of the "initial value".

The differences and characteristics between the data source and the current value are:

- The data source is determined, while the current value is uncertain;
- The data source is pure, while the current value is dirty;
- The synchronization of the data source and current value at various levels is achieved through the "commit" operation;
- The "version" of the current value is never behind the data source;
- In some scenarios, the data source and current value are always the same.

The principles followed by data when flowing are:

- Changes in one's own data source will cause changes in one's own current value and the data source and current value of the descendants, and descendants can define rules for discarding changes;
- Changes in one's own current value will not affect one's own data source before submission, but will cause changes in the data source and current value of the descendants, and descendants can define rules for discarding changes;
- After submitting one's own current value to the parent, it will not cause backflow, and sibling VM instances will not change.

In summary, data flow only occurs from top to bottom when the parent triggers data changes.

The process of data transmission between layers of VM instances is roughly as follows:

![Data Flow](vm-data-stream.svg)

#### Filters

When data flows through the data pipeline connected between upper and lower level VM instances, i.e., when data is distributed and summarized, it goes through a series of relatively independent logical processes, such as data trimming, transformation, validation, etc. Each segment of processing logic is a "filter," and each filter can throw an exception to terminate subsequent operations.

#### Interaction with the View

Each VM instance provides some interfaces for the view to synchronize status and data linkage:

```js
interface IViewModel<ValueType> {
  // Get data source
  getDataSource(): ValueType;
  // Set data source
  setDataSource(value: ValueType): void;

  // Get current value
  getCurrentValue(): ValueType;
  // Set current value
  setCurrentValue(value: ValueType): void;

  // Watch for changes in current value
  watch(handler: Function): Subscription;

  // Listen for events such as submission
  on(handlers: {[key: string]: Function}): void;

  // Add a filter to the head of the dispatch data filter queue
  prependDispatchFilter(filter: Function): void;
  // Add a filter to the tail of the dispatch data filter queue
  appendDispatchFilter(filter: Function): void;

  // Add a filter to the head of the commit data filter queue
  prependCommitFilter(filter: Function): void;
  // Add a filter to the tail of the commit data filter queue
  appendCommitFilter(filter: Function): void;

  // Get the parent VM instance
  getParent(): IViewModel;
  // Get the child VM instances
  getChildren(): IViewModel[];

  // Get the model, the return value includes the API for making requests
  getModel(): IModel;

  // Execute an action, use the current VM instance if not specified
  call(action: IAction, vm?: IViewModel): Promise<void>;
}
```

### Action

What "action" is has been mentioned in the previous article "[Let's Talk About Configuration-Driven View Development](/posts/configuration-driven-frontend-web-development/)"—

<blockquote>
  <p>"Action" is an abstraction of a complete logic, equivalent to a function, used to describe and only describe "what to do," not "how it looks." A reusable action should be atomic.</p>
  <p>Based on the definition and execution location of the logic, actions can be divided into client-side actions (broad sense) and server-side actions: client-side actions (broad sense) are defined and executed on the front-end; server-side actions are defined and executed on the back-end.</p>
  <p>Client-side actions (broad sense) can be further divided into the following types of actions according to the specific scenarios and characteristics:</p>
  <ul>
    <li>Routing actions</li>
    <li>CRUD actions</li>
    <li>Client-side actions (narrow sense)</li>
    <li>Composite actions</li>
  </ul>
  <p>Routing actions are used for page navigation; CRUD actions are for data manipulation; client-side actions (narrow sense) are simply a piece of logic, which can be understood as a JS function; composite actions are used to "package" other types of actions, just like a function that calls other functions.</p>
  <p>Server-side actions can be simply and roughly understood as unconventional CRUD backend interfaces.</p>
  <footer>By Oulei in "<cite><a href="/posts/configuration-driven-frontend-web-development/" target="_blank">Let's Talk About Configuration-Driven View Development</a></cite>"</footer>
</blockquote>

Except for client-side actions (narrow sense) which require writing logic, the others are all executed based on metadata.

Routing actions are for page navigation, and the term "page" here is broad. Depending on the context, it can be understood as the entire page in the browser window or the host where a certain view is located. In this system, actions for view navigation are called "view actions," and those that navigate to pages outside the current application are called "page actions".

Since composite actions are actions that "package" other types of actions, they must have the ability to adjust the execution order of the "packaged" actions and terminate subsequent processing if a certain action fails. The implementation can refer to the practice of [continuation](https://en.wikipedia.org/wiki/Continuation) in JS.

### View

Parse the view description information and render based on the data carried by the injected VM instance.

The view can make requests on its own, but theoretically, it can only make requests to get data, not to modify data. Modifying data needs to be handled through the VM instance or actions.

The view part is further divided into the description layer, packaging layer, and rendering layer:

![View Layer Architecture](view-layer.png)

The "description layer", also known as the "DSL layer", uses an internally defined set of XML tags to describe UI elements and data in an interface. It is a more intuitive and easier-to-understand interface configuration compared to JSON.

The packaging layer's role is to convert the tags from the description layer into actual renderable components, and the rendering layer is the specific runtime environment. Unlike the description layer, which is relatively independent, the packaging layer and description layer are inseparable. The packaging layer needs the support of the rendering layer when converting the tags from the description layer into actual renderable components.

The packagers in the packaging layer correspond one-to-one with the tags in the tag set of the description layer. Tags are converted into components in the component set through packagers, but components do not necessarily correspond one-to-one with packagers. It is likely that one packager corresponds to multiple components of the same category.

#### Description Layer

In web front-end development, HTML is a DSL, and CSS is also a DSL. In this model-driven system, the internally defined set of XML tags used to describe UI elements and data in an interface is the DSL.

The description layer is runtime-independent and can run on any platform and runtime library.

In daily work communication, the term "template" represents different things in different contexts. In this system, when in the context of development and without any modifiers, it should refer to "a segment of tags describing interface configuration", such as:

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
  <action ref="submit" text="Submit" widget="button" />
  <action ref="reset" text="Reset" widget="button" />
  <action ref="cancel" text="Cancel" widget="button" />
</view>
```

If the template is not parsed, it is just a piece of plain text and has no effect.

To parse the template, a corresponding set of tags for the template's tags is needed, as well as a parser that can convert the plain text template into a JS object using the tag set.

Each tag in the tag set can also be called an "element". Considering extensibility, there needs to be a mechanism for registering elements, which helps with the standardization and management of element attributes.

When registering an element, some key information needs to be specified, such as: element name, tag name, attribute descriptor, and behavior. The "attribute descriptor" is mainly used to declare the attributes supported by the element and the types of their values; "behavior" is used to inform whether the element exists as a child node of the parent node or as an attribute after parsing.

All elements that exist as child nodes basically correspond to a specific component. In terms of meaning, these elements are divided into two categories: one is more abstract, and the other is more concrete. There is only one more abstract element, which simply expresses the meaning of "component" without further indicating what it is for; the other elements are more concrete, like `<view>`, `<field>`, etc., and their purpose can be known from their naming.

So-called "nodes" are the JS objects converted after compiling and parsing the elements in the template. The entire template is parsed into a tree-like structure of JS objects, which is the "node tree." Each node can have some methods to add child nodes, delete itself, and get or modify its own information, etc.

#### Packaging Layer

The role of the packaging layer is to convert the products of the description layer, i.e., nodes, into components. The "packager" acts as a bridge between the DSL node and the component.

The packager collects some information produced by the description layer, such as the attributes of the nodes to be generated in the interface and the configuration of the corresponding components. It looks up the corresponding component based on the identifier of the component referenced by the element corresponding to the node, and if no reference is specified, it uses the default one, and passes other attributes and related component configurations as the attributes of the component.

#### Rendering Layer

Simply put, the rendering layer is the runtime environment of libraries/frameworks/platforms like Vue, React, iOS, Android, WeChat Mini Programs, etc. The actual rendering components, components, and packagers that act as bridges all depend on it, so a set of packagers, components, and components needs to be encapsulated in each runtime environment.

## Conclusion of Thoughts

The model-driven architecture aligns with the primary core principle of architectural design mentioned in "[Does Front-End Have Architecture?](/posts/architecture-of-frontend-application/)"—centered on the unchanging.

In this system, suitable programming paradigms should be adopted according to the design goals of different layers and roles, without being limited to one. For example, the model mainly uses OOP, the VM uses OOP and FRP, and actions use FP.

A reasonable and complete design and implementation of the model-driven architecture can well support the changes in enterprise business and quickly build new applications.

That's all for the architectural design related to data processing.