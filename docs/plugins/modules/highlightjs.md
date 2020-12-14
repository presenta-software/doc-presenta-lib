---
title: Highlight.js Module
---

# Highlight.js Module


This module converts any `pre code` selector found in [PRESENTA Lib](https://github.com/presenta-software/presenta-lib) blocks using [highlightjs library](https://highlightjs.org/).

<pPluginHighLightJs />

## Usage

To configure this module use this setting:

```js
modules:{
  highlightjs: true
}
```

Use any valid [Highlight.js style](https://highlightjs.org/static/demo/) instead `true` to override the default style, such as:

```js
modules:{
  highlightjs: 'gradient-light'
}
```

The plugin inject the selected style. If you want to disable this behavior, configure this way:

```js
modules:{
  highlightjs:{
    noCss: true,
    style: 'gradient-light'
  }
}
```

| Option | Description                                                  | Default | Values    |
| ------ | ------------------------------------------------------------ | ------- | --------- |
| noCss   | Define this module type                       |         | Boolean |
| style | A valid HighLight.js style |         | String    |
|        |                                                              |         |           |








## Installation


Please read the installation istructions for official plugins [here](/plugins/installation) using this unique identifier: `module-highlightjs`

You can find the source code in its [repository](https://github.com/presenta-software/presenta-module-highlightjs).




