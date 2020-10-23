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
              colors: 'irma',
              fonts: 'flow',
              transition: 'hSlide',
              sceneVar: 'a',
              controllers:{
                autoplay:2000,
                loop:true,
                arrows:false
              },
              scenes:[{
                colorVar: 'main',
                blocks:[{
                  type:'fitty',
                  text: `MAKING\nPRESENTATIONS\nCAN BE\nBETTER`,
                  linefactor:.9
                }]
              },{
                colorVar: 'sec',
                blocks:[{
                  type:'fitty',
                  text: `MAKING\nPRESENTATIONS\nCAN BE\nBETTER`,
                  linefactor:.9
                }]
              },{
                colorVar: 'alt',
                blocks:[{
                  type:'fitty',
                  text: `MAKING\nPRESENTATIONS\nCAN BE\nBETTER`,
                  linefactor:.9
                }]
              }]
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