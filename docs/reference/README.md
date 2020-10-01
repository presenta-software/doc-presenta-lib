---
title: Reference
---

## Globals

Here the configuration options that affect the whole presentation alongside their defaults:

```js
{
  aspect: 1.6, // width/height ratio
  adapt: true, // override the aspect-ratio calculating it according to the container width/height
  theme: '', // the string to identify the visual theme
  transition: 'horizontalSlide',
  mode: 'present' // can be 'preview' or 'present'
}
```




## Themes

To configura a theme, you need to set the `theme` property with an available value:

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



## Blocks

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

