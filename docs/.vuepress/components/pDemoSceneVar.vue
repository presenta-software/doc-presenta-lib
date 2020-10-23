<template>
    <div class="prev">

        <div class="bar">
          <div class="toolbar">
              SceneVar:
              <select v-model="currentSceneVar" @change="onChange">
                <option :value="''"></option>
                <option v-for="opt in scenevars" :key="opt">{{opt}}</option>
              </select>
          </div>
        </div>
        <div ref="preso" class="preso"></div>
    </div>
</template>



<script>
import * as Presenta from '@presenta/lib'

export default {
    
    data(){
        return{
            currentSceneVar:'cols',
            doc:{
              colors: 'hedy',
              fonts: 'goose',
              colorVar: 'sec',
              scenes:[{
                blocks:[{
                  type: 'image',
                  url: '/3.jpg'
                }]
              }]
            }
        }
    },
    mounted(){
      this.onChange()
    },
    computed:{
      scenevars(){
        return Presenta.scenevars
      }
    },
    methods:{
      onChange(){
        this.$refs.preso.innerHTML = ''
        this.doc.sceneVar = this.currentSceneVar
        new Presenta(this.$refs.preso, this.doc)
      }
    }
}
</script>



<style scoped>
.toolbar{
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #eee;
}
.preso{
  height: 300px;
}
</style>