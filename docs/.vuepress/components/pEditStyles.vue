<template>
  <ClientOnly>
      <div>
        <div class="selector">
          Colors:
          <select v-model="currentScheme" @change="onChange">
            <option :value="''"></option>
            <option v-for="opt in colors" :key="opt">{{opt}}</option>
          </select>

          Fonts:
          <select v-model="currentFont" @change="onChange">
            <option :value="''"></option>
            <option v-for="opt in fonts" :key="opt">{{opt}}</option>
          </select>

          Colorvar:
          <select v-model="currentColorvar" @change="onChange">
            <option v-for="opt in colorvars" :key="opt">{{opt}}</option>
          </select>

          Scenevar:
          <select v-model="currentScenevar" @change="onChange">
            <option v-for="opt in scenevars" :key="opt">{{opt}}</option>
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

const getDefCode = (c, f, v, g) => {
  return `{
  colors:'${c}',
  fonts:'${f}',
  colorVar:'${v}',
  sceneVar:'${g}',
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
      colors(){
        return Presenta.colors
      },
      fonts(){
        return Presenta.fonts
      },
      colorvars(){
        return Presenta.colorvars
      },
      scenevars(){
        return Presenta.scenevars
      }
    },
    methods:{
      onChange(){
        this.code = getDefCode(this.currentScheme, this.currentFont, this.currentColorvar, this.currentScenevar)
      },
      shuffle(){
        let idx1 = parseInt(Math.random()*this.colors.length)
        this.currentScheme = this.colors[idx1]

        let idx2 = parseInt(Math.random()*this.fonts.length)
        this.currentFont = this.fonts[idx2]

        let idx3 = parseInt(Math.random()*this.colorvars.length)
        this.currentColorvar = this.colorvars[idx3]

        let idx4 = parseInt(Math.random()*this.scenevars.length)
        this.currentScenevar = this.scenevars[idx4]

        this.onChange()
      }
    },
    data(){
        return{
            currentScheme: '',
            currentFont: '',
            currentColorvar: 'a',
            currentScenevar: '',
            code:getDefCode('', '', '', '')
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