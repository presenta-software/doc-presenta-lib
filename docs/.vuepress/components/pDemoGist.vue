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
              colors:'adele',
              scenes:[{
                blocks:[{
                  type:'text',
                  textVar: 'title',
                  text:`<h1>Hello <b>there</b></h1>
                  <p>This is a <high>scene</high> that contains a <mark>text</mark> <b>block</b>!</p>`
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