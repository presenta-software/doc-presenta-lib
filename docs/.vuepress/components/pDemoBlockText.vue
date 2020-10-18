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
              colors: 'g',
              fonts: 'f',
              modules:{
                markdown:true
              },
              controllers:{
                // autoplay:{
                //   delay:2000
                // },
                //loop:true,
                //current:3,
              },
              scenes:[
                {
                  colorVar: 'b',
                  blocks:[{
                    type:'text',
                    text:`# TEXT type`,
                    textVar: 'title'
                  }]
                },
                {
                  colorVar: 'a',
                  blocks:[{
                    type:'text',
                    text:`# A BIG ONE`,
                    scale:8,
                  }]
                },
                {
                  colorVar: 'b',
                  blocks:[{
                    type:'text',
                    textVar: 'text',
                    text:`<h1>A <high>formatted</high> text</h1>
<h2>With subtitles to:</h2>
<ul>
<li>Make!</li>
<li>Your!</li>
<li>Point!</li>
</ul>`
                  }]
                },

                {
                  colorVar: 'c',
                  blocks:[{
                    type:'text',
                    text:`
<h3>You can include inline media as well:</h3>
<img alt="2" src="/3.jpg" />
<p><small><mark>with captions</mark></small></p>
`,
                    textVar: 'title'
                  }]
                },
                {
                  colorVar: 'b',
                  blocks:[{
                    type:'text',
                    text:`## Long text
Not being heard is no reason for silence.
It is nothing to die. It is frightful not to live.
There is a determined though unseen bravery that defends itself foot by foot in the darkness against the fatal invasions of necessity and dishonesty. Noble and mysterious triumphs that no eye sees, and no fame rewards, and no flourish of triumph salutes. Life, misfortunes, isolation, abandonment, poverty, are battlefields that have their heroes; obscure heroes, sometimes greater than the illustrious heroes.
For there are many great deeds done in the small struggles of life.`,
                    textVar: 'text'
                  }]
                },
                {
                  colorVar: 'b',
                  blocks:[{
                    type:'text',
                    text:`## Can fit the space
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