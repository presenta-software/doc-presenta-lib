---
title: Overview
---

# Overview

**PresentaLib** is a javascript library to create modern presentation documents using a **data** object.

It's opinionated and it comes with some defaults with extensibility in mind.

It enforces some presentation and communication principles, thus, you need to worry about mainly of your content.



## The gist

To give a rought idea, this code:

```js
new Presenta('#aDiv', {
  scenes:[{
    blocks:[{
      type:'text',
      text:'<h1>Hello <mark>PRESENTA Lib</mark></h1>'
    }]
  },
  {
    blocks:[{
      type:'text',
      scale: 3,
      text:`<h1><high>Principles:</high></h1>
      <ul>
        <li>Content first, data-driven</li>
        <li>Sensible defaults</li>
        <li>Pluggable</li>
      </ul>`
    }]
  }]
})
```

creates this document:

<pDemo00 />



## The data source

**PresentaLib** is a data-driven presentation library. It requires a serializable object on purpose to facilitate interoperability, data generation and transformation as well as fostering novel tools to create presentations.



## Motivation

There are many presentation frameworks and library out there, so why another one?

Motivations comes first from the struggle on the legacy tools (PPT, KEY):

> making presentation can be better.

Then, the desire to create something that incorporate as much as possibile efficiency and best practices in order to let the user work on the important part: the content.

But differences are important. There's also a will to not lock-in too much, trying to allows customization and add-ons.

The fine balance between sensible defaults and customization is the actual goal of the library, which is still in progress.

## Principles

The content is king.

## General architecture

A **PRESENTA** document contains a list of *scenes* that can be displayed one at a time. Each *scene* contains one or more *block* of content. The scene is responsible to keep blocks together. A *block* is the minimum unit that renders a specific content from  a given data object.

**PRESENTA** is designed to be extensible by using plugins. There are three types of plugins in PresentaLib:

- Block Types
- Scene Modules
- Router Extensions


