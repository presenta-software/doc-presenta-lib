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
              colors: 'flo',
              fonts: 'duck',
              controllers:{
                swiper:true
              },
              scenes:[
                {
                  colorVar: 'main',
                  blocks:[{
                    type:'text',
                    text:`# **EMBED**`,
                    textVar: 'title'
                  },{
                    type:'embed',
                    url:`http://mozilla.github.io/pdf.js/web/viewer.html`
                  }]
                },

                {
                  blocks:[{
                    type:'embed',
                    embedPadding:'1rem',
                    code:`<iframe title="H&ouml;chster Jugendanteil in Afrika" aria-label="World choropleth map" src="//datawrapper.dwcdn.net/THn5b/2/" scrolling="no" frameborder="0" style="border: none;" width="600" height="400"></iframe>`
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