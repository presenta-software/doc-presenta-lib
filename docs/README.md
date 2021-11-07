---
title: Overview
---

**PRESENTA Lib** is a **config-driven** presentation library that creates modern web documents for the **automation era**.

```js
new Presenta('#wrapper', {
  scenes:[{
    blocks:[{
      type:'text',
      content:`<h1>Hello there</h1>`
    }],
  }]
})
```

**PRESENTA Lib** requires a *serializable object* on purpose, to facilitate **interoperability**, **data transformation** as well as **fostering novel tools** to create presentational documents.






[[toc]]

## Installation

**PRESENTA Lib** is a javascript library without external dependencies. It comes as **UMD**, thus, you can install it in several ways.


### Unpkg

Include in an existing HTML file quickly:

```html
<script src="https://unpkg.com/@presenta/lib"></script>

<script>
	new Presenta()
</script>
```



### Skypack

Same as before but in ES6:

```html
<script type="module">

  import * as Presenta from 'https://cdn.skypack.dev/@presenta/lib'

  new Presenta()

</script>
```



### Npm+ES6

For Node.js users:

```shell
npm install @presenta/lib
```

then include in the browser with:

```html
<script src="/node_modules/@presenta/lib/dist/presenta.min.js"></script>

<script>
	new Presenta()
</script>
```

or with an **ES6** bundler:

```js
import * as Presenta from '@presenta/lib'

new Presenta()
```





## Getting started

Each **PRESENTA Lib** document requires an HTML wrapper:

```html
<div id="app"></div>
```

Then, bind it (passing both a selector or a DOM node) alongside the config object: 

```js
new Presenta('#app', {
    scenes: []
})
```

Add a `scene`, an object that contains, at least, the `blocks` array:

```js
new Presenta('#app', {
    scenes: [{
    	blocks:[]
    }]
})
```

A `block` object is the minimal unit of content. The are many block **types**,  `text` is one of them:

```js
new Presenta('#app', {
    scenes: [{
      blocks:[{
        type: 'text',
        text: '<h1>Welcome PRESENTA</h1>'
      }]
    }]
})
```




## Architecture

A **PRESENTA Lib** document contains a list of *scenes* that can be displayed one at a time. Each *scene* contains one or more *block* of content. The scene is responsible to keep blocks together. A *block* is the minimum unit that renders a specific content from a given config object.

**PRESENTA Lib** is designed to be extensible by using [external plugins](plugins). There are three **types** of plugins, depending of the function you wish to add:

- **Blocks** (content and media)
- **Modules** (scene and block extensions)
- **Controllers** (router controllers or global capabilities)




## Blocks

Each `scene` can include one or more blocks.  A `block` is responsible to render a specific content or media, such as `text`, `image` or `video`.


You can find additional block types [here](/plugins/#blocks) as external plugins.

To learn more about each block specific settings, jump to [this section](/reference/#blocks) of the Reference.


## Modules

A module allows to extend a scene or a block both from functional and presentation perspective as well.

Modules config live in their proper field at `document` level:

```js
{
  scenes:[...],
  modules: {
    steps: true,
    styles: {},
    ...
  },
}
```

at `scene` level:

```js
{
  scenes:[{
    blocks:[...],
    modules: {
      steps: true,
      styles: {},
      ...
    },
  }],
  
}
```

or at `block` level as well:

```js
{
  scenes:[{
    blocks:[{
        type: 'text',
        content: 'Some Text',
        modules: {
          steps: true,
          styles: {},
          ...
        },
      }
    }]
  }],
  
}
```

To learn more about the available modules and their specific settings, jump to [this section](/reference/#modules) of the Reference.



## Controllers

**PRESENTA Lib** comes with an internal `router` that can be configured and extended by means of `controllers`. A controller can provide also global functionality and behaviors that are independent of the routing activity.

Controllers config live in their proper field:

```js
{
  scenes:[...],
  controllers: {
    keyboard: true,
    transitions: {},
    ...
  },
}
```

Controllers can be set at `document` level only.

To learn more about the available controllers and their specific settings, jump to [this section](/reference/#controllers) of the Reference.





