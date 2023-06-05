<template>
  <div class="container-fluid">
    <div class="row" style="margin: 1%"></div>
    <div class="row">
      <div class="col"></div>
      <div class="col-md-5  rounded justify-content-center  ">
        <div class="card card-body" style="background-color: #efefef ">
          <form name="Update_profile" method="post">
            <h1 style="text-align: center">Edit Profile</h1>
            <div class="mb-md-3 d-grid gap-2">
              <div class="input-group mb-3">
                <span class="input-group-text" id="username">UserName</span>
                <input v-model="form.username" type="text" class="form-control" placeholder="First Name"
                       aria-label="First Name"
                       aria-describedby="basic-addon1"
                       id="username"
                >
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="email">Email</span>
                <input v-model="form.email" type="email" class="form-control" placeholder="Email" aria-label="Email"
                       aria-describedby="basic-addon1"
                       id="useremail">
              </div>
              <form>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="=birthday">Birthday:</span>
                  <input type="date" v-model="form.birthday" data-userbirthday class="form-control" id="bday">
                </div>
              </form>
              <div class="input-group mb-3">
                <span class="input-group-text" id="sex">Sex </span>
                <select v-model="form.sex" data-usersex class="form-select " aria-label="Default select example"
                        id="sex">
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
              </div>
            </div>
            <div class="d-grid gap-2">
              <button type="submit" @click="handleSubmit" class="btn btn-primary  bt btn-block"> Save</button>
            </div>
            <div class="message" v-if="submitted">
              Thank you for your submission, {{ form }}.
            </div>
          </form>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditProfile",
  data() {
    return {
      form: {
        username: '',
        email: '',
        birthday: '',
        sex: 1,
      },
      submitted: false
    }
  },
  mounted() {
    // Отримати поточні дані користувача зі Store та заповнити форму за замовчуванням
    const user = this.$store.getters.getUser;
    this.form.username = user.username;
    this.form.email = user.email;
    this.form.birthday = user.birthday;
    this.form.sex = user.sex;
  },
  methods: {
    handleSubmit() {
      // this.submitted = true;
      // console.log(this.form);
      // this.$router.push({name: 'profile', params: {form: this.form}});
      // if (this.checkDate() && this.checkSex() && this.checkEmail()) {
      //   this.submitted = true;
      //   alert("Update success");
      //   this.$router.push({name: 'profile'});
      //   // console.log(this.form);
      // } else {
      //   alert("Update fail");
      //   this.$router.push('');
      // }


    },
    checkDate() {
      if (this.form.birthday !== '') {

        var tmp = this.form.birthday.split('-');
        const date = new Date();
        console.log(date.getFullYear() + " " + date.getMonth() + " " + date.getDate());
        if (tmp[0] >=date.getFullYear() && tmp[1] >= date.getMonth() && tmp[2] >=date.getDate()) {
          alert("Date is not valid");
          console.log('false');
          return false;
        } else {
          console.log('true');
          return true;
        }
      } else {
        if (this.form.birthday === '') return false;
      }
    },
    checkSex() {
      console.log('false');
      return this.form.sex !== '';
    },
    checkEmail() {
      if (this.form.email !== '') {

        return true;
      } else {
        alert("Email is not valid");
        return false;
      }
    }
  },
};
</script>

<style scoped>

</style>
