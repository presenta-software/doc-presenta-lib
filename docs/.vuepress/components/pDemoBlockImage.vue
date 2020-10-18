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
              colors: 'mayb',
              fonts: 'fk2',
              modules:{
                markdown:true,
                highlightjs:true
              },
              controllers:{
                current: 3,                
              },
              scenes:[
                {
                  colorvar: 'b',
                  blocks:[{
                    type:'text',
                    text:`# IMAGE`,
                    scale:2,
                  }]
                },

                {
                  blocks:[{
                    type:'image',
                    url:`/3.jpg`
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