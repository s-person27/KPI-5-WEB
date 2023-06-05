<template>
  <div class="container-fluid ">
    <div class="row" style="margin: 1%"></div>
    <div class="row">
      <div class="col"></div>

      <div class="col-md-5  rounded justify-content-center  ">
        <div class="card card-body" style="background-color:#efefef ">
          <form name="Sign_in" method="post">

            <h1 style="text-align: center">Sign in </h1>

            <div class="mb-md-3 d-grid gap-2 ">
              <div class="form-floating">
                <input v-model="form.email" type="email" data-cy="email-input" class="form-control" id="floatingInput"
                       placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating">
                <input v-model="form.password" type="password"  data-cy="password-input" class="form-control" id="floatingPassword"
                       placeholder="Password">
                <label for="floatingPassword">Password</label>
              </div>
            </div>
            <div class="d-grid gap-2">

              <button  id="login" type="submit" @click="login" data-cy="submit-button" class="btn btn-primary  bt btn-block">Login
              </button>
            </div>

            <p class="text-center">Don't have a account?
              <router-link to="registration">Sing Up</router-link>
            </p>

          </form>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>


</template>

<script>

import store from '../store/store.js';
import router from "@/router/router";


export default {
  name: "login",
  data() {
    return {
      form: {
        email: 'admin@admin.com',
        password: 'admin',
      }
    }

  },
  methods: {
    login() {
      // Викликати дію loginUser з Store, передаючи дані з форми входу
      this.$store.dispatch('loginUser', {
        email: this.form.email,
        password: this.form.password
      }).then(() => {
        this.$router.push('/');
      }).catch(() => {
        // Обробка помилки входу
        window.alert('Email або пароль невірний');
        this.$router.push('/');
      });
    },
  },
}
</script>

<style scoped>

</style>