<template>
    <nav class="navbar bg-gradient navbar-dark navbar-expand-lg bg-body-tertiary " style="background-color: #808080 ">
        <div class="container-fluid container px-2 px-lg-3">

            <a class="navbar-brand" style="color: #1a1e21" href="/"><img
                    style="width: 30px; height: 30px ; margin-left:5%"
                    src="../assets/logo.svg">KeyStore</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="   navbar-nav ms-auto mb-3 mb-lg-1 ">

                    <router-link to="/" class="nav-link">Home</router-link>
                    <router-link to="cart" class="nav-link">Cart</router-link>
                    <router-link to="about" class="nav-link">About</router-link>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                           aria-expanded="false">
                            Profile
                        </a>
                        <ul class="dropdown-menu">

                            <router-link to="profile" class="dropdown-item">Profile</router-link>
                            <router-link to="login" class="dropdown-item">login</router-link>
                            <router-link to="login" class="dropdown-item">logout</router-link>

                        </ul>
                    </li>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navbar"
}
</script>

<style scoped>

</style>