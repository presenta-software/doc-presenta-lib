---
title: Steps examples
---

# Steps examples

The `steps` module is a powerful internal feature that can handle the show&hide of fragment elements by playing nicely with the internal Router as well.

By default, the `steps` module is active and the default selector is the class  `.step`. This means that any HTML elements with that class name will be handled as fragments.

<steps-pEditStep1 />

You can disable the module completely in case you need with:

```js
modules:{
  steps:false
}
```



A common use-case of `steps` is with lists, though. In this case we can enable it for all using the proper selector, thus, you don't need to specify the `.step` class:

<steps-pEditStep2 />

With the next one, we are converting mixed elements, preserving the order of the selector:

<steps-pEditStep3 />



The default order on the same selector can be overriden by using the attribute `data-order` specifing a number that will be used by a sorting function:

<steps-pEditStep4 />



Steps can be used with any blocks that contains a DOM, such as an SVG.

<steps-pEditStep5 />



## Transitions

You can change the transition type for each block passing an object like this:

```js
steps:{
  selector: 'li',
  transition: 'zoomIn'
}
```

Built-in transitions are: 

- fadeIn (default)
- zoomOut
- zoomIn
- slideUp
- slideDown

<steps-pEditStep6 />

## Mode

There are two modes in this module. 

- `sequential`  mode where **each selector** counts as a single step (default)
- `match` mode where **same selector values** counts as a single step

<steps-pEditStep7 />

When using the `match` mode, the selector value needs to be set at scene level.

## Out

There is an option to change the behavior of pre-entered elements. By default each fragment will persist in the scene after the transition. You can specify within the `block` level the `out` option to change that behavior, making the fragments transition out.

<steps-pEditStep8 />

You can also mix that option across different blocks (this is very useful with the `match` mode):

<steps-pEditStep9 />

