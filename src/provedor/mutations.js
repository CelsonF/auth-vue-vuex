const mutations = {
    DEFINIR_USUARIO_LOGADO(state, {token,usuario}) {
        state.token = token
        state.usuario = usuario
    },
    DESLOGAR_USUARIO(state) {
        state.token = null
        state.usuario = {}
    }
}

export default mutations;