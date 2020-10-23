<template>
  <ClientOnly>
      <pEditor :code="code" />
  </ClientOnly>
</template>



<script>
import Vue from 'vue'

export default {
    mounted () {
      import('./pEditor').then(module => {
        Vue.component('p-editor', module)
      })
    },
    data(){
        return{
            code:`{
  aspect: 2,
  adapt: false,
  scenes:[{
    blocks:[{
      type: 'text',
      text: '<h1>Welcome</h1>',
      colorVar: 'sec',
      textVar: 'title'
    }]
  }]         
}`
        }
    }
}
</script>