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
  colors: 'adele',
  transition: 'slideOver',
  controllers:{
    swiper:true
  },
  scenes:[{
    blocks:[{
        type:'text',
        textVar: 'title',
        step: 'p,.step',
        text:\`<h3><mark>Use Arrows to move forward</mark></h3>
              <h1><span class="step">This</span> 
              <span class="step">Title</span> 
              <span class="step">Steps</span></h1>
              <p>Also</p>
              <p>These</p>
              <p>Paragraphs</p>\`
    }]
  },{
      blocks:[{
        type:'text',
        text:'<h1>DONE!</h1>'
      }]
    }]         
}`
        }
    }
}
</script>