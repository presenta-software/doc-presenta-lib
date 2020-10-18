---
title: Guide
---

# Guide

In this section you'll learn the basics of **PRESENTA Lib**.

[[toc]]

## Installation

You can start with the library in several ways depending of your favorite setup.

### Local starterkit

You can download this [zip](https://github.com/presenta-software/presenta-lib-starterkit/archive/master.zip) that contains a starter example you can edit locally. Just double-click the `index.html` file to start your presentation fully offline.

### Remote starterkit

You can start with the same example by forking this [Codepen](https://codepen.io/abusedmedia/full/ZEOWyqM) or [Glitch](https://glitch.com/edit/#!/presenta-starterkit-example) project. Your call.

### Unpkg

If you want to include it in an existing HTML file quickly:

```html
<script src="https://unpkg.com/@presenta/lib"></script>
```

### Npm+ES6

If you have a local development toolchain up and running:

```shell
npm install @presenta/lib
```

then include in the browser with:

```html
<script src="/node_modules/@presenta/lib/dist/presenta.min.js"></script>
```

or using with a ES6 bundler:

```js
import * as Presenta from '@presenta/lib'
```



## Getting started with the library

First thing first: each **PRESENTA Lib** document requires an HTML wrapper:

```html
<div id="app"></div>
```

and here the way to bind it with the config object: 

```js
var myPresentation = new Presenta('#app', {
    scenes: []
})
```

We can add a `scene` that is an object that contains, at least, the `blocks` array:

```js
var myPresentation = new Presenta('#app', {
    scenes: [{
    	blocks:[]
    }]
})
```

Now we need to understand the `block` object that is the minimal unit of content. The are many block **types** we can use,  `text` is one of them:

```js
var myPresentation = new Presenta('#app', {
    scenes: [{
      blocks:[{
        type: 'text',
        text: '<h1>Welcome PRESENTA</h1>'
      }]
    }]
})
```

::: tip HTML in TEXT Block

The `text` block renders a subset of HTML tags properly. However, there is a markdown-to-HTML  [plugin](/plugins/#controllers) to avoid writing raw tags.

:::

## Blocks and content types

Each `scene` can render one or more blocks.  A `block` is responsible to render a specific content or media, such as `text`, `image` or `video`.

**PRESENTA Lib** includes the following built-in blocks you can use out of the box:

<pDemoBlockText />

<br />

<pDemoBlockImage />

- `text`
- `image`
- `video`
- `embed`
- `solid`

You can find additional block types [here](/plugins/#blocks) as external plugins.

To learn more about each block specific settings, jump to [this section](/reference/#blocks) of the Reference.

## Controls and behaviors

**PRESENTA Lib** comes with an internal `router` that can be configured and extended by means of `controllers`. A controller can provide also global functionality and behaviors that are independent of the routing activity.

This is the list of controllers that are active by default:

```js
{
  scenes:[...],
  controllers: {
    keyboard: true,
    arrows: true,
    black: true,
    fullscreen: true
  },
}
```

To learn more about the available controllers and their specific settings, jump to [this section](/reference/#controllers) of the Reference.



## Styles and Transitions

A **PRESENTA Lib** document can be styled by leveraging the combination of some properties:

```javascript
var myPresentation = new Presenta('#app', {
  	colors: 'adele',
  	fonts: 'b',
  	colorVar: 'b',
  	transition: 'horizontalSlide',
    scenes:[...]
})
```

Please, refer to [this section](/reference/#styles) in the Reference to learn about the available values.





## Property inheritance 



For more detailed settings, check the [Reference](/reference/).