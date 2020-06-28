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
  adapt:true,
  theme:'vibrant',
  router:{
    keyboard:true
  },
  scenes:[
    {
      blocks:[
        {
          type: 'text',
          text: '<h1>Welcome</h1>',
          props:{
            colorvar:'.a'
          }
        }
      ]
    },
    {
      blocks:[
        {
          type: 'text',
          text: '<h1>AAAAA</h1>',
          props:{
            colorvar:'.c'
          }
        }
      ]
    }
  ]         
}`
        }
    }
}
</script>