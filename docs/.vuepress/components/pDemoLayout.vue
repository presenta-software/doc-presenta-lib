<template>
    <div class="prev">

        <div class="bar">
          <div class="toolbar">
              Layouts:
              <select v-model="currentLayout" @change="onChange">
                <option v-for="opt in layouts" :key="opt">{{opt}}</option>
              </select>
          </div>
        </div>
        <div ref="preso" class="preso"></div>
    </div>
</template>



<script>
import * as Presenta from '@presenta/lib'

export default {
    
    data(){
        return{
            currentLayout:'cols',
            doc:{
              layout: '',
              colors: 'hedy',
              fonts: 'goose',
              colorVar: 'sec',
              scenes:[{
                blocks:[{
                  type: 'image',
                  url: '/3.jpg'
                },{
                  type: 'text',
                  scale:3,
                  text: '<h1>Title</h1> <h3>This is a <b>text</b> block</h3>'
                }]
              }]
            }
        }
    },
    mounted(){
      this.onChange()
    },
    computed:{
      layouts(){
        return Presenta.layouts
      }
    },
    methods:{
      onChange(){
        this.$refs.preso.innerHTML = ''
        this.doc.layout = this.currentLayout
        new Presenta(this.$refs.preso, this.doc)
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