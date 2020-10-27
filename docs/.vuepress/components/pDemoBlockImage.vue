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
              colors: 'irma',
              fonts: 'corvid',
              
              controllers:{
                swiper:true,
                preload:true
              },
              colorVar: 'sec',
              scenes:[
                {
                  
                  blocks:[{
                    colorVar: 'main',
                    type:'text',
                    text:`# **IMAGE**`,
                    textVar: 'title'
                  },{
                    type:'image',
                    url:`https://images.unsplash.com/photo-1442550528053-c431ecb55509?ixlib=rb-1.2.1&auto=format&fit=crop&w=950&q=80`
                  }]
                },

                {
                  sceneVar: 'b',
                  blocks:[{
                    type:'image',
                    url: 'https://images.unsplash.com/photo-1536681052895-9f6a24b82141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=950&q=80'
                  }]
                },

                {
                  blocks:[{
                    type:'image',
                    url: 'https://images.unsplash.com/photo-1536681052895-9f6a24b82141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=950&q=80'
                  },{
                    type:'image',
                    url:'https://images.unsplash.com/photo-1544694282-1019da8f482e?ixlib=rb-1.2.1&auto=format&fit=crop&w=950&q=80'
                  }]
                },

                {
                  blocks:[{
                    layout:'stack',
                    type:'group',
                    blocks:[{
                      type:'image',
                      url:'https://images.unsplash.com/photo-1577392648383-8485b63ed72c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80'
                    },{
                      type:'text',
                      textVar:'title',
                      text: '<h1>A title</h1><p>IMAGE and TEXT stacked</p>'
                    }]
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