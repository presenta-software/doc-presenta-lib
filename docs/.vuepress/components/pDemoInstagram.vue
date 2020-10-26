<template>
    <div class="prev">

      <div class="bar">
         
          <div class="toolbar">
            <div>
            IG username: <input @keyup.enter="fetch" type="text" v-model="username" />
            </div>
            <button @click="fetch">Fetch and generate!</button>
          </div>
          <div v-if="message" class="desc">{{message}}</div>
        </div>
        <div ref="preso" class="preso"></div>
    </div>
</template>



<script>
import * as Presenta from '@presenta/lib'
import axios from 'axios'

export default {
    
    data(){
        return{
          username:'bts',
          message:false,
          scenes:[]
        }
    },
    mounted(){
      new Presenta(this.$refs.preso, {
        colors: 'adele',
        fonts: 'finch',
        scenes:[{
          blocks:[{
            type:'text',
            textVar:'title',
            text:'<h1>Instagram slides generator</h1>'
          }]
        }]
      })
    },
    computed:{
      colorvars(){
        return Presenta.colorvars
      }
    },
    methods:{
      generate(){
        this.$refs.preso.innerHTML = ''

        let doc = {
            transition: 'hSlide',
            colors: 'adele',
            controllers:{
              pagenum:true,
              preload:true,
              swiper:true
            },
            scenes:this.scenes
          }
        new Presenta(this.$refs.preso, doc)
      },


      async fetch(){
        this.message = 'Loading...'
        this.scenes = []
        try{
          let res = await axios.get(`https://www.instagram.com/${this.username}/?__a=1`)
          let dt = res.data
          console.log(dt)
          if(dt.graphql && dt.graphql.user){
            let arr = dt.graphql.user.edge_owner_to_timeline_media.edges
            
            if(arr.length > 0){
              arr.forEach((d,i) => {
                let rnd = Math.random()>.5

                let scene = {
                  layout:rnd?'left':'cols',
                  blocks:[{
                    type:'image',
                    url: d.node.thumbnail_src
                  }]
                }

                let cap = d.node.accessibility_caption
                if(cap){
                  let blk = {
                    type:'text',
                    textVar:'text',
                    scale:1,
                    colorVar: this.colorvars[i%this.colorvars.length],
                    text: `<h1>${cap}</h1>`
                  }
                  if(rnd){
                    scene.blocks.push(blk)
                  }else{
                    scene.blocks.unshift(blk)
                  }
                  
                }
                this.scenes.push(scene)
              })
              this.generate()
              this.message = false
            }else{
              this.message = "No media for this user."
            }
          }else{
            this.message = "Sorry, there's an error on the response. Try another one."
          }
        }catch(err){
          this.message = "Sorry, there's an error on the response. Try another one."
        }
      }
    }
}
</script>



<style scoped>
.bar{
  background-color: #eee;
  padding: 1rem;
}
.toolbar{
  display: flex;
  justify-content: space-between;
}
.toolbar p{
  margin-top:0;
}
.preso{
  height: 400px;
}
.desc{
  font-size: .75rem;
  margin-top: .75rem;
}
</style>