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
                variant: 'b',
                blocks:[{
                  type:'text',
                  scale: 2,
                  text:'<h1>Hello <mark>PRESENTA Lib</mark></h1>'
                }]
              },
              {
                blocks:[{
                  type:'text',
                  text:`<h1><mark>Principles:</mark></h1>
                  <ul>
                    <li>Content first, data-driven</li>
                    <li>Sensible defaults</li>
                    <li>Pluggable</li>
                  </ul>`
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