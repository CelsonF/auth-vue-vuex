import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations.js'

Vue.use(Vuex)

const estado = {
    token:localStorage.getItem('token') || '',
    usuario:{}
}

const getters = {
    usuarioEstaLogado: state => Boolean(state.token)
}

export default new Vuex.Store({
    state:estado,
    mutations,
    actions,
    getters
})