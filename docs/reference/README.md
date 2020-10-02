---
title: Reference
---

## Global

Each Presenta presentation can be configured with some global settings. Here the list with their defaults and possible values:

```js
{
  aspect: 1.6, // width/height ratio
  adapt: true, // override the aspect-ratio calculating it according to the container width/height
  theme: '', // a valid string to identify the visual theme (see below)
  transition: 'horizontalSlide', // a valid string to identify a transition system (see below)
  mode: 'present' // can be 'preview' or 'present'
}
```




## Theme

To configura a theme, you need to set the `theme` property with a valid value:

```js
{
  theme: '<someThemeName>'
}
```

#### Built-in themes

The library comes with a set of themes available:

- `default` or leave empty
- `vibrant`
- `original`

#### Create your theme



## Scene

A scene is a container for the

```js
{
  props:{
    colorvar: '.a', // .a|.b|.c
    backcolor: '',
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

## Block

A block is the minimal piece of content. It can sit together with other blocks in a scene. Each block depends of the block type (more on this later) as well as its configuration options. Nevertheless, there are some generic, block-related, properties that can be set for any type of blocks:

```js
{
  props:{
    colorvar: '.a', // .a|.b|.c
    backcolor: '',
    blockweight: 1
    blockpadding: 0
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


### Images

The `images` block allows to display, guess what, images.
You need to provide an array of objects such as:

```js
{
  type: 'images',
  images: [
  	{url: 'image1.jpg'},
  	{url: 'image2.jpg'},
  	{url: 'image3.jpg'}
  ]
}
```

The area available will be split equally according to the number of images.

By default the images will `cover` the space available. You can change that behaviour using this setting:

```js
{
  type: 'images',
  size: 'cover|contain|fill|none|scale-down'
  images: [...]
}
```

You can also specify the `size` property per single image:

```js
{
  type: 'images',
  images: [
  	{url: 'image1.jpg', size: 'none'},
  	{url: 'image2.jpg'},
  	{url: 'image3.jpg', size: 'contain'}
  ]
}
```

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

- Youtube Block

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

