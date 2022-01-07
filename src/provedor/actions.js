import http from '../http'

const action = {
    efetuarLogin({commit},usuario) {
        return new Promise((resolve,reject) => {
            http.post('auth/login',usuario)
            .then(response => {
                commit('DEFINIR_USUARIO_LOGADO', {
                    token:response.data.access_token,
                    usuario:response.data.user
                })
                resolve(response.data)
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
        })
    }
}

export default action;