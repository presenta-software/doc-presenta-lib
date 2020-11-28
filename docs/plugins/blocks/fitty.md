---
title: Fitty Block
---

# Fitty Block


This block renders a text string using the [Fitty library](https://github.com/rikschennink/fitty) under the hood.


<pPluginFitty />

## Usage

To configure this block use this setting:

```js
{
	type: 'fitty',
	text: `Line1
Line2
Line3`
}
```

or the equivalent version:

```js
{
	type: 'fitty',
	text: 'Line1\nLine2\nLine3'
}
```

To emphatize a specific word, use bold variation:

```js
{
	type: 'fitty',
	text: 'Line1\n<b>Line2</b>\nLine3'
}
```

| Option     | Description                                                  | Default | Values                             |
| ---------- | ------------------------------------------------------------ | ------- | ---------------------------------- |
| type       | Define this block type **(required)**                        |         | "fitty"                            |
| text       | A text string, optionally with HTML inline tags, with carriage returns to separate **(required)** |         | String                             |
| width      | The width of the text block expressed in % of the container  | 100     | Number, between 0-100              |
| linefactor | A multiplicator factor to affect the line height between text lines | 0.9     | Number, likely between 0.5 and 1.2 |
|            |                                                              |         |                                    |


## Installation


Please read the installation istructions for official plugins [here](/plugins/installation) using this unique identifier: `block-fitty`

You can find the source code in its [repository](https://github.com/presenta-software/presenta-block-fitty).




