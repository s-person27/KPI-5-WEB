<template>
  <div class="container-fluid ">
    <div class="row" style="margin: 1%"></div>
    <div class="row">
      <div class="col"></div>

      <div class="col-md-8  rounded justify-content-center  ">
        <div class="card card-body" style="background-color:#efefef ">
          <form @submit.prevent="registerUser">
            <h1 style="text-align: center">Sign Up </h1>
            <div class="mb-md-3 d-grid gap-2 ">
              <div class="input-group mb-3">
                <span class="input-group-text" id="username">Username</span>
                <input v-model="username" id="username" type="text" class="form-control"
                       placeholder="First Name" aria-label="First Name"
                       aria-describedby="basic-addon1" required>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">Email</span>
                <input v-model="email" id="email" type="email" class="form-control" placeholder="Email"
                       aria-label="Email"
                       aria-describedby="basic-addon1" required>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="password">Password</span>
                <input v-model="password"   type="password" class="form-control" id="password"
                       placeholder="Password" required>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="password">Confirm Password</span>
                <input v-model="confirmPassword" type="password" class="form-control"
                       id="confirmPassword"
                       placeholder="confirmPassword" required>
              </div>


              <form>
                <div class="input-group mb-3">
                  <span class="input-group-text">Birthday:</span>
                  <input v-model="date" id="=birthday" data-cy="birthday-input" type="date" class="form-control" required>
                </div>
              </form>
              <div class="input-group mb-3">
                <span class="input-group-text">Sex </span>
                <select id="sex" v-model="sex" class="form-select " aria-label="Default select example"
                        required>
                  <option selected value="1">Male</option>
                  <option value="2">Female</option>
                </select>
              </div>
            </div>

            <div class="d-grid gap-2">
              <button @click="registerUser" type="submit" value="submit" class="btn btn-primary  bt btn-block"> Submit
              </button>
            </div>

          </form>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>


import { mapMutations } from 'vuex';

export default {
  name: "registration",
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      sex: '',
      date: ''
    };
  },
  methods: {
    ...mapMutations(['addUser']),
    registerUser() {
      const user = {
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        sex: this.sex,
        birthday: this.date,
        username: this.username,
      };

      const existingUser = this.$store.state.userlist.find(item => item.email === user.email);
      if (existingUser) {
        window.alert('User with this email already exists');
        return;
      }

      if (user.password !== user.confirmPassword) {
        window.alert('Passwords do not match');
        return;
      }

      this.addUser(user);
      this.$router.push('/login');
    },

  },
};
</script>

<style scoped>

</style>


//
//
// export default {
//   name: "registration",
//   data() {
//     return {
//       username: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       sex: '',
//       date: ''
//     }
//   }
//   ,
//   methods : {
//     registerUser(){
//       let user = {
//         email: this.email,
//         password: this.password,
//         confirmPassword : this.confirmPassword,
//         sex : this.sex,
//         date : this.date,
//         username : this.username,
//       }
//       if (user.email) {
//         store.state.userlist.forEach((item) => {
//           if (item.email === user.email ) {
//             window.alert('user with this email already exists');
//             return false ;
//           }else if (user.password !== user.confirmPassword){
//             window.alert('passwords do not match');
//             return false ;
//           }else{
//             store.commit('addUser', user);
//             this.$router.push('/login');
//           }
//
//         })
//
//     }
//   }
// } ,
//   mounted() {
//     console.log(store.state.userlist)
//   }
// }
//

