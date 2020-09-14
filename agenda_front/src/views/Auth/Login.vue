<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-lg-8 d-none d-md-block bg-cover"
        style="background-image: url('https://images.unsplash.com/photo-1501834124315-b86b92625282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');"
      ></div>
      <div class="col-lg-4 bg-white">
        <div class="row align-items-center m-h-100">
          <div class="mx-auto col-md-8">
            <div class="p-b-20 text-center">
              <p>
                <img src="https://img.icons8.com/cotton/2x/bitcoin.png" width="80" alt />
              </p>
              <p class="admin-brand-content">Project R</p>
            </div>
            <h3 class="text-center p-b-20 fw-400">Login</h3>
            <form class="needs-validation" action="#">
              <div class="form-row">
                <div class="form-group floating-label col-md-12">
                  <label>Email</label>
                  <input type="email" required class="form-control" placeholder="Email" />
                </div>
                <div class="form-group floating-label col-md-12">
                  <label>Password</label>
                  <input type="password" required class="form-control" />
                </div>
              </div>
              <!-- <router-link :to="{path:'index'}" class="btn btn-primary btn-block btn-lg">Login</router-link> -->

              <button @click.prevent="login()" class="btn btn-primary btn-block btn-lg">Login</button>
            </form>
            <p class="text-right p-t-10">
              <a href="#!" class="text-underline">Forgot Password?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "jack@mail.com",
        password: "jack@mail.com"
      }
    };
  },
  components: {
    // Register,
  },
  mounted() {
    // if (this.$store.getters.isAuthenticated) {
    //   this.$router.replace({ name: "index" });
    //   console.log("your logged in");
    // }
    // this.$store.dispatch("ATTEMPT");
  },
  methods: {
    login() {
    //   this.$store.dispatch("LOGIN", this.user);
    }
  }
};
</script>

<style>
</style>