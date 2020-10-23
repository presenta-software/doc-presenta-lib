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
              fonts:'heron',
              transition: 'fadeIn',

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
              //progressbarBottom:'0',
              
              
              scenes:[
              
              {
                colorVar: 'sec',
                
                blocks:[{
                  type:'text',
                  scale: 3.3,
                  text:'<h1><b>BUILD PRESENTATIONS, <br />THE MODERN WAY.</b></h1>'
                }],
                toast:{
                  text: `<img width="200" src="https://media.giphy.com/media/142K5KNLmUBtYI/giphy.gif" />`
                },
                toastVar: 'a',
                toastPosition: 'bl',
                toastBackColor: 'none',
                toastShadow: 'none',

                progressbarColor:'red'
              },

              {
                colorVar: 'alt',
                blocks:[{
                  type:'text',
                  scale: 4,
                  text:'<h1>Hello <br /><b>PRESENTA Lib</b></h1>'
                }]
              },
              
              {
                colorVar: 'main',
                blocks:[{
                  type:'text',
                  textVar: 'title',
                  textPadding: '4rem',
                  scale:4,
                  text:`<p>An <high><b>opinionated</b></high>, <high><b>config-driven</b></high>, <high><b>open-source</b></high> javascript library to create <mark>expressive</mark> presentations in seconds!</p>`
                }]
              },
              {
                colorVar: 'sec',
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
                layout: 'head',
                colorVar: 'alt',
                blocks:[{
                  type:'text',
                  text:`<h1>Built-in content types:</h1>`
                },{
                  colorVar: 'sec',
                  type:'text',
                  textVar: 'title',
                  textPadding: '4rem',
                  scale:5,
                  text:`<h1>Text - Image <br/> Video - Embed</h1>`
                }]
              },

              {
                layout: 'head',
                colorVar: 'main',
                blocks:[{
                  colorVar: 'sec',
                  type:'text',
                  text:`<h1>Smart styles:</h1>`
                },{
                  type:'text',
                  textVar: 'title',
                  textPadding: '4rem',
                  text:`<h1>Colors set - Fonts set <br/> Transitions - Layouts <br/> Container styles</h1>`
                }]
              },


              {
                layout: 'head',
                colorVar: 'alt',
                blocks:[{
                  type:'text',
                  text:`<h1>Built-in functions:</h1>`
                },{
                  colorVar: 'sec',
                  type:'text',
                  textVar: 'title',
                  textPadding: '4rem',
                  text:`<h1>Fullscreen - Autoplay - Page number - Shuffle - Progress - Keyboard/Mouse navigation - Black escape - Autofocus - Preload ...</h1>`
                }]
              },

              {
                colorVar: 'alt',
                blocks:[{
                  type:'text',
                  textVar: 'text',
                  text:`<h1><mark>Not enough?</mark></h1><p>Pssss, There's a plugin system!</p>`
                },{
                  colorVar: 'sec',
                  type:'text',
                  textVar: 'title',
                  textPadding: '4rem',
                  text:`<h1>Markdown <br /> Youtube <br /> Vega-Lite <br /> Chart.js <br /> HighLight.js <br /> Fitty <br /> ...</h1>`
                }]
              },


              {
                colorVar:'sec',
                blocks:[
                  {
                    type:'youtube',
                    url: 'Mh4f9AYRCZY'
                  }
                ],
                toast:{
                  text: `<p>Hey! This is a Youtube video</p>
                  <p><b>CLICK</b> or press <b>SPACE</b> to play!</p>`,
                  duration:5
                },
                toastVar: 'a',
                toastPosition: 'tl'
              },

              {
                layout: 'head',
                colorVar: 'alt',
                blocks:[{
                  colorVar: 'main',
                  type:'text',
                  text:`<h1>Want to learn more? Start from the <a href="/overview/">overview</a> </h1>`
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