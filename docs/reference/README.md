---
title: Reference

---

# Reference



[[toc]]







## Globals

Each **PRESENTA Lib** document can be configured with some global properties defined in the config object:

```js
{
  scenes:[...],
  aspect: 1.6,
  adapt: true,
  ...
}
```

| Prop name | Description                                                  | Default value | Possible values    |
| --------- | ------------------------------------------------------------ | ------------- | ------------------ |
| scenes    | The list of scene objects                                    | *required*    | Scene object array |
| aspect    | Define the ratio between width and height                    | 1.6           | Any number         |
| adapt     | Override **aspect** inferring it from the container size. If the dimensions are not positive, a fallback size will be used. | *true*        | true/false         |
|           |                                                              |               |                    |



Let's start by changing these values to see the effect:

<pEditRootProps />



## Look&Feel

The Look&Feel of a presentation can be defined by combining different properties. There's a great opportunity in finding unexpected results by combining many interconnected features.

The following properties can be set to the whole `presentation`, to a specific `scene` and to a specific `block` as well. 

| Name     | Description                                               | Default | Values |
| -------- | --------------------------------------------------------- | ------- | ------ |
| colors   | The colors scheme to use                                  | *none*  | a-i    |
| fonts    | The fonts set to use                                      | *none*  | a-g    |
| colorVar | The combination variation as defined in the colors scheme | a       | a-c    |
| blockVar | The style variation of the block container                | *none*  |        |
|          |                                                           |         |        |

The following additional properties can be set to the whole `presentation` and to a specific `scene`:

| Name       | Description                                | Default | Values                         |
| ---------- | ------------------------------------------ | ------- | ------------------------------ |
| sceneVar   | The style variation of the scene container | *none*  | a-e                            |
| layout     |                                            |         |                                |
| transition | The transition type to use                 | *none*  | Any valid **transition** value |
|            |                                            |         |                                |

The inheritance of same properties will be honoured giving more priority to the higher specificity.

The following widget allows to personalize a color scheme:

<pEditColors />

In the following widget you can play with a tiny style generator:

<pEditStyles />

In this widget you can test the built-in transition possibilities:

<pDemoTransitions />







## Scenes

A **scene** contains the **blocks**. Its responsibility rely to layout them.

```js
{
  blocks: [...],
  layout: 'rows',
  sceneVar: 'a'
}
```

A scene can be extended with **modules**.  You can find some examples [here](/plugins/#modules).

<pEditScene />

## Contents type

A block is the minimal piece of content. It can sit together with other blocks in a scene. Each block depends of the block **type** (more on this later) as well as its configuration options. Nevertheless, there are some generic, block-related, properties that can be set for any type of blocks, in the `props` field:

```js
{
  type: '...',
  blockVar: 'a',
  colorVar: 'b'
}
```



### Text

The `text` block is possibly the most obvious one allowing to display formatted text by using a subset of HTML tags. Here the basic configuration:

The text automatically scales according to the space available. The additional `scale` parameter allows more control over it.

| Prop name | Description                                                  | Default value | Possible values     |
| --------- | ------------------------------------------------------------ | ------------- | ------------------- |
| type      | The block type **(required)**                                |               | text                |
| text      | The text in HTML you want to display **(required)**          |               | String              |
| scale     | It allows to control the size of the text box within the available block space | 1             | Any positive number |
| textVar   | The text layout variations                                   | *none*        |                     |
| textAlt   | The text box style variation                                 | *none*        |                     |
|           |                                                              |               |                     |



### Image

The `image` block allows to display an image.

By default the image will `cover` the available space. 

| Prop name | Description                   | Default value | Possible values |
| --------- | ----------------------------- | ------------- | --------------- |
| type      | The block type **(required)** |               | image           |
| url       |                               |               | Valid URL       |
|           |                               |               |                 |



### Video

The `video` block allows to include a video file (encoded in a browser compatible format).

Here the additional options for this block:

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



### Embed

The `embed` block allows to embed external web objects by means of `iframe` tag.
The simplest way to embed a web resource is by using the `url` property:

If you have the embed code (the **iframe** code) you can use the `code` property:



| Prop name | Description                                            | Default value | Possible values |
| --------- | ------------------------------------------------------ | ------------- | --------------- |
| type      | The block type **(required)**                          |               | embed           |
| url       | The path or URL to the webpage resource **(required)** |               | URL             |
| code      |                                                        |               |                 |
| loop      | Loop the playback                                      | false         | Boolean value   |
| autoplay  | Autoplay as soon as it's ready                         | false         | Boolean value   |
| poster    | The optional poster image                              | none          | URL             |
|           |                                                        |               |                 |



### Solid

The `solid` block allows to set any CSS background property to the whole block area, such as:

| Prop name | Description                                    | Default value | Possible values          |
| --------- | ---------------------------------------------- | ------------- | ------------------------ |
| type      | The block type **(required)**                  |               | solid                    |
| color     | A CSS background property value **(required)** |               | Any CSS background value |
|           |                                                |               |                          |

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
    keyboard: true,
    arrows: true
  }
}
```



### Buint-in controllers

Here the documentation of built-in controllers you may activate or not. External Controllers can be found in the [plugin section](/plugins/#controllers). A controller is always active when its value is not `false`.

| Property    | Description                                                  | Default  | Value                                             |
| ----------- | ------------------------------------------------------------ | -------- | ------------------------------------------------- |
| keyboard    | Allows to navigate back and forth using the keyboard arrows keys. <br />**ArrowRight** and **ArrowDown** to go next, **ArrowLeft** and **ArrowUp** to go previous | **true** | `true/false`                                      |
| arrows      | Allows to show two UI arrow elements to allows the back and forth navigation by clicking on them. | **true** | `true/false`                                      |
| black       | Allows to show/hide a black screen by pressing the keyboard key `b` | **true** | `true/false` <br />or<br /> `{key: 'b'}`          |
| fullscreen  | Allows to run the presentation in fullscreen by pressing the keyboard key `f`. This controller exposes `toggle()`. | **true** | `true/false` <br />or<br /> `{key: 'f'}`          |
| autoplay    | It turns the navigation in auto-play mode. Default delay is 4000ms. Set a Number instead a Boolean to override it.<br />This Controller reads from each `scene` configuration the property `autoplay` in order to override the default `delay` time on specific `scene` | false    | `Boolean` <br />or<br /> `Number`                 |
| loop        | It allows to loop the navigation, meaning, when the last scene is reached, the next command will jump to the first scene. | false    | `true/false`                                      |
| focus       | It allows to set the focus automatically instead waiting for the user click, allowing to use keyboard events without a first mouse interaction.<br /><br />The detection is based on the viewport intersection, thus, the last instance that got intersected with the viewport gets the focus. | false    | `true/false`                                      |
| progressbar | It shows a tiny progress bar representing the progress of the current navigation. | false    | `true/false`                                      |
| shuffle     | It randomize the order of the scenes on each instance session. | false    | `true/false`                                      |
| current     | Set the start `scene`  according to the passed number.       | false    | `Number` or `false`                               |
| pagenum     | It shows the current page number and total pages based on the current navigation. <br /><br />The default template `{template: '%s / %S'}` can be configured. `%s` is the current scene, `%S` is the total scenes. | false    | `true/false`<br />or<br />`{template: '%s / %S'}` |
| preload     | It preloads images and videos from `image` and `video` blocks. It's very useful to avoid image loading progress when activating a scene with images. Of course, this leads to a loading waterfall which is not ideal if you put the presentation online.<br /><br />As a rule of thumb: Use it when performing a speech. Keep it disabled in other situations. | false    | `true/false`                                      |
|             |                                                              |          |                                                   |

### External controllers

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

| Property name | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| config        | The config object digested by the library                    |
| router        | The internal Router instance to access its public methods    |
| destroy()     | Clear all the internals to avoid memory leaks. Use it when you're rebuilding it many times (i.e. within an editor) |
|               |                                                              |