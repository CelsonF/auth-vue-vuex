<template>
  <div class="container">
      <h1 class="my-2">Novo Usuário</h1>
      <form @submit.prevent="enviarFormulario">
        <div class="form-group">
          <label for="nome">Nome</label
          ><input type="text" name="nome" id="nome" class="form-control" v-model="usuario.nome"/>
        </div>
        <div class="form-group">
          <label for="email">E-mail</label
          ><input type="text" name="email" id="email" class="form-control" v-model="usuario.email"/>
        </div>
        <div class="form-group">
          <label for="senha">Senha</label
          ><input type="password" name="senha" id="senha" class="form-control" v-model="usuario.senha"/>
        </div>
        <button class="btn btn-primary" type="submit">Salvar</button>
      </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
   data() {
     return{
       usuario: {
         nome:'',
         email:'',
         senha:''
       }
     }
   },
   methods: {
     enviarFormulario() {
       axios.post('http://localhost:8000/auth/register',this.usuario)
       .then(resposta => {
         console.log(resposta)
       })
       .catch(error => {
         console.log(error)
       })
     }
   }
};
</script>

<style lang="sass">
</style>