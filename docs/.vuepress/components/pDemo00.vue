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
              scheme:'.acid',
              fontkit:'.fk7',
              colorvar:'.a',
              //scheme: '.sunny',
              transition: '.verticalIn',
              controllers:{
                pagenum: {
                  template:'%s of %S'
                },
                progressbar: true,
                focus: true,
                preload:true,
                swiper:true,
                props:{
                  arrowsPosition: 'flex-start',
                  progressbarBottom: 0
                },
              },
              
              scenes:[

                {
                blocks:[{
                  type:'embed',
                  blockPointer:false,
                  url: 'https://www.figma.com/embed?embed_host=astra&url=https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File'
                }],
                props:{
                  colorvar: '.b'
                }
              },

              {
                blocks:[{
                  type:'text',
                  scale: 3.5,
                  text:'<h1><mark>PRESENTA Lib</mark></h1>'
                }],
                props:{
                  colorvar: '.a'
                }
              },
              
              {
                blocks:[{
                  type:'text',
                  scale: 1.5,
                  text:`<h1>A javascript library that is:</h1>
                  <ul>
                    <li>opinionated</li>
                    <li>content-driven</li>
                    <li>open source</li>
                  </ul>
                  <p></p>
                  <p>It helps making effective presentational documents.</p>`
                }],
                props:{
                  colorvar: '.b'
                }
              },
              {
                blocks:[{
                  type:'text',
                  scale: 1.75,
                  text:`<h1><high>Principles:</high></h1>
                  <ul>
                    <li>Content and data first</li>
                    <li>Sensible defaults</li>
                    <li>Pluggable</li>
                  </ul>`,
                  props:{
                    blockWeight:2
                  }
                },{
                  type:'image',
                  url: 'https://images.unsplash.com/photo-1512432529821-4aa8f3ad138e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80'
                }]
              },
              {
                blocks:[{
                  type:'text',
                  scale: 1,
                  text:`<h1>Want to know more?</h1>`
                },{
                  type:'video',
                  autoplay: true,
                  loop:true,
                  url: 'https://media.giphy.com/media/fsc7c7TYKulQ4lmmAo/giphy.mp4',
                  props:{
                    blockWeight:4,
                    videoSize: 'contain',
                    videoPosition: 'bottom'
                  }
                }],
                props:{
                  backcolor: 'black',
                  colorvar: '.a',
                  layout: '.rows'
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
  height: 350px;
}

@media screen and (max-width:450px){
  .preso{
    height: 250px;
  }
}
</style>