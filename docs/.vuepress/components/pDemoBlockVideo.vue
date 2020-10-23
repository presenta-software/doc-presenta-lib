<template>
    <div class="prev">
        <div ref="preso" class="preso"></div>
    </div>
</template>



<script>
import * as Presenta from '@presenta/lib'

export default {
    
    data(){
        return{
            doc:{
              colors: 'elane',
              fonts: 'creeper',
              modules:{
                markdown:true,
                highlightjs:true
              },
              controllers:{
                current: 3,                
              },
              scenes:[
                {
                  colorVar: 'main',
                  blocks:[{
                    type:'text',
                    text:`# **VIDEO**`,
                    textVar: 'title'
                  },{
                    type:'image',
                    url:`/3.jpg`
                  }]
                }
              ]
            }
        }
    },
    mounted(){
      new Presenta(this.$refs.preso, this.doc)
    }
}
</script>



<style scoped>
.preso{
  height: 300px;
}
</style>