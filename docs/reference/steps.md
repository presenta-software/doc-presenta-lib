---
title: Steps!
---

# Steps!

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





