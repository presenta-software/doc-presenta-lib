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
  scheme:'.original',
  scenes:[{
      props:{colorvar:'.a'},
      blocks:[{type: 'solid'}]
    },{
      props:{colorvar:'.b'},
      blocks:[{type: 'solid'}]
    },{
      props:{colorvar:'.c'},
      blocks:[{type: 'solid'}]
    }]         
}`
        }
    }
}
</script>