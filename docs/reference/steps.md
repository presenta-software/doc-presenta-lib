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





...





By default, any HTML tag with the class `step` counts as fragment element. You can override the `steps` option by adding a valid CSS selector (single and multiple as well).

The steps order is based on the selectors order and then, the HTML order within each selector. 

The following configuration uses the default setting, thus, `h1` and `p` will be converted as fragments because the class `.step`:

```js
{
  blocks:[{
    type:'text',
    text:`<h1 class="step">Title</h1>
<p class="step">Some text</p>`
  }]
}
```

The following example convert only the `li` tags as fragments:

```js
{
  blocks:[{
    type:'text',
    steps: 'li',
    text:`<h1>Title</h1>
<ul>
	<li>Item 1</li>
	<li>Item 2</li>
</ul>`
  }]
}
```

With the next one, we are converting mixed elements, preserving the order of the selector:

```js
{
  blocks:[{
    type:'text',
    steps: '#first,li,#last',
    text:`<h1 id="last">Title</h1>
<ul>
	<li>Item 1</li>
	<li>Item 2</li>
</ul>
<h1 id="first">Title</h1>`
  }]
}
```



The default order on the same selector can be overriden by using the attribute `data-order` specifing a number that will be used by a sorting function:

```js
  blocks:[{
    type:'text',
    steps: '#first,li',
    text:`<ul>
	<li data-order="2">Item 2</li>
	<li data-order="1">Item 1</li>
</ul>
<h1 id="first">Title</h1>`
  }]
}
```





