---
title: The Effect of Knowledge on Efficiency Part 3
description: Let's talk about the general idea of ​​making knowledge flow in an enterprise.
date: '2023-03-10 21:16:10 +0800'
categories:
  - web-development
tags:
  - software-engineering
  - frontend-web-development
  - frontend-engineering
  - efficiency-improvement
series: talking-about-software-development
---

This article discusses the general approach to facilitating the flow of knowledge within an enterprise.

## Digital Employees

In enterprises that operate in the internet or software-as-a-service industry, the two main elements of office and business operations are the people at various levels and divisions, and the application software used to handle various tasks. It is natural that the majority of people in an enterprise are employees. However, why not regard the various application software used in work as a whole and treat them as a kind of employee?

We call this special "employee" a "digital employee". Unlike human employees, it is purely virtual and digital, with no physical form. Yet, like human employees, it can handle work-related tasks.

Initially, it may not be able to do anything, but by training it in a way similar to training animals or teaching children, it can excel in certain areas, especially in repetitive mechanical tasks! Moreover, this "employee" has no emotions, does not get tired, and is more stable, reliable, and cost-effective than humans.

Just as human employees are classified into different ranks based on their abilities and responsibilities, digital employees also have levels—

Some digital employees have fragmented capabilities, lacking a sense of coherence, appearing almost schizophrenic and unintelligent. They possess no knowledge, or if they do, it is isolated and disconnected—essentially functioning like a hammer.

Some capabilities are interconnected within a limited scope, allowing knowledge to flow in a small range and forming a more effective system. This reduces communication among human employees and improves the efficiency of repetitive mechanical tasks—it can be considered a rudimentary assembly line.

Most digital employees in enterprises fall into these two categories, which are relatively (very) low-performing and require human employees to control them manually. The relationship between human employees and digital employees is one of subordination, or even a master-slave relationship. If judged by human standards, these digital employees are disabled.

More advanced digital employees, on the other hand, should be partners with human employees, powerful assistants that allow human employees to free themselves from repetitive mechanical tasks and focus on creative content—shifting from labor-intensive to knowledge-intensive work.

## Intelligent Assistants

It can be said that intelligent assistants represent the highest level of digital employees. They are the "jack-of-all-trades" within an enterprise. The role is best fulfilled by an intelligent workbench, with its core being—

### Knowledge Management

In today's era, knowledge is the most important asset for both individuals and enterprises. However, effectively accumulating knowledge and allowing it to flow like a stream of water is a challenge faced by many individuals and enterprises.

For enterprises, knowledge is the raw material needed for innovation. Those that cannot innovate will eventually deplete their resources and be eliminated by the times. Some enterprises may try to revitalize themselves by frequently changing personnel, but this is mostly ineffective. Implementing knowledge management from the top down is the right approach.

Effective knowledge management must be based on the basic principles outlined in [The Effect of Knowledge on Efficiency Part 2](/posts/the-effect-of-knowledge-on-efficiency-part-2/), creating a large, centralized knowledge base within the enterprise to manage various types of knowledge.

The knowledge in the minds of enterprise employees, related to the enterprise, belongs not only to the individual employees but can also be transformed into the enterprise's knowledge. Therefore, how to encourage employees to willingly and comfortably externalize their tacit knowledge into explicit enterprise knowledge is something every enterprise executive should consider carefully.

Although enterprise knowledge originates from individual knowledge, it does not directly become enterprise knowledge. Instead, it is transformed through discussions among multiple people within a certain scope. This can be considered a "consensus". Since it is a consensus, it should be solidified into tools or processes as much as possible, reducing and eliminating dependence on individual will.

If knowledge management is not done well, the enterprise's achievements will be highly dependent on individual employees. The tacit knowledge related to the enterprise in the minds of employees will be lost when they leave. If this knowledge is substantial or of high (potential) importance, the enterprise will suffer significant losses.

Most enterprises have knowledge management systems, but many scatter knowledge across multiple applications, such as Confluence and Zentao. These applications are inherently disconnected, and the associations between pieces of knowledge are so weak that they are almost non-existent.

If knowledge management is not based on a "single source of truth" (referred to as "SSOT" below) in a centralized manner, it is like a handful of sand, and there is little difference from not having it at all. A centralized knowledge base that follows "SSOT" serves as the "brain" of the intelligent assistant, giving it the ability to "remember" and use knowledge as the raw material for subsequent actions.

The other capabilities of the intelligent assistant are actually pipelines for delivering knowledge or transformers that change its form. The final products of human employees are all derived from digital knowledge through pipelines connected by various capabilities.

### Integration of Product and R&D

The "integration of product and R&D" mentioned here refers to the pipeline that automatically derives application products from knowledge related to the enterprise's digital products. The core concept remains as described in [Integration of Requirement and Development in My Mind](/posts/integration-of-requirement-and-development-in-my-mind/).

In my envisioned "integration of product and R&D", an "(business) application" is "requirements + UI & UX + low-code framework". Ignoring some details, it can be formally expressed as `App = Render(Extract(Requirements, UI & UX))`.

Here, "requirements" are a "version of knowledge", `Render` is part of the low-code framework, and `Extract` is the knowledge base and online designer.

In traditional product and R&D collaboration models, requirement management, or business knowledge management, is often chaotic—knowledge is scattered in different platforms and IMs in various forms, and there is little association between pieces of knowledge. Demands are often generated or changed verbally without being recorded as data, leading to knowledge loss.

After the product manager produces the PRD and prototype, the UI & UX designer creates design drafts, the back-end builds tables and writes business code, and the front-end then writes page code based on the products of the product manager, UI & UX designer, and back-end. Their work is relatively disconnected, and there is no actual association between the outputs of each link, so changing a requirement requires separate modifications.

However, in the product and R&D collaboration model I envision, "requirements" are abstracted as "knowledge". Any change in requirements must first update the knowledge data, and then automatically reflect the changes in the final product, the "application"—this is the "integration of product and R&D" with "knowledge" as the "SSOT".

Product managers organize various requirements, abstract and accumulate/update business concepts related to their own business, clarify their relationships and rules of action, and these are stored in the knowledge base, which can be viewed in the form of articles, flowcharts, knowledge graphs, etc. Selecting a few fixed versions of knowledge to create a collection constitutes a "requirement", which can be considered a "PRD".

When product managers do these tasks, they are actually engaged in ontology modeling or domain modeling. The output can be transformed into metadata that can be consumed by a low-code framework for back-end processing of business data and front-end validation of data.

Product managers can then use an online designer to visually select fields from the domain model and choose appropriate UI components from an existing interaction pattern library. After a series of drag-and-drop operations, a "prototype" is generated. Unlike traditional models, this "prototype" becomes the final page effect once published.

If a UI & UX designer is not satisfied with a part of the visual effect of the "prototype", they can also make fine adjustments on the online designer.

The following is a rough diagram (drawn a year ago, but the overall idea is similar):

![Diagram](progress-of-knowledge-driven-lcdp.png)

To summarize the differences between the new and traditional models:

1. It is driven by "knowledge", using "knowledge" as the "SSOT", ensuring that knowledge is always up-to-date and preventing knowledge dispersion and loss.
2. An association is established between "code" and "requirements". Business applications (functions) are automatically generated/updated based on metadata derived from "knowledge".
3. An association is established between "code" and "design". Configuration data generated by UI & UX designers' fine-tuning on the platform will generate front-end page style code.

The key to this automatic derivation pipeline of "integration of product and R&D" is to abstract the smallest number of atomic concepts that are highly combinable and interpretable, like "particles" and "forces" in physics. Their combinations and interactions can evolve into everything.

### Artificial Intelligence

As a key distinction from other lower-level digital employees, intelligent assistants must be equipped with AI to give them "intelligence". This enables them to learn autonomously, understand the enterprise, and grasp the needs of human employees. In addition to passively executing tasks based on instructions, they can also proactively offer reminders and suggestions.

A centralized knowledge base that follows "SSOT" provides AI with a vast amount of high-quality learning material. Based on this, a customized model that understands the enterprise best can be trained. As a result—

When human employees add or edit knowledge, highly relevant related knowledge will be automatically pulled up for prompts. The knowledge entered by human employees and their interactions with the intelligent assistant also make it smarter and more attuned to individual habits.

When a team member requests leave, the intelligent assistant can suggest whether to approve it or consider alternative plans based on task scheduling, status, and available personnel information.

For human employees taking over someone else's work, the intelligent assistant can compile a comprehensive and detailed handover document for them to read and understand, and provide suggestions for quick onboarding based on their capabilities.

When important changes in policies or industries related to the enterprise's business are detected, the intelligent assistant will notify relevant personnel and remind them of which knowledge needs to be updated to keep pace with the times and respond to changes in a timely manner.

In addition to the scenarios listed above, it can also do many other "thoughtful" things!

## Summary

An enterprise not only has human employees but also digital employees, who can view various digital means of work as a whole. The highest level among them is the intelligent assistant, with the intelligent workbench fulfilling this role.

Intelligent assistants can effectively help human employees with repetitive mechanical tasks, allowing people to focus on creative content and truly shift from labor-intensive to knowledge-intensive work. They act like a "thoughtful" secretary, and should not be regarded as servants, but as partners.

Due to the characteristics of intelligent assistants, the feasibility of a demand or an idea can be preliminarily verified the moment it is entered. After discussion and modification by everyone, the conclusion will be recorded as knowledge in the intelligent assistant and directly reflected in the final digital product.

The emergence of ChatGPT has had some impacts—

It marks that AI's ability to understand human natural language has reached a level that can be promoted and applied in practice, and it also indicates that natural language user interfaces (LUI) can replace graphical user interfaces (GUI) in certain scenarios—by simply typing or speaking to tell the intelligent assistant to change the page background color from white to red.

It forces those who are not logical and cannot clearly express themselves to admit their shortcomings instead of blaming others. It also makes some bosses realize that intelligent assistants and the accompanying organizational structure and collaboration model changes are key to the survival of enterprises in the future. Those who lag behind will be eliminated by the times!

Moreover, since enterprise knowledge originates from individual employees' knowledge, what effects would seamless integration between individual employees' intelligent assistants and the enterprise's intelligent assistant produce?