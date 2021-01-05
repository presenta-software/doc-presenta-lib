---
title: Console Notes Controller
---

# Console Notes Controller


This controller adds the speaker notes capability using the Console of the Browser' Developer Tools as viewer.


## Usage

To configure this controller use this setting within the `controllers` key:

```js
consoleNotes: true
```

Additional configurations of the controller can be:

| Option | Description                                | Default                        | Values  |
| ------ | ------------------------------------------ | ------------------------------ | ------- |
| clear  | Clear the console on each scene activation | false                          | Boolean |
| style  | Set a custom style in the Console          | 'color: blue; font-size: 16px' | String  |
|        |                                            |                                |         |




Now, a `scene` requires the `notes` field with the text you want to display in the console.

```js
{
    scenes:[
        {
            notes:'My message',
            blocks:[...]
        }
    ]
}
```



## Installation


Please read the installation istructions for official plugins [here](/plugins/installation) using this unique identifier: `controller-console-notes`

You can find the source code in its [repository](https://github.com/presenta-software/presenta-controller-console-notes).




