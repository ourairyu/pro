---
title: Does Front-end Architecture Exist?
---

Have you ever been asked as a front-end developer: "Does front-end development have an architecture?"

The person asking you might be your boss or superior, a back-end colleague, or another front-end developer; their purpose might be to challenge you, mock you, or seek advice.

## Front-end Development

As we all know, the core technologies relied upon in front-end development are HTML, CSS, and JavaScript, which are inseparable like good friends, and we affectionately refer to them as the "Three Musketeers."

Over the past two decades, especially with the emergence of the V8 engine and Node.js, derivative technologies based on the "Three Musketeers" have sprung up like mushrooms, leading to unprecedented growth in the front-end and its associated communities, as well as the profession of front-end engineers. This has even led many to believe that a front-end engineer can not only develop web front-ends but also write back-end code and replace client-side engineers—front-end technology is set to dominate!

### Job Content

In addition to web pages, front-end technologies can also be applied to command-line tools, client applications, server applications, chatbots, web crawlers, IoT, and other scenarios. As long as one's imagination is vast enough, there will be no shortage of scenarios.

However, do the majority of front-end engineers encounter all of these in their work?

Consider your own career journey—might it be like this?

In a startup with fewer than 150 employees, the business might still be in the exploration phase, requiring continuous rapid trial and error to find a point to focus on with full force. At this time, the front-end team might only have a few people, perhaps three or five, and the leader may not be a top expert, nor do they have a methodology to guide team building. Perhaps you are the strongest in this team.

What is needed during this period is the ability to quickly iterate and produce results to verify their effectiveness. There is simply no time to think about or plan the development direction and infrastructure construction of the front-end team. If you deliberately spend time on these things, the company might consider you as "not focusing on your main duties," and you might fail your KPIs.

After a period of intense work, the engineering directory and code submissions are likely to be very casual, and there is no code review. When you have some free time and look back, the code is a mess, far from being "elegant."

As the business develops rapidly, the number of projects and applications increases, as does the team size. However, there are still almost no norms or infrastructure. Front-end developers working on business lines are unlikely to consider the unification of tools across the entire team, doing whatever feels comfortable. This ultimately leads to a team using multiple view layer libraries and component libraries, greatly hindering the convergence of the technology stack.

Finally, as the company's business begins to stabilize and the front-end team has grown to twenty or thirty people, you, ambitious and eager to help others, feel that it is definitely not feasible to continue growing in this wild and uncontrolled manner. Relying on increasing manpower to meet the rapidly developing and changing business demands is very inefficient and low-level. There must be technical infrastructure to support it! Even if the company does not allow you to work on such long-term beneficial things during work hours, you must do it, even in your spare time!

Among all the infrastructure, the most basic and direct way to show the results of improving development efficiency is a highly abstract UI framework. After countless "after work" and "weekends," you finally created one that can meet certain business scenarios and has shown initial results in a few applications you are responsible for.

Just as you are gratified that what you have done has yielded the expected benefits, someone suddenly questions what you have done, and it might be someone from the front-end team. Fortunately, there are others who recognize the value of what you have done and encourage you to continue in this direction. Perhaps they are back-end developers who are willing to use it or help promote it within the department.

You continuously add new features to the UI framework and try every means to transform old systems. In the development of new applications needed for the company's business expansion and the maintenance of old applications, what you have done has indeed saved a lot of manpower and resources. When a new batch of back-end developers join, you are even invited to give them a lecture on how to use the UI framework you have developed to assist in their work. This has solidly refuted those who doubted you.

The common patterns of back-end system pages are list pages, form pages, and detail pages for data CRUD. When the core logic of interaction and data processing that supports these scenarios has been abstracted, you find that no matter how much you improve the UI framework, there will not be as obvious an efficiency improvement as before. At most, it optimizes the interaction and development experience, making the functions more stable.

You are pondering: "What else can be done to continue improving development efficiency?"

The UI framework you previously developed has highly encapsulated interaction logic and data logic, and provided a large number of CSS classes and utility methods. Although this allows you to write less CSS and JavaScript code when making pages, it does not reduce the HTML code.

It seems that you have found the point to break through, but how to do it?

After much thought, you suddenly have a flash of inspiration and recall the blog system you once used, developed in "the best language in the world"—WordPress. Since back-end system pages are so patterned, why not follow WordPress and treat the unchanging parts as "themes" and the changing parts as "posts"?

Doing so will bring another benefit, which is to dataize the page code. Any pure front-end problems can be corrected by data modification, without going through the long and complicated operation and maintenance release process. In the future, if the company has its own design language, and adds visual construction features, the development and maintenance of business back-end systems will not require much participation from front-end developers!

In an ideal scenario, product managers can drag and drop existing materials to generate a "prototype," which is the final interface; after the business functions are determined, back-end developers define models and write interfaces, and then configure the data display of the interface. In this way, the entire process of business system iteration can basically ignore the role of front-end developers.

So what do front-end developers do? Under this collaboration model, the main job of front-end developers is to improve the material library and make it more convenient for product managers and back-end developers to use. The benefits brought by this efficiency improvement method are incomparable to the development of a UI framework, and it is exciting just to think about it!

However, the fullness of ideals cannot cover the thinness of reality. People who hear your ideas either question you with some questions or support you verbally but secretly ridicule you—instead of thinking about how to develop the business, you are always thinking about some chaotic and flashy things!

You feel frustrated and think they are short-sighted and cannot see the essence. But for what you believe and insist on as "correct," even if there is no support in mind or action, you must continue to strive in that direction and try to do it!

After a period of struggle, you start to feel that you can't go on. On the one hand, although the emergence of Node.js has allowed front-end developers to also develop the back-end, there is a lack of knowledge and mindset in the field of database and other back-end development, resulting in unreasonable design and poor programs; on the other hand, the company does not expect you to spend a lot of time on things that will not have a significant impact on business development in the short term, and even the KPI indicators are very business-oriented, and the score will definitely be low when KPI is evaluated.

You are also a "veteran employee" in this company, and you have a deep understanding of the company's nature. You feel disappointed and even desperate that what you believe and insist on as "correct" is not taken seriously here, at least for a long time. In fact, you have felt this way for a long time, but you are unwilling to face it and always hope that your beliefs can more or less influence the organization's cognition, but in vain.

From the UI framework to the dataization of pages, you have been alone and fighting on your own in doing these things, and suddenly you feel a bit sad. You eventually leave with a heavy heart, wanting to go to a big company to see if you can realize your technical ideals there.

When you really enter a big company, and it is a business department, you will find that what you do is not much different from before, still focusing on business. The difference is that your leaders and colleagues around you sincerely recognize your ideas, and they will try their best to support what you want to do and provide help.

You suddenly realize that no matter whether it is a small company, a medium-sized company, or a big company, as long as it is a business department, the UI framework and command-line tools are basically the limits of what can be done technically. To go further, you have to be in the platform department.

### Ways to Improve Efficiency

The term "improve efficiency" has been mentioned many times before. What is it? Simply put, it is to reduce the development time of business requirements, which is what all developers pursue. If possible, it should be completed by the demander themselves with just a few operations.

So how to improve efficiency? What I can think of are roughly:

- A UI framework with consistent APIs based on various view layer libraries;
- Command-line tools that can cover the entire development process;
- Tools that compile/translate a single source code into different target platform codes;
- A platform that dataizes pages and supports visual construction.

Each of these points, if expanded and delved into, is very valuable and requires a lot of effort, even enough to become a product or start a company!

## Front-end Architecture

Before continuing, let's briefly explore the question "Does front-end have an architecture?"

### Does It Have an Architecture?

What is "architecture"? Architecture is a set of abstract concepts, like "person," like "pet," allowing you not to care who he is, what kind of animal it is; architecture is a picture, allowing you to clearly understand how different things are classified, how they are connected, and how they collaborate; architecture is a guiding ideology, telling you what to do and what not to do, guiding you to put the code in the right place; architecture is a methodology, letting you know how to solve which kind of problems in which scenarios...

To quote Wikipedia—

<blockquote>
  <p>Software architecture refers to the fundamental structures of a software system and the discipline of creating such structures and systems. Each structure comprises software elements, relations among them, and properties of both elements and relations. The architecture of a software system is a metaphor, analogous to the architecture of a building. It functions as a blueprint for the system and the developing project, laying out the tasks necessary to be executed by the design teams.</p>
  <footer>Wikipedia <cite><a href="https://en.wikipedia.org/wiki/Software_architecture" target="_blank" rel="external nofollow">Software architecture</a></cite></footer>
</blockquote>

Based on the above description, if front-end development is just a static page, that is, only HTML and CSS, or JS is only used to add effects without operating data, without communication, then it can be said that "there is no architecture in front-end." But, how many people engaged in front-end development are doing this kind of work now?

I think your job as a front-end developer is not to make pages, but to develop applications, right? In that case, architecture is indispensable. You might wonder: "I don't even know what this high-sounding word specifically refers to, how could I have it?!"

The reason you are unaware is that you have not consciously thought about and carried out architectural design. Think about it, you do not fit the following situations:

- According to the best practices summarized by the community, or inspired by others in communication, you split the code logic into different modules during development, and put several modules with some common features into a directory;
- Use Umi or the Vue ecosystem to develop single-page applications.

Both of these situations can be said to use the layered architecture pattern, the former is done unintentionally by you, and the latter is done for you by others.

### What Is a Good Architecture?

Since the answer to the question "Does front-end have an architecture?" is affirmative, "What kind of architecture is a good architecture?" becomes the next question.

Before saying "What kind of architecture is a good architecture?" let's insert another question, which you can think about if you are interested: What are the similarities between a sufficiently complex front-end framework and browsers, operating systems?

Back to the main topic. I think a good architecture should be like this—

Help the company make money more easily. This is the most important point. For a company, if the software cannot make money for itself, why use it? There are only two ways to help the company make money: "increase revenue" and "reduce costs." "Increase revenue" is more difficult, requiring an understanding of the industry and insight into business opportunities, which requires too high a quality of the person themselves; "reduce costs" is relatively simple, reducing R&D investment, that is, the "improvement of efficiency" mentioned above.

The second most important thing is "stability." A decent architecture should at least be able to support the development of the business for three to five years, right? Although the company may not live that long. This requires the architecture design to face the future: one is the future of the business, and the other is the future of technology. An architecture facing the future must have good extensibility and be flexible enough to cope with various business scenarios and unexpected business changes.

The above are the two core standards I think a good architecture should have, and each point will involve many things, so I won't say more here.

When designing the architecture of a system, multiple architectural patterns will be used, such as: layered pattern, pipeline and filter pattern, microkernel pattern, microservices pattern, MVC/MVVM pattern, etc. When implementing, various design patterns, data structures, and algorithms will also be used.

Therefore, you need to learn and master them, and then choose the most suitable ones for architecture design and framework implementation according to the (potential) business goals and (potential) application scenarios.

### Core Principles

When doing front-end architecture, I think several basic principles should be followed—

The first is "centered on the unchanging."

The essence of software development is to operate data. In the web development scenario, the back-end is to store and retrieve data, and the front-end is to collect and display data.

When data flows between the front and back ends, the basic form of the data does not change: basic types, objects, lists; the data transmission protocol does not change: HTTP, WebSocket. In front-end development, the closer it is to them and the farther it is from the GUI, the less likely it is to change.

So, the first thing to do is to sort out what is not easy to change and what is easy to change.

The second is "each layer can be replaced."

According to the changeability, the modules are sorted out and layered according to their responsibilities, and the interface protocol (interface) between layers is defined. Except for its own evolution needs, the interface protocol is basically not going to change, nor should it be changed. On this premise, the implementation of each layer can be replaced when the business needs or technology upgrades.

The third is "the view layer should be as thin as possible."

The responsibility of the view layer is to display data, and it should only have interaction logic, but most front-end developers mix a lot of business logic when writing UI components, making the view layer very thick and bloated. In this way, the business logic is not conducive to reuse, and it will also increase the migration cost of the view layer technology. The business logic should be abstracted and extracted to the domain layer, allowing the view layer to remain pure.

Because the view layer is changeable and diverse, and you want it to be as thin as possible, it is best to have a way to increase its cost of accessing the logic layer, just like the front-end can only access the back-end through network requests.

Suddenly, I thought of this kind of architecture when doing business development, do you have an impression? Yes, it is the architecture of WeChat Mini Programs! The architecture of WeChat Mini Programs is to run the logic layer and the view layer in different threads, thereby achieving natural isolation, and the medium of communication between them is only "data":

[![Architecture of WeChat Mini Programs](architecture-of-wechat-miniprogram.png)](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/framework.html)

WeChat Mini Programs are built on the basis of some native capabilities provided by client applications, so can the same or similar effects be achieved in the browser? Of course! The browser provides native capabilities, the view layer runs in an iframe, and the logic layer is in a web worker:

[![Browser-based Mini Program Architecture](browser-based-miniprogram.png)](https://github.com/berwin/Blog/issues/49)

Don't you think this is very similar to the "micro-frontend" architecture—according to my understanding, it simply means an architecture pattern that allows modules of different technology stacks to run simultaneously in the browser, and they can be components or applications, and can communicate and collaborate with each other.

Based on this architecture, a "super app" similar to a browser or operating system can be developed, becoming a platform-level application.

If you are in the platform department, the above may be what you have to face.

## Open Source Projects

The other day, a front-end team from a certain factory open-sourced a set of component libraries. At that time, I was thinking: if it can't be better than Ant Design, what is the significance of open-sourcing a component library?

Ant Design, from Ant Financial, is already very excellent in terms of design (visual design, code design, all kinds of design) and implementation. The API design is very thoughtful, and it is difficult to find a better work in China.

If there is no corresponding implementation of a certain view layer technology or a certain end, it is better to implement a version of Ant Design for that view layer technology or that end than to start from scratch.

I used to think that after decades of development, the form of GUI interaction has become relatively fixed, and there will not be much breakthrough. If there is already a very excellent interaction mode library, if the latercomers do not have any highlights that can compete with it, they will undoubtedly be at a disadvantage in the competition.

Until I heard Uncle say:

> The significance of openness is not the code, but your own understanding of interaction. If you can't do this, then there is no significance in open-sourcing a component library.

At first, I didn't quite understand the connotation of this sentence, and I thought about it from time to time in the following days. Then suddenly I understood—it's just like writing an article, right?! Is writing for others to see your words? Of course not! It is to use words to record and express your understanding of the world, people, events, and things. If someone has written an article with the same or similar views, and it is written very well, can't you write it? Of course not!

That's right.

In fact, any creative behavior is the same, expressing your thoughts through a certain channel, writing is, coding is, painting is, cooking is. As Mr. Araki said in his book—

![Cover of "Araki Hirohiko's Manga Technique"](book-of-araki-hirohiko.jpg)

Recently, I am going to start a "big" project. In fact, I have been thinking about it for several years, but I didn't think about what exactly to do at the time, but the core idea is consistent—anti-chaos! I even came up with a project name, called "Anti-chaos."

Why do this project? Isn't it because the front-end circle is too chaotic? Although it is slightly better than before, it is still much more chaotic compared to the Java circle. I hope "Anti-chaos" can become the axe of Pangu, splitting the chaos, the clear becomes the sky, and the turbid becomes the earth.

So what is "Anti-chaos" going to do? As mentioned earlier, this is a "big" project because it basically covers all aspects of current front-end development.

I don't want to develop a large and comprehensive framework, but to follow the "anti-chaos" idea and split it into multiple small projects, each solving a specific scenario problem. They can be combined and expanded into a solution suitable for a certain team or enterprise, making front-end development and even the front-end circle more orderly.

I also had similar ideas before, wanting to make some things related to the profession of "front-end engineer" more standard and orderly, but this thing is really difficult to operate, much more difficult than quietly writing code, so it is currently on hold. After "Anti-chaos" has some results, I will see whether to restart that project or not.

## Conclusion of Thoughts

As a front-end engineer, the technology and horizons you can contact in the business department are limited. On the one hand, you don't need to use too cutting-edge technology when doing business; on the other hand, the nature of the business department will not allow and does not have the resources to let you do too much in-depth thinking and trying.

If you want to truly improve your technical ability and horizons, it is best to go to the platform department! At the beginning, you may feel very strenuous, because you are changing your way of thinking to adapt to the environment. When you adapt, you will find that your way of thinking about problems is getting closer and closer to the back-end, and you will also feel that whether you do front-end or back-end, the knowledge and abilities needed are almost the same, only the problems to be solved are different.

A person's level cannot be measured by age and years, but by how many experiences they have and what they have experienced.

This article mainly expounds my recent thoughts and current understanding of front-end development, front-end architecture, and open-source projects, which may not be right, but it is my current view.

As the saying goes—

<blockquote>
  <p>At the beginning of Zen meditation, mountains are mountains, and rivers are rivers; when Zen is enlightened, mountains are not mountains, and rivers are not rivers; when Zen is thoroughly enlightened, mountains are still mountains, and rivers are still rivers.</p>
  <footer>Qingyuan Xingsi</footer>
</blockquote>

That's all.