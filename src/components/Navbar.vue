<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="success">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <router-link to="/" activeClass="">Home</router-link>
                    <router-link to="/about">About</router-link>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

    nav a {
        font-weight: bold;
        color: #fefefe;
        padding: 10px;
        text-decoration: none;
    }

    nav a.router-link-exact-active {
        background-color: #fefefe;
        padding: 10px;
        border-radius: 1px solid #b2b2b2;
        color: #28A745;
        text-decoration: none;
    }
</style>