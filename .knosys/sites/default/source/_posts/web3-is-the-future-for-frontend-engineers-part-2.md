---
title: Web3 is the Future for Front-end Engineers Part 2
description: >-
  Let me tell you about my experience and thoughts on participating in the ETH
  Shenzhen Hackathon. Even though I had just learned how to walk in Web3, I
  still wanted to give it a try, even if it meant getting hurt!
date: '2024-08-24 14:50:55 +0800'
categories:
  - life
tags:
  - frontend-engineer
  - job
  - web-3
  - openbuild
---

In my previous article, *[Web3 is the Future for Front-end Engineers Part 1](/posts/web3-is-the-future-for-frontend-engineers-part-1/)*, I provided an overview of my journey transitioning from a traditional web front-end engineer to a Web3 full-stack engineer through the *[Web3 Front-end Bootcamp](https://openbuild.xyz/learn/challenges/2036589711)*.

During the early days of the bootcamp, a common question was: "Can we find Web3 jobs after completing the course?" Some even approached it with a traditional mindset, seeking stable Web3 employment.

From what I currently understand, the Web3 industry is highly unpredictable and volatile. The notion of "stability" simply does not exist. It's not uncommon for projects to vanish overnight. If anything, exchanges might be considered relatively stable.

Thus, if you want to enter the Web3 space, you must embrace the instability and uncertainty. You need to be adaptable, flexible, and capable of rapidly and efficiently acquiring new knowledge to keep up with the constant changes.

As a self-proclaimed **independent developer**, I certainly don't limit my income to the option of "finding a job". Instead, I aim to diversify my sources of income.

In addition to the usual approaches mentioned in *[Indie Developer is Your Final Destination](/posts/indie-developer-is-your-final-destination/)*, the Web3 community offers unique opportunities such as **bounty tasks** and **hackathons**. Being a "bounty hunter" can be quite rewarding!

## Hackathon Experience

OpenBuild, which has significant influence in the domestic Web3 developer community, not only runs the "Web3 Front-end Bootcamp" but also organizes numerous events, including the recently concluded *[ETH Shenzhen](https://www.ethshenzhen.org/)*.

This edition of "ETH Shenzhen" consisted of two parts: a sharing session and a roundtable discussion; and a hackathon competition. For teams participating in the hackathon who did not win, those from outside Guangdong Province were provided with travel subsidies.

Half a month before the event, there was an **online hackathon exclusive to bootcamp participants**, which can essentially be seen as a linked component of the "ETH Shenzhen Hackathon". The same project could be used for both, so I decided to participate in both.

Before joining the bootcamp, I had the idea of developing a community-centered DAO-like organization around myself. During the bootcamp, while working on an NFT marketplace, I realized that this idea was feasible.

Why not use the opportunity of participating in the hackathon to further concretize this idea as a competition project, and eventually make it another work in my "Internet Freedom Manifesto" portfolio?

### Introduction to the Competition Project

After a day of contemplation, I established the name and positioning of the project—

The Chinese name is "吾界", and the English name is "Selfverse". Both convey the same meaning: "Self" is the "world" or "universe".

The world we see is a reflection of our inner world. To live a fulfilling life, one must first enrich their spirit to form a robust, systematic, and self-sustaining "ecosystem".

The true and complete "self" is often deeply hidden, and what we interact with others is a "persona" filtered and somewhat embellished.

This is not only true in real life, but even on the internet, where anonymity is a feature, most people still have to follow the "unwritten rules" of social interaction to some extent.

In today's increasingly internet-dependent daily life, many people need to maintain a relatively stable "persona" online, especially those who rely on digital means to make a living or even get rich through it, such as freelancers, independent hackers, and digital nomads.

Some more popular and easier-to-understand terms can replace "persona"—personal brand, influence, individual identity, super-individual, etc.

The positioning is to provide a suite of tools as infrastructure to help those in need more easily create a "persona" and enhance the closeness of connections between people.

Using decentralized technology that is not limited to blockchain, we solve problems in a decentralized manner and give users the choice of deployment, hosting, management, etc.

This project is an important part of my envisioned "decentralized and digital solutions for individuals and families", and it will be deeply integrated with [LinXoid](/projects/linxoid/) and [KnoSys](https://knosysio.github.io/) in the future.

### Online Hackathon

Although the competition time for the bootcamp's online hackathon was stated to be from August 1st to 10th, the actual development time was likely less than 8 days, as the 1st was almost over by the time it was announced, and submissions were due by 2 PM on the 10th.

![Web3 Front-end Bootcamp Hackathon](web3-frontend-hackathon.jpg)

In my case, I started developing at noon on the 3rd. I first wrote a smart contract supporting RBAC (Role-Based Access Control) and passed the unit tests by the 5th. From the 6th, I began working on the front-end interface, initially thinking it would take only two days. However, I underestimated the complexity of handling role-based access control, and it was not until the afternoon of the 9th that I completed the integration testing.

Then, I prepared the project introduction materials and submitted them to the bootcamp's GitHub repository via a [PR](https://github.com/openbuildxyz/Web3-Frontend-Bootcamp/pull/1369), with time being extremely tight!

Given the ambitious scope of my project idea, it was impossible to implement all the planned features within such a short period, so I had to settle for a small part of the functionality:

<div class="Video Video--bilibili">
  <iframe src="//player.bilibili.com/player.html?aid=112932491104148&high_quality=1&autoplay=0&bvid=BV1Z3YuecEgX&cid=500001643930957&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

To save development time, I chose Ant Design and Ant Design Web3 for the front-end UI components, and deployed it as a pure front-end single-page application using Vite.

### Offline Hackathon

Although the "ETH Shenzhen Hackathon" could be participated in online, it was better to attend in person to have a unique experience.

The hackathon took place in Shenzhen from the afternoon of August 16th to the evening of the 18th. I flew there and bought a ticket for the 15th to increase flexibility in case of any issues.

![ETH Shenzhen Hackathon Poster](eth-shenzhen-poster.jpg)

On the 16th, the first activity was check-in for hackathon participants, who received a paper wristband to distinguish their identity. Completing interactions on X also earned a "swag bag" containing a T-shirt, cap, bag, etc., which was completely different from what we received during the bootcamp, with a brand-new design!

Then there were several workshops by sponsors—one of the opening ones seemed under-prepared, showing off some on-the-spot debugging skills and failing to finish the presentation. I left during the second or third workshop to work on my project code.

If you watched the video above, you would see that the paid content was just an empty shell without any actual content, like buying a book with only a cover and no pages. The main task during the hackathon was to address this issue.

To do so, I needed to:

1. Add an article module, allowing site administrators to add, edit, and publish articles, and visitors to browse and tip;
2. Modify the paid content module, enabling site administrators to associate articles as chapters, and visitors to see the table of contents and access the actual content;
3. Add a fund module to centrally control the flow of payment and tipping funds within the same smart contract;
4. Add a unique visitor center for users to view their payment and tipping records.

I started with the relatively simple visitor center, thinking that using only wallet addresses for user identification would be too plain and monotonous, so I added Jazzicons generated based on addresses, similar to MetaMask, and changed all avatars to this style.

Next, I completed the smart contract code for the token fund, system settings, user registration, etc., which I had already thought about some logic for, and then it was time for the ice-breaking party.

The organizers ordered takeout food such as kebabs, pizza, fried chicken, beer, and soda to the venue. Seeing the food and drinks, everyone rushed to grab them, quickly finishing and not having much time to chat—it seemed everyone was very hungry...

![Hackers' Party](hackers-party.png)

That day, I socialized a bit, meeting some people I had already interacted with in Hangzhou, as well as those I had connected with online before but were meeting in person for the first time.

I got back to the hotel quite late, and there was still some development work to be done for this version of my project, with time being
 tight. Since I didn't want to prepare a PowerPoint presentation for the pitch, I had to finish coding in the next two days—I decided to code all night!

Listening to music by Xu Wei, BIGBANG, and others, I finished writing the article smart contract and adjusted the parts related to fund flow in the smart contracts without any issues, and then went to sleep, just before 4 a.m.

The next two days followed a similar routine:

1. Arriving at the venue before 9 a.m., signing in, and then heading to the coding area to work on my project;
2. Having lunch with the boxed meals provided by the organizers, all with soup and beef;
3. Spending the afternoon working on project-related tasks, either coding or explaining;
4. Attending the dinner organized by the organizers in the evening and switching to social mode.

I hardly attended any of the guest presentations, instead focusing on preparing for the final pitch on the last day. I stayed up all night on the 17th and finally managed to complete most of the remaining features, feeling relieved!

![Coding for Selfverse](coding-for-selfverse.jpg)

On the 18th, after wrapping up the project, I was eager to share it with others. I approached a fellow bootcamp participant and teaching assistant who was volunteering at the event. I sat next to him, demonstrated the project on my laptop, explained its features, and shared some long-term visions, such as attracting investments by using myself as a value carrier, issuing tokens to investors to prove their rights, and potentially rewarding them when certain conditions are met in the future.

This was the first time I had introduced my project in such detail, and I felt a sense of excitement while talking. He listened attentively, not only understanding what I was saying but also offering some suggestions.

Finally, it was time for the pitch session. There were about 30 projects, each given 10 minutes. Including breaks and other interruptions, the entire process took around 5 to 6 hours—I was the 10th presenter.

![Pitch Schedule](hackathon-projects.png)

Since demonstrating the complete functionality of my project would take more than 10 minutes, I prepared the initial configuration and added demo data beforehand to save time on stage.

When I started my pitch, I hardly made any data changes and instead introduced the project based on the pre-loaded data on the webpage. Just doing this almost filled the time, leaving only enough for the judges to ask two questions...

Did I feel nervous when presenting? On a conscious level, I would say "no". I didn't feel anxious or anything like that, probably because of my experience making vlogs as a content creator. However, my body seemed to disagree, as my voice started trembling after just a few sentences, and I had to constantly adjust and control it.

![My Pitch](roadshow.jpg)

The main track my project participated in was "Open Source Tools and Infrastructure", with a usage model similar to WordPress. The project's underlying philosophy and vision are quite novel, and I believe they require long-term education and cultivation of potential users. Therefore, I have no plans for commercialization at the moment.

Nevertheless, even though I had stated this beforehand, the judges still asked about commercialization, which left me a bit embarrassed and unsure of how to respond.

The hackathon ended, and in the evening, I had a relaxing dinner with the OpenBuild team and bootcamp participants. The next day, I flew back to Hangzhou.

## Reflections on the Hackathon

I believe my pitch was a failure. I felt that the chances of winning were extremely slim. Any score other than zero would be the greatest recognition for me!

Although it was impossible to explain my project clearly within 10 minutes, this cannot be an excuse. There is still much room for improvement, such as:

1. Even with relatively complete functionality, a demo alone is not enough. A PowerPoint presentation is essential.
2. My speaking pace was a bit slow, and the presentation lacked rhythm. I enjoyed the presentations of the two projects that followed mine, and I should learn from them.
3. I should have interacted more with the judges before the pitch, introducing my project more. This would be like extending my pitch time.

Now I understand that participating in a hackathon is like playing a game of chess—how you allocate time between development, pitch material preparation, and networking affects the actual workload and the people you connect with, thereby influencing your chances of winning.

Hackathons have two meanings for me:

1. When working on my own project, it feels like entrepreneurship. The judges are like investment firms, and winning the prize is like securing investment.
2. When working on someone else's project, it is like a bounty task. I use my professional skills to help them win and share the prize as compensation. However, for bounty tasks, the compensation is more uncertain.

In addition to coding, I also invested more effort in networking during these days than usual. I used to be quiet in offline settings, mainly listening to others. This time, I not only engaged in passive interactions but also actively approached people, including complete strangers.

However, there was still a shortcoming: most of the people I networked with were those I had already connected with before, and very few were "new" acquaintances.

Many technical people at such events have a common misconception—that they attend to learn technology. Those with this mindset will likely leave disappointed.

I used to be one of them, attending various technical events before 2017 but rarely feeling like I had learned anything, mostly thinking "nothing special". Thus, I stopped attending until this year.

My perspective has changed now. The most important aspects of attending events are to understand industry trends, interact with others, build deep connections, and explore collaboration opportunities—these are key to increasing the success rate of my career as a self-proclaimed **independent developer**.

## Summary

This concludes my summary of the initial three-month journey of transitioning from a traditional web front-end engineer to a Web3 full-stack engineer.

For me, with a rich knowledge base and experience forming an abstract model network, the technical aspect of the transition was not very difficult. The slightly more challenging part was distilling a more stable model from the complex blockchain ecosystem and the ever-changing Web3 industry, and accumulating valuable project experience.

To enter the Web3 space, one must firmly discard the notion of "stability" in mindset. "Flexibility" and "efficiency" are your greatest and strongest weapons!