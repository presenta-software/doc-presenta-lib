---
title: Toast Module
---

# Toast Module


This module adds a little and handy toast message to scenes.

<pPluginToast />

## Usage

To configure this module use this setting:

```js
modules:{
  toast: true
}
```

To use the module in a specific scene, here a sample code within a single `scene` chunk:

```js
{
  scenes:[
    {
      toast:{
        text: 'Hi... here a mini toast tip!',
        enter: 'click', // wait for click
        exit: 3 // last 3 seconds
      },
      
      blocks:[{
        type:'text', text:'Hello text'
      }]
    }
  ]
}
```

| Option | Description                                                  | Default | Values    |
| ------ | ------------------------------------------------------------ | ------- | --------- |
| text | The text you want to show witin the tip |         | String |
| enter | The enter mode option: 'click', 'keychar', 'integer' |         | String/Number |
| exit | The exit mode option: 'click', 'integer' | | String/Number |
|        |                                                              |         |           |

## Enter/Exit options

Without `enter` the element will enter immediately.

Without `exit` the element won't exit at all.

Using `click` will trigger the enter/exit by clicking on the whole scene area.

Using a `keychar` such as `a`, `b` the enter will be triggered by a key press event.

Using an `integer` number, the enter will wait that amount in seconds, the exit will last that amount in seconds.

In any case, clicking over the toast element will make it exit.






## Installation


Please read the installation istructions for official plugins [here](/plugins/installation) using this unique identifier: `module-toast`

You can find the source code in its [repository](https://github.com/presenta-software/presenta-module-toast).




