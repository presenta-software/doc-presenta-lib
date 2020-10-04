---
title: Reference
---

## Global properties

Each **Presenta** presentation can be configured with some global settings. Here the list with their defaults and possible values:

```js
{
  scenes:[...],
  aspect: 1.6,
  adapt: true,
  scheme: '',
  fontkit: '',
  mode: 'present'
}
```

| Prop name | Description                                                  | Default value | Possible values       |
| --------- | ------------------------------------------------------------ | ------------- | --------------------- |
| aspect    | Define the ratio between width and height                    | 1.6           | Any number            |
| adapt     | Override `aspect` inferring it from the container size       | true          | true,false            |
| scheme    | The color scheme class to apply to the whole presentation, such as `.vibrant` |               | Any valid class value |
| fontkit   | The fontkit class to apply to the whole presentation, such as `.original` |               | Any valid class value |
| mode      | This property is used by some block to show two different states of the rendered content, useful when using the library to preview the `scenes` instead running the presentation | present       | present, preview      |
|           |                                                              |               |                       |


## Built-in color schemes

Presenta comes with a list of color schemes you can use out of the box using a class name:

```js
{
  scheme: '.original'
}
```

- `.default` or leave empty
- `.vibrant`
- `.original`

## Built-in font kits

Presenta comes with a list of font kits you can use out of the box using a class name:

```js
{
  fontkit: '.original'
}
```

- `.default` or leave empty
- `.vibrant`
- `.original`



## Scene

A scene is the container of a slide or group of blocks. Alongside the required `blocks` you can configure some specific properties in this way:

```js
{
  blocks: [...],
  props:{
    colorvar: '.a',
    scenepadding: 0
  }
}
```

| Prop name    | Description                        | Default value          | Possible values             |
| ------------ | ---------------------------------- | ---------------------- | --------------------------- |
| colorvar     | Define the color palette variation | .a                     | .a, .b, .c                  |
| backcolor    |                                    | inherit from the theme | any valid CSS color values  |
| scenepadding | The scene padding                  | 0                      | any valid CSS padding value |
|              |                                    |                        |                             |

::: tip Understanding the `props` field

In general, any property in the `props` object will be injected according to these rules:

- If the value starts with a `.` then a class name will be injected in the scene container concatenating the `key` with the `value` rsulting this class name: `.key__value`
- If the value doesn't start with a `.` then a CSS custom property will be injected in the scene container using the `key` as property name alongside its value resultin in this CSS property: `--key: value;`

:::

## Blocks

A block is the minimal piece of content. It can sit together with other blocks in a scene. Each block depends of the block type (more on this later) as well as its configuration options. Nevertheless, there are some generic, block-related, properties that can be set for any type of blocks:

```js
{
  props:{
    colorvar: '.a', // .a|.b|.c
    blockweight: 1
    blockopacity: 1
  }
}
```

| Prop name    | Description                          | Default value          | Possible values             |
| ------------ | ------------------------------------ | ---------------------- | --------------------------- |
| colorvar     | Define the color palette variation   | .a                     | .a, .b, .c                  |
| backcolor    |                                      | inherit from the theme | any valid CSS color values  |
| blockweight  | Define the weight in the Flex layout | 1                      | any positive number         |
| blockpadding | The block padding                    | 0                      | any valid CSS padding value |
|              |                                      |                        |                             |

::: tip Understanding the `props` field

In general, any property in the `props` object will be injected according to these rules:

- If the value starts with a `.` then a class name will be injected in the block container concatenating the `key` with the `value` rsulting this class name: `.key__value`
- If the value doesn't start with a `.` then a CSS custom property will be injected in the block container using the `key` as property name alongside its value resultin in this CSS property: `--key: value;`

:::

### Text

The `text` block is possibly the most obvious one allowing to display formatted text by using a subset of HTML tags. Here the basic configuration:

```js
{
  type: 'text',
  text: '<h1>Some Title</h1>'
}
```

The text automatically scales according to the space available as well as the additional `scale` parameter that allows to control the behaviour:

```js
{
  type: 'text',
  text: '<h1>Some Title</h1>',
  scale: 4
}
```

By default `scale` is `2` but to can increase or decrease as you wish.

Furthermore, there are a number of properties for more fine-tuning:

```js
{
  type: 'text',
  props:{
    textposition: '.cc',
    textalign: 'center',
    textpadding: '1rem',
    backcolor: '<someColor>'
  }
}
```


### Image

The `image` block allows to display, guess what, an image.
You need to provide an array of objects such as:

```js
{
  type: 'image',
  url: 'https://www.example.com/image1.jpg'
}
```

By default the image will `cover` the space available. You can change that behaviour using this setting:

```js
{
  type: 'image',
  size: 'cover|contain|fill|none|scale-down'
  url: '...'
}
```

| Prop name    | Description                          | Default value          | Possible values             |
| ------------ | ------------------------------------ | ---------------------- | --------------------------- |
| colorvar     | Define the color palette variation   | .a                     | .a, .b, .c                  |
| backcolor    |                                      | inherit from the theme | any valid CSS color values  |
| blockweight  | Define the weight in the Flex layout | 1                      | any positive number         |
| blockpadding | The block padding                    | 0                      | any valid CSS padding value |
|              |                                      |                        |                             |



### Video

The `video` block allows to include a video file (in a browser compatible format).
The configuration is pretty straightforward:

```js
{
	type: 'video',
	url: 'https://www.example.com/myvideo.mp4'
}
```

Here the additional options for this block:

```js
{
	loop: false,
	autoplay: false,
	size: 'cover', // it can be cover|contain|none
	poster: '' // the video poster frame
}
```

By default the video won't start automatically. To control the playback (play/pause) you can use the SPACEBAR key

### Embed

The `embed` block allows to embed external web objects by means of `iframe` tag.
The simplest way to embed a web resource is by using the `url` property:

```js
{
	type: 'embed',
	url: 'https://example.com'
}
```

If you have the embed code (the iframe code) you can use the `code` property:

```js
{
	type: 'embed',
	code: '<iframe src="https://example.com"></iframe>'
}
```

Additionally, you can provide a `poster` and `postersize` properties to load an image used in `preview` mode and during the loading phase:

```js
{
	type: 'embed',
	url: 'https://example.com'
	poster: 'https://example.com/mycover.jpg'
	postersize: 'cover' // cover|contain|none
}
```

### Further blocks

There are further blocks that can be included as external plugin. Here a list of the official supported external blocks:

- Youtube block
- Vega-Lite block
- Chart.js block

#### Create your block



## Transitions

#### Built-in transitions

#### Create your transition



## Router Controllers

#### Built-in controllers

#### Create your controller



## Scene Modules

Scene modules can extend scenes in many ways. Each module needs to be activated across the whole project and it can be disabled per each slide as well.

#### Built-in modules

Right now, there's one built-in module in the package:

### Pagenumber

This module adds the page number to each slide. You can also disable it for specific slides as well as change some display options. Here how to activate it:

```js
{
	...,
	modules:{
		pagenumber:true
	}
}
```

#### Create your module



## Props

