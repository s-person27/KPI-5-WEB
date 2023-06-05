<template>
    <div class="container-fluid ">
        <div class="row" style="margin: 1%"></div>
        <div class="row">
            <div class="col"></div>
            <div class="col-md-5  rounded justify-content-center  ">
                <div class="card card-body" style="background-color:#efefef">
                    <form name="Update_profile" method="post">
                        <h1 style="text-align: center">Edit Profile </h1>
                        <div class="mb-md-3 d-grid gap-2 ">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="username">UserName</span>
                                <input type="text" class="form-control" placeholder="First Name" aria-label="First Name"
                                       aria-describedby="basic-addon1">
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="email">Email</span>
                                <input type="email" class="form-control" placeholder="Email" aria-label="Email"
                                       aria-describedby="basic-addon1">
                            </div>
                            <form>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="=birthday">Birthday:</span>
                                    <input type="date" class="form-control">
                                </div>
                            </form>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="sex">Sex </span>
                                <select class="form-select " aria-label="Default select example">
                                    <option selected value="1">Male</option>
                                    <option value="2">Female</option>
                                </select>
                            </div>
                        </div>
                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-primary  bt btn-block"> Save</button>
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
    name: "editprofile"
}
</script>

<style scoped>

</style>