---
title: Things Behind the KnoSys Web App
description: >-
  Unveiling the ideas and implications behind my local-first knowledge
  management tool, KnoSys GUI Application!
date: '2024-02-06 11:51:29 +0800'
categories:
  - web-development
tags:
  - personal-knowledge-base
  - knosys
---

In my previous article "[I'm Developing the KnoSys Web App](/posts/i-am-developing-the-knosys-web-app/)", I highlighted the reasons for developing the KnoSys GUI application and its core features. However, some people still don't understand why I'm reinventing the wheel.

To put it simply, KnoSys is a piece of my grand vision, and one must grasp the overall picture to truly comprehend why I insist on creating this tool.

I hope that by revealing the ideas and significance behind the KnoSys GUI application in this article, everyone can gain a slight understanding of my grand vision.

## Design and Composition

As someone who pursues freedom and doesn't want to be held hostage by platforms or tools, I won't create a tool that holds others hostage—do unto others as you would have them do unto you.

### Basic Philosophy

In the core design, I adhere to the principles of "openness, standardization, and transferability" as much as possible, especially for the crucial data:

- Data is stored in file formats that can be viewed using the built-in applications of the operating system without the need to download or install additional applications;
- Text data prioritizes formats such as Markdown and YAML, which are friendly to human reading and writing and have become (de facto) standards.

Therefore, even if you don't use the KnoSys GUI application and switch to Obsidian, Source Notes, IDE, etc., you can still open and edit the relevant files without any barriers—even using the built-in applications of the operating system!

The only limitation of using the KnoSys GUI application is the directory structure specification for convenient program processing—the [QiiDB Data Specification](https://qiidb.github.io/meta/zh/guides/spec/), which is also in line with (de facto) standards or common practices.

### User Autonomy

When using other cloud services or applications, they always "presumptuously" build in some function modules that are never used and cannot be deleted or disabled, occupying limited "space" in various senses.

As a knowledge management tool, the most indispensable function features of the KnoSys GUI application are "knowledge base" and "extension market", and the rest are basically enhanced functions, which can theoretically be obtained on demand through the "extension market".

I don't intend to deprive users of their choice, so I won't build in any non-essential function modules, and will maximize user autonomy in choosing and combining.

### Technical Architecture

From a technical point of view, to put it bluntly, the KnoSys GUI application is the operation client of [QiiDB](https://qiidb.github.io/), because it itself does not have any operation capabilities—

<blockquote>
  <p>QiiDB is a data specification and an open data collection based on this standard, and KnoSys is a tool for data processing based on this data specification.</p>
  <footer>Ourai's thoughts</footer>
</blockquote>

So far, the KnoSys system consists of three main parts:

1. SDK—provides the ability to operate folders and files that comply with the QiiDB data specification in the form of functions;
2. Website—combined with [SSG](https://jamstack.org/generators/) to convert data sources that comply with the QiiDB data specification and generate static websites;
3. Application—visual operation of data sources that comply with the QiiDB data specification, that is, the KnoSys GUI application.

Among them, the application part strongly depends on the SDK, and the website part will serve as an extended function of the application to provide the "knowledge base" sharing and publishing capabilities.

The "knowledge base" dynamically renders the interface-related display forms based on "metadata" for data verification and other capabilities, which are built based on my own low-code development [Fxxk Design](/posts/fxxk-design-from-anti-chaos/) and [Future.js](/posts/futurejs-from-anti-chaos/) system.

In addition, the ability to subscribe to information from the "person" dimension will depend on [LinXoid](https://linxoid.com), a project aimed at helping people establish connections.

## Vision and Significance

Since KnoSys is a piece of my grand vision, what do the other pieces look like? Next, I will reveal them to you in both pragmatic and visionary aspects.

### Digital Life

Like relying on electrical appliances, the vast majority of people in the twenty-first century can no longer live without digital products, and post-00s are the "natives" of the digital world.

However, so far, digital products have mainly been aimed at businesses, enterprises, and governments, and those aimed at individuals are mainly for consumption and entertainment; there are not many products that make life better for individuals and families, and I think they are not good enough.

As a person who loves life and has software development skills, I am determined to fill and improve this gap!

Combining my personal situation, to support the sustainable digital nomadic life I want to live, I need a family digital workbench:

- Build a server in the physical family that can be accessed from the outside network, and it is best to have multi-center data backup in multiple places;
- AI-assisted knowledge management, which will use KnoSys and local large language models;
- Knowledge-driven personal and family life management, including family collaboration, finance, health, smart devices, etc.;
- Personal or family communication for resource sharing and communication, which will use LinXoid and peer-to-peer networks (P2P).

At that time, the server in the physical family will be the SSOT data center, and computers, mobile phones and other devices will be client operation interfaces that basically do not store persistent data and connect and access the data center.

See the article "If I Become a Digital Nomad" and the "Digital Life" plan for more information.

### Cyberspace

With the development of technology, the "erosion" of the digital world on the real world will gradually deepen, until the two are deeply integrated, and people no longer "deliberately" distinguish between the virtual and the real—both are illusions, and both are real.

In the real world, the most important thing is the "knowledge" formed by the exploration of truth, and everything centered around "people"—in the digital world, which is a reflection of the real world, is equally important and is its foundation.

To become a resident of cyberspace, it is extremely important to have a clear understanding of "knowledge" and "people", to clearly realize their importance and to fight for the relevant rights!

In the real world, in the past, "knowledge" was held by a very small number of specific groups such as wizards, priests, and popes, while the general public was ignorant and could be manipulated at will; in the digital world, "knowledge" is mostly held by platforms, and users are manipulated.

In the real world, in the past, most people generally had no human rights and were exploited and oppressed as de facto slaves by a very small number of specific groups; in the digital world, people are just resources in a certain platform, and are exploited cheap/free labor.

The civilization degree of the digital world is far lower than that of the real world—most people have not yet realized their "knowledge" and "people" related rights in cyberspace, let alone strive for them!

I hope my actions can awaken others, even if it's only a few.

For extended reading, you can see my "Talking About Individual-Centered Services" series of articles.

## Conclusion

Speaking of the KnoSys GUI application, because it adheres to the principles of openness, standardization, and user autonomy, and there are no technical limitations, I chose Web technology with the same philosophy to implement it.

Initially considering supporting the following two usage methods:

1. Automatically open in a new tab through a browser extension;
2. Automatically start the application service when the computer is turned on, and manually enter the address in the browser.

The knowledge management part only provides the desktop version, and if you want to operate on mobile devices, please look forward to the mobile applications related to "digital life" that I will develop in the future!