<template>
    <div class="prev">
        <div class="toolbar">
            Transitions:
            <select v-model="currentTransition" @change="onChange">
              <option :value="''"></option>
              <option v-for="opt in transitions" :key="opt">{{opt}}</option>
            </select>
        </div>
        <div ref="preso" class="preso"></div>
    </div>
</template>



<script>
import * as Presenta from '@presenta/lib'

export default {
    
    data(){
        return{
            currentTransition:'',
            doc:{
              transition: '',
              colors: 'adele',
              controllers:{
                pagenum:true,
                focus:true,
                loop:true,
                autoplay:2000
              },
              scenes:[]
            }
        }
    },
    mounted(){
      
      for(var i=0; i<9; i++){
        let idx = i % 3
        this.doc.scenes.push({
          colorVar: this.colorvars[idx],
          blocks:[{
            type:'text',
            text:`<h1>Scene ${i+1}</h1>`
          }]
        })
      }
      this.onChange()
    },
    computed:{
      transitions(){
        return Presenta.transitions
      },
      colorvars(){
        return Presenta.colorvars
      }
    },
    methods:{
      onChange(){
        this.$refs.preso.innerHTML = ''
        this.doc.transition = this.currentTransition
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