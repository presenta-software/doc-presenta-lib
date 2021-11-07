---

title: Reference

---

# Reference



[[toc]]







## Root options

Each **PRESENTA Lib** `document` can be configured with some root options defined in the config object:



```js
{
  scenes: [],  // required
  aspect: 1.6, //the ratio between width and height
  adapt: true,  //override aspect inferring it from the container size
  mode: 'present' // present|preview
}
```

The size of the presentation is based on the wrapper size with a minimum fallback of 360x200 pixels.







## Instance

A **PRESENTA Lib** instance is a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), therefore to get a meaningful object you need to handle it:

```js
new Presenta('#app', config)
	.then(preso => {
		console.log(preso)
	})

// or in async function
const preso = await new Presenta('#app', config)
console.log(preso)
```

Now you can access the following properties:

```js
{
  // The config object digested by the library
  // The library doesn't clone the object before decorate with its internals
  config:{},
  router:{}, // The internal Router instance to access its public methods
  destroy() // Clear all the internals to avoid memory leaks
}
```









## Scenes

A **scene** contains one or more **blocks**. A scene can be extended with **modules**.  A scene object lives in the `scenes` array of a **PRESENTA Lib** document. A scene object looks something like:

```js
{
  modules:{}
  blocks:[]
}
```

It requires the `blocks` array that contains Block objects and, optionally, the `modules` object that can contains module configurations.



## Blocks

A block is the minimal piece of content. It can sit together with other blocks in a scene. 

Let's learn about the built-in block types of **PRESENTA Lib**:



### Text

The `text` block is possibly the most obvious one allowing to display formatted text by using a subset of HTML tags.

The text can scale down if there is not enough available space. The additional `scale` option allows to fine-tune the behavior.

```js
{
  type: 'text', //required
  content: '', // required
  autoscale: false, // Scale down if not enough space. The scale param allows fine tuning of the scaling feature
  scale: 1, // It allows to control the size of the text box within the available block space
  font: '', // The URL of the font TTF file you want to load and apply
  clamp: 0, // The number of lines of text to show
  marked: false,
  uppercase: false,
  underline: false
}
```

Additional CSS properties can be set this way:

```js
{
  background: '', // color value
  color: '', // color value
  accent: '', // color value user by mark effect
  padding: '', // any padding value
  interline: '', // line-height value
  spacing: '', // space-letter value
  borderTop: '',
  borderRight: '',
  borderBotton: '',
  borderLeft: '',
  radius: ''
}
```



### Image

The `image` block allows to display an image.

By default the image will `cover` the available block area. 

```js
{
  type: 'image', // required
  url: 'https://cdn.presenta.cc/image.jpg', // required
  scale: 1,
  filter: 'none', // CSS filters
  position: 'center',
  size: 'cover'
}
```



### Video

The `video` block allows to include a video file (encoded in a [browser compatible](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Video_codecs) format).

By default, the video won't start automatically. To control the playback (play/pause) you can use the `SPACEBAR` keyboard key. To rewind the video, use the `r` key.

To change the audio volume, use <kbd>m</kbd> to toggle the mute. Use <kbd>+</kbd> and <kbd>-</kbd> to increase/descrease the volume by 10% factor.

By default the video will `cover` the available block area. 

```js
{
  type: 'video', // required
  url: 'https://cdn.presenta.cc/sample.m4v', // required
  loop: false,
  autoplay: false,
  poster: '' // cover image URL  
}
```



### Embed

The `embed` block allows to embed external web objects by means of an `iframe` tag.

The simplest way to embed a web resource is by using the `url` property.

If you have the embed code (the **iframe** code) you can use the `code` property:

```js
{
  type: 'embed', // required
  url: 'https://preview.p5js.org/FabioFranchino/present/Gfscmi8Hk', // URL of the page to embed
  code: '', // full iframe code, instead of url
  poster: '' // cover image URL 
}
```



### Shape

The `shape` block renders a basic CSS shape made with the `clip-path` definition, such as [these](https://bennettfeely.com/clippy/):

```js
{
  type: 'shape',
  shape: 'rect', // rect, circle, triangle, rhombus, star
  color: 'black',
  path: 'polygon(20% 0%, 0% 70%, 100% 100%)' // pass your custom path, override the shape property
}
```



### Line

The `line` block renders a line:

```js
{
  type: 'line',
  direction: 'horizontal', // horizontal, vertical
  color: 'black',
  tickness: '1px'
}
```





### Svg

The `svg` block allows to inject and render an external SVG file. 

```js
{
  type: 'svg', // required
  code: '<svg viewBox="0 0 100 80"><circle cx="50" cy="40" r="20"></circle></svg>', // required
  aspect: '' // SVG preserveAspectRatio attribute valid value
}
```



### External blocks

Blocks can be created as **PRESENTA** plugin. You can find additional blocks [here](/plugins/#blocks).

#### 





## Modules

Modules are scene and/or block extensions. They need to be set within the `modules` key at document level or at scene/block level as well.

### Autoplay

It start the scene progression automatically passing the delay in milliseconds as additional parameter (default is 4000ms).

```js
autoplay: 4000
```





### Coords

It allows to position and resize the block container using percentage values:

```js
coords:{
  top: 20,
  left: 20,
  width: 60,
  height: 60,
  angle: 0,
  skew: 0
}
```



### Enters

It allows to control the transition for each block element:

```js
enters:{
  transition: 'fadeIn', // fadeIn,zoomOut,zoomIn,slideUp,slideDown
  delay: 1000, // the transition start delay in milliseconds
  stagger: false // calculate the delay based on the number of blocks in the scene
}
```



### Styles

It allows to set specific CSS property to the block element:

```js
styles:{
  opacity: '',
  blend: '',
  radius: '',
  border: '',
  padding: '',
  background: '',
  color: '',
  clip: '',
  shadow: ''
}
```







### External modules

Modules can be created as **PRESENTA** plugin. You can find additional modules [here](/plugins/#modules).

###













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



Here the list of built-in controlles alongside their default activation status:

### Keyboard

Allows to navigate back and forth using the keyboard arrows keys. 
Use **ArrowRight** and **ArrowDown** to go next, **ArrowLeft** and **ArrowUp** to go previous.

```js
keyboard: true
```



### Arrows

Allows to show two UI arrow elements to allows the back and forth navigation by clicking on them.

```js
arrows: true
```



### Black

Allows to show/hide a black screen by pressing the keyboard key `b`. 

```js
black: true
```

To change the key, use the String char instead the Boolean.



### Fullscreen

Allows to run the presentation in fullscreen by pressing the keyboard key `f`. To change the key, use the String char instead the Boolean. 

```js
fullscreen: true
```

This controller exposes a public `toggle()` function to allows external control.



### Hidden

It hides a specific scene or block if it has the `hidden` option set to true.

```js
hidden: true
```

An hidden scene:

```js
scenes:[{
  hidden: true
  blocks:[...]
}]
```

An hidden block:

```js
scenes:[{
  blocks:[{
		hidden: true
  	type: '...'
  }, {
    type: '...'
  }]
}]
```



### Limitswitch

It provides a visual feedback when the user tries to navigate over the presentation begin or end.

```js
limitswitch: true
```









### Loop

It allows to loop the navigation, meaning, when the last scene is reached, the next navigation command will jump to the first scene.

```js
loop: true
```

It's better to disable `limitswitch` controller.



### Focus

It allows to set the focus automatically instead waiting for the user click, allowing to use keyboard events without a first mouse interaction.

The detection is based on the viewport intersection, thus, the last instance that got intersected with the viewport gets the focus.

```js
focus: true
```



### Progressbar

It shows a tiny progress bar representing the progress of the current navigation.

```js
progressbar: true
```



### Shuffle

It randomize the order of the scenes on each instance session.

```js
shuffle: true
```



### Current

Set the start `scene`  according to the passed number.

```js
current: 1
```



### Transitions

Set the between-scenes transition.

```js
transitions: 'fadeIn' // fadeIn,hSlide,vSlide,slideOver
```



### Hide Cursor

Hide the cursor over the document wrapper.

```js
hidecursor: true
```





### External controllers

Controllers can be created as external **PRESENTA Lib** plugin. You can find additional controllers [here](/plugins/#controllers).







## Router

**PRESENTA Lib** contains an internal router to handle the navigation between scenes.

It can be controlled and extended using `controllers`. 

Any **PRESENTA Lib** instance exposes its `router` instance:

```js
new Presenta('#app', config).then(preso => {
  var router = preso.router
  router.next()
})
```



 It contains the following public methods:

```js
router
	.next() // Go to the next scene
	.prev() // Go to the previous scene
	.goto(index) // Go to a specific index of a scene (zero-based)
	.currentIndex() // Get the current index of a scene (zero-based)
	.currentStep() // Get the current step of the current scene (zero-based
	.totalScenes() // The number of scenes
	.totalSteps() // The number of steps in the current scene
	.controllers // The object map of the active controllers. Some controller expose public methods and properties, this is the way to reach them out.
```



It's possible to subscribe/unsubscribe to one or more router events:

```js
router.
	on(eventName, callback) // Subscribe to router events
	off(eventName, callback) // Unsubscribe to router events
```



Here the list of events you can subscribe to:

```js
router
	.on('indexChanged', callback) // Every time the scene index changes
	.on('nextIndex', callback) // When the Router moves foreward
	.on('prevIndex', callback) // When the Router moves backward
	.on('begin', callback) // When the Router reaches the presentation begin
	.on('end', callback) // When the Router reaches the presentation end
	.on('init', callback) // Only once, when the Router initializes
	.on('stepChanged', callback) // When the Router increment the in-scene step index
```



A Router Event includes always the following information:

```js
{
  name: 'indexChanged',
  currentIndex: 0,
  currentStep: 0,
  totalScene: 10,
  totalSteps: 0,
  isFirst: true,
  isLast: false,
}
```



## Global object

The **PRESENTA Lib** object exposes some static properties and methods that can be useful, i.e. to know its version:

```js
Presenta.version // The version of the library
Presenta.installed // The array of installed plugins

Presenta.use() // Method to install an external Plug-in
```
