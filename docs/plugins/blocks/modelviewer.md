---
title: ModelViewer Block
---

# ModelViewer Block


This block renders a [ModelViewer](https://modelviewer.dev/) component.

<pPluginModelViewer />

## Usage

To configure this block use this setting:

```js
{
	type: 'modelviewer',
	url: 'assets/Astronaut.glb'
}
```



| Option | Description                                                  | Default | Values        |
| ------ | ------------------------------------------------------------ | ------- | ------------- |
| type   | Define this block type **(required)**                        |         | "modelviewer" |
| url    | The local/remote URL of the 3D model (.glb format)           |         | String        |
| views  | The array of different cameraOrbit settings you want to use as steps within a scene |         | Array         |
|        |                                                              |         |               |


## Installation


Please read the installation istructions for official plugins [here](/plugins/installation) using this unique identifier: `block-modelviewer`

You can find the source code in its [repository](https://github.com/presenta-software/presenta-block-modelviewer).




