<template>
<!--  <navbar/>-->
    <div class="col-auto px-2 px-lg-2 m-2">
        <h3 class="text-center">Keyboards</h3>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class=" col col-md-3 px-1">

                        <img class="img-thumbnail" src="../images/keyboard-red.jpg">
                    </div>
                    <div class="col-auto col-md-6 px-2 ">

                        <p class="text">Name: HyperX Alloy FPS</p>
                        <p class="text"> Price: 300$ </p>
                        <p class="text">Description: HyperX Alloy FPS</p>

                    </div>
                    <div class=" col col-md-3 px-1">
                        <button @click="increase" class="btn-outline-success btn update-cart" data-product=""
                                data-action="add" href="">Buy
                        </button>


                    </div>
                </div>

            </div>
            <hr>
            <div class="card-body">
                <div class="row">
                    <div class=" col col-md-3 px-1">

                        <img class="img-thumbnail" src="../images/keyboard-rgb.jpg">
                    </div>
                    <div class="col-auto col-md-6 px-2 ">

                        <p class="text">Name: Keychrone K2 RGB</p>
                        <p class="text"> Price: 500$ </p>
                        <p class="text">Description: Keychrone K2 RGB </p>

                    </div>
                    <div class=" col col-md-3 px-1">
                        <button @click="increase" class="btn-outline-success btn update-cart" data-product=""
                                data-action="add" href="">Buy
                        </button>


                    </div>
                </div>

            </div>
            <div class="card-body">
                <div class="row">
                    <div class=" col col-md-3 px-1">
                        <img class="img-thumbnail" src="../images/keyboard-chocolate.jpg">
                    </div>
                    <div class="col-auto col-md-6 px-2 ">

                        <p class="text">Name: Chocolate keyboard</p>
                        <p class="text"> Price: 700$ </p>
                        <p class="text">Description: Chocolate keyboard </p>

                    </div>
                    <div class=" col col-md-3 px-1">
                        <button @click="increase" class="btn-outline-success btn update-cart" data-product=""
                                data-action="add" href="">Buy
                        </button>


                    </div>
                </div>
            </div>
        </div>
    </div>
    <router-view></router-view>
</template>

<script>
import navbar from './navbar.vue'
import store from "@/store/store";
export default {
    name: "store",
    methods: {
      increase(){
         store.state.count++;
         console.log(store.state.count);
      },
    },
}
</script>

<style scoped>

</style>
