<template>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto  col-md-2 px-0 bg-white">
                <div class="d-flex flex-column  px-2 pt-2 ">
                </div>
            </div>
            <div class="col-auto col-md-8">
                <router-view></router-view>
            </div>
            <div class="col-auto col-md-2">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "mainbody"
}
</script>

<style scoped>

</style>


