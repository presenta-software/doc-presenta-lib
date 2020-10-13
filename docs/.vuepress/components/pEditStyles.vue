<template>
  <ClientOnly>
      <div>
        <div class="selector">
          Scheme:
          <select v-model="currentScheme" @change="onChange">
            <option :value="''"></option>
            <option v-for="opt in schemes" :key="opt">{{opt}}</option>
          </select>

          Fontkit:
          <select v-model="currentFont" @change="onChange">
            <option :value="''"></option>
            <option v-for="opt in fontkits" :key="opt">{{opt}}</option>
          </select>

          Colorvar:
          <select v-model="currentColorvar" @change="onChange">
            <option v-for="opt in colorvars" :key="opt">{{opt}}</option>
          </select>

          <button @click="shuffle">Shuffle</button>
        </div>
        <pEditor :code="code" />
      </div>
  </ClientOnly>
</template>



<script>
import * as Presenta from '@presenta/lib'
import Vue from 'vue'

const getDefCode = (c, f, v) => {
  return `{
  scheme:'${c}',
  fontkit:'${f}',
  colorvar:'${v}',
  scenes:[
    {
      blocks:[{
        type: 'text', 
        text:\`<h1>This <mark>Title</mark></h1>
        <p>This <high>paragraph</high> of <b>text</b>!</p>\`, 
        scale:4
      }]
    }
  ]         
}`
}

export default {
    mounted () {
      import('./pEditor').then(module => {
        Vue.component('p-editor', module)
      })
    },
    computed:{
      schemes(){
        return Presenta.schemes.map(d => '.' + d)
      },
      fontkits(){
        return Presenta.fontkits.map(d => '.' + d)
      },
      colorvars(){
        return ['.a', '.b', '.c']
      }
    },
    methods:{
      onChange(){
        this.code = getDefCode(this.currentScheme, this.currentFont, this.currentColorvar)
      },
      shuffle(){
        let idx1 = parseInt(Math.random()*this.schemes.length)
        this.currentScheme = this.schemes[idx1]

        let idx2 = parseInt(Math.random()*this.fontkits.length)
        this.currentFont = this.fontkits[idx2]

        let idx3 = parseInt(Math.random()*this.colorvars.length)
        this.currentColorvar = this.colorvars[idx3]

        this.onChange()
      }
    },
    data(){
        return{
            currentScheme: '',
            currentFont: '',
            currentColorvar: '.a',
            code:getDefCode('', '', '')
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