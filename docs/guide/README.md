---
title: Guide
---

## Create your first presentation

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



## Using the library

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



## Controlling the presentation

**PRESENTA Lib** comes with an internal `router` that can be configured and extended as well.

This is the default router configuration that you can ovverride:

```js
{
  scenes:[...],
  router: {
    keyboard: true,
    arrows: true,
    black: true,

    autoplay:false,
    pagenum:false,
    progressbar:false
  },
}
```

Please, refer in the Router section of the reference to learn more about each router controller as well as their additional configurations.



## Styles

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

## Transitions

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



## Block types

Block types are responsible to render a specific content or media. 

The **PRESENTA Lib** bundle includes the following built-in blocks:

- `text`
- `image`
- `video`
- `embed`
- `solid`