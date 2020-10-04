---
title: Guide
---

## Create your first presentation

In this section you'll learn, step-by-step, the main components to create a presentation with **PresentaLib**.

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

First thing first: each **PresentaLib** presentation requires an HTML wrapper:

```html
<div id="app"></div>
```

and here the way to bind it with a data source: 

```js
var myPreso = new Presenta('#app', {
    scenes: []
})
```

Not very useful for now. 

We can add a `scene` that is an object that contains, at least, the `blocks` array:

```js
var myPreso = new Presenta('#app', {
    scenes: [{
    	blocks:[]
    }]
})
```

Now we need to understand the `block` object that is the minimal unit of content. The are many block type we can use, e.g. a `text` one:

```js
var myPreso = new Presenta('#app', {
    scenes: [{
    	blocks:[{
		  type: 'text',
		  text: '<h1>Welcome PRESENTA</h1>'
		}]
    }]
})
```

::: tip HTML in TEXT Block

The `text` module render property a subset of HTML tags. Please check the details in the documentation. There is also a markdown converter plugin to avoid writing HTML tags.

:::



## Controlling the presentation

PresentaLib comes with an internal `router` that can be activated, configured and extended as well.

This is the default router configuration that you can ovverride:

```js
router: {
  keyboard: true,
  arrows: true,
  black: true
},
```





## Themes

A theme defines the font set, the color scheme and further style properties. It can be included as a regular CSS file and it needs to be activated with its property:

```javascript
var preso = new Presenta('#myPresentation', {
  	theme: 'vibrant',
    scenes:[...]
})
```

The **PresentaLib** bundle includes the following built-in themes:

- original
- vibrant

## Transitions

The transition system is responsible to define how each scene enter and leave the stage. It's completely based on CSS and, pretty much the theme, it needs to be included as CSS file and activated in the data object:

```javascript
var preso = new Presenta('#myPresentation', {
  	transition: 'horizontalSlide',
    scenes:[...]
})
```

The **PresentaLib** bundle includes the following built-in transitions:

- horizontalSlide
- verticalIn

## Block types

## Scene modules

## Router extensions



