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
              colors: 'dania',
              fonts: 'cardinal',
              modules:{
                markdown:true
              },
              controllers:{
                swiper:true
              },
              
              arrowsVerticalPosition:'flex-end',
              arrowsHorizontalPosition:'flex-end',

              scenes:[ 
                {
                  colorVar: 'alt',
                  blocks:[{
                    colorVar: 'sec',
                    type:'text',
                    text:`# **TEXT**`,
                    textVar: 'title'
                  },{
                    type:'text',
                    text:`# Hello!
This is markdown :-P`,
                    textVar: 'section',
                    colorVar: 'main'
                  }]
                },
                {
                  colorVar: 'main',
                  blocks:[{
                    type:'text',
                    text:`# BIG TEXT`,
                    scale:8,
                  }]
                },
                {
                  colorVar: 'sec',
                  blocks:[{
                    type:'text',
                    textVar: 'text',
                    scale:3,
                    text:`
<h1>A <b>formatted</b> <s>text</s></h1>
<h2>With <a href="">subtitles</a> to:</h2>
<ul>
<li>Make!</li>
<li>Your!</li>
<li>Point!</li>
</ul>`

                  }]
                },

                {
                  colorVar: 'main',
                  blocks:[{
                    type:'text',
                    text:`
<h3>You can include...</h3>

<img alt="2" src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=950&q=60" />

<p>...inline media as well.</p>
`,
                    textVar: 'title'
                  }]
                },
                {
                  colorVar: 'sec',
                  blocks:[{
                    type:'text',
                    text:`## You can put long texts
# <b>Please Don't!</b>
Not being heard is no reason for silence.
It is nothing to die. It is frightful not to live.
There is a determined though unseen bravery that defends itself foot by foot in the darkness against the fatal invasions of necessity and dishonesty. Noble and mysterious triumphs that no eye sees, and no fame rewards, and no flourish of triumph salutes. Life, misfortunes, isolation, abandonment, poverty, are battlefields that have their heroes; obscure heroes, sometimes greater than the illustrious heroes.
For there are many great deeds done in the small struggles of life.`,
                    textVar: 'text'
                  }]
                },
                {
                  colorVar: 'sec',
                  blocks:[{
                    type:'text',
                    text:`# At least, it can fit the space
Not being heard is no reason for silence.
It is nothing to die. It is frightful not to live.
There is a determined though unseen bravery that defends itself foot by foot in the darkness against the fatal invasions of necessity and dishonesty. Noble and mysterious triumphs that no eye sees, and no fame rewards, and no flourish of triumph salutes. Life, misfortunes, isolation, abandonment, poverty, are battlefields that have their heroes; obscure heroes, sometimes greater than the illustrious heroes.
For there are many great deeds done in the small struggles of life.`,
                    textVar: 'text',
                    scale: 10
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