---
title: Overview
---

# Overview

**PresentaLib** is a javascript library to create modern presentation documents using a **data** object.

It's opinionated and it comes with some defaults with extensibility in mind.

It enforces some presentation and communication principles, thus, you need to worry about mainly of your content.

<pDemo00 />


## The gist

To give a rought idea, this code:

```js
new Presenta('#app', {
  adapt:true,
  theme:'vibrant',
  transition:'verticalIn',
  router:{
    keyboard:true,
    arrows:true
  },
  scenes:[
    {
      blocks:[
        {
          type: 'text',
          text: '<h1>Welcome</h1>',
          props:{
            colorvar:'.a'
          }
        }
      ]
    },
    {
      blocks:[
        {
          type: 'text',
          text: '<h1>AAAAA</h1>',
          props:{
            colorvar:'.c'
          }
        }
      ]
    }
  ]
})
```

creates this document:

<pDemo01 />

## The data source

**PresentaLib** is a data-driven presentation library. By using a serializable object it allows to encode much more conventions, fostering easy interoperability.



## Motivation

There are many presentation frameworks and library out there, so why another one?

Motivations comes first from the struggle on the legacy tools (PPT, KEY): making presentation can be better.

Then, the desire to create something that incorporate as much as possibile efficiency and best practices in order to let the user work on the important part: the content.

But differences are important. There's also a will to not lock-in too much, trying to allows customization and add-ons.

The fine balance between sensible defaults and customization is the actual goal of the library.

## Principles

## General architecture

A **PRESENTA** document contains a list of *scenes* that can be displayed one at a time. Each *scene* contains one or more *block* of content. The scene is responsible to keep blocks together. A *block* is the minimum unit that handles a specific content from presentation perspective.

**PRESENTA** is designed to accept easily external blocks.





## License