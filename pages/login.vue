<template>
  <div class="grid grid-cols-2 h-full">
    <Loading />
    <div class="relative">
      <img class="h-full" src="~/assets/img/login-image.jpg" />
    </div>
    <div>
      <div class="mt-16">
        <nuxt-link to="/">
          <div class="grid grid-flow-col grid-cols-3 gap-4">
            <img class="block ml-auto" src="~assets/img/logo.png" />
            <h2 class="text-left font-bold text-3xl">sandcation</h2>
          </div>
        </nuxt-link>

        <h2 class="text-left font-bold text-5xl mt-10">Login.</h2>
        <p class="text-grey">Mulai perjalanan serumu dari sini</p>

        <div class="mt-10">
          <p v-if="!validate" class="text-danger mb-5 italic">
            Harap isi semua kolom!
          </p>
          <p v-if="!validate_email" class="text-danger mb-5 italic">
            Email tidak valid
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
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      validate: true,
      validate_email: true,
    };
  },

  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    ...mapMutations({
      setLoading: "setLoading",
    }),
    async submit() {
      this.validate = true;
      this.validate_email = true;
      if (!this.email || !this.password) {
        this.validate = false;
        return;
      }
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const emailValid = re.test(String(this.email).toLowerCase());
      if (!emailValid) {
        this.validate_email = false;
        return;
      }
      this.setLoading(true);
      await this.login({
        email: this.email,
        password: this.password,
      });
      this.setLoading(false);
      document.location.href = "/";
    },
  },
};
</script>

<style scoped>
</style>