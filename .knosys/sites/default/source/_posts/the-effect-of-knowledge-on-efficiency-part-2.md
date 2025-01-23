---
title: The Effect of Knowledge on Efficiency Part 2
description: >-
  Use the basic principles of knowledge to explain common problems in daily
  work.
date: '2022-10-26 16:12:27 +0800'
categories:
  - web-development
tags:
  - software-engineering
  - frontend-web-development
  - frontend-engineering
  - efficiency-improvement
series: talking-about-software-development
---

In my previous article, "[The Effect of Knowledge on Efficiency Part 1](/posts/the-effect-of-knowledge-on-efficiency-part-1/)", I passionately discussed several rather annoying issues commonly encountered in daily work and briefly explained their causes from a conventional perspective. This article will delve into the reasons behind these issues from the perspective of knowledge.

## Basic Principles

Some essential concepts to understand before analyzing and solving problems.

### Definition of Knowledge

In "[The Real World](/posts/the-real-world/)" (written in Chinese), when I introduced the "DIKW" framework (i.e., "data", "information", "knowledge", and "wisdom"), I briefly explained what "knowledge" is:

<blockquote>
  <p>Through "data" and "information", we can only grasp the superficial aspects of "entities", which are unreliable and offer little guidance for human activities. What people truly need is "knowledge" that can accurately reflect the "nature" and "logic" of "entities".</p>
  <p>"Knowledge" can be obtained through modeling, which involves categorizing "information", extracting common features, and simplifying them into "models". Knowledge is not necessarily true; humans can never be certain of its absolute truth. Instead, we can only continuously verify it to bring it closer to the truth.</p>
  <footer>Ourai <cite><a href="/posts/the-real-world/">The Real World</a></cite></footer>
</blockquote>

For the sake of clarity and ease of understanding, this article will temporarily not strictly distinguish between the concepts of "data", "information", and "knowledge", treating them as essentially the same thing—collectively referred to as "knowledge".

In this context, professional knowledge in careers, specialties, and business fields is "knowledge", and symbolic systems such as language, text, graphics, and code are also "knowledge".

When classifying "knowledge" based on whether it has been externalized by a symbolic system, knowledge that has been externalized and recorded is called "explicit knowledge", while knowledge that remains within an individual's consciousness and has not been externalized is called "tacit knowledge".

Based on the philosophy that "everything can be described", any "tacit knowledge" can be articulated in an appropriate form, albeit with some degree of distortion. This is the premise for making tacit knowledge explicit—and also the fundamental condition for enabling the flow of knowledge.

### Knowledge Encapsulation

In simple terms, "encapsulation" involves using a symbol to compress or package related knowledge, much like a neatly wrapped package ready for delivery. The purpose is to facilitate the combination and transmission of knowledge, thereby improving its circulation efficiency.

There are many examples of knowledge encapsulation in daily life and work, such as various types of vocabulary in language and text, and constants, variables, functions, and classes defined in software development.

Since encapsulation is involved, there should not be a symbol that encompasses everything—if it represents everything, it essentially represents nothing and will not truly play a valuable positive role. Therefore, it is necessary to control the semantic boundaries of symbols, aiming for just the right fit.

Controlling boundaries means limiting the complexity of the knowledge encapsulated by symbols and their dissemination channels—

Adhering to principles such as separation of concerns and single responsibility to enhance the cohesion of symbols, for example, modular decomposition in software, layered architecture; and horizontal and vertical division of job responsibilities—assigning specific tasks to specific individuals, rather than imposing unrelated requirements on someone and using those unreasonable demands as performance indicators.

Minimizing input/output (I/O) channels to restrict communication between symbols and reduce the likelihood of chaos—software program units should have as few APIs and parameters as possible; and ideally, only one person in a group or department should be the one who "needs to know (almost) all the details".

There is a potentially confusing point here—how can a person be a "symbol"?

This touches upon philosophical, sociological, and psychological issues, which we won't delve into seriously here. To put it simply—

When people perceive others, they inevitably label them based on their displayed characteristics and states, forming a symbolic image of that person in their minds.

Moreover, in collaboration, a person's identity is less about themselves and more about their professional knowledge and skills, as well as their job responsibilities, which are symbols in themselves—occupations, specialties, departments, and positions all encapsulate specific knowledge.

### Knowledge Dissemination

Assuming that knowledge is properly encapsulated, let's boldly take out Occam's Razor—

Use as precise and simple symbols as possible to express knowledge—precision avoids ambiguity, and simplicity facilitates understanding, thereby reducing cognitive bias and ensuring that collaborators imagine the same thing in their minds; in software development, this also reduces code volume and saves resource overhead.

Take the shortest path to the endpoint— the longer the path, the longer it takes to reach the endpoint, and the more loss and distortion occur, which can significantly impact the endpoint if timeliness and completeness are required.

### Knowledge Maintenance

Maintain knowledge based on the principle of "Single Source of Truth" (SSOT). Its core is to recognize only one source of knowledge as authoritative and ignore all others, somewhat akin to monotheism.

This requires the implementation of certain mandatory measures to ensure its enforcement, eliminating the existence of multiple versions of the same knowledge; and establishing a feedback control mechanism so that all consumers of the knowledge can update responsively when the source changes, and in turn, promote the continuous updating of the knowledge source.

If SSOT is not followed, multiple versions of the same knowledge will inevitably arise—during collaboration, this not only increases the cost of understanding and communication but also leads to disputes and even arguments; it also increases the cost of correction and maintenance when synchronizing knowledge, gradually diminishing the motivation to update the knowledge.

Knowledge that follows SSOT is the crystallization of collective wisdom, which relatively enhances its accuracy and effectiveness. Even if it is wrong, it is wrong consistently, and if accountability is needed, it is not the responsibility of one (or a few) individuals but of all participants in knowledge maintenance.

In addition to these characteristics, knowledge that follows SSOT is generally managed in a centralized manner, reducing and even avoiding the dispersion of explicit knowledge and the loss of tacit knowledge, thereby improving the integrity and observability of knowledge.

## Problem Analysis

Below, I will use the basic principles of knowledge discussed above to analyze and explain the common issues in daily work described in the [previous article](/posts/the-effect-of-knowledge-on-efficiency-part-1/).

The problems in business support, job responsibilities, and cross-departmental collaboration are mainly due to poor encapsulation of knowledge and its ineffective and smooth dissemination; the issue of shifting testing left lies in knowledge maintenance, and this problem also exists in cross-departmental collaboration.

## Summary

This article has summarized several basic principles of knowledge and explained the causes of common daily work problems from the perspective of knowledge. In the next article, I will build on the principles discussed here to envision solutions to these common problems.