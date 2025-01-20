---
title: Integration of Requirement and Development in My Mind
description: >-
  Let me briefly talk about my understanding of "integration of requirement and
  development".
date: '2022-01-25 12:34:24 +0800'
categories:
  - web-development
tags:
  - software-engineering
  - frontend-web-development
  - frontend-engineering
series: talking-about-integration-of-requirement-and-development
---

**Cost Reduction and Efficiency Improvement** is an eternal topic and constant pursuit in the production process. For enterprises, it can lead to long-term cost savings and the provision of more stable and high-quality products. On a personal level, it allows individuals to reduce repetitive and unproductive labor, freeing up energy to focus on more advanced and sophisticated tasks, which contributes to personal growth and the creation of greater value for both oneself and the enterprise.

## Ways to Improve Efficiency

Now let's consider the ways to improve efficiency in the field of pure web development or in the realm of large frontend development combined with web services.

### Single-point Efficiency Improvement

From the frontend perspective, most frontend teams are tirelessly working to encapsulate their own tool libraries, UI component libraries, scaffolding, and build tools. Some more capable teams even encapsulate application development frameworks and visual code-building tools.

From the design perspective, each department establishes its own design specifications, design language, or design system, and organizes a design-side UI component library. They also define a set of Design Tokens to facilitate communication and collaboration between design and frontend development.

From the backend perspective, it seems there is little room for efficiency improvement—most companies use Java, and the related ecosystem is already well-developed. At most, they can encapsulate some business-level functionalities.

From the product perspective, the role of a product manager is to receive and propose requirements, and to focus on revenue generation and product improvement. These mental activities can only be improved through enhanced thinking skills. Perhaps a business-oriented knowledge graph would be helpful.

### Cross-link Efficiency Improvement

The ceiling for efficiency improvement within the same job or division is clearly visible and easily reached. To go further, one must naturally step out of their own role's perspective and seek horizontal integration with upstream and downstream processes to achieve collective efficiency improvement.

If we take the frontend as the center and integrate with other links, there are several approaches: with design, it involves converting design drafts to frontend code (D2C) and vice versa (C2D); with product management, it involves converting requirement documents to code (P2C); and with the backend, it involves adopting FaaS, which is commonly referred to as "full-stack integration".

## Integrated Product and R&D

The above methods of cross-link efficiency improvement are generally superficial, still starting from the perspective of one's own or others' functions rather than exploring solutions from the essence of the problem. Although each role's deliverables are different, they should all be manifestations of the same thing.

So, what is this "same thing"? It is the model and process, or the business concepts, the relationships between concepts, and their interactions, or the business knowledge.

Therefore, the key to cross-link efficiency improvement is domain-driven unified modeling, with its output serving as the single source of truth for the entire chain. This means that from requirements/product, design to development and testing, everything should be based on the same "data".

### Simplified Workflow

The product team organizes various requirements, identifies different business concepts, and clarifies their relationships and rules of interaction. This process is modeling, which ultimately produces models and processes.

After modeling is completed, the product team can use the application building platform, which has accumulated UI components and logic functions, to create a "prototype" based on the modeling output. The "prototype" is the final page.

If the desired UI components and logic functions are not available in the existing materials, placeholders can be used to mark them for design and development to fill in. The development and maintenance of UI components and logic functions can be done either offline or online.

### Transformation of Collaboration Model

From the above simplified workflow, it is clear that the most important roles from requirements to development are essentially the product and backend teams—the product team is responsible for domain modeling and "prototype" building, while the backend team is responsible for coding and data connection. Design and frontend roles are seemingly "eliminated", and the business R&D process is streamlined.

On the other hand, it is also necessary to minimize personnel involvement—

<blockquote>
  <p>The software development process is the journey from receiving requirements to delivering usable software that meets those requirements. In this entire chain, the origin is the requirement proposer, followed by different roles such as product, design, development, and testing.</p>
  <p>Although the origin is the requirement proposer, the more practical origin is the proposer's intent. Whether this "intent" is "true" is questionable. Moreover, information is inevitably lost during transmission, and the weaker the capability of each transmission node, the greater the loss.</p>
  <p>When information is input and output by each person, it is inevitably distorted to some extent due to factors such as knowledge, comprehension, and expression. To preserve the "truth" as much as possible, the inevitable choice is to reduce transmission links, that is, to minimize the number of participants and allow the proposer's intent to directly transform into usable software that meets the requirements.</p>
  <footer>Ourai <cite><a href="/posts/hello-world-from-anti-chaos/">Hello World from Anti-chaos</a></cite></footer>
</blockquote>

What about design and frontend roles? Are they going to be laid off? Of course not! Although they are somewhat distant from the core business, they are still essential for the development and maintenance of application building materials, where their value to the team can be maximized.

## Summary

This article briefly reviews the various attempts made in the field of pure web development or large frontend development combined with web services to improve efficiency. It also outlines the concept of "Integrated Product and R&D" in my mind.

Currently, several major companies are exploring the direction of "Integrated Product and R&D" for efficiency improvement. I also have some concrete ideas that are worth trying to implement in the future. The "[Anti-chaos](/posts/hello-world-from-anti-chaos/)" system's "[Fxxk Design](/posts/fxxk-design-from-anti-chaos/)" and "[Future.js](/posts/futurejs-from-anti-chaos/)" are pieces on the chessboard of "Integrated Product and R&D".

"Integrated Product and R&D" is part of the low-code process for mid-to-back office applications and also a part of the industrialization process for frontend development.