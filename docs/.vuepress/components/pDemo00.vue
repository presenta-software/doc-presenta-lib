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
              scheme: '.sunny',
              transition: '.verticalIn',
              router:{
                pagenum: {
                  template:'%s of %S'
                },
                progressbar: true,
                props:{
                  arrowsPosition: 'flex-start'
                },
              },
              
              scenes:[{
                blocks:[{
                  type:'text',
                  scale: 3,
                  text:'<h1>Build presentations the modern way!</h1>'
                }],
                props:{
                  colorvar: '.b'
                }
              },{
                blocks:[{
                  type:'text',
                  scale: 3,
                  text:'<h1>Hello <br /><mark>PRESENTA Lib</mark></h1>'
                }],
                props:{
                  colorvar: '.a'
                }
              },
              {
                blocks:[{
                  type:'text',
                  scale: 1,
                  text:`<h1>A javascript library that is:</h1>
                  <ul>
                    <li>open source</li>
                    <li>opinionated</li>
                    <li>data-driven</li>
                  </ul>
                  <p></p>
                  <p>It helps making effective presentational documents.</p>`
                }],
                props:{
                  colorvar: '.c'
                }
              },
              {
                blocks:[{
                  type:'text',
                  scale: 1,
                  text:`<h1><high>Principles:</high></h1>
                  <ul>
                    <li>Content first, data first</li>
                    <li>Sensible defaults</li>
                    <li>Pluggable</li>
                  </ul>`
                }]
              },
              {
                blocks:[{
                  type:'text',
                  scale: 1,
                  text:`<h1>Whant to know more?</h1>`
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
                  colorvar: '.b',
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