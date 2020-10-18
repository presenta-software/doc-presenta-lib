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
  colors: 'vibrant',
  scenes:[{
    scenePadding: '2rem',
    blocks:[{
        type:'text',
        text:'A',
        colorvar: 'b'
    }]
  }]         
}`
        }
    }
}
</script>