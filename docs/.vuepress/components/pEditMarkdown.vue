<template>
    <div class="cont">
        <div ref="left" class="edit" :class="{invalid:invalid}">
            <Ace v-model="icode" 
                ref="editor"
                @init="editorInit" 
                :lang="'markdown'" 
                theme="chrome"></Ace>
        </div>
        <Divider @begin="onDivBegin" @update="onDivUpdate" />
        <div ref="right" class="prev">
            <div ref="preso" class="preso"></div>
        </div>
    </div>
</template>


<script>
import Ace from 'vue2-ace-editor'
import * as Presenta from '@presenta/lib'
import Divider from './Divider'

export default {
    components:{
        Ace,Divider
    },
    data(){
        return{
            leftWidth:0,
            rightWidth:0,
            icode:`
# Hello!

![2](https://media.giphy.com/media/LoZ5R1WpEZFss/source.gif)

This is Me

---

# Slide 2

---

# Slide 3`,
            invalid:false,
            timer:null
        }
    },
    watch:{
        icode(v){
            clearTimeout(this.timer)
            this.timer = setTimeout(() => {
                this.createPreso()
            }, 300)
        }
    },
    mounted(){
        let ed = this.$refs.editor.editor
        ed.session.setTabSize(2)
        ed.setOptions({
            showPrintMargin: false
        })
        ed.setOptions({
            showGutter:false
        })
        this.createPreso()
    },
    methods:{
        editorInit(){
            require('brace/ext/language_tools')
            require('brace/mode/markdown')
            require('brace/theme/chrome')
        },
        fromRawMarkdown(){
          const reg = /\s*?(---)\s*?/gm
          const slides = this.icode.split(reg)

          const arr = []
          slides.forEach(d => {
            if (d !== '---') {
              arr.push({
                blocks:[
                  {type:'text', text:d.trim(), scale:2}
                ]
              })
            }
          })

          return arr
        },
        createPreso(){
            this.invalid=true
            let ob = null

            
            try {
                const scenes = this.fromRawMarkdown()
                const ob = {
                  colors: 'irma',
                  fonts: 'd',
                  controllers:{
                      pagenum:true,
                      swiper:true,
                      markdown:true
                  },
                  scenes
                }
                let preso = this.$refs.preso
                preso.innerHTML = ''
                new Presenta(this.$refs.preso, ob)
                this.$emit('update', ob)
                this.invalid=false
            } catch (e) {
                this.$refs.preso.innerHTML = 'Invalid data'

            }
        },

        onDivBegin(){
            let bbleft = this.$refs.left.getBoundingClientRect()
            this.leftWidth = bbleft.width
            
            let bbright = this.$refs.right.getBoundingClientRect()
            this.rightWidth = bbright.width
        },
        onDivUpdate(v){
            let newWidth1 = this.leftWidth - v - 2.5
            this.$refs.left.style.width = newWidth1 + 'px'

            let newWidth2 = this.rightWidth + v + 2.5
            this.$refs.right.style.width = newWidth2 + 'px'
        }
    }
}
</script>




<style>
.ace_editor{
}
.ace-chrome .ace_gutter{
    background-color: black!important;
    color:#999!important;
}
.ace-chrome .ace_gutter-active-line{
    background-color: #444!important;
}

</style>



<style scoped>
.cont{
    
    display: flex;
    flex-direction: column-reverse;
    overflow: hidden;
}


.edit{
    height: 250px;
    border-bottom:1px solid #ddd;
    min-width: 100px;
}

.prev{
    min-width: 100px;
}

.invalid > div{
    background-color: rgba(255, 0, 0, 0.05);
}

.preso{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:.7rem;
    height: 100%;
} 


@media screen and (min-width:490px) {
    .cont{
        flex-direction: row;
        height: 250px;
        border-top:1px solid #ddd;
        border-bottom:1px solid #ddd;
    }
    .edit{
        width: 100%;   
        border-right:1px solid #ddd;
    }
    .prev{
        width: 100%;
    }
}
</style>