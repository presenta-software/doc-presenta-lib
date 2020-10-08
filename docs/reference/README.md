---
title: Reference

---

::: tip Hold on!

This reference assumes you've some confidence with the basic setting of **PRESENTA Lib**. If not, you can learn quickly from the [Guide](/guide/) page.

:::

## Root properties

Each **PRESENTA** document can be configured with some global settings defined in this way:

```js
{
  scenes:[...],
  aspect: 1.6,
  adapt: true,
  scheme: '',
  ...
}
```

| Prop name  | Description                                                  | Default value | Possible values            |
| ---------- | ------------------------------------------------------------ | ------------- | -------------------------- |
| scenes     | The list of scene objects                                    | required      | Scene object array         |
| aspect     | Define the ratio between width and height                    | 1.6           | Any number                 |
| adapt      | Override `aspect` inferring it from the container size       | true          | true,false                 |
| scheme     | The color scheme class to apply to the whole presentation, such as `.vibrant` |               | Any valid class value      |
| fontkit    | The fontkit class to apply to the whole presentation, such as `.original` |               | Any valid class value      |
| theme      | The theme class to apply to the whole presentation, such as `.original` |               | Any valid class value      |
| colorvar   | The scheme color variation as defined in `scheme` CSS stylesheet | .a            | .a, .b, .c                 |
| transition | The transition class to apply to the whole presentation, such as `.verticalIn` |               | See the transition section |
| mode       | This property is used by some block to show two different states of the rendered content, useful when using the library to preview the `scenes` instead running the presentation | present       | present, preview           |
|            |                                                              |               |                            |

::: tip Let's Play! 

The following widget is a tiny live editor! **Play with it!**

:::

<pEditRootProps />



## Built-in color schemes

A **color scheme** is a set of CSS selectors and custom properties used across the whole presentation defining the color look&feel.

**PRESENTA Lib** comes with a list of color schemes you can use out of the box by specifing its class name:

```js
{
  scheme: '.original'
}
```

- `.default` or leave empty
- `.vibrant`
- `.original`

<pEditSchemeCol />

## Built-in font kits

A **font kit** is a set of CSS properties and font files that define the fonts used in the presentation. 

**PRESENTA Lib** comes with a list of font kits you can use out of the box by specifing its class name:

```js
{
  fontkit: '.original'
}
```

- `.default` or leave empty
- `.vibrant`
- `.original`

## Built-in themes

A **theme** is a set of CSS custom properties that are able to affect some visual aspect of the presentation and its blocks.

**PRESENTA Lib** comes with a list of font kits you can use out of the box using a class name:

```js
{
  theme: '.alternate'
}
```

- `.default` or leave empty
- `.alternate`

## Scene

A scene is the container of group of blocks. Alongside the required `blocks` you can configure some specific properties in this way:

```js
{
  blocks: [...],
  props:{
    colorvar: '.a',
    scenePadding: 0
  }
}
```

| Prop name    | Description                                                  | Default value                     | Possible values             |
| ------------ | ------------------------------------------------------------ | --------------------------------- | --------------------------- |
| colorvar     | Define the color palette variation at scene level. You can define it also at block level. | .a                                | .a, .b, .c                  |
| backcolor    |                                                              | inherit from the `scheme` setting | any valid CSS color values  |
| scenePadding | The scene padding                                            | 0                                 | any valid CSS padding value |
|              |                                                              |                                   |                             |

## Blocks

A block is the minimal piece of content. It can sit together with other blocks in a scene. Each block depends of the block type (more on this later) as well as its configuration options. Nevertheless, there are some generic, block-related, properties that can be set for any type of blocks:

```js
{
  props:{
    colorvar: '.a', // .a|.b|.c
    blockWeight: 1
    blockOpacity: 1
  }
}
```

| Prop name    | Description                          | Default value          | Possible values             |
| ------------ | ------------------------------------ | ---------------------- | --------------------------- |
| colorvar     | Define the color palette variation   | .a                     | .a, .b, .c                  |
| backcolor    |                                      | inherit from the theme | any valid CSS color values  |
| blockWeight  | Define the weight in the Flex layout | 1                      | any positive number         |
| blockPadding | The block padding                    | 0                      | any valid CSS padding value |
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
  poster: '', // the video poster frame
  props:{
    videoSize: 'cover',
    videoPosition: 'center
  }
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

