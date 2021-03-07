---
title: Plugin Development
---

# Plugin development

In this guide you'll learn the fundamental bits to create your own **PRESENTA Lib** plugin.

## What is a PRESENTA Lib Plugin?

It's a javascript function that exploits the **PRESENTA Lib** APIs in order to add further capabilities. To give a glimpse, this is a valid **PRESENTA Lib** plugin (a Block plugin) that does nothing but a console.log:

```js
// myPlugin.js
function myPlugin(){
  console.log('Hello empty Block!')
}

Presenta.addBlock('myplug', myPlugin)
```

Put the above code in a .js file and load it after the **PRESENTA Lib** script tag. Then, here how to use it in a PRESENTA config:

```js
// main.js
const config = {
  scenes:[{
    blocks:[{
      type:'myplug'
    }]
  }]
}

new Presenta('#app', config)
```

You can see the same example in this [Codepen](https://codepen.io/abusedmedia/pen/KKNegNE), open the console to see if it works.

The equivalent ES6 version of the same plugin needs to support the module import capability of a js bundler:

```js
// myPlugin.js
function myPlugin(){
  console.log('Hello empty Block!')
}

export default myPlugin

myPlugin.install = Presenta => {
  Presenta.addBlock('myplug', myPlugin)
}
```

This is because when you include **PRESENTA Lib** and their plugins in ES6, you need to do initialize them explicitly, such as:

```js
// main.js
import * as Presenta from '@presenta/lib'
import MyPlugin from './myPlugin.js'

Presenta.use(MyPlugin)
```



## Types of Plugin

It's important to understand that **PRESENTA Lib** has three types of plugin:

- Blocks
- Modules
- Controllers

A **Block** renders a content. A scene can contains one or more independent blocks. When you need to render a content in a specific way, you need a Block.

A **Module** adds elements and functionalities at scene level. When you need to extend a scene, causing something that happen in the scene context only, you need a Module.

A **Controller** adds elements and functionalities at presentation level. When you need to add something that lives in the whole presentation document, you need a Controller.



## Create your first Block

In a Block plugin you can exploit two arguments:

- the wrapper element where you can put whatever you want
- the config chunk of the block, provided by the end user

```js
// add an H1 tag with a user defined content
function myH1(blockElement, blockConfig){
  const h1 = document.createElement('h1')
  const name = blockConfig.name || 'Unknown'
  h1.innerText = name
  blockElement.appendChild(h1)
}

Presenta.addBlock('myH1', myH1) // this is specific for Block init
```

So, the config requires:

```js
const config = {
  scenes:[{
    blocks:[{
      type:'myH1',
      name:'John Doe'
    }]
  }]
}

new Presenta('#app', config)
```

Here the above example up and running in [Codepen](https://codepen.io/abusedmedia/pen/ExNRNaX).

### Clean-up all-the-things

If your Block contains something that needs to be disposed when the block is removed, here the method you have to implement:

```js
function myH1(blockElement, blockConfig){
  // ...
  
  this.destroy = () => {
    // remove, kill, stop, cleanup, then the block will be removed
  }
}
```

### Use a Promise if you need it

A Block can return a Promise if internally it needs to performe some async stuff. **PRESENTA Lib** will wait for all block resolutions before render the scene.

::: tip

If you want to use the same dev setup of the official plugins, here the [block starterkit](https://github.com/presenta-software/presenta-block-starter).

:::

## Create your first Module

In a Module plugin you can exploit three arguments:

- the wrapper element of the scene element where you can add something overimposed on all the blocks
- the config chunk of the module, provided by the end user
- the config chunk of the whole scene, provided by the end user

```js
// add a info strip that shows how many blocks there are in the current scene
function myNumBlocks(sceneElement, modConfig, sceneConfig){
  const num = sceneConfig.blocks.length
  
  const el = document.createElement('div')
  el.innerText = 'There are ' + num + ' blocks in this scene'
  el.classList.add('strip')
  
  sceneElement.appendChild(el)
}

Presenta.addModule('myNumBlocks', myNumBlocks) // this is specific for Module init
```

And here the config to activate the plugin:

```js
const config = {
  modules:{
    myNumBlocks:true
  },
  scenes:[{
    blocks:[{
      type:'text',
      text:'Hello 1'
    }]
  }]
}

new Presenta('#app', config)
```

Here the above example up and running in [Codepen](https://codepen.io/abusedmedia/pen/eYBKBpg).

### Use a Promise if you need it

A Module can return a Promise if internally it needs to performe some async stuff. **PRESENTA Lib** will wait for all module resolutions before render the scene.

::: tip

If you want to use the same dev setup of the official plugins, here the [module starterkit](https://github.com/presenta-software/presenta-module-starter).

:::





## Create your first Controller

In a Controller plugin you can exploit four arguments:

- the wrapper element that holds all the controllers in a presentation
- the Router object to listen for its events and/or call its public methods as well
- the config chunk of the controller itself, provided by the end user
- the whole presentation config, provided by the end user, that init the whole presentation

```js
// add an element and move it on each scene change
function myMovingEl(routerElement, router, ctrlConfig, projectConfig){
  
  const dot = document.createElement('div')
  dot.classList.add('dot')
  routerElement.appendChild(dot)
  
  router.on('indexChanged', e => {
    
    const comp = routerElement.getBoundingClientRect()
    
    const x = Math.random() * comp.width
    const y = Math.random() * comp.height
    
    dot.style.transform = `translate(${x}%, ${y}%)`
  })
}

Presenta.addController('myMovingEl', myMovingEl) // this is specific for Controller init
```

And here the config to activate the plugin:

```js
const config = {
  controllers:{
    myMovingEl:true
  },
  scenes:[{
    blocks:[{
      type:'text',
      text:'Hello 1'
    }]
  }]
}

new Presenta('#app', config)
```

Here the above example up and running in [Codepen](https://codepen.io/abusedmedia/pen/PobabKM).

### Use a Promise if you need it

A Controller can return a Promise if internally it needs to performe some async stuff. **PRESENTA Lib** will wait for all controller resolutions before start the presentation.

::: tip

If you want to use the same dev setup of the official plugins, here the [controller starterkit](https://github.com/presenta-software/presenta-controller-starter).

:::





## Not enough?

You can learn more from:

- The official [blocks](https://github.com/presenta-software?q=presenta-block&type=&language=), [controllers](https://github.com/presenta-software?q=presenta-controller&type=&language=) and [modules](https://github.com/presenta-software?q=presenta-module&type=&language=) source code
- A [growing list](https://github.com/presenta-software/unsorted-plugins) of experimental plugins
- The [Issues](https://github.com/presenta-software/presenta-lib/issues) section of the library

