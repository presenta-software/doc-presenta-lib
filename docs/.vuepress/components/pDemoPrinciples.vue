<template>
    <div class="prev">
        <div ref="preso" class="preso"></div>
    </div>
</template>



<script>
import * as Presenta from '@presenta/lib'

let principles = [
  'Content\nis king',
  'Less\nis more',
  'Automate\nwhere\npossible',
  'Save\npeople\ntime',
  'Done is\nbetter\nthan\nperfect',
  'Slides\naren’t\nspeaker\nnotes'
]
let colorVars = Presenta.colorvars
let scenes = principles.map((d,i) => {
  return {
    blocks:[{
      type:'fitty',
      text: `${d.toUpperCase()}`,
      linefactor:.9,
      colorVar: colorVars[i%3]
    }]
  }
})


export default {
    
    data(){
        return{
            doc:{
              colors: 'dania',
              controllers:{
                autoplay:2500,
                arrows:false,
                loop:true
              },
              transition:'slideOver',

              //fontText:'var(--fontHeading)',
              scenes:scenes
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