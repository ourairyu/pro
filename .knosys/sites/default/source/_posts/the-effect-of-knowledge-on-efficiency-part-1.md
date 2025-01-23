---
title: The Effect of Knowledge on Efficiency Part 1
description: 'List the common problems in daily work, and keep it a secret first~'
date: '2022-10-24 22:05:00 +0800'
categories:
  - web-development
tags:
  - software-engineering
  - frontend-web-development
  - frontend-engineering
  - efficiency-improvement
series: talking-about-software-development
---

The topic of "improving efficiency" is vast and encompasses many aspects. Although it is related to technology and tools, these are relatively less important. The cognition, awareness, and behaviors of the people involved in activities are far more significant!

In [Human Factors in Software Production Part 1](/posts/human-factors-in-software-production-part-1/) and [Human Factors in Software Production Part 2](/posts/human-factors-in-software-production-part-2/), I attempted to elaborate on the impact of "people" on "efficiency". In this article and the next two, I will try to address the issue of "efficiency" from the perspective of "knowledge".

## Common Issues

The problems we encounter in our daily work are largely centered around division of labor, collaboration, and communication—among people, between people and machines, and among machines.

### Business Support

When it comes to supporting business functions, how does the front-end operate?

The mainstream approach in front-end development today is to build a "page component" for the corresponding business function on top of basic components (and at most, so-called "business components"). After a series of intense operations, at least several hundred lines of code are generated. If the layout and interaction are slightly complex, breaking a thousand lines is a piece of cake.

When designers and product managers review the work, they are delighted. The fidelity is high, and there are no "glitches". However, after a few months or even a year or two, when it comes time to add new features or make adjustments, opening the code file leaves one bewildered—

What was the business logic again? Why was this part written this way? How can such a small adjustment require changes in so many places? This area is too complex; I dare not change it. If something goes wrong, I'll be the one to blame...

Experienced individuals can identify the main issues and know how to avoid them, including those who originally wrote the code—

Refactor the code and logic by splitting them into separate files; use semantic naming to make implicit knowledge explicit and reduce meaningless comments; abstract modules with high cohesion and reusability; follow various "principles" and employ sophisticated "patterns"...

However, in reality, few people are truly motivated to do these things. Writing good code does not lead to promotions or salary increases. Moreover, most of us have no "legitimate reason" to demand that others write good code—unless it becomes an administrative policy.

The mainstream model of front-end development in business support, combined with human laziness, creates significant barriers in communication between people and machines.

### Job Responsibilities

Some people have "unrealistic" expectations and demands for front-end practitioners—that front-end developers should understand the business. I find this absurd. It is nothing more than their "illusion".

In general, the work that falls under the category of "front-end" includes website development, libraries, component libraries, CLI tools, development frameworks, and other areas focused on the "front-end" domain that are unrelated to the company's "business". The only area that is somewhat related to "business" is application development.

In companies that make a living from software and services, there are several roles and positions involving "front-end": front-end engineer, front-end lead, full-stack engineer, application/product developer (advocated by [Modern.js](https://zhuanlan.zhihu.com/p/426707646)), business architect, and product manager. Among them, the only "pure front-end" role, focused solely on the "front-end" domain, is the front-end engineer.

If a person's job responsibilities are not limited to the "front-end", they are not actually a front-end engineer and are unlikely to refer to themselves as one. Those who call themselves "front-end engineers" and claim that they "should/need to understand the business" are probably acting passively—either because they were required to do so during job interviews or task assignments, or to meet KPIs and career advancement goals.

The "front-end" should be the domain of "front-end engineers" who focus on "business-agnostic" work—this is the premise. The front-end should concentrate on presentation and interaction, with no business semantics in the code. Communication with the front-end should also be business-agnostic, using language strongly related to presentation and interaction—stripping away all business-related elements from the "front-end" world.

However, in application development, there will inevitably be business-related elements. How should they be handled?

After using appropriate architecture and frameworks to separate business semantics, logic, and state from UI components, non-front-end personnel (through tools like [Handie](https://handiejs.github.io/)) should be responsible for defining domain models and controlling business-related states.

"Non-front-end personnel" refers to anyone other than "front-end engineers" who focus on "business-agnostic" work—roles such as front-end leads, full-stack engineers, application/product developers, back-end engineers, business architects, and product managers.

Those who have "unrealistic" "illusions" about the front-end probably think this will improve collaboration efficiency or value output. They are probably overthinking it...

When a person has a superficial understanding of "business" and has their own ideas, the probability and frequency of friction in communication and collaboration will be higher. This will not increase value output but will instead reduce collaboration efficiency. This applies regardless of whether the person is a "front-end" developer or not.

In this regard, "design" and "front-end" actually belong to the same category—focusing on presentation and interaction without the need to understand or bear the burden of "business" matters. Demanding that "front-end" and "design" understand the business is, from a human perspective, a form of oppressive behavior.

### Shift-left Testing

In the software development process, "testing" comes after "development", meaning that functional testing only begins after the feature development is complete. While this is fine for unit-level issues, if there are problems with architecture or even business logic, the cost of rework can be substantial.

To identify and resolve issues as early as possible, before they cause significant impact, testing personnel or activities need to be involved in upstream stages. For example, testers can participate in requirement reviews, design reviews, software design reviews, and conduct unit tests during the development phase—this is known as "shift-left testing".

Although this approach can somewhat achieve preventive goals, there are still issues with information synchronization—

During the development process, if problems not identified during reviews are discovered and modifications are made privately with product or design teams without updating relevant documents or informing testers, it is easy to miss tests unknowingly, leading to online failures.

### Cross-departmental Collaboration

Overall, cross-departmental collaboration is a very frustrating task, several levels more complicated than intra-departmental collaboration. The reason lies in human nature—conflicts of interest, where people tend to prioritize their own interests over common interests. They are often narrow-minded and short-sighted, focusing on one-off deals rather than long-term cooperation.

A common problem is as follows—

When the business department needs services from the mid-platform/platform department during feature iteration, and if the basic services of the mid-platform/platform department are not yet perfect and cannot be "plug-and-play", the choice arises of where and by whom the business department's customized logic code should be written and maintained:

1. Each department's personnel develop and debug their own logic code in their respective code repositories;
2. The mid-platform/platform department develops basic services while also developing and debugging the business department's logic code in the business department's code repository;
3. Temporarily place the business department's logic code in the mid-platform/platform department's code repository and migrate it out once the basic services are perfected;
4. Write the business department's logic code into the mid-platform/platform department's code repository and continue to maintain and modify it by the mid-platform/platform department's personnel in the future.

Under normal circumstances, the last option is impossible and should not be chosen. This is a basic issue of departmental positioning and responsibility division. However, there may also be some helpless situations, such as when a less assertive mid-platform/platform department encounters a rather unreasonable business department.

What's worse is when the business department's logic is convoluted. During meetings, all parties believe they have reached a consensus and proceed with development based on their understanding. However, during testing, the business department claims that the mid-platform/platform department's implementation is incorrect and that there are issues with business logic, even overturning the consensus previously reached in meetings.

It is absurd for the mid-platform/platform department to maintain the business department's logic code! For the mid-platform/platform department, this is almost a losing proposition. Not only is it unprofitable, but it also invites trouble!

## Summary

This article has discussed several common issues we often encounter in our daily work and briefly expressed my views on each.

Although these issues seem diverse and seemingly unrelated, as the title and introduction of the article suggest—they all have a significant connection with "knowledge"!

The specifics will be revealed in the next article. In the meantime, feel free to ponder on it! 😁