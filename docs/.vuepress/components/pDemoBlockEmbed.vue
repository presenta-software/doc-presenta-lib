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
                    text:`# **EMBED**`,
                    textVar: 'title'
                  },{
                    type:'embed',
                    url:`http://mozilla.github.io/pdf.js/web/viewer.html`
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