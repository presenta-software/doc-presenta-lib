---
title: Plugin Installation
---

## Plugin Installation

This section describes the installation possibilities followed by official plugins.

First off, you need to know the unique `name` of the plugin and replace the `<PLUGIN-NAME>` placeholder with it (i.e. `block-youtube` or `controller-shuffle` or `module-markdown`)

#### From `unpkg`:

Using the script tag in the HTML document (**recomended**):

```html
<script src="https://unpkg.com/@presenta/<PLUGIN-NAME>"></script>
```

Alternatively, using the config object (**not recomended**, useful only when you can't include the above script tag) :

```js
plugins:[
  {url: 'https://unpkg.com/@presenta/<PLUGIN-NAME>'}
]
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

If you're using a bundler you have to explicitly install it after import:

```js
import * as Presenta from '@presenta/lib'
import myPluginName from '@presenta/<PLUGIN-NAME>'

Presenta.use(myPluginName)
```

