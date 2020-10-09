---
title: Overview
---

# Overview

**PRESENTA Lib** is a javascript library that creates modern presentation documents using a **data object** as input.

It's opinionated and it comes with sensible defaults with extensibility in mind.

It enforces some presentation and communication principles, therefore, you need to worry about mainly of your content.



## The gist

To give a rought idea, this code:

```js
new Presenta('#wrapper', {
  scenes:[{
    blocks:[{
      type:'text',
      scale:2,
      text:`<h1>Hello there</h1>
      <p>This is a <mark>scene</mark> that contains a 'text' <mark>block</mark>...</p>`
    }],
    props:{
      colorvar: '.b'
    }
  }]
})
```

creates this single slide:

<pDemo01 />



**PRESENTA Lib** is a content-driven presentation library. It requires a serializable object.

This is on purpose to facilitate interoperability, data generation and transformation as well as fostering novel tools to create presentations.



## Motivation

There are many presentation frameworks and libraries out there, so why another one?

Motivations comes first from the struggle on the legacy tools (PPT, KEY):

> making presentation can be better.

Then, the desire to create something that incorporates, as much as possibile, efficiency and best practices in order to let the user work on the important part: **the content**.

But differences and personalizations are important. There's also a will to not lock-in too much, trying to allow customization and add-ons.

The fine balance between **sensible defaults** and **customization** is the actual *goal* of the library, which is still in progress.

## Principles

- Content is king
- Less is more
- Automation when possible to save people time
- Slides aren’t speaker notes
- Slides are for concise ideas

## Architecture

A **PRESENTA** document contains a list of *scenes* that can be displayed one at a time. Each *scene* contains one or more *block* of content. The scene is responsible to keep blocks together. A *block* is the minimum unit that renders a specific content from  a given data object.

schema

**PRESENTA Lib** is designed to be extensible by using external plugins. Currently there are three types of plugin depending of the type of the function you want to add:

- Blocks (content types)
- Modules (scene extensions)
- Controllers (router controllers or global functions)

To learn more about extending **PRESENTA Lib**, jump to the [Extend](/extend) section, otherwise follow the [Guide](/guide) to start using the library.



## Inspiration

We stand all on the giant' shoulders, **PRESENTA Lib** is no exeption.

Credits are due where is due. The library design has been inspired by numerous other open-source projects.

The idea of having a serializable object as a single point of truth as a mean to foster further developments and integrations comes from the Vega project.

The idea of having a solid and expressive plugin system comes from ...

