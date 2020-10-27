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
              controllers:{
                swiper:true
              },
              scenes:[
                {
                  colorVar: 'main',
                  blocks:[{
                    type:'text',
                    text:`# **VIDEO**`,
                    textVar: 'title'
                  },{
                    type:'video',
                    url:`/sample.m4v`,
                    loop:true,
                    autoplay:true
                  }]
                },

                {
                  layout:'right',
                  blocks:[{
                    type:'text',
                    textVar:'text',
                    scale:2,
                    text: '<p>Press <high>SPACEBAR</high> or <high>CLICK</high> to toggle the <high>VIDEO</high> playback</p>'
                  },{
                    type:'video',
                    url:`/sample.m4v`
                  }]
                },

                {
                  blocks:[{
                    type:'group',
                    layout:'stack',
                    blocks:[{
                      type:'video',
                      url:`/sample.m4v`,
                      loop:true,
                      autoplay:true
                    },{
                      type:'text',
                      textVar:'title',
                      text: '<h1>A title</h1><p>VIDEO and TEXT stacked</p>'
                    }]
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