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
              colors: 'cati',
              fonts: 'flow',
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
                    text:`# **SOLID**`,
                    textVar: 'title'
                  },{
                    type:'solid',
                    solidColor:'linear-gradient( 45deg, blue, red )'
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