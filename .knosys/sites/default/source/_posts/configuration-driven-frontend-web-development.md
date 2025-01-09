---
title: Let Me Talk About Configuration-driven Front-end Development
date: '2020-04-01 23:45:12 +0800'
categories:
  - web-development
tags:
  - software-engineering
  - frontend-web-development
  - frontend-engineering
series: let-me-talk-about-x
---

During my daily commute, I drive almost entirely on muscle memory and conditioned reflexes, barely using my brain, which leaves my mind free to wander and think about various things.

One morning, it suddenly occurred to me that in recent years, the industry has been advocating for 'data-driven' approaches to update views. Reflecting on the work I've done in the past few months, I realized that our view layer development is not purely data-driven, but rather 'configuration-driven'.

## View Updates

Let's first review how views are typically updated in view layer development, both in the past and present.

Before the popularity of front-end libraries/frameworks like React and Vue, manual DOM manipulation was the norm:

```html
<form>
  <div>
    <span>Are you married?</span>
    <div>
      <label><input type="radio" name="married" value="true"> Yes</label>
      <label><input type="radio" name="married" value="false"> No</label>
    </div>
  </div>
  <div id="childrenCountField" style="display: none;">
    <label>Number of children</label>
    <input type="text" name="childrenCount" value="">
  </div>
</form>

<script>
$('[name="married"]').on('change', function() {
  const $children = $('#childrenCountField');

  if ($(this).val() === 'true') {
    $children.show();
  } else {
    $children.hide();
  }
});
</script>
```

In Vue, data binding is used:

```html
<template>
  <el-form>
    <el-form-item label="Are you married?">
      <el-radio-group v-model="married">
        <el-radio :label="true">Yes</el-radio>
        <el-radio :label="false">No</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Number of children" v-show="married">
      <el-input />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      married: false
    };
  }
}
</script>
```

And here's how to do the same thing through configuration:

```xml
<view widget="form">
  <field name="married" label="Are you married?" widget="radio" />
  <field name="childrenCount" label="Number of children" widget="input" invisible="record.married !== true" />
</view>
```

Don't you find the last method very convenient and highly readable?

Compared to manual DOM manipulation, data binding is relatively more 'intelligent', which is a data-driven development approach. However, pure data driving only solves the basic data display issues and does not provide any support for the extensibility of the view layer, such as for the same table component:

- In model A, you want to display fields a, b, c, and in model B, you want to display fields d, e, f;
- In the main body of the page, you want to display column preference settings and cell text density adjustments, but not in a dialog box;
- In application A, the table header has sharp corners and a light blue background, while in application B, it has rounded corners and a lavender background.

In complex and variable middle and back-end business scenarios, to maximize the reuse of a component and to quickly build a middle and back-end application with some components, a flexible and powerful extensible system is needed.

## View Configuration

The main points that can be configured for a page, or a view, are: templates, models, logic, and themes.

### Templates

The 'templates' used in web development are mostly in line with HTML and oriented towards development, such as: Vue's templates, Pug (Jade), Thymeleaf, FreeMarker, Velocity, etc.

However, the 'templates' here are not directly related to HTML, but rather a description of the view structure, data structure, or logic structure of a certain domain, which is an external DSL:

- Describing the view templates of data containers;
- Describing the search templates of search filters and operators;
- Describing the layout templates of overall layouts;
- Describing the print templates for paper printing;
- Describing the questionnaire templates for surveys.

These templates follow the same design principles and use the same set of parsers to solve different domain problems. They are a set of tags, and as long as there are new domain problems to solve, a new set of tags can be added.

Templates not only allow people to understand the information they describe at a glance but also control the final form they present. For more details, see my previous article "Let's Talk About Template-Based Frontend Web Development".

### Models

The 'models' mentioned here mainly refer to metadata. What is 'metadata'? Simply put, it is 'data that describes data'.

Imagine there is a personal information form that requires the following information to be filled in:

- Name
- Date of Birth
- Age
- Gender
- Marital Status
- Number of Children
- Monthly Income
- Hobbies

Think about what data types these pieces of information are. Don't assume that names are strings rather than long text, age is a number rather than a string, and gender is a boolean rather than an enumeration...

To standardize data processing, it is necessary to describe the data to be processed, that is, to use metadata.

The information to be described mainly includes data types and the text labels to be displayed. If it is not a basic type such as boolean, number, or string, it is best to describe its data source, such as enumeration; if necessary, it can also describe whether it is required, whether it is read-only, etc.:

```js
[
  {
    "name": "name",
    "label": "Name",
    "type": "string",
    "required": true
  },
  {
    "name": "birthday",
    "label": "Date of Birth",
    "type": "date",
    "required": true
  },
  {
    "name": "age",
    "label": "Age",
    "type": "integer",
    "required": true
  },
  {
    "name": "gender",
    "label": "Gender",
    "type": "enum",
    "options": [],
    "required": true
  },
  {
    "name": "married",
    "label": "Marital Status",
    "type": "boolean",
    "required": true
  },
  {
    "name": "childrenCount",
    "label": "Number of Children",
    "type": "integer",
    "required": true
  },
  {
    "name": "monthlySalary",
    "label": "Monthly Income",
    "type": "currency"
  },
  {
    "name": "hobbies",
    "label": "Hobbies",
    "type": "m2m",
    "options": "",
    "chosen": []
  }
]
```

The impact of metadata on the view is mainly data-related and does not affect the view form, such as: which fields to display (generate view templates based on metadata), field validation rules, field editing status, request parameters, etc.

The view template generated based on the above metadata would look something like this:

```xml
<view widget="form">
  <field name="name" label="Name" required="true" />
  <field name="birthday" label="Date of Birth" required="true" />
  <field name="age" label="Age" required="true" />
  <field name="gender" label="Gender" required="true" />
  <field name="married" label="Marital Status" required="true" />
  <field name="childrenCount" label="Number of Children" required="true" />
  <field name="monthlySalary" label="Monthly Income" />
  <field name="hobbies" label="Hobbies" />
</view>
```

When using metadata, it is best if the backend can play along, which saves a lot of time on interface design, review, and joint debugging. Instead, the backend defines the model. If the frontend can only play by itself, tools like JSON Schema can be utilized.

### Logic

If the framework is designed reasonably, it should be possible to combine and联动 external configurable logic without changing the internal implementation of the component. Based on the weight of the logic and the way it is combined and联动, it can be roughly divided into actions and expressions.

'Actions' are the abstraction of a complete logic, equivalent to a function, used to describe and only describe 'what to do', not 'what it looks like'. A reusable action should be atomic.

Based on the definition of logic and the position where it is executed, it can be divided into client-side actions (broad sense) and server-side actions: client-side actions (broad sense) are defined and executed on the front end; server-side actions are defined and executed on the back end.

Client-side actions (broad sense) can be further divided into several types of actions based on specific scenarios and characteristics:

- Routing actions
- CRUD actions

- Client-side actions (narrow sense)
- Composite actions

Routing actions are for page navigation; CRUD actions are for data operations; client-side actions (narrow sense) are a simple piece of logic, which can be simply understood as a JS function; composite actions are used to 'package' other types of actions, like a function that calls other functions.

Server-side actions can be simply and crudely understood as unconventional CRUD backend interfaces.

Expressions are a light logic, mainly used for field value calculations, option filtering, status linkage, and other scenarios that use simple logic:

```xml
<view widget="form">
  ...
  <field name="married" label="Marital Status" required="true" />
  <!-- The 'Number of Children' is displayed and required when 'Marital Status' is true -->
  <field name="childrenCount" label="Number of Children" required="record.married === true" invisible="record.married !== true" />
  ...
</view>
```

### Themes

Believe that when you see the word 'themes', the first reaction is to change the font, color, background color, etc., of the 'skin'. However, in the context of this article, it is not entirely correct.

The templates, models, and logic mentioned above are more low-level configurations that affect the presentation of components from the outside; themes, on the other hand, are more high-level configurations that affect components from the inside or themselves - styles, behaviors, components, and their dependent runtimes.

'Styles' are easy to understand, which are the 'skins' that change font, color, background color, etc., but what are 'behaviors'? Look at the following requirements:

- Boolean fields want to use Switch components in one application and Checkbox, Radio, or Select components in other applications;
- Tables want to display column preference settings and cell text density adjustments in the main body of the page, but not in dialog boxes.

The configurations used to solve these types of needs are 'behaviors'.

As for why components and their dependent runtimes are also configurations, it is because in this system, the main business logic is taken over by the underlying system, and there is basically only the interaction logic that belongs to the component itself. Therefore, whether it is Vue, React, or others, or a mix of several, it will not affect the progress of the actual business.

## Summary of Thoughts

The reason why 'view development' is used in the article title instead of 'front-end development' is that the focus of the entire article is on the view layer, and there is basically no mention of other layers, but it does not mean that only the view layer can be configuration-driven.

In theory, in a front-end architecture that can quickly respond to business changes, it should be entirely configurable, and each layer can be replaced, but what cannot be replaced are design goals, design ideas, and interface protocols. These are the soul. As long as they are there, the architecture remains unchanged.