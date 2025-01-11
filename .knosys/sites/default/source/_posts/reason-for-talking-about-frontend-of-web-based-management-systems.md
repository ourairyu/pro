---
title: Reason for Talking About Front-end of Web-based Management Systems
description: >-
  Let me briefly explain why I wrote this article series "Talking About
  Front-end of Web-based Management Systems".
date: '2021-05-09 10:39:32 +0800'
categories:
  - web-development
tags:
  - software-engineering
  - frontend-web-development
  - frontend-engineering
series: talking-about-frontend-of-web-based-management-systems
---

The primary responsibility of front-end engineers in most business teams is the development of front-end applications for websites or applications, as well as for mid-to-back office applications. If they spend a significant amount of their work time on infrastructure-related tasks, they might be labeled as "not focusing on their main duties", essentially reducing them to the role of a mere tool.

## "Front and Back" Confusion

Many newcomers to the field struggle to distinguish between "front office" and "front-end", as well as "back office" and "back-end", which can be further complicated by the misuse of these terms by others in the team. Let's clarify these distinctions here:

"Front office", "mid-office", and "back office" are categorized based on the user groups they serve. The "front office" is oriented towards end-users, typically individuals, focusing on the visual presentation such as layout, color coordination, animation effects, and user experience, with data primarily for display purposes. The "mid-office" and "back office" can be collectively referred to as the "mid-to-back office", targeting data managers, usually members of enterprises or other organizations, with a primary focus on data operations.

"Front-end" and "back-end" are divided from a technical and division of labor perspective. Generally, the part that directly interacts with users is the "front-end", whether it's a web page or a native client interface. In contrast, the part that processes data behind the scenes, unseen and intangible to users, is the "back-end".

## Mid-to-back Office Development is Not "Low-class"

Throughout my years of work experience, I have been involved in numerous projects. Looking back, aside from infrastructure construction, the vast majority of them were mid-to-back office types. It seems that only the activity page of "[Maihaoche](http://www.maihaoche.net/)" and the "store" related interfaces of the "JD Auto" WeChat mini-program truly belong to the front office category.

![JD Auto WeChat Mini-Program](jd-car.jpg)

Around 2015, before I joined Maihaoche, mobile internet was at its peak. During interviews, questions about mobile web development were almost inevitable, as if every business entry point was on mobile devices and work was solely conducted on mobile platforms. It felt as if lacking mobile web development experience would lead to unwarranted disdain, and for a while, I even felt ashamed of my lack of mobile web development experience... I must have been out of my mind!

You might wonder: "What does having mobile web development experience have to do with working on the front office?"

In the context of the mobile internet era, traffic primarily came from mobile devices, leading many enterprises to de-emphasize desktop platforms. Thus, "mobile" was almost synonymous with "front office". Additionally, due to the limited screen size of mobile devices, which could not display much data at once and made data operations complex, organizations rarely chose to conduct work on mobile devices, as it was too inefficient for office tasks. Therefore, "mid-to-back office" could be equated with "desktop" – at that time around 2015, my work experience was limited to mid-to-back office applications, meaning I had experience only in desktop web development and not in mobile.

The main characteristics of front office website or application development are high variability, high performance requirements, and the need for rapid demand response, as these factors affect the growth of a company's traffic and market expansion. In contrast, mid-to-back office application development is relatively more standardized. Although the performance and compatibility requirements are not as high as those for front office websites or applications, there is a greater emphasis on information architecture, the fluidity of data operations, and security, all of which are related to the office efficiency of organizational members.

Just as with front-end and back-end development, front office and mid-to-back office development each have their own challenges and focus on different knowledge and skills. No one should consider the other's work as simple or look down on it. However, it is objectively true that the closer one is to the "front", the closer to the end-user, the more variable and the more difficult it is to abstract.

## Finally, the Serious Part

Although I have been working on mid-to-back office applications for many years, I have not taken the time to organize my experiences. Recently, while refactoring a project that was getting out of control, I took the opportunity to sort out some thoughts and past experiences into the article series "[Talking About Front-end of Web-based Management Systems](/series/talking-about-frontend-of-web-based-management-systems/)", hoping to provide some reference for those who work on the front-end development of mid-to-back office applications in regular business teams.

The content covered in this series of articles includes, but is not limited to, directory structure division, menu and routing configuration, request processing, permission verification, etc. There is no content related to low-code or visual construction; if needed, a separate series will be opened for systematic exposition.

Although this series of articles is considered from the perspective of mid-to-back office applications, much of the content is also applicable to front office websites or applications.

## Is That All?

Stay tuned, thank you!