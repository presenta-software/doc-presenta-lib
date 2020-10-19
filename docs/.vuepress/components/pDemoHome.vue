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
              colors:'cati',
              fonts:'g',
              transition: 'slideUp',

              controllers:{
                progressbar: true,
                focus: true,
                preload:true,
                swiper:true,
                current:1
              },
              modules:{
                toast:true
              },
              progressbarBottom:'0',
              
              scenes:[
              
              {
                colorVar: 'b',
                blocks:[{
                  type:'text',
                  scale: 2.5,
                  text:'<h1><mark>Build presentations, the modern way.</mark></h1>'
                }],
                toast:{
                  text: `<img width="200" src="https://media.giphy.com/media/142K5KNLmUBtYI/giphy.gif" />`
                },
                toastVar: 'a',
                toastPosition: 'bl',
                toastBackColor: 'none',
                toastShadow: 'none'
              },

              {
                colorVar: 'c',
                blocks:[{
                  type:'text',
                  scale: 3,
                  text:'<h1>Hello <br /><b>PRESENTA Lib</b></h1>'
                }]
              },
              
              {
                colorVar: 'a',
                blocks:[{
                  type:'text',
                  textVar: 'title',
                  textPadding: '4rem',
                  text:`<h1>An <b>opinionated</b>, <b>config-driven</b>, <b>open-source</b> javascript library to create <mark>expressive</mark> presentations in seconds!</h1>`
                }]
              },
              {
                colorVar: 'b',
                blocks:[{
                  type:'text',
                  textVar: 'text',
                  text:`<h1><high>Principles:</high></h1>
                  <ul>
                    <li>Foster <b>content first</b></li>
                    <li>Comes with <b>sensible defaults</b></li>
                    <li>Backed with <b>smart constraints</b></li>
                    <li><b>Pluggable</b> by design</li>
                  </ul>`
                },{
                  type:'image',
                  url: 'https://images.unsplash.com/photo-1512432529821-4aa8f3ad138e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80'
                }]
              },

              {
                layout: 'd',
                colorVar: 'c',
                blocks:[{
                  type:'text',
                  text:`<h1>Built-in content types:</h1>`
                },{
                  colorVar: 'b',
                  type:'text',
                  textVar: 'title',
                  textPadding: '4rem',
                  scale:5,
                  text:`<h1><b>Text</b>, Image, <b>Video</b>, Embed</h1>`
                }]
              },

              {
                layout: 'd',
                colorVar: 'a',
                blocks:[{
                  colorVar: 'b',
                  type:'text',
                  text:`<h1>Smart styles:</h1>`
                },{
                  colorVar: 'a',
                  type:'text',
                  textVar: 'title',
                  textPadding: '4rem',
                  text:`<h1><b>Colors set</b>, Fonts set, <b>Transitions</b>, Layouts, <b>container styles</b></h1>`
                }]
              },


              {
                layout: 'd',
                colorVar: 'c',
                blocks:[{
                  type:'text',
                  text:`<h1>Built-in functions:</h1>`
                },{
                  colorVar: 'b',
                  type:'text',
                  textVar: 'title',
                  textPadding: '4rem',
                  text:`<h1>Fullscreen, Autoplay, Page number, Shuffle, Progress, Keyboard/Mouse navigation, Black escape, Autofocus, Preload, ...</h1>`
                }]
              },

              {
                layout: 'a',
                colorVar: 'c',
                blocks:[{
                  type:'text',
                  textVar: 'text',
                  text:`<h1><mark>Not enough?</mark></h1><p>Pssss, There's a plugin system!</p>`
                },{
                  colorVar: 'b',
                  type:'text',
                  textVar: 'title',
                  textPadding: '4rem',
                  text:`<h1>Markdown <br /> Youtube <br /> Vega-Lite <br /> Chart.js <br /> HighLight.js <br /> Fitty <br /> ...</h1>`
                }]
              },


              {
                colorVar:'b',
                blocks:[
                  {
                    type:'youtube',
                    url: 'Mh4f9AYRCZY'
                  }
                ],
                toast:{
                  text: `<p>Hey! This is a <a href="https://">Youtube</a> video</p>
                  <p>Mouse <b>CLICK</b> or press <b>SPACE</b> to play!</p>`,
                  duration:5
                },
                toastVar: 'a',
                toastPosition: 'tl'
              },

              {
                layout: 'd',
                colorVar: 'c',
                blocks:[{
                  colorVar: 'a',
                  type:'text',
                  text:`<h1>Want to know more?</h1>`
                },{
                  type:'video',
                  autoplay: true,
                  loop:true,
                  url: 'https://media.giphy.com/media/fsc7c7TYKulQ4lmmAo/giphy.mp4',
                  videoSize: 'contain',
                  videoPosition: 'bottom center',
                  colorBack: 'black',
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
  height: 450px;
}

@media screen and (max-width:450px){
  .preso{
    height: 250px;
  }
}
</style>