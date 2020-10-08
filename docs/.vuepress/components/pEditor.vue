<template>
    <div class="cont">
        <div class="edit" :class="{invalid:invalid}">
            <Ace v-model="icode" 
                ref="editor"
                @init="editorInit" 
                :lang="'javascript'" 
                theme="chrome"></Ace>
        </div>
        <div class="prev">
            <div ref="preso" class="preso"></div>
        </div>
    </div>
</template>


<script>
import Ace from 'vue2-ace-editor'
import * as Presenta from '@presenta/lib'

export default {
    components:{
        Ace
    },
    props:{
        code:String
    },
    data(){
        return{
            icode:'',
            invalid:false
        }
    },
    watch:{
        icode(v){
            this.createPreso()
        },
        code(v){
            this.icode = this.code
            this.createPreso()
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
        this.icode = this.code
        this.createPreso()
    },
    methods:{
        editorInit(){
            require('brace/ext/language_tools')
            require('brace/mode/javascript')
            require('brace/theme/chrome')
        },
        createPreso(){
            this.invalid=true
            let ob = null
            try {
                ob = eval(`(() => {return ${this.icode}})()`)
                if(ob){
                    let preso = this.$refs.preso
                    preso.innerHTML = ''
                    preso.classList.remove(...this.$refs.preso.classList)
                    preso.classList.add('preso')
                    new Presenta(this.$refs.preso, ob)
                    this.$emit('update', ob)
                    this.invalid=false
                }
            } catch (e) {
                // no bueno
                this.$refs.preso.innerHTML = 'Invalid data'

            }
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
}

.prev{
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
        flex:3;    
        border-right:1px solid #ddd;
    }
    .prev{
        flex:2;
    }
}
</style>