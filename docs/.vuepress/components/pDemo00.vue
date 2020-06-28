<template>
    <div>
      <ClientOnly>
        <pEditor @update="onEdit" :code="code" />
      </ClientOnly>
      <input @change="send" type="checkbox" v-model="doc.adapt" />
    </div>
    
</template>



<script>
import Vue from 'vue'

export default {
    mounted () {
      import('./pEditor').then(module => {
        Vue.component('p-editor', module)
      })
    },
    data(){
        return{
            doc:{
              scenes:[]
            },
            code:``
        }
    },
    mounted(){
      this.send()
    },
    methods:{
      onEdit(ob){
        this.doc = ob
      },
      send(){
        let repl = function(k, v) {
          if (k === 'index') {
            return undefined
          }
          return v
        }
        // https://exceptionshub.com/json-stringify-without-quotes-on-properties.html
        let json = JSON.stringify(this.doc, repl, 2)
        console.log(json)
        json = json.replace(/\"([^(\")"]+)\":/g,"$1:")
        this.code = json
      }
    }
}
</script>