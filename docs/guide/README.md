---
title: Guide
---

## Create your first presentation

In this section you'll learn, step-by-step, the main components to create an effective presentation with **PresentaLib**.

## Include the library

You can include the library in several ways: 

### From `unpkg`:

```html
<script src="https://unpkg.com/presenta-lib"></script>
```

### From `npm`:

```shell
npm install @presenta/lib
```

then include in the browser:

```html
<script src="/node_modules/@presenta/lib/dist/presenta-lib.js"></script>
```

or using a bundler:

```js
import PresentaLib from 'presenta-lib'
```

### Downloading the starterkit

Download and unzip this starterkit for  quick and offline presentation: 

## Using the library

First thing first: each **PresentaLib** presentation requires an HTML wrapper:

```html
<div id="myPresentation"></div>
```

and here the way to bind it with a data source: 

```js
var preso = new PresentaLib('#myPresentation', {
    scenes: [],
  	router: null,
  	theme: null,
  	transition: null
})
```

::: warning Note

The `null` properties are not mandatory, they are specified for learning purpose about the main configurable functionality of the library.

:::

Not very useful for now. 

We can add a `scene` that is an object that contains, at least, the `blocks` array:

```js
{
  blocks:[]
}
```

Now we need to understand the `block` object that is the minimal unit of content. The are many block type we can use, e.g. a `text` one:

```js
{
  type: 'text',
  text: '<h1>Welcome PRESENTA</h1>'
}
```

::: tip HTML in TEXT Block

The `text` module render property a subset of HTML tags. Please check the details in its documentation here.

:::

Now let's wrap all together to create a presentation with a single `scene`:

```js
var preso = new Presenta('#myPresentation', {
    scenes:[
      {
        blocks:[
          {
            type: 'text',
            text: '<h1>Welcome PRESENTA</h1>'
          }
        ]
      }
    ]
})
```

## Controlling the presentation

PresentaLib comes with an internal `router` that can be activated, configured and extended as well.

To enable the routing feature, add the following property specifying also the controllers we want to use:

```js
router:{
  keyboard:true
}
```

So, the previous script can be extended this way:

```js
var preso = new Presenta('#myPresentation', {
  	router:{
      keyboard:true
    },
    scenes:[
      {
        blocks:[
          {
            type: 'text',
            text: '<h1>Welcome PRESENTA</h1>'
          }
        ]
      }
    ]
})
```



## Pick up a Theme

## Activate the Transition system

## Explore the Block types

## Some common Extensions

