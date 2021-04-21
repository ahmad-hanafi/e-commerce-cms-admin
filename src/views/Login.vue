<template>
  <!-- <h1>ini masuk login</h1> -->
  <div class="row" style="height: 100vh">
    <div class="container">
      <div class="col-md-12">
        <div class="form-signin">
          <form>
            <h1 class="h3 mb-3 fw-normal">Hai there, welcome !</h1>
            <br />
            <label for="email">Email address</label><br />
            <input
              type="email"
              v-model="email"
              class="form-control"
              placeholder="Email address"
              required
              autofocus
            /><br />
            <label for="password">Password</label><br />
            <input
              type="password"
              v-model="password"
              class="form-control"
              placeholder="Password"
              required
            /><br />
            <button
              class="w-100 btn btn-lg btn-primary"
              id="btn-login"
              @click.prevent="login"
              type="submit"
            >
              Login</button
            ><br />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      // console.log(this.email, this.password);
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
        router: this.$router
      })
    },
  },
};
</script>

<style>
</style>