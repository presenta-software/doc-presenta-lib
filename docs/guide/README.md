---
title: Guide
---

# Guide

In this section you'll learn, step-by-step, the basics to create a presentation with **PRESENTA Lib**.

## Include the library

You can include the library in several ways: 

### From `unpkg`:

```html
<script src="https://unpkg.com/@presenta/lib"></script>
```

### From `npm`:

```shell
npm install @presenta/lib
```

then include in the browser with:

```html
<script src="/node_modules/@presenta/lib/dist/presenta.min.js"></script>
```

or using a bundler:

```js
import * as Presenta from '@presenta/lib'
```



## Init the library

First thing first: each **PRESENTA Lib** document requires an HTML wrapper:

```html
<div id="app"></div>
```

and here the way to bind it with a data source: 

```js
var myPresentation = new Presenta('#app', {
    scenes: []
})
```

::: tip About the size

**PRESENTA** will use the wrapper size to build the presentation. If the size is not set, the fallback size will be used.

::: 

We can add a `scene` that is an object that contains, at least, the `blocks` array:

```js
var myPresentation = new Presenta('#app', {
    scenes: [{
    	blocks:[]
    }]
})
```

Now we need to understand the `block` object that is the minimal unit of content. The are many block types we can use,  `text` is one of them:

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

The `text` module render property a subset of HTML tags. Please check the details in the documentation. There is also a markdown converter plugin to avoid writing raw HTML tags.

:::

## Understanding the content types

Each `scene` can render one or more blocks.  A `block` is responsible to render a specific content, such as a `text`, an `image` or a `video`.

**PRESENTA Lib** includes the following built-in blocks you can use out of the box:

- `text`
- `image`
- `video`
- `embed`
- `solid`

To give an example, we know we need a  `scenes` array in our config:

```js
{
  scenes: []
}
```

Let's say we want to add some text in the first `scene`, here the object we need:

```js
{
  blocks:[{
    type: 'text',
    text: 'My First Text'
  }]
}
```

Then, we want another `scene` with an image:

```js
{
  blocks:[{
    type: 'image',
    url: 'https://www.example.com/image.jpg'
  }]
}
```

Resulting in this config object:

````js
{
  scenes: [
    {
      blocks:[{
        type: 'text',
        text: 'My First Text'
      }]
    },
    {
      blocks:[{
        type: 'image',
        url: 'https://www.example.com/image.jpg'
      }]
    }
  ]
}
````

You can see that `type` defines the content type and, depending of the `type`, additional properties can be configured.

## Configure the presentation

**PRESENTA Lib** comes with an internal `router` that can be configured and extended.

This is the default router configuration that you can ovverride:

```js
{
  scenes:[...],
  router: {
    // enabled by default
    keyboard: true,
    arrows: true,
    black: true,
    fullscreen: true
		
    // disabled by default
    autoplay:false,
    pagenum:false,
    progressbar:false,
    focus:false
  },
}
```

Please, refer in the Router section of the reference to learn more about each router controller as well as their additional configurations.



## Set the style

A **PRESENTA** document can be styled by leveraging three different property:

- choosing a `scheme` colorset option
- choosing a `fontkit` option
- choosing a `theme` option

```javascript
var myPresentation = new Presenta('#app', {
  	scheme: '.vibrant',
  	fontkit: '.vibrant',
  	theme: '.vibrant',
    scenes:[...]
})
```

The **PRESENTA Lib** bundle includes the following built-in properties:

- `.original`
- `.vibrant`

## Choose a transition

The transition system is responsible to define how each scene enter and leave the stage. It's completely based on CSS and, pretty much the theme, it needs to be included as CSS file and activated in the data object:

```javascript
var myPresentation = new Presenta('#app', {
  	transition: '.horizontalSlide',
    scenes:[...]
})
```

The **PRESENTA Lib** bundle includes the following built-in transitions:

- `.horizontalSlide`
- `.verticalIn`



