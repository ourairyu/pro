---
title: Let Me Talk About Component-based Front-end Development
date: '2018-01-19 17:08:34 +0800'
categories:
  - web-development
tags:
  - software-engineering
  - frontend-web-development
  - frontend-engineering
series: let-me-talk-about-x
---

Upon seeing the title, there are generally two reactions:

> "Wow～How sophisticated!"
>
> "Hmm, this topic is quite broad..."

—Indeed.

## Foreplay with Feeling

I won't rigidly copy from some encyclopedia to explain what 'component-oriented' is and why we do it, but rather, I'll discuss it from the perspective of work status and personal thoughts, and try to outline a solution.

### Components in the Eyes of Front-end Developers

For front-end developers, 'components' usually refer to UI components on the page, which mainly include appearance and interaction. A qualified component should be reusable, customizable, and loosely coupled; it should represent an entity and be able to perform an action.

Components can be simple or complex. Arranged from least to most complex, they can be categorized as follows:

1. Basic components;
2. Composite components;
3. Pages;
4. Applications.

Yes, you're reading this correctly!

From a higher perspective, 'pages' and 'applications' are also 'components,' only they are more complex. What I want to discuss here are not them, but 'basic components' and 'composite components.'

Basic components have a simple appearance and basic functionality, while composite components are combinations and encapsulations of basic components based on specific scenarios.

### Why 'Component-based'

After a period of front-end development, you'll find:

> "Why are the functions of the pages in a system so similar?"
>
> "Every website seems to be cast from the same mold!"

—You're right!

You copy with <kbd>CTRL</kbd> + <kbd>C</kbd> and paste with <kbd>CTRL</kbd> + <kbd>V</kbd>, change the differences in the similarities, save the file and refresh the page, click around to see the effect— "Damn! These two pages have the same interaction, why does it work fine on that page but not here?!"

1...2...3... hours pass, and there's no clue where the hell this little cockroach slipped in... You're so frustrated that you accidentally blurt out— "Damn it!!!"

Bro, take it easy!

This kind of problem occurs because there's no component-oriented development. Those parts you think are 'similar' can be extracted to form components for use when similar scenarios arise again. Your reliance on the 'copy and paste' method is, to be frank, the worst of the worst strategies.

When you accumulate enough components, pages are no longer squeezed out line by line through painstaking thought, but assembled from ready-made libraries. In this way, not only are page functions more stable, but front-end development also becomes more interesting, bidding farewell to the days when most of the day was spent squashing bugs—

> Backend: "When can we start integration testing?"
>
> Frontend: "The page is already done, where's the API?"
>
> Backend: "..."

### What is 'Component-based'

Switching to another term, 'componentization,' might be more familiar. But, so, what does it mean?

Everyone will have their own understanding of abstract concepts, as the saying goes, "A thousand readers have a thousand Hamlets." Some might say:

> "It's just putting related HTML, CSS, JS, and image files in the same folder, right?"

—There's nothing wrong with that.

When developing component-oriented, indeed, the related files of the same component are placed in one folder, but this is not the core. The important thing is to be able to appropriately break down a complex thing into smaller and independent parts, with high cohesion and low coupling, so that others can use it without understanding its internal workings—this is the philosophy and the ability.

## Getting to the Point

'Component-oriented' development, or 'componentization,' has been around for a long time and is not new. This topic has been hyped in the front-end circle for many years, with frameworks and libraries emerging one after another. Why do I still want to chew on it again?

The reason is simple:

1. What's not a problem for others might be a problem for me;
2. Tools that work well for others might not be suitable for me.

### The Positions That Others Enjoy, I Don't

To carry out component-oriented development, the premise is to have a viable technical solution. In my opinion, a few points are necessary:

- The style and interaction of a component should not be unexpectedly interfered with by the outside world—external isolation;
- The resources related to a component should be given to me when I use it—on-demand loading;
- Let backend developers who are not very skilled in front-end technology also use it—low threshold.

The once popular [jQuery](http://jquery.com/), with its strengths fully utilized in [jQuery UI](http://jqueryui.com/) and [Bootstrap](https://getbootstrap.com/docs/3.3/), provides many UI components and is also friendly to backend developers, seemingly meeting the requirements. However, looking at their component implementation and resource loading forms—

- ~~jQuery UI~~
- ~~Bootstrap~~

Nowadays, when the front-end circle mentions 'components,' most people's excitement is on MV* frameworks like [React](https://reactjs.org), [Vue](https://vuejs.org), and [Angular](https://angular.io). They are indeed good, not only meeting 'external isolation' and 'on-demand loading' but also greatly improving front-end development efficiency. Their popularity has its reasons.

Our company's business is B2B, so the front-end development scenarios are very 'clear,' which can be simply and crudely understood as: 'front stage' is mobile, and 'back stage' is desktop.

The front stage development uses a framework based on React and [Ant Design Mobile](https://mobile.ant.design/) for secondary development. It works well and can handle the current demands. However, back stage development is different.

We have many back stage requirements, more than the front stage, and they are growing rapidly; our backend personnel are many, more than the front-end, and they are continuing to increase disproportionately. This leads to some problems:

- The average ratio of front-end to back-end developers per business line is 1:4;
- A front-end person may support multiple projects in a business line;
- A front-end person may support multiple business lines.

—Not enough people!

How to solve this? From the company's perspective, it is definitely to reduce costs—not by recruiting more people, but by improving methods to maximize the use of existing resources—let front-end personnel write more pages, and let back-end personnel also write pages.

In order to achieve the above goals, I encapsulated a framework for the back stage based on jQuery and Bootstrap.

Although writing JS has already saved a lot of time, and there are also several back-end systems independently developed by back-end personnel, there is still a lot of HTML code to write. Even front-end personnel will find it a bit annoying, let alone back-end personnel who are daunted.

When using React components, you can write fewer HTML tags, but, can it be, back-end developers will write them?! They will want to write?!

In summary, MV* frameworks cannot solve the current problems of our company's back stage—

- ~~React~~
- ~~Vue~~
- ~~Angular~~

Someone is dissatisfied:

> You say this won't work, that won't work, then what will?!

—There's plenty!

### The Correct Position for Everyone to Enjoy

There is a technology that is overshadowed by various MV* frameworks. Although it has some flaws, it is very powerful and has great potential—yes, it's [Web Components](https://developers.google.com/web/fundamentals/web-components/)! Just from the name, it's not hard to imagine that it emerged to solve front-end component issues.

Web Components consist of four parts that can be used separately or work together:

- [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements)—Define new HTML elements;
- [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)—Isolate DOM and styles;
- [HTML Imports](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)—Declare HTML documents to be imported;
- [HTML Templates](https://developer.mozilla.org/en-US/docs/Web/Web_Components/HTML_Imports)—Define reusable HTML fragments.

As the W3C's own child, users can treat components encapsulated by Web Components like other elements such as `<div>`, `<p>`—fully taking care of backend developers who are not proficient in front-end technology.

> You make it sound so divine, why haven't I heard of it??

—A great question.

Since it's the W3C's own child, from birth to being recognized by the world, especially by those 'powerful and influential,' it takes time—it has been out for years but has not yet become a recommended standard, and compatibility is not ideal.

[![Web Components Browser Compatibility](compatibility.png)](https://caniuse.com/#search=web%20components)

It can be said that compatibility and instability have become the fatal injuries in promoting Web Components.

However, there's no need to be too disappointed.

There are already [polyfills](https://www.webcomponents.org/polyfills) that have filled some of the pits, and there are several libraries that simplify development, such as: [Polymer](https://www.polymer-project.org/), [X-Tag](http://x-tag.github.io), and [Skate](http://skatejs.netlify.com). Moreover, our company's back stage is internal, and it only needs to consider Chrome-like browsers, so the compatibility defect can be basically ignored.

In this way, developing a set of components based on Web Components, isn't it pleasing for both front-end personnel and back-end personnel who write pages?

Feeling great inside〜( *´艸｀)

## Climax is Coming

Now it seems that the front-end team's technical solution for component-oriented development has been determined:

- Mobile uses React and Ant Design Mobile;
- Desktop uses jQuery, Bootstrap, and Web Components.

If you think it's all good now, you're thinking too much!

### Besides Sex, Everything Else Should Be Fast!

With the development of the company's business, it has reached out to the WeChat mini-program that is continuously gaining momentum. Although there is currently very little business in this area, I believe the demand will come one after another.

As we all know, the development of WeChat mini-programs has its own system, and for us front-end developers, it's another thing to learn... However, as a front-end engineer, I'm used to this front-end technology that's more changeable than a woman's mood.

Looking a bit further, if the company's business requires it, it may also have to do the Alipay mini-program that has just come out. Maybe in the future, there will be other mini-programs, or other new wheels with component characteristics.

In order to support the company's business, every time a new thing comes out, front-end personnel have to learn how to use it and use it well. From team management, team collaboration, and development efficiency, there will be some serious problems:

- Everyone has to master the libraries/frameworks used to assign tasks at will;
- The technology stack is messy and not conducive to training and code quality management;
- Extracting and precipitating component libraries will become extremely difficult.

These problems, catalyzed by the rapid development of the business, will lead to:

- Not enough development time—overtime! Overtime! Overtime!!!
- Not enough front-end personnel—not enough—overtime! Overtime! Overtime!!!

What if overtime still can't solve the problem? Then the project is delayed.

But project delays will delay the company's business! Then...

### Think of a New Position

In order to avoid the above problems, to remain unchanged in the face of change, to let front-end developers who support the business ignore the running environment and have a consistent convenient development experience, I tried to think of a solution—Universal Component Writing Specification.

![Universal Component Writing Specification](universal-component-definition.jpg)

The so-called 'Universal Component Writing Specification' mainly includes two parts: component definition and directory structure.

Component definition uses ES6+ syntax, adopts a class approach, and takes into account component attributes mapping, data binding, event handling, lifecycle, etc. The design of each member of the class refers to existing popular libraries/frameworks, but is different from them.

Directory structure follows the front-end development principle of 'separation of concerns', one directory represents one component, one JS file is a component definition. Component styles are written in Sass.

The Universal Component Writing Specification solves the problems in the development stage, which is what front-end personnel who support the business need to focus on, and the next things are handed over to the build tools to complete.

## The Sages' Time

As I said at the beginning, 'component-oriented' development is a very sophisticated and big topic, and trying to come up with a 'Write once, Run anywhere' component development plan sounds like a fantasy.

I am already prepared for all kinds of cold water, maybe there will be many difficulties and pitfalls on the road to realization, and in the end, it will be proven that this is indeed a wild idea; but in order to let the company's business development not be hindered by front-end development, to let the team's friends reduce overtime, to leave more beautiful memories in the team, I will not give up the front-end development road, I am willing to try!!!

The train is leaving, no time for more explanations!