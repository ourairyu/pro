---
title: I'm Developing the KnoSys Web App
description: >-
  Introduce the core functions of KnoSys GUI application, a local-first
  knowledge management tool I developed, and the reasons for building this
  "wheel".
date: '2024-02-02 18:44:34 +0800'
categories:
  - web-development
tags:
  - personal-knowledge-base
  - knosys
---

After the New Year, I once again embarked on the construction of the KnoSys system, which had been on hold for nearly nine months. Last year in Q1, I worked on a static website generator, but this time, I am developing a Web-based all-in-one knowledge management GUI application.

In this span of less than a month, I have been writing code intermittently in my spare time. Although the application is not yet usable, I am eager to introduce it specifically!

## Problems and Needs

The motive behind doing something is crucial. A clear and well-defined motive can provide strong willpower and the ability to implement ideas effectively.

### Public Clouds Are Not Trustworthy

I believe that if people optimistically flock to various cloud services, it is because they do not consider the data they generate as valuable assets, or they have not been sufficiently harmed by the service providers.

As an old Internet user with nearly 20 years of experience, I have been hurt enough by cloud service providers—

In the early stages of launching cloud services, to quickly accumulate users and obtain their information and the data they generate, service providers often offer free services for a period, sometimes with various promotional activities.

Once most users have generated a significant amount of data and become dependent on the platform, it is time for the service providers to start reaping the benefits—charging for functions that were originally free, or restricting/reducing the amount of resources that were previously available for free.

Some platforms do not notify users before banning or deleting the data they generate, leaving no time for backups; worse still, some do not even notify users before shutting down the service and simply disappear!

The shutdown of cloud services or the bankruptcy of the companies behind them is inevitable. When there is a tendency to deeply use a certain cloud service, there is a risk of being held hostage.

### Fragmented "People"

Current content platforms and social media all have their own account systems, and they tend to create closed information silos—neither integrating with other platforms and services nor providing relatively open data access APIs.

This behavior is driven by their own commercial interests, ignoring the needs and experience of users, forcing users to only obtain updates from people they are interested in through the "follow" function within the application.

I particularly dislike having to "follow" someone just to view their content!

There are some platforms that do a slightly better job, such as Twitter's "[Lists](https://help.twitter.com/en/using-twitter/twitter-lists)" feature, which solves my need to receive updates without having to "follow" someone.

However, even so, it is still impossible to subscribe to people across applications and platforms on my own.

### Clumsy File Management

The final products of blogs, API documentation, etc., are static pages, and their data sources are local files that conform to certain standards and formats—these files can be considered a mixture of "regular data" and "metadata".

When the number of files increases and the site becomes more complex, there are several significant pain points with the simple local file format:

- It is not easy to know what documents you have;
- Searching and editing are inconvenient;
- The relationships between documents are unclear and unmanageable.

There is a need for a way to manage local files like a mid-to-back-end business system and to convert the data of local files in some way.

### My Eccentric Needs

My biggest hobby is to "collect" and "organize" things that interest me, which gives me a strong sense of fulfillment, control, and security.

From a young age to now, I have collected many physical items in various categories, such as cassettes, CDs, comics, games, stamps, and currencies. In addition to these, I am fascinated by the collection of virtual data and information that can expand infinitely!

In my limited understanding, since the birth of the universe, nothing exists in isolation; there are more or less relationships between things—finding and utilizing these relationships is extremely valuable!

Modeling the collected data and information, effectively associating them with each other to form a network, and thereby achieving:

- Standardizing and automating mechanical tasks;
- Quickly finding the optimal path between the current state and the target based on needs;
- Providing suitable and appropriate suggestions based on the current state of life, living, and work.

These needs of mine are difficult to meet when using cloud services or other applications.

## Features and Characteristics

To facilitate understanding, I liken the GUI application I am developing to a local version of "Yuque", but unlike Yuque, it does not support collaboration with others and only supports local operations for individuals.

Below is a brief introduction to the core features and characteristics.

### Knowledge Base

In the KnoSys system, the term "knowledge base" has both broad and narrow meanings—broadly speaking, anything that follows the QiiDB data specification is included; narrowly speaking, it is almost equivalent to a dataset, which is the case in this GUI application.

Using a local folder set by the user as the data source, it traverses subfolders and reads file content according to the QiiDB data specification, presenting it in the interface through a list page.

Each record in the list corresponds to a real file, such as YAML, Markdown, images, etc., which means that the CRUD operations in the interface are actually read and write operations on files.

In addition to the above operations on "regular data", it is also possible to visually modify "metadata": defining field names, data types, validation rules, etc.; configuring the display forms of list pages, form pages, detail pages, and other interface-related elements.

### Multi-application

The "application" in this GUI application is similar to the "space" in Yuque and is the broad "knowledge base" mentioned earlier. In theory, each "application" has a corresponding local Git repository, which provides a certain degree of data isolation.

A folder corresponding to an "application" can contain one or more datasets and may also include files that do not conform to the QiiDB data specification in addition to the datasets—these files will be ignored and not processed.

Modifications and deletions of data, which are variable operations in the interface, are restricted within a specific "application" and cannot change data in other "applications". However, data from one "application" can be read as an external data source for other "applications".

For example—

I have two "applications": one contains basic information about books, movies, and music, similar to Douban, and the other is for my creations and some personal records—let's call it "Exobrain".

Suppose I am watching "Breaking Bad" and want to record my progress. I would need to:

1. Add the book, movie, and music "application" as an external data source in "Exobrain" and associate it with a certain "knowledge base" in "Exobrain";
2. Add a new piece of data containing information about "Breaking Bad" in the book, movie, and music "application";
3. Go to "Exobrain" to read the book, movie, and music data, find "Breaking Bad", and mark it as "watching", which will generate corresponding data in the associated "knowledge base";
4. Later, find "Breaking Bad" in the associated "knowledge base" and mark which episode I have watched.

It can be said that an "application" is equivalent to a database.

### Information Subscription

In platforms like Yuque, following an account will result in receiving information pushes, which is a way of subscribing to information. The information subscription in this GUI application will break the "norm" and receive information based on the dimension of "people".

The "people" here refers to identifiable entities behind virtual identities that have the same identity—

My account on Yuque and Zhihu is "Ourai", while my account on Juejin and Weibo is "Ouraidono", but they all point to the virtual persona "Ourai"—both "Ourai" and myself are considered that "person".

A "person" can be an individual or an organization, and the main manifestation in this GUI application is a unified information source that aggregates multiple platform accounts or website feeds.

That is to say, by subscribing to the information of "Ourai" in this GUI application, you can receive updates from "Ourairyu" website and other platforms.

### Extension Market

One aspect of measuring whether application software is user-friendly is its extensibility. As an open-source and free Web-based all-in-one knowledge management GUI application, it must have relatively strong extensibility!

The main customization points of this GUI application are:

- The interface style theme, including fonts, colors, spacing, overall layout, etc.;
- The display forms of the list page, form page, detail page, and other interface-related elements of the "knowledge base";
- CRUD hooks and custom operations for "knowledge base" data and interface operations;
- "Widgets" displayed on the "home page" (referencing operating systems like iOS, macOS, etc.).

Among them, extensions related to the "knowledge base" can be packaged into "templates" for installation together.

## Conclusion

Every time I tell others that I am developing a knowledge management tool, I am asked: "Aren't there already Obsidian, Siyuan Notes, and so on? What's the difference between yours and theirs?"

The eagerness to write this article to introduce it is also an important reason to answer such questions.

This article highlights the reasons for developing this GUI application and its core features—some of which have been implemented, some are in the process of being implemented
, and some are still in the planning stage.

The next article will further elaborate on the underlying philosophy, more ambitious visions, and significance.