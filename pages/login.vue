<template>
  <div class="grid grid-cols-2 h-full">
    <Loading />
    <div class="relative">
      <h1 class="absolute right-24">Mari Liburan bersama Sandcation</h1>
      <img class="h-full" src="~/assets/img/login-image.jpg" />
    </div>
    <div>
      <div class="mt-16">
        <div class="grid grid-flow-col grid-cols-3 gap-4">
          <img class="block ml-auto" src="~assets/img/logo.png" />
          <h2 class="text-left font-bold text-3xl">sandcation</h2>
        </div>

        <h2 class="text-left font-bold text-5xl mt-10">Login.</h2>
        <p class="text-grey">Mulai perjalanan serumu dari sini</p>

        <div class="mt-10">
          <p v-if="!validate" class="text-danger mb-5 italic">
            Harap isi semua kolom!
          </p>
          <input
            v-model="email"
            class="bg-semiGray py-5 px-5 rounded-md w-4/5 focus:outline-none"
            type="email"
            placeholder="Email"
          />
          <input
            v-model="password"
            class="
              bg-semiGray
              py-5
              px-5
              rounded-md
              mt-5
              w-4/5
              focus:outline-none
            "
            type="password"
            placeholder="Password"
          />
        </div>

        <button
          @click="submit()"
          class="
            mt-14
            block
            text-center
            bg-yellow
            px-20
            text-white
            py-3
            rounded-md
            text-2xl
          "
        >
          Login
        </button>
        <p class="mt-12">
          Belum punya akun?
          <nuxt-link to="/register" class="text-yellow"
            >Daftar disini</nuxt-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      validate: true,
    };
  },

  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    submit() {
      this.validate = true;
      if (!this.email || !this.password) {
        this.validate = false;
        return;
      }
      this.login({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
</style>