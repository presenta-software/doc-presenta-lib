---
title: Plugins
sidebarDepth: 2
---

# Plugins



In this section you can find the list of officially supported **PRESENTA Lib** plugins, sorted by  **type**.

## Blocks

A Block renders a content. When you need a different type of media or render a content in a different way, external blocks might help, such as:

- [Youtube](https://github.com/presenta-software/presenta-block-youtube)
- [Chartjs](https://github.com/presenta-software/presenta-block-chartjs)
- [Fitty](https://github.com/presenta-software/presenta-block-fitty)
- [Vega-Lite](https://github.com/presenta-software/presenta-block-vegalite)
- [ModelViewer](https://github.com/presenta-software/presenta-block-modelviewer)
- [Flowchart.js](https://github.com/presenta-software/presenta-block-flowchartjs)
- [Emoji](https://github.com/presenta-software/presenta-block-emoji)
- [Barcode](https://github.com/presenta-software/presenta-block-barcode)
- [QRCode](https://github.com/presenta-software/presenta-block-qrcode)



::: tip Want to create your own Block?

Awesome! There's a [guide](development) for that!. If you plan to make it public, [let us know](mailto:support@presenta.cc)!

:::



## Modules

A Module extends a `scene` in order provide additional features at scene level. Here some examples:

- [HighLightJs](https://github.com/presenta-software/presenta-module-highlightjs)
- [Toast](https://github.com/presenta-software/presenta-module-toast)
- [CSS](https://github.com/presenta-software/presenta-module-css)

::: tip Want to create your own Module?

Awesome! There's a [guide](development) for that!. If you plan to make it public, [let us know](mailto:support@presenta.cc)!

:::

## Controllers

A Controller extends the presentation as a whole by adding global capabilities:

- [Markdown](https://github.com/presenta-software/presenta-controller-markdown) 
- [Swiper](https://github.com/presenta-software/presenta-controller-swiper) 
- [Console Notes](https://github.com/presenta-software/presenta-controller-console-notes)  

::: tip Want to create your own Controller?

Awesome! There's a [guide](development) for that!. If you plan to make it public, [let us know](mailto:support@presenta.cc)!

:::



## Installation

This section describes the installation possibilities enforced by official plugins.

First off, you need to know the unique `name` of the plugin and replace the `<PLUGIN-NAME>` placeholder with it (i.e. `block-youtube` or `controller-shuffle` or `module-markdown`)

#### From `unpkg`:

Using the script tag in the HTML document (**recommended**):

```html
<script src="https://unpkg.com/@presenta/<PLUGIN-NAME>"></script>
```

#### From `npm`:

If you are in a local dev enviroment with the common node.js based toolchain already installed, you can run `npm` with:

```shell
npm install @presenta/<PLUGIN-NAME>
```

now you can include the plugin in the browser with (it needs to be included after **PRESENTA Lib**):

```html
<script src="/node_modules/@presenta/lib/dist/presenta.min.js"></script>
<script src="/node_modules/@presenta/<PLUGIN-NAME>/dist/presenta-<PLUGIN-NAME>.min.js"></script>
```



Or using SkyPack service in ES6:

```html
<script type="module">
	import Presenta from 'https://cdn.skypack.dev/@presenta/lib'
	import myPluginName from 'https://cdn.skypack.dev/@presenta/<PLUGIN-NAME>'

	Presenta.use(myPluginName)
</script>
```



Or using a bundler:

```js
import * as Presenta from '@presenta/lib'
import myPluginName from '@presenta/<PLUGIN-NAME>'

Presenta.use(myPluginName)
```





## Development

[Go to this page](development) to learn about how to develop you own **PRESENTA Lib** plugin.