<template>
  <div>
    <!-- Nav for medium -> larage device -->
    <nav class="xl:flex hidden justify-between items-center">
      <div class="flex gap-4 items-center flex-grow">
        <img src="~assets/img/logo.png" />
        <h3 class="font-bold text-2xl text-left text-dark">sandcation</h3>
      </div>

      <ul class="xl:flex items-center gap-5 hidden text-grey">
        <li
          class="hover:cursor-pointer"
          :class="{ nav_active: active == 'home' }"
        >
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li :class="{ nav_active: active == 'penginapan' }">
          <nuxt-link to="/penginapan">Booking Penginapan</nuxt-link>
        </li>
        <li :class="{ nav_active: active == 'trip' }">
          <nuxt-link to="/trip">Paket Trip</nuxt-link>
        </li>
      </ul>
      <div v-if="!getLoged" class="xl:block hidden col-span-2 ml-10">
        <nuxt-link to="/register"
          ><button class="bg-yellow px-5 py-2 rounded-lg text-white">
            Masuk
          </button></nuxt-link
        >
      </div>
      <div v-if="getLoged" class="xl:block hidden col-span-2 ml-10">
        <nuxt-link :to="'/profile/' + getUser.id"
          ><span class="font-bold">Hi, {{ getUser.name }}</span>
        </nuxt-link>
      </div>
    </nav>
    <!-- End Nav for medium -> larage device -->

    <!-- Nav for small device -->
    <div
      :class="{ hidden: !show }"
      class="shadow-overlay"
      @click="showNav()"
    ></div>
    <nav class="nav-small flex xl:hidden bg-white items-center">
      <div class="flex gap-4 items-center flex-grow">
        <img src="~assets/img/logo.png" />
        <h3 class="font-bold text-2xl text-left text-dark">sandcation</h3>
      </div>
      <div
        @click="showNav()"
        class="block lg:hidden cursor-pointer"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <ul
        @click="showNav()"
        class="
          fixed
          bg-white
          z-50
          right-0
          flex flex-col
          text-left
          gap-8
          text-grey
          max-h-screen
          small-nav
          px-10
        "
        :class="{ small_nav_show: show }"
      >
        <li
          class="hover:cursor-pointer"
          :class="{ nav_active: active == 'home' }"
        >
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li :class="{ nav_active: active == 'penginapan' }">
          <nuxt-link to="/penginapan">Booking Penginapan</nuxt-link>
        </li>
        <li :class="{ nav_active: active == 'trip' }">
          <nuxt-link to="/trip">Paket Trip</nuxt-link>
        </li>

        <li v-if="!getLoged" class="xl:block hidden col-span-2 ml-10">
          <nuxt-link to="/register"
            ><button class="bg-yellow px-5 py-2 rounded-lg text-white">
              Masuk
            </button></nuxt-link
          >
        </li>
        <li v-if="getLoged" class="xl:block hidden col-span-2 ml-10">
          <nuxt-link :to="'/profile/' + getUser.id"
            ><span class="font-bold">Hi, {{ getUser.name }}</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>

    <!-- End Nav for small device -->
    <nav></nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["active"],
  data() {
    return {
      show: false,
      loged: false,
    };
  },
  methods: {
    ...mapActions({
      profile: "auth/profile",
    }),

    showNav() {
      this.show = this.show ? false : true;
    },
  },
  computed: mapGetters({
    getLoged: "auth/getLoged",
    getUser: "auth/getUser",
  }),
  created() {
    if (this.getLoged) {
      // this.profile();
    }
  },
};
</script>

<style scoped>
</style>