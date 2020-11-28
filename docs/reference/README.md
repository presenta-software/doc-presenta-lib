---

title: Reference

---

# Reference



[[toc]]







## Root options

Each **PRESENTA Lib** document can be configured with some root options and properties defined in the config object:

<pEditRootProps />

::: tip Live Edit!

When you see that white code pane, you can live-edit.

:::

| Option | Description                                                  | Default | Values  |
| ------ | ------------------------------------------------------------ | ------- | ------- |
| scenes | The list of scene objects **(required)**                     |         | Array   |
| aspect | Define the ratio between width and height                    | 1.6     | Number  |
| adapt  | Override **aspect** inferring it from the container size. If the dimensions are not positive, a fallback size will be used. | *true*  | Boolean |
|        |                                                              |         |         |

The size of the presentation is based on the container size. If it hasn't a positive dimension, a  fallback will be used, which is 360x200 pixels.

## Look&Feel

The **Look&Feel** can be defined by combining different properties. There's a great opportunity in finding unexpected results by combining many interconnected properties.

Let's play a little bit with some of them:

<pEditStyles />

The following properties can be set to the whole `presentation`, to a specific `scene` and to a specific `block` as well. 

| Property | Description                                               | Default | Value                                  |
| -------- | --------------------------------------------------------- | ------- | -------------------------------------- |
| colors   | The colors scheme to use                                  | *none*  | String value from `Presenta.colors`    |
| fonts    | The fonts set to use                                      | *none*  | String value from `Presenta.fonts`     |
| colorVar | The combination variation as defined in the colors scheme | main    | String value from `Presenta.colorvars` |
|          |                                                           |         |                                        |



## Transitions

The transition property can be set both at `presentation` level and at `scene` level as well.

<pDemoTransitions />

| Property   | Description          | Default | Value                                    |
| ---------- | -------------------- | ------- | ---------------------------------------- |
| transition | The transition type. | *none*  | String value from `Presenta.transitions` |
|            |                      |         |                                          |

## Layouts

The layout property can be set both at `presentation` level and at `scene` level as well.

<pDemoLayout />

| Property | Description                                                  | Default | Value                                |
| -------- | ------------------------------------------------------------ | ------- | ------------------------------------ |
| layout   | The scene layout. It has effect only with more than one block. | *cols*  | String value from `Presenta.layouts` |
|          |                                                              |         |                                      |

Here an example of using the `transition` as well as the `layout` property to have text and image stacked:

```js
{
  transition: 'fadeIn',
  scenes:[{
    layout: 'stack',
    blocks:[{
      type: 'image',
      url: 'https://path-to/image.jpg'
    },{
      type:'text',
      text:'<h1>Hello there!</h1>'
    }]
  }]
}
```







## Scenes

A **scene** contains one or more **blocks**. A scene can be extended with **modules**.  



## Modules

Modules are scene extensions. 

### Steps

So far, there's just one built-in: `steps`, that handles the in-block fragments, such as:

<pEditSteps />

::: tip Learn more!

There's a [dedicated section](steps) to learn all the details of `steps`.

:::

Modules can be created as external **PRESENTA Lib** plugin. You can find additional modules [here](/plugins/#modules).



## Blocks

A block is the minimal piece of content. It can sit together with other blocks in a scene. 

As already mentioned, you can set Look&Feel properties at block level to override the inherit values.

Depending of the block **type**, further properties can be added.

Let's learn about the buint-in block types of **PRESENTA Lib**:



### Text

The `text` block is possibly the most obvious one allowing to display formatted text by using a subset of HTML tags.

The text automatically scales down if there is not enough available space. The additional `scale` option allows to fine-tune the behavior.

| Option | Description                                                  | Default | Value  |
| ------ | ------------------------------------------------------------ | ------- | ------ |
| type   | The block type **(required)**                                |         | "text" |
| text   | The text in HTML you want to display **(required)**          |         | String |
| scale  | It allows to control the size of the text box within the available block space | 1       | Number |
|        |                                                              |         |        |

| Property | Description                | Default | Value                                          |
| -------- | -------------------------- | ------- | ---------------------------------------------- |
| textVar  | The text layout variations |         | String ('title', 'text', 'section', 'mention') |
|          |                            |         |                                                |

### Image

The `image` block allows to display an image.

By default the image will `cover` the available block area. 

| Option | Description                                          | Default | Value   |
| ------ | ---------------------------------------------------- | ------- | ------- |
| type   | The block type **(required)**                        |         | "image" |
| url    | The path or URL to the image resource **(required)** |         | URL     |
|        |                                                      |         |         |



### Video

The `video` block allows to include a video file (encoded in a [browser compatible](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs) format).

By default, the video won't start automatically. To control the playback (play/pause) you can use the `SPACEBAR` keyboard key. To rewind the video, use the `r` key.

To change the audio volume, use <kbd>m</kbd> to toggle the mute. Use <kbd>+</kbd> and <kbd>-</kbd> to increase/descrease the volume by 10% factor.

By default the video will `cover` the available block area. 



| Option   | Description                                          | Default | Value   |
| -------- | ---------------------------------------------------- | ------- | ------- |
| type     | The block type **(required)**                        |         | "video" |
| url      | The path or URL to the video resource **(required)** |         | URL     |
| loop     | Loop the playback                                    |         | Boolean |
| autoplay | Autoplay as soon as it's ready                       |         | Boolean |
| poster   | The optional poster image                            |         | URL     |
|          |                                                      |         |         |



### Embed

The `embed` block allows to embed external web objects by means of an `iframe` tag.
The simplest way to embed a web resource is by using the `url` property.

If you have the embed code (the **iframe** code) you can use the `code` property:



| Option | Description                                                  | Default | Value   |
| ------ | ------------------------------------------------------------ | ------- | ------- |
| type   | The block type **(required)**                                |         | "embed" |
| url    | The path or URL to the webpage resource **(required)**       |         | URL     |
| code   | The complete `iframe` code, **(required)** if `url` is not set |         | String  |
| poster | The optional poster image                                    |         | URL     |
|        |                                                              |         |         |



### Svg

The `svg` block allows to inject and render an external SVG file. The reason why of this, instead of using the svg as image (btw, you can do it with the `image` block), is to exploit its DOM with the library `steps` feature.

| Option | Description                                            | Default | Value  |
| ------ | ------------------------------------------------------ | ------- | ------ |
| type   | The block type **(required)**                          |         | "svg"  |
| url    | The path or URL to the SVG file **(required)**         |         | URL    |
| code   | The raw `svg` code, **(required)** if `url` is not set |         | String |
|        |                                                        |         |        |

::: warning Local webserver required

Note that this block, when using the `url` property, doesn't work outside a webserver. If you configure your presentation and open the `index.html` file from the file system, the browser will throw an error and the svg won't be loaded at all. 

It's going to work fine using the `code` property, though.

:::



### Solid

The `solid` block allows to set any CSS background property to the whole block area.

| Option | Description                   | Default | Value   |
| ------ | ----------------------------- | ------- | ------- |
| type   | The block type **(required)** |         | "solid" |
|        |                               |         |         |

### Group

The `group` block is a special one. It allows to stack two or more regular blocks together. By default, it includes a semi-transparent layer between the two blocks.

| Option | Description                   | Default | Value   |
| ------ | ----------------------------- | ------- | ------- |
| type   | The block type **(required)** |         | "group" |
|        |                               |         |         |

| Property | Description                                                  | Default | Value                         |
| -------- | ------------------------------------------------------------ | ------- | ----------------------------- |
| layout   | The group layout. It has effect only with more than one sub-block. | *cols*  | cols, rows, head, foot, stack |
|          |                                                              |         |                               |

### External blocks

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



### Built-in controllers

Here the list of built-in controlles alongside their default activation status:

| Property    | Description                                                  | Default  | Value           |
| ----------- | ------------------------------------------------------------ | -------- | --------------- |
| keyboard    | Allows to navigate back and forth using the keyboard arrows keys. <br />**ArrowRight** and **ArrowDown** to go next, **ArrowLeft** and **ArrowUp** to go previous. | **true** | Boolean         |
| arrows      | Allows to show two UI arrow elements to allows the back and forth navigation by clicking on them. | **true** | Boolean         |
| black       | Allows to show/hide a black screen by pressing the keyboard key `b`. <br />To change the key, use the String char instead the Boolean. | **true** | Boolean, String |
| fullscreen  | Allows to run the presentation in fullscreen by pressing the keyboard key `f`. <br />To change the key, use the String char instead the Boolean. <br />This controller exposes its `toggle()` function. | **true** | Boolean, String |
| hidden      | It hides a specific scene or block if it has the `hidden` option set to true. | **true** | Boolean         |
| limitswitch | It provides a visual feedback when the user tries to navigate over the presentation begin or end. | **true** | Boolean         |
| sender      | It sends interactive events (keyboard, mouse, touch) to blocks in order to abstract that layer (still experimental). | **true** | Boolean         |
| cache       | It fetches external resources in order to inject the content in their relative config object | **true** | Boolean         |
| autoplay    | It turns the navigation in auto-play mode. Default delay is 4000ms. Set a Number instead a Boolean to override that delay.<br />This Controller reads from each `scene` configuration the property `autoplay` in order to override the default `delay` time on a specific `scene` | false    | Boolean, Number |
| loop        | It allows to loop the navigation, meaning, when the last scene is reached, the next command will jump to the first scene. | false    | Boolean         |
| focus       | It allows to set the focus automatically instead waiting for the user click, allowing to use keyboard events without a first mouse interaction.<br /><br />The detection is based on the viewport intersection, thus, the last instance that got intersected with the viewport gets the focus. | false    | Boolean         |
| progressbar | It shows a tiny progress bar representing the progress of the current navigation. | false    | Boolean         |
| shuffle     | It randomize the order of the scenes on each instance session. | false    | Boolean         |
| current     | Set the start `scene`  according to the passed number.       | false    | Boolean, Number |
| pagenum     | It shows the current page number and total pages based on the current navigation. <br /><br />The default template `'%s / %S'` can be configured passing that String instead Bollean.<br /> `%s` is the current scene, `%S` is the total scenes. | false    | Boolean, String |
| preload     | It preloads images and videos from `image` and `video` blocks. It's very useful to avoid image loading progress when activating a scene with images. Of course, this leads to a loading waterfall which is not ideal if you put the presentation online.<br /><br />As a rule of thumb: Use it when performing a speech. Keep it disabled in other situations. | false    | Boolean         |
| sync        | It keeps in sync the navigation between multiple instance of the same presentation that are in the same origin. It works in all the modern browsers except on **Safari** which doesn't support the native BroadcastChannel. | false    | Boolean         |
|             |                                                              |          |                 |

### External controllers

Controllers can be created as external **PRESENTA Lib** plugin. You can find additional controllers [here](/plugins/#controllers).





## Instance

First off, a **PRESENTA Lib** instance is a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), therefore to get its meaningful object you have to write something like:

```js
new Presenta('#app', config).then(preso => {
  console.log(preso)
})
```

Now you can access the following properties:

| Property  | Description                                                  |
| --------- | ------------------------------------------------------------ |
| config    | The config object digested by the library. The library doesn't clone the object before decorate with its internals. |
| router    | The internal Router instance to access its public methods    |
| destroy() | Clear all the internals to avoid memory leaks. Use it when you're rebuilding it many times (i.e. within an editor) |
|           |                                                              |



## Router

**PRESENTA Lib** contains an internal router to handle the navigation between scenes.

It can be controlled and extended using `controllers`. 

<pDemoRouter />

Any **PRESENTA Lib** instance exposes its `router` instance:

```js
new Presenta('#app', {...}).then(preso => {
  var router = preso.router
  router.next()
})
```



 It contains the following public methods:

| Method name    | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| next()         | Go to the next scene                                         |
| prev()         | Go to the previous scene                                     |
| goto(index)    | Go to a specific index of a scene (zero-based)               |
| currentIndex() | Get the current index of a scene (zero-based)                |
| currentStep()  | Get the current step of the current scene (zero-based)       |
| totalScenes()  | The number of scenes                                         |
| totalSteps()   | The number of steps in the current scene                     |
| controllers    | The object map of the active controllers. Some controller expose public methods and properties, this is the way to reach them out. |
| on(evt)        | Subscribe to router events                                   |
| off(evt)       | Unsubscribe to router events                                 |
|                |                                                              |

Here the list of events you can subscribe to:

| Event name   | Description                                       |
| ------------ | ------------------------------------------------- |
| indexChanged | Every time the scene index changes                |
| nextIndex    | When the Router moves foreward                    |
| prevIndex    | When the Router moves backward                    |
| begin        | When the Router reaches the presentation begin    |
| end          | When the Router reaches the presentation end      |
| init         | Only once, when the Router initializes            |
| stepChanged  | When the Router increment the in-scene step index |
|              |                                                   |

A Router Event includes always the following information:

| Property     | Description                                    |
| ------------ | ---------------------------------------------- |
| name         | The event name                                 |
| currentIndex | Current index of the current scene             |
| currentStep  | Current index of the step of the current scene |
| totalScenes  | The total number of scenes                     |
| totalSteps   | The number of steps of the current scene       |
| isFirst      | Boolean, if the scene is the first one         |
| isLast       | Boolean, if the scene is the last one          |
|              |                                                |

## Global object

The **PRESENTA Lib** object exposes some static properties and methods that can be useful, i.e. to know its version:

```js
console.log(Presenta.version)
```

| Property    | Description                                     |
| ----------- | ----------------------------------------------- |
| version     | The version of the library                      |
| colors      | The array of the built-in colors names          |
| fonts       | The array of the built-in fonts names           |
| transitions | The array of the built-in transition names      |
| layouts     | The array of the built-in layout names          |
| colorvars   | The array of the built-in color variation names |
|             |                                                 |

| Method | Description                           |
| ------ | ------------------------------------- |
| use()  | Method to install an external Plug-in |
|        |                                       |