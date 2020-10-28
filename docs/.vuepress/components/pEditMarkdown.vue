<template>
  <ClientOnly>
      <pEditorMarkdown />
  </ClientOnly>
</template>



<script>
import Vue from 'vue'

export default {
    mounted () {
      import('./pEditorMarkdown').then(module => {
        Vue.component('p-editor-markdown', module)
      })
    }
}
</script>