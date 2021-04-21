<template>
    <nav class="navbar sticky-top navbar-light bg-light">
      <h2>Toko Beras</h2>
      <router-link class="btn" to="/">Home</router-link>
      <router-link class="btn btn-success" to="/products/add">Add Item</router-link>
      <a class="btn btn-outline-danger" @click.prevent="logout"> Logout</a>
    </nav>

</template>

<script>
export default {
    name: "Navbar",
    methods: {
      logout() {
      localStorage.removeItem("access_token");
      this.$router.push("/login");
    },
    }
}
</script>

<style>

</style>
