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
              sceneVar: 'a',
              transition: 'vSlide',
              controllers:{
                loop:true,
                arrows:true,
                swiper:true,
                limitswitch:false,
                pagenum:'[ %s ]'
              },
              pagenumPadding:'1rem',
              pagenumFontSize:'16px',

              scenes:[{
                colorVar: 'main',
                blocks:[{
                  type:'fitty',
                  text: `<span>MAKING</span>\n<span>PRESENTATIONS</span>\n<span class="step">CAN BE</span>\n<span class="step"><b>DIFFERENT</b></span>`,
                  linefactor:.9
                }]
              },{
                colorVar: 'sec',
                blocks:[{
                  type:'fitty',
                  text: `<span>MAKING</span>\n<span>PRESENTATIONS</span>\n<span class="step">CAN BE</span>\n<span class="step"><b>BETTER</b></span>`,
                  linefactor:.9
                }]
              },{
                colorVar: 'alt',
                blocks:[{
                  type:'fitty',
                  text: `<span>MAKING</span>\n<span>PRESENTATIONS</span>\n<span class="step">CAN BE</span>\n<span class="step">MORE <b>FUN</b></span>`,
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