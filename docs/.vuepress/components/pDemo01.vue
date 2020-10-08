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
                  scale:2,
                  text:`<h1>Hello there</h1>
                  <p>This is a <mark>scene</mark> that contains a 'text' <mark>block</mark>...</p>`
                }],
                props:{
                  colorvar: '.b'
                }
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