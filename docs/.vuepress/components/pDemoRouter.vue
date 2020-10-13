<template>
    <div class="prev">
        <div class="toolbar">
            <button @click="prev">«</button>
            <span>{{current}} of {{total}}</span>
            <button @click="next">»</button>
        </div>
        <p>However, for basic navigation controls, you can use some public methods without relying to a controller.</p>
        <div ref="preso" class="preso"></div>
    </div>
</template>



<script>
import * as Presenta from '@presenta/lib'

export default {
    
    data(){
        return{
            p:null,
            current:1,
            total:0,
            doc:{
              modules:{
                markdown:true
              },
              colorvar: '.b',
              transition: '.horizontalSlide',
              controllers:{
                arrows:false
              },
              scenes:[{
                blocks:[{
                  type:'text',
                  scale:2,
                  text:`# Scene 1`
                }]
              },{
                blocks:[{
                  type:'text',
                  scale:2,
                  text:`# Scene 2`
                }]
              },{
                blocks:[{
                  type:'text',
                  scale:2,
                  text:`# Scene 3`
                }]
              }]
            }
        }
    },
    mounted(){
      this.p = new Presenta(this.$refs.preso, this.doc)
      this.total = this.p.router.totalScenes()
      this.p.router.on('indexChanged', evt => {
        this.current = evt.currentIndex + 1
      })
    },
    methods:{
      prev(){
        this.p.router.prev()
      },
      next(){
        this.p.router.next()
      }
    }
}
</script>



<style scoped>
.toolbar{
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #eee;
}
.preso{
  height: 300px;
}
</style>