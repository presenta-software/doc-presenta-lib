---
title: Overview
---

# Overview

**PRESENTA Lib** is a javascript library that generates **web presentations** from **config objects**.

It's opinionated and it comes with **sensible defaults** with **extensibility** in mind.

It enforces some **presentation** and **communication principles**, therefore, you need to worry about mainly of **your content**.



## The gist

To give a rought idea, this code:

```js
new Presenta('#wrapper', {
  colors:'adele',
  scenes:[{
    blocks:[{
      type:'text',
      textVar: 'title',
      text:`<h1>Hello <b>there</b></h1>
<p>This is a <high>scene</high> that contains a 'text' <mark>block</mark>...</p>`
    }],
  }]
})
```

creates this single scene:

<pDemoGist />

::: tip Fullscreen

Any presentation can be experienced in fullscreen mode, simply click-to-focus on each one and type `ƒ` to toggle it.

:::



**PRESENTA Lib** is a **config-driven** presentation library, thus, it requires a *serializable object*.

This is on purpose, to facilitate **interoperability**, **data transformation** as well as **fostering novel tools** to create presentations.

As an example, this bare-bones **markdown-to-slides** editor requires a little data transformation before feeding the library:

<pEditMarkdown />

::: tip Live Edit!

When you see that white code pane, you can live-edit.

:::

Or, creating a data-driven presentation requires just the data:

<pDemoInstagram />



## Motivation

There are many presentation frameworks and libraries out there, so why another one?

Motivations come first from the struggle of using legacy tools (PPT, KEY, GSlides):

<pDemoScream />

Then, the desire to create something that incorporates, as much as possible, efficiency and best practices to let people work on the important part: **the content**.

But differences and personalizations are important. There's also a will to not lock-in too much, trying to allow customizations and experimentations.

The fine balance between **sensible defaults** and **customization** is the actual *goal* of the library, which is still in progress.

Furthermore, we believe that presentations can be different, more **expressive** and **engaging** than a typical sequence of pictures.

## Principles

- Content is king
- Less is more
- Automate where possible
- Save people time
- Done is better than perfect
- Slides aren’t speaker notes

<pDemoPrinciples />

## Architecture

A **PRESENTA Lib** document contains a list of *scenes* that can be displayed one at a time. Each *scene* contains one or more *block* of content. The scene is responsible to keep blocks together. A *block* is the minimum unit that renders a specific content from  a given config object.



**PRESENTA Lib** is designed to be extensible by using external plugins. Currently, there are three **types** depending of the function you would add:

- **Blocks** (content and media)
- **Modules** (scene extensions)
- **Controllers** (router controllers or global capabilities)



## Inspirations

We stand on the shoulders of giants, **PRESENTA Lib** is no exception.

**Credit where it's due.** The library design has been inspired by several other projects.

The idea of having a serializable config object as a single entry point as a means to foster further developments and integrations comes from the [Vega project](https://vega.github.io/).

The idea of having an expressive plugin system comes from [bespoke.js](https://github.com/bespokejs/bespoke).

The idea of having an intelligent conversion from raw data to great defaults comes from [Deckset](https://www.deckset.com/).

The CSS transition system has been heavily inspired by [Vue.js](https://vuejs.org/).

Last but not least, presentation theorists such as [Duarte](https://www.duarte.com/) and [Reynolds](https://www.presentationzen.com/) provided a lot of insights on choosing the design defaults.