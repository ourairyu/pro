---
title: Rethink Software Production
description: Rethink software production process and division of labor.
date: '2022-04-27 20:38:22 +0800'
categories:
  - web-development
tags:
  - software-engineering
  - frontend-web-development
  - frontend-engineering
series: talking-about-software-development
---

In layman's terms, "production" refers to the creation of items that people need, which can be physical or virtual. Software is one such "item", and the process of creating it from scratch is known as "software production".

Let's start with a question: Is software production labor-intensive or knowledge-intensive?

## Process

Although the details may vary, the production process of any item can be abstracted into several stages: requirements, design, implementation, testing, and maintenance. Depending on the situation, it can be further simplified to requirements, implementation, and maintenance, and this cycle repeats until the product or the company's life comes to an end.

Depending on the industry and field, additional sub-stages can be added to these main stages. Taking my industry, which is based on web-related technologies for software and services, as an example, the mainstream production process currently is as follows:

After receiving the requirements, the first step is to analyze them, verifying whether they are pseudo-demands and assessing the completeness and rigor of the concepts and logic. If everything is in order, the process moves on to the design stage, which includes product design, UI & UX design, and software design. UI & UX design can also be considered part of product design.

Unlike standalone applications that have only a client side, modern application software typically consists of both client and server sides, namely the front-end and back-end. Therefore, both the design and implementation of software must take into account these two parts.

Software design mainly involves structural design, i.e., software architecture, and technology selection. When designing the structure, it is important to have a certain degree of foresight and flexibility to easily accommodate changes in the foreseeable future.

It should be noted that software architecture is influenced by industry trends and rules, organizational strategic goals, and customer needs, while technology selection is constrained by the software architecture, team planning, and personnel capabilities, not the other way around.

With this as a dividing line, requirements and design are knowledge-intensive activities, while implementation, testing, and maintenance are mostly labor-intensive.

Throughout this entire process, administrative and project management methods are needed to regulate resources and control the process to ensure that the product is delivered on time and meets the requirements.

## Division of Labor

Generally speaking, excluding management positions, the division of labor in software production follows the production process. Here are the main roles sorted according to the upstream and downstream relationships in the software production process:

1. Product Design — Product Manager, Interaction Designer;
2. Visual Design — UI Designer;
3. Software Development — Software Engineer;
4. Software Testing — Test Engineer;
5. Deployment and Maintenance — Operations Engineer.

In different companies or departments, depending on the actual situation, it is possible for a person in one position to participate in multiple stages. For example, in a company or department without dedicated test engineers and operations engineers, product managers, interaction designers, and UI designers may also take on software testing tasks, while software engineers may handle some deployment and maintenance work. Conversely, some stages may be further divided into more specialized roles. For example, the software development stage can be broken down into roles such as Architect, Front-end Engineer, and Back-end Engineer.

So, are positions created by specific tools or scenarios, such as Java Engineer, Go Engineer, WeChat Mini Program Engineer, or H5 Engineer, considered a refinement of division of labor? I don't think so — these roles are highly susceptible to changes in business and can easily become obsolete.

What determines the stability of one's position is the ability to solve problems within their own stage, not the specific tools they are familiar with. Suppose you joined a company as a "Java Engineer", and one day the company decided to replace Java with Go. Would you choose to resign or wait to be laid off, or would you learn Go?

The premise of refining division of labor is that the process stages are complex and cannot be automated due to insufficient standardization or other reasons, necessitating the breakdown into sub-stages and finding the right people to handle them.

## Delivery

In terms of software delivery methods, there are project-based software and product-based software, which can affect the details of the process and the development mindset.

Project-based software is like a one-time deal. It requires bidding or having market sales personnel to bring in clients, discussing specific requirements with clients, and then signing contracts. Once development begins, the mindset is to complete it as soon as possible, with usability being the priority. Maintainability and elegance are often secondary!

Developing this type of software means being driven by deadlines from the very beginning, as if knowing the exact date of your death but determined to finish something before that day. Under immense mental pressure, everyone works at full capacity, relying heavily on physical effort.

For companies or departments primarily focused on project-based software, if there are many projects, there is little time to catch a breath between them. This initiates a vicious cycle for individuals — the consumption of mental and physical resources exceeds replenishment, and professional growth is minimal. This cycle can only be broken if at least one of the following conditions is met: fewer projects, ample time, or sufficient personnel.

In contrast, product-based software embraces a long-term approach, requiring continuous iteration and improvement, unlike project-based software, which essentially ends after delivery.

The demands for this type of software are mainly identified and managed by product managers. Compared to project-based software, the mindset here is more focused on making the software better, with greater emphasis on the aesthetics and maintainability of the design.

From a company's perspective, product-based software is typically an external XaaS online service; from a department's perspective, it is an internal middleware service. In such companies or departments, the likelihood of individuals entering a virtuous cycle in terms of professional growth is much higher than in those primarily focused on project-based software.

In comparison, the production of product-based software is knowledge-intensive, while the production of project-based software is labor-intensive.

## Optimization

Why optimize? Because:

<blockquote>
  <p>"Cost reduction and efficiency improvement" is an eternal topic and perpetual pursuit in the production process.</p>
  <footer>Ourai, <cite><a href="/posts/integration-of-requirement-and-development-in-my-mind/">Integration of Requirement and Development in My Mind</a></cite></footer>
</blockquote>

Unless we can find a means of "leaping" like a wormhole, where an idea is realized the moment it appears, the ultimate optimization of any task is to achieve it with the minimum amount of information/work required.

<blockquote>
  <p>To accomplish something requires a fixed amount of information/work, depending on where this information/work is applied; to do it well requires reaching this amount of information/work. Any less will not suffice, and any more is redundant.</p>
  <footer>Ourai's thoughts</footer>
</blockquote>

However, this "minimum amount of information/work" is only a theoretical value, just like the actual distance between two points will always be greater than the straight-line distance when multiple factors are involved — any task with multiple influencing elements will inevitably involve some redundancy.

Optimization is about finding the optimal solution in terms of time and space for a specific problem in a specific context — isn't that like an algorithm? It is an algorithm!

The stages of requirements, design, implementation, testing, and maintenance in the production process are essential. Even if it seems like some (or several) stages are eliminated in certain situations, they are not truly removed; they are merely transferred.

For example, if a company or department does not have a design stage in its production process, it does not mean that the design stage is absent in software production. Instead, the design stage is handled by open-source software providers or other upstream suppliers.

The involvement of many people in software production often leads to overlapping roles, distorted information transfer, and a lot of redundant work, causing waste of time and resources. With this in mind, the direction for optimization is clear: reduce overlapping roles and minimize information transfer stages — aiming to streamline the business-oriented production process and improve productivity.

I believe that "using knowledge as the single source of truth for the entire chain" is one way to achieve this, which I will elaborate on in the series of articles titled "[Talking About Integration of Requirement and Development](/series/talking-about-integration-of-requirement-and-development/)".

From my limited perspective, the mainstream division of labor will not change significantly in the next five years. However, with the maturation of low-code development platforms, the division of labor will inevitably change.

Currently, software production in most companies or departments still involves building a complete software product from the most basic units (ignoring open-source tools). If low-code development platforms become mature, businesses that focus on operations can reduce a large number of personnel originally used for development and maintenance after purchasing low-code platforms. They can then retain only a few people to configure or develop features that meet business needs based on the low-code platform.

In this scenario, businesses focused on operations will resemble traditional companies, with the majority of their workforce dedicated to solving business problems or maintaining company operations. A small IT department will be responsible for system feature development and maintenance, without requiring high technical skills.

In this case, companies that develop low-code platforms will become suppliers to operation-focused businesses, and those that develop UI components or other infrastructure will become suppliers to the low-code platform companies.

With the maturation and rise of low-code platforms, changes will occur in industrial structure and company workforce composition. From an industrial perspective, the production chain from raw materials to finished products will be perfected, and the division of labor will become more refined. From the perspective of company workforce composition, there will be little change in technology-focused companies, while operation-focused companies will see a reduction or consolidation of roles, leading to a coarser division of labor.

## Summary

Humans are the cause of various problems in human activities. The more people involved and the more stages they participate in, the lower the efficiency and the higher the energy consumption. Labor-intensive tasks should be outsourced as much as possible to automated and intelligent tools or machines to solve, as mentioned in one of the videos by Lin Chao.

![Work Time Distribution](productive.png)

When people solve problems in one area, they often create problems in another area, and then solve them again, in a cyclical manner. No matter how thoughts, methodologies, and tools change, human nature and needs remain the same. Therefore, human society develops in a spiral upward pattern — as Mark Twain said:

<blockquote>
  <p>History does not repeat itself, but it rhymes.</p>
  <footer>Mark Twain</footer>
</blockquote>

The principles, methods, techniques, and tools — the further back you go, the more changeable and less important they become. Seek the principles, change the methods, switch the techniques, and replace the tools.