---
title: Youtube Block
---

# Youtube Block


This block displays and manages a [Youtube](https://www.youtube.com).

<pPluginYoutube />

## Usage

To configure this block use this setting:

```js
{
    type: 'youtube',
    url: '...'
}
```

The block will show the Youtube thumbnail for the fast preview. 

### Interactions

If `controls` option is set to false (default) then, here the way to interact with it:

-  <kbd>Space</kbd> or `click` to toggle the playback between play/pause
-  <kbd>m</kbd> to toggle the mute
-  <kbd>+</kbd> and <kbd>-</kbd> to increase/descrease the volume by 10% factor

With `controls` set to true, you have to use the built-in Youtube controls.

The first play the player waits to be loaded before the playback begins.

| Option   | Description                                                  | Default | Values      |
| -------- | ------------------------------------------------------------ | ------- | ----------- |
| type     | Define this block type **(required)**                        |         | "youtube"   |
| url      | The ID of the Youtube video **(required)**                   |         | String      |
| autoplay | Begin the playback as soon as it's loaded                    | false   | Boolean     |
| loop     | Loop the playback                                            | false   | Boolean     |
| start    | Time in seconds to start the video from                      | 0       | Number      |
| end      | Time in seconds (since the beginning) to end the video to    | null    | Number      |
| preload  | Preload the player to reduce the delay of the first play (experimental) | false   | Boolean     |
| controls | Show the Youtube controls                                    | false   | Boolean     |
| key      | Set the keeyboard char to trigger the playback               | ' '     | String char |
|          |                                                              |         |             |

The `preload` parameter will load the player behind the scene, this way it will be ready for immediate playback. The downside is some glitch when the block will be shown due the Youtube heavyness during initial loading.



## Installation


Please read the installation istructions for official plugins [here](/plugins/installation) using this unique identifier: `block-youtube`

You can find the source code in its [repository](https://github.com/presenta-software/presenta-block-youtube).




