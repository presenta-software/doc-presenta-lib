//import BaseButton from '../../components/BaseButton'

import * as Presenta from '@presenta/lib'
import ControllerSwiper from '@presenta/controller-swiper'
import ModuleMarkdown from '@presenta/module-markdown'
Presenta.use(ControllerSwiper)
Presenta.use(ModuleMarkdown)


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
