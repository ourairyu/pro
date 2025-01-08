---
title: Let Me Talk About Template-based Front-end Development
---

In software development, the efficiency of R&D is always one of the themes that developers continuously pursue. For companies, in the fiercely competitive internet industry, the speed of output may determine the life and death of the company; for individuals, higher efficiency means less overtime, more time to improve oneself, develop hobbies, and spend time with family, achieving a balance between work and life.

The ways to improve efficiency are nothing more than "methods" and "tools". Thinking from a developer's perspective, it is about summarizing and generalizing work content, extracting common points from a set of similar work, abstracting methods to solve this category of problems, and thus creating tools that can be used more quickly to solve such problems in the future. This "tool" can be a function, component, middleware, plugin, or extensions for IDEs and other development tools, or even a language.

## Component-based Development

In modern front-end development, if you ask a business front-end developer, "How to improve team development efficiency?", their answer is likely to include "component libraries". Yes, with the front-end engineering approaching perfection in recent years under the influence of componentized libraries/frameworks like React and Vue, the mindset of component-based development has long been deeply rooted.

### Limited Efficiency Improvement of Component Libraries

Now, component libraries have become a must-have facility for front-end teams. In the long run, a team must and will have its own component library. No matter how good open-source third-party component libraries are, they can only be a short-term solution for an enterprise's front-end team because they cannot fully meet a company's business scenarios, and due to the consideration of multi-terminal support, they must undergo secondary development or R&D by self.

With the component library in place and the promotion within the team and company going well, most people are using it. Developing pages with components is indeed more efficient than the jQuery era where each functional area had to be coded from `<span>`, `<div>`, and other HTML tags. However, the improvement is limited; to create a page, one still needs to repeatedly introduce components and then assemble them, much like a factory worker assembling parts on an assembly line, still having to perform many repetitive actions.

As long as you feel that the current development method involves too many repetitive actions, it means there is still room for efficiency improvement, and a way to reduce repetitive and meaningless actions must be found.

Component-oriented development is the initial stage of modern front-end page development efficiency improvement and a stage that a team must go through.

### Higher-level Efficiency Improvement

In a previous article, I wrote:

<blockquote>
  <p>Components can be simple or complex. Arranged from least to most complex, they can be divided into several categories:</p>
  <ol>
    <li>Basic components;</li>
    <li>Composite components;</li>
    <li>Pages;</li>
    <li>Applications.</li>
  </ol>
  <p>Yes, don't rub your eyes, you are not mistaken!</p>
  <p>From a higher perspective, 'pages' and 'applications' are also a kind of 'component', only they are more complex. What I want to say here is not about them, but about 'basic components' and 'composite components'.</p>
  <footer>Ourai L., from the article <cite><a href="/posts/component-based-frontend-web-development/" target="_blank">Let Me Talk About Component-based Front-end Development</a></cite></footer>
</blockquote>

The article mentioned that 'pages' and 'applications' can also be seen as a kind of 'component'. Although there are some differences from the ideas at the time, the content of this article is based on that article to simply discuss efficiency improvement at the 'page' level.

Generally speaking, 'pages' are the largest and most complete interfaces that users can see. If there is a good abstraction scheme at this level, compared with simply developing component-based, there should be a greater efficiency improvement effect in business development.

The GUI has been developing for decades, and the graphical elements and layout methods of human-computer interaction have been relatively fixed. As long as there are no revolutionary interactive devices like Google Glass, there will be no major changes. In business development, the form of the interface is also uniform, especially web pages, especially the web pages of middle and back-end systems, which must be abstracted in some way to deal with this 'uniformity'.

Try to recall, most of the middle and back-end systems you have done are as I described - the overall page layout is either top-down or left-right. If it is a top-down layout, the top is the page header, and the bottom left may have a sidebar with page navigation, or there is no sidebar and the page navigation is concentrated in the page header, with the remaining area being the main part of the page, carrying the main data and functions of this page; if it is a left-right layout, the left is undoubtedly a sidebar with page navigation, the page header is on the top right, and the rest is the main part of the page.

The main function of the middle and back-end system is CRUD, that is, the creation, deletion, modification, and query of business data. The corresponding page display and interaction form are list pages, form pages, and detail pages. The list page summarizes the brief information of all business data and provides an entrance for data addition, deletion, modification, and more information viewing; the form page is responsible for the functions of data addition and modification; the detail page can see the most complete information of a business data record.

Every time a new business module is added, you have to write the list page, form page, and detail page again... What's the point of doing this repeatedly? Since these three types of pages will appear repeatedly, it might as well encapsulate a few page-level components. When there is a new requirement, just create a few page entry files, introduce the corresponding page components inside, pass in some `props`, and it's done!

This method seems good, but there are several problems:

- It does not describe the structure of the page content. The encapsulated page components are like a black box for users. Without looking at the source code, it is unknown what the structure of the page content is;
- If the new requirement needs a list page, form page, and detail page, but there are some differences from the page components that can cover most scenarios and have been encapsulated, the extensibility is a problem;
- Every time there is a new requirement, you have to create a new page entry file and introduce the page components inside, which still involves a lot of meaningless repetitive actions and repetitive code. Over time, it still feels annoying.

I need a way that can understand the content structure and relationship at a glance, has good extensibility, and can reduce repetitive code and meaningless actions - yes, after a big circle, it's finally time to enter the main topic - template-based development.

## Template-based Development

Template-based front-end development has three major elements: templates; nodes; components.

### Expressive Templates

The 'template' I am talking about mainly serves to describe the content structure and page configuration, and it is visually similar to XHTML. It mainly has the following characteristics:

1. All characters are lowercase, multi-word words are connected with the connector '-', and tags without descendants are closed directly;
2. It contains a small set of tags with abstract semantics;
3. It supports limited light logic in the form of specific attributes of specific tags.

Why not use JSON or JSX to describe and configure pages? Because templates are more intuitive, more readable, and neutral. With templates, you can almost see at a glance what's there and the hierarchical relationship; if you use JSON or JSX, you still need to convert it in your mind, increasing the mental burden, and it is relatively complicated to spell. One of the reasons why Vue is so 'easy' to get started with is its 'intuitive' design.

To describe pages with templates, you need to define a set of tags with abstract semantics.

The overall layout of the page can be described with the following template structure:

```xml
<layout>
  <header>
    <title>Ourairyu</title>
    <navs />
  </header>
  <layout>
    <sidebar>
      <navs />
    </sidebar>
    <content>...</content>
  </layout>
  <footer>...</footer>
</layout>
```

Doesn't it look similar to HTML tags? But they are not HTML tags and will not be rendered, just a piece of text used to describe the page.

The overall layout can be described, but how to describe the main part that carries the main data and functions of the entire page?

In the above text, we are used to calling the pages corresponding to the CRUD of data in the middle and back-end system as 'list pages', 'form pages', and 'detail pages'. Although they all contain 'page', what is really different is only a part of the entire page, usually the main part of the page. They can be seen as a form of view, so the name can be slightly changed - 'list view', 'form view', and 'detail view'. Generally, the form view and detail view look basically the same, one can be edited and the other cannot, so they can be collectively referred to as 'form/detail view'.

The 'view' only describes what the data set should be displayed as, and it cannot describe what each data is and what it looks like. A smaller granularity that can describe each data unit is needed - 'field'. In this way, the concept of data and template tags are ready:

```xml
<view>
  <field name="name" label="Name" />
  <field name="gender" label="Gender" />
  <field name="age" label="Age" />
  <field name="birthday" label="Birthday" />
</view>
```

Although the data can be described, there is still a lack: the form/detail view wants to display the fields in groups, which cannot be described; the operation on the data is not described. To solve these two problems, introduce 'group' and 'action'. With this, the template of the form/detail view will look like this:

```xml
<view>
  <group title="Basic Information">
    <field name="name" label="Name" />
    <field name="gender" label="Gender" />
    <field name="age" label="Age" />
    <field name="birthday" label="Birthday" />
  </group>
  <group title="Pets">
    <field name="dogs" label="🐶" />
    <field name="cats" label="🐱" />
  </group>
  <action ref="submit" text="Submit" />
  <action ref="reset" text="Reset" />
  <action ref="cancel" text="Cancel" />
</view>
```

The template has solved the problem of content structure description and configuration, but how to dynamically adjust the structure and change the configuration? This problem may not be too prominent in ordinary business page development, but it will be exposed when encountering process form design or page visualization editing with high flexibility requirements.

### Controllable Nodes

Here, I want to parse the template composed of the defined tag set into a node tree, and change the structure of the tree and the attributes of the nodes to affect the final presentation effect of the page. Each node will have basic node information, attributes corresponding to the tags, and some node operation methods:

```js
{
  name: "field",
  tag: "field",
  attrs: {
    name: "name",
    label: "Name"
  },
  parent: {},
  children: [],
  remove: function() {},
  insert: function() {}
}
```

After the page is templated and noded, ideally, what the page looks like is no longer bound by runtime technologies such as React and Vue. The control is entirely in the node tree generated by parsing the template. To change the visual effect of the page, just change the nodes.

### Expressive Components

The page content is expressed through the template, and the control of the page content is centralized in the node tree. So, how should the presentation of the page content be done under this system? Responsible for this is the third major element of template-based development - components.

The term 'component' is not new, but in the template-based development system I am talking about, its meaning needs to be redefined: **'Component' is a reusable GUI element whose information arrangement can be changed by the user and can interact.**

In this template-based development system, templates and node trees are completely neutral, that is, not affected by the runtime technology stack; while components are based on the runtime technology stack, but not limited to the same technology stack. That is to say, you can use React components or Vue components.

Each component needs to be registered before use, and then referenced in the template through the `widget` attribute:

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

In this way, an ordinary form page for template-based development is out!

## Summary of Thoughts

Template-based development is very good, which can greatly improve the efficiency of business front-end development and to some extent reduce the construction speed of business systems; the core templates and node trees are neutral and greatly reduce the migration cost of the runtime technology stack, and can cope with multi-terminal scenarios.

The initial investment cost of template-based development is high. The design and implementation of the tag set, template parsing, and component registration and calling mechanisms require a lot of time, and this is just the view layer. The logic layer also needs to be changed accordingly, and it cannot be simply handled with `props` and event binding.

After this system is built, business development will be simple, but the mechanism will increase the mental burden of some developers.

For efficiency, the business front-end development in a company will eventually be oriented towards templates, not components.