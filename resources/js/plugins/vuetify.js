// https://github.com/vuetifyjs/vuetify-loader/issues/144#issuecomment-657693564
// https://vuetifyjs.com/en/getting-started/installation/#webpack-install

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import colors from 'vuetify/lib/util/colors'

// yarn add material-design-icons-iconfont -D
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// yarn add @mdi/font
import '@mdi/font/css/materialdesignicons.css'

const vuetify = new Vuetify({
    icons: {
        iconfont: 'md',
    },
})

Vue.use(Vuetify)

export default vuetify