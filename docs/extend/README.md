---
title: Extend
---

# Extend

**PRESENTA Lib** is designed to be extensible by means of external plugins. Currently there are three types of plugin depending of the type of the extension you want to provide:

- **Blocks** (media and content types)
- **Modules** (scene extensions)
- **Controllers** (router controllers or global behaviours)



## Installing a plugin

A plugin is a standalone piece of code that interact with a **PRESENTA Lib** instance. The way it has been developed depends on the developer preferences, thus, there's not a single way to describe the installation guideline.

Official plugins can be installed following [this section](#install-an-official-plugin), plugins that followed the same development guidelines can be installed in the same way.

No matter the case, please refer always to the plugin documentation first.



## Configuring a plugin

soon

## Creating a plugin

soon

## Creating a Block

soon

## Creating a Module

soon

## Creating a Controller

soon



## Install an official plugin

This section describes the installation possibilities backed in official plugins.

First off, you need to know the unique `name` of the plugin and replace the `<PLUGIN-NAME>` placeholder with it (i.e. `block-youtube` or `controller-shuffle` or `module-markdown`)

#### From `unpkg`:

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

If you're using a bundler you have to explicitly install it after import:

```js
import Presenta from '@presenta/lib'
import myPluginName from '@presenta/<PLUGIN-NAME>'

Presenta.use(myPluginName)
```

## 