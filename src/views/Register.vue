<template>
  <div class="center min-h-screen">
    <div class="title">
      <h1>Register Page</h1>
      <div class="glass absolute"></div>
    </div>
    <form @submit.prevent="onSubmit" class="glass center form">
      <label for="email">Email</label>
      <div class="input-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="input-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <input
          type="text"
          class="input glass"
          id="email"
          v-model="form.email"
          placeholder="example@web.com"
        />
      </div>
      <label for="password">Password</label>
      <div class="input-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="input-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        <input
          type="password"
          class="input glass"
          id="password"
          v-model="form.password"
          placeholder="enter your password"
        />
      </div>
      <div class="action">
        <router-link to="/login" class="glass btn">login</router-link>
        <button class="glass btn">register</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data: () => ({
    form: {
      email: "",
      password: "",
    },
  }),
  methods: {
    async onSubmit() {
      try {
        await axios.post("https://reqres.in/api/register", this.form);
        this.bus.$emit("snackbar", {
          show: true,
          message: "Register successfully, Please login.",
        });
        this.$router.push("/login");
      } catch ({ response }) {
        this.bus.$emit("snackbar", {
          show: true,
          message: response.data.error,
          danger: true,
        });
      }
    },
  },
};
</script>
