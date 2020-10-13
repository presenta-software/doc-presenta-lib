---
title: Reference

---

# Reference



[[toc]]



## Globals

Each **PRESENTA Lib** document can be configured with some global settings defined in this way:

```js
{
  scenes:[...],
  aspect: 1.6,
  adapt: true,
  scheme: '',
  ...
}
```

| Prop name  | Description                                                  | Default value | Possible values                         |
| ---------- | ------------------------------------------------------------ | ------------- | --------------------------------------- |
| scenes     | The list of scene objects                                    | required      | Scene object array                      |
| aspect     | Define the ratio between width and height                    | 1.6           | Any number                              |
| adapt      | Override `aspect` inferring it from the container size       | true          | true/false                              |
| scheme     | The color scheme class to apply to the whole presentation, such as `.vibrant` | none          | Any valid class value                   |
| fontkit    | The fontkit class to apply to the whole presentation, such as `.original` | none          | Any valid class value                   |
| colorvar   | The scheme color variation as defined in `scheme` CSS stylesheet | .a            | `.a`, `.b`, `.c`                        |
| transition | The transition class to apply to the whole presentation, such as `.verticalIn` | none          | none, `.horizontalSlide`, `.verticalIn` |
|            |                                                              |               |                                         |

::: tip Let's Play! 

The following widget is a tiny live editor! **Play with it!**

:::

<pEditRootProps />



## Styles

### Color schemes

A **color scheme** is a set of CSS selectors and custom properties used across the whole presentation defining the color look&feel.

**PRESENTA Lib** comes with a list of color schemes you can use out of the box by specifing the class name:

```js
{
  scheme: '.original'
}
```



### Color variations

Given a specific color scheme, there's the `colorvar` property that allows further color combinations.

There are 3 variations in each scheme, thus, you can choose to apply the variation to the whole `presentation`, to a specific `scenes` or to a specific `block` as well.

```js
{
  colorvar: '.a'
}
```



### Font kits

A **font kit** is a set of CSS properties and font files that define the fonts used in the presentation. 

**PRESENTA Lib** comes with a list of font kits you can use out of the box by specifing the class name:

```js
{
  fontkit: '.fk1'
}
```

Here a little interactive tool to play with the `scheme`, `fontkit` and `colorvar` properties. It's like a little theme generator:

<pEditStyles />



### Transitions

A **transition** is a set of CSS properties is responsible to define how each scene enters and leaves the stage. It's completely handled by CSS.

```js
{
  transition: '.horizontalSlide'
}
```



## Scenes

A scene is the container of group of blocks. Alongside the required `blocks` you can configure some specific properties within the `props` field:

```js
{
  blocks: [...],
  props:{
    ...
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

A block is the minimal piece of content. It can sit together with other blocks in a scene. Each block depends of the block **type** (more on this later) as well as its configuration options. Nevertheless, there are some generic, block-related, properties that can be set for any type of blocks, in the `props` field:

```js
{
  type: 'text',
  props:{
    ...
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

::: warning Understanding the `props` field

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

The text automatically scales according to the space available. The additional `scale` parameter allows more control over it.

```js
{
  type: 'text',
  text: '<h1>Some Title</h1>',
  scale: 4
}
```

| Prop name | Description                                                  | Default value | Possible values     |
| --------- | ------------------------------------------------------------ | ------------- | ------------------- |
| type      | The block type **(required)**                                |               | text                |
| text      | The text in HTML you want to display **(required)**          |               | String              |
| scale     | It allows to control the size of the text box within the available block space | 1             | Any positive number |
|           |                                                              |               |                     |

Additional CSS properties can be set in the `props` field:

```js
{
  type: 'text',
  props:{
    ...
  }
}
```

| CSS Prop name | Description                                                  | Default value | Possible values                                 |
| ------------- | ------------------------------------------------------------ | ------------- | ----------------------------------------------- |
| textPosition  | Position the text box within the block area. Class values mimic the alignment, i.e. .tl is TopLeft, .bc is BottomCenter, etc. | .cc           | .tl, .tc, .tr \| .cl, .cc, .cr \| .bl, .bc, .br |
| textAlign     | The text-align property                                      | center        | any valid CSS text-align values                 |
| textPadding   | The text box padding                                         | 0             | any valid CSS padding value                     |
|               |                                                              |               |                                                 |

### Image

The `image` block allows to display an image.

```js
{
  type: 'image',
  url: 'image1.jpg'
}
```

By default the image will `cover` the available space. 

| Prop name | Description                   | Default value | Possible values |
| --------- | ----------------------------- | ------------- | --------------- |
| type      | The block type **(required)** |               | image           |
| url       |                               |               | Valid URL       |
|           |                               |               |                 |

Additional CSS properties can be set in the props field:

```js
{
  type: 'image',
  props:{
    ...
  }
}
```



| Prop name     | Description                                  | Default value | Possible values                 |
| ------------- | -------------------------------------------- | ------------- | ------------------------------- |
| imageSize     | How the image fills the space                | cover         | Any CSS `object-fit` value      |
| imagePosition | How the image is positioned within the space | center        | Any CSS `object-position` value |
| imagePadding  | Define the weight in the Flex layout         | 0             | Any CSS `padding` value         |
| imageBorder   | The block padding                            | none          | Any CSS `border` value          |
| imageShadow   |                                              | none          | Any CSS `box-shadow` value      |
|               |                                              |               |                                 |

### Video

The `video` block allows to include a video file (encoded in a browser compatible format).

```js
{
	type: 'video',
	url: 'myvideo.mp4'
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

By default the video won't start automatically. To control the playback (play/pause) you can use the SPACEBAR keyboard key.

By default the video will `cover` the available space. 



| Prop name | Description                                          | Default value | Possible values |
| --------- | ---------------------------------------------------- | ------------- | --------------- |
| type      | The block type **(required)**                        |               | video           |
| url       | The path or URL to the video resource **(required)** |               | URL             |
| loop      | Loop the playback                                    | false         | Boolean value   |
| autoplay  | Autoplay as soon as it's ready                       | false         | Boolean value   |
| poster    | The optional poster image                            | none          | URL             |
|           |                                                      |               |                 |

Additional CSS properties can be set in the props field:

```js
{
  type: 'video',
  props:{
    ...
  }
}
```

| Prop name     | Description                                  | Default value | Possible values                 |
| ------------- | -------------------------------------------- | ------------- | ------------------------------- |
| videoSize     | How the video fills the space                | cover         | Any CSS `object-fit` value      |
| videoPosition | How the video is positioned within the space | center        | Any CSS `object-position` value |
|               |                                              |               |                                 |



### Embed

The `embed` block allows to embed external web objects by means of `iframe` tag.
The simplest way to embed a web resource is by using the `url` property:

```js
{
	type: 'embed',
	url: 'https://example.com'
}
```

If you have the embed code (the **iframe** code) you can use the `code` property:

```js
{
	type: 'embed',
	code: '<iframe src="https://example.com"></iframe>'
} 
```



| Prop name | Description                                            | Default value | Possible values |
| --------- | ------------------------------------------------------ | ------------- | --------------- |
| type      | The block type **(required)**                          |               | embed           |
| url       | The path or URL to the webpage resource **(required)** |               | URL             |
| code      |                                                        |               |                 |
| loop      | Loop the playback                                      | false         | Boolean value   |
| autoplay  | Autoplay as soon as it's ready                         | false         | Boolean value   |
| poster    | The optional poster image                              | none          | URL             |
|           |                                                        |               |                 |

Additional CSS properties can be set in the props field:

```js
{
  type: 'video',
  props:{
    ...
  }
}
```

| Prop name           | Description                                   | Default value | Possible values                 |
| ------------------- | --------------------------------------------- | ------------- | ------------------------------- |
| embedPosterSize     | How the poster fills the space                | cover         | Any CSS `object-fit` value      |
| embedPosterPosition | How the poster is positioned within the space | center        | Any CSS `object-position` value |
|                     |                                               |               |                                 |



### Solid

The `solid` block allows to set any CSS background property to the whole block area, such as:

```js
{
	type: 'solid',
	color: '#ff0000'
}
```

or

```js
{
	type: 'solid',
	color: 'linear-gradient(yellow, pink)'
}
```



### Further blocks

Blocks can be created as **PRESENTA** plugin. You can find additional blocks [here](/plugins/#blocks).

#### 







## Controllers

**PRESENTA Lib** includes some general functions and behaviours that are commons in presentational documents. These functions are called **Controllers** because they act globally on the whole presentation, usually referring to the internal Router component that is responsible to control the document' navigation.

Each Controller needs to be activated (and optionally configured) in the main config object under the `controllers` field, such as:

``` js
{
  scenes:[...],
  controllers:{
    controller1: true,
    controller2: {
        somesetting:10
    },
    ...
    props:{
      
    }
  }
}
```

::: tip The `props` field

There's a special field, `props` which is not a controller but the place to add CSS properties of the activated controllers.

:::

Here the documentation of built-in controllers you may activate or not. External Controllers can be found in the [plugin section](/plugins/#controllers).

### Keyboard

It allows to navigate back and forth using the keyboard arrows keys.

- `ArrowRight` and `ArrowDown` to go next
- `ArrowLeft` and `ArrowUp` to go previous

It's active by default, to disable, set it as `false`

```js
keyboard:false
```



### Arrows

It allows to show two UI arrow elements to allows the back and forth navigation by clicking on them.

It's active by default, to disable, set it as `false`

```js
arrows:false
```



### Black

It allows to show/hide a black screen by pressing the keyboard key `b`

It's active by default, to disable, set it as `false`

```js
black:false
```

You can configure the keyboard key this way:

```js
black:{
  key: 'b'
}
```



### Fullscreen

It allows to run the presentation in fullscreen by pressing the keyboard key `f`

It's active by default, to disable, set it as `false`

```js
fullscreen:false
```

You can configure the keyboard key this way:

```js
fullscreen:{
  key: 'f'
}
```



### Autoplay

It turns the navigation in auto-play mode.

To activate it:

```js
autoplay:true
```

To configure it overriding the defaults:

```js
autoplay:{
  delay: 4000, // 4 seconds
}
```

This Controller reads also from the `scene` configuration in order to change the `delay` time on specific `scene`:

```js
{
  scenes:[{
    autoplayDuration: 8000, // this scene will last 8 seconds instead the default delay
    blocks:[...]
  }]
}
```



### Loop

It allows to loop the navigation, meaning, when the last scene is reached, the next command will jump to the first scene.

To activate it:

```js
loop:true
```



### Focus

It allows to set the focus automatically instead waiting for the user click, allowing to use keyboard events without a first mouse interaction.

To activate it:

```js
focus:true
```

::: tip Multiple instances

What happens when there are more that one instance in a page? Who gets the focus? 

The detection is based on the viewport intersection, thus, the last instance that got intersected with the viewport gets the focus.

:::

### Progressbar

It shows a tiny progress bar representing the progress of the current navigation.

To activate it:

```js
progressbar:true
```

The following CSS properties can be changed in the `props` field:

```js
props:{
  progressbarColor: 'var(--forecolor)',
  progressbarHeight: '5px',
  progressbarBottom: 'initial'
}
```



### Shuffle

It randomize the order of the scenes on each instance session.

To activate it:

```js
shuffle:true
```



### Current

Set the start `scene`  number of the presentation.

To use it, set the `scene` number:

```js
current: 2
```



### Pagenum

It shows the current page number and total pages based on the current navigation.

To activate it:

```js
pagenum:true
```

To configure it overriding the defaults:

```js
pagenum:{
  template: '%s / %S' // %s is the current page num, %S is the total pages num
}
```

The following CSS properties can be changed in the `props` field:

```js
props:{
  pagenumTextAlign: 'right',
  pagenumPadding: '5px',
  pagenumFontSize: '10px',
  pagenumBackColor: 'none'
}
```



### Preload

It preloads images and videos from `image` and `video` blocks. It's very useful to avoid image loading progress when activating a scene with images. Of course, this leads to a loading waterfall which is not ideal if you put the presentation online.

::: tip When using Preload?

As a rule of thumb: Use it when performing a speech. Keep it disabled in other situations.

:::

To activate it:

```js
preload:true
```



### Further controllers

Controllers can be created as **PRESENTA Lib** plugin. You can find additional controllers [here](/plugins/#controllers).





## Router

**PRESENTA Lib** contains an internal router to handle the navigation between scenes.

It can be controllerd and extended using `controllers`. 

<pDemoRouter />

Any **PRESENTA Lib** instance exposes its `router` instance:

```js
var myPresentation = new Presenta('#app', {...})
var router = myPresentation.router
router.next()
```



 that contains the following public methods:

| Method name    | Description                                    |
| -------------- | ---------------------------------------------- |
| next()         | Go to the next scene                           |
| prev()         | Go to the previous scene                       |
| goto(index)    | Go to a specific index of a scene (zero-based) |
| currentIndex() | Get the current index of a scene (zero-based)  |
| totalScenes()  | The number of scenes                           |
| on(evt)        | Subscribe to router events                     |
| off(evt)       | Unsubscribe to router events                   |
|                |                                                |

## Presenta instance

Any **PRESENTA Lib** instance exposes the following properties:

| Property name | Description                                               |
| ------------- | --------------------------------------------------------- |
| config        | The config object digested by the library                 |
| router        | The internal Router instance to access its public methods |
| destroy()     | Clean all the internals to avoid memory leaks             |
|               |                                                           |