<template>
  <div class="container-fluid">
    <div class="row" style="margin: 1%"></div>
    <div class="row">
      <div class="col"></div>
      <div class="col-md-5  rounded justify-content-center  ">
        <div class="card card-body " style="background-color: #efefef ">
          <h1 style="text-align: center">Profile </h1>
          <div class="mb-md-3 d-grid gap-3 ">
            <table class="table ">
              <tr>
                <th scope="row">Name</th>
                <td>{{user.username}}</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td>{{user.email}}</td>
              </tr>
              <tr>
                <th scope="row">Birthday</th>
                <td>{{user.birthday}}</td>
              </tr>
              <tr>
                <th scope="row">Sex</th>
                <td>{{ user.sex === 1 ? 'Male' : 'Female' }}</td>
              </tr>

            </table>
            <a type="button" class="btn btn-secondary" href="editprofile">
              Edit
            </a>

          </div>

        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: "profile",
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
}
</script>

<style scoped>

</style>