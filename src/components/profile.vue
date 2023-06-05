<template>
    <div class="container-fluid">
        <div class="row" style="margin: 1%"></div>
        <div class="row">
            <div class="col"></div>
            <div class="col-md-5  rounded justify-content-center  ">
                <div class="card card-body " style="background-color:#efefef">


                    <h1 style="text-align: center">Profile</h1>
                    <div class="mb-md-3 d-grid gap-3 ">
                        <table class="table ">

                            <tr>
                                <th scope="row">Name</th>
                                <td>Danil</td>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td>example@gmail.com</td>
                            </tr>
                            <tr>
                                <th scope="row">Birthday</th>
                                <td>27.01.2001</td>
                            </tr>
                            <tr>
                                <th scope="row">Sex</th>
                                <td>Male</td>
                            </tr>

                        </table>
                        <a type="button" class="btn btn-secondary" href="editprofile">
                            <img src="../assets/pen.svg" width="16" height="16">
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
    name: "profile"
}
</script>

<style scoped>

</style>