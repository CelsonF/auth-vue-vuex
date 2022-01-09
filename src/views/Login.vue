<template>
  <div class="container">
    <h1 class="my-3">Login</h1>
    <form @submit.prevent="efetuarLogin">
      <div class="form-group">
        <label for="email">E-mail</label
        ><input
          type="text"
          name="email"
          id="email"
          class="form-control"
          v-model="usuario.email"
        />
      </div>
      <div class="form-group">
        <label for="senha">Senha</label
        ><input
          type="password"
          name="senha"
          id="senha"
          class="form-control"
          v-model="usuario.senha"
        />
      </div>
      <p class="alert alert-danger" v-if="mensagemErro">{{mensagemErro}}</p>
      <div class="form-group d-flex align-items-center justify-content-between">
        <button type="submit" class="btn btn-primary">Logar</button>
        <router-link :to="{ name: 'novo.usuario' }">
          Não possui um cadastro, cadastre-se aqui!
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        email: "",
        senha: "",
      },
      mensagemErro:''
    };
  },
  methods: {
    efetuarLogin() {
      this.$store
        .dispatch("efetuarLogin", this.usuario)
        .then(() => {
          this.$router.push({ name: "gerentes" })
          this.mensagemErro = "";
        })
        .catch(erro => {
          if(erro.request.status == 401) {
            this.mensagemErro = "Login ou senha inválido(s)";
          }
        });
    },
  },
};
</script>

<style></style>
