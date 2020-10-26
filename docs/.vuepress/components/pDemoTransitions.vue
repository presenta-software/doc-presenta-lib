<template>
    <div class="prev">

      <div class="bar">
          <div class="toolbar">
              Transitions:
              <select v-model="currentTransition" @change="onChange">
                <option :value="''"></option>
                <option v-for="opt in transitions" :key="opt">{{opt}}</option>
              </select>
          </div>
          <div class="desc">The scene 5 will use the <b>slideOver</b> transition, no matter the global setting.</div>
        </div>
        <div ref="preso" class="preso"></div>
    </div>
</template>



<script>
import * as Presenta from '@presenta/lib'

export default {
    
    data(){
        return{
            currentTransition:'hSlide',
            doc:{
              transition: 'hSlide',
              colors: 'adele',
              controllers:{
                pagenum:true,
                focus:true,
                loop:true,
                autoplay:2000,
                limitswitch:false
              },
              scenes:[]
            }
        }
    },
    mounted(){
      
      for(var i=0; i<9; i++){
        let idx = i % 3

        let scene = {
          colorVar: this.colorvars[idx],
          blocks:[{
            type:'text',
            text:`<h1>Scene ${i+1}</h1>`
          }]
        }
        
        if(i === 4) scene.transition = 'vSlide'
        
        this.doc.scenes.push(scene)
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
.bar{
  background-color: #eee;
  padding: 1rem;
}
.toolbar{
  display: flex;
  justify-content: space-between;
}
.preso{
  height: 300px;
}
.desc{
  font-size: .75rem;
  margin-top: .75rem;
}
</style>