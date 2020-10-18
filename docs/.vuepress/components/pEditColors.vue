<template>
  <ClientOnly>
      <div>
        <div class="selector">

          <input type="color" v-model="c1" @change="onChange" />
          <input type="color" v-model="c2" @change="onChange" />
          <input type="color" v-model="c3" @change="onChange" />
          <input type="color" v-model="c4" @change="onChange" />

        </div>
        <pEditor :code="code" />
      </div>
  </ClientOnly>
</template>



<script>
import * as Presenta from '@presenta/lib'
import Vue from 'vue'

const getDefCode = (c1, c2, c3, c4) => {
  return `{
  backcolor:'${c1}',
  forecolor:'${c2}',
  accentcolor:'${c3}',
  otheraccentcolor:'${c4}',
  scenes:[{
    sceneVar:'b',
    blocks:[{
        textVar: 'd',
        type: 'text',
        text: '<h1>Block <b>ONE</b></h1><p>This is the <mark>LEFT</mark> area.</p>',
        colorVar: 'c'
      },{
        textVar: 'b',
        type: 'text',
        text: '<h1>Block <b>TWO</b></h1><p>This is the <mark>RIGHT</mark> area.</p>',
        colorVar: 'a'
      }]
    }]     
}`
}

export default {
    mounted () {
      import('./pEditor').then(module => {
        Vue.component('p-editor', module)
      })
    },
    methods:{
      onChange(){
        this.code = getDefCode(this.c1, this.c2, this.c3, this.c4)
      }
    },
    data(){
        return{
            c1: '',
            c2: '',
            c3: '',
            c4: '',
            code:getDefCode('red', 'yellow', 'orange', 'blue')
        }
    }
}
</script>


<style scoped>
.selector{
  background-color: #eee;
  padding: 1rem;
}
</style>