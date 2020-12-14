---
title: Vegalite Block
---

# Vegalite Block

This block displays a [Vega-Lite](https:/www.youtube.com) chart.

<pPluginVegaLite />

## Usage

To configure this block use this setting:

```js
{
    type: 'vegalite',
    config: {...},
    url: '...' // alternative to 'config' prop
}
```

| Option | Description                                          | Default | Values     |
| ------ | ---------------------------------------------------- | ------- | ---------- |
| type   | Define this block type **(required)**                |         | "vegalite" |
| config   | A valid Vega-Lite javascript object                  |         | Object     |
| url    | The URL that points to a valid Vega-Lite json config |         | String URL |
|        |                                                      |         |            |

Note that `config` and `url` are alternatives, one of them needs to be set and valid.


## Installation


Please read the installation istructions for official plugins [here](/plugins/installation) using this unique identifier: `block-vegalite`

You can find the source code in its [repository](https://github.com/presenta-software/presenta-block-vegalite).




