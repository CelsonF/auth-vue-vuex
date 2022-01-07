import Vue from 'vue'
import Vuex from 'vuex'
import action from './actions'
import mutations from './mutations.js'

Vue.use(Vuex)

const estado = {
    token:null,
    usuario:{}
}

export default new Vuex.Store({
    state:estado,
    mutations,
    actions:action
})