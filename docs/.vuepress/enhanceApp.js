//import BaseButton from '../../components/BaseButton'


import * as Presenta from '@presenta/lib'

import ControllerSwiper from '@presenta/controller-swiper'
import ControllerMarkdown from '@presenta/controller-markdown'
import ModuleHighlightJs from '@presenta/module-highlightjs'
import ModuleToast from '@presenta/module-toast'
import ModuleStickers from '@presenta/module-stickers'
import BlockYoutube from '@presenta/block-youtube'
import BlockFitty from '@presenta/block-fitty'

Presenta.use(ControllerSwiper)
Presenta.use(ControllerMarkdown)
Presenta.use(ModuleHighlightJs)
Presenta.use(ModuleToast)
Presenta.use(ModuleStickers)
Presenta.use(BlockYoutube)
Presenta.use(BlockFitty)


// async function is also supported, too
export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData, // site metadata
    isServer // is this enhancement applied in server-rendering or client
  }) => {
  //Vue.component('BaseButton', BaseButton)
} 
