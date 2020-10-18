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
              scenes:[{
                blocks:[{
                  type:'text',
                  textVar: 'title',
                  colorVar: 'b',
                  text:`<h1>Hello <b>there</b></h1>
                  <p>This is a <high>scene</high> that contains a 'text' <mark>block</mark>...</p>`
                }],
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