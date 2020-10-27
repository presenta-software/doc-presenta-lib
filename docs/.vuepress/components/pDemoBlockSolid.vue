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
              controllers:{
                swiper:true
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
                    solidColor:'blue'
                  }]
                },

                {
                  blocks:[{
                    type:'solid',
                    solidColor: 'linear-gradient( 45deg, blue, red )'
                  }]
                },

                {
                  blocks:[{
                    type:'solid',
                    solidColor: 'repeating-radial-gradient(circle, purple, purple 40px, #4b026f 40px, #4b026f 80px)'
                  }]
                },

                {
                  blocks:[{
                    layout:'stack',
                    type:'group',
                    blocks:[{
                      type:'solid',
                      solidColor: 'linear-gradient( 175deg, yellow, green )'
                    },{
                      type:'text',
                      textVar:'title',
                      text: '<h1>A title</h1><p>SOLID and TEXT stacked</p>'
                    }]
                  }]
                },
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