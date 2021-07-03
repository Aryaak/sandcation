<template>
  <div>
    <nav class="flex justify-between items-center">
      <div class="flex gap-4 items-center flex-grow">
        <img src="~assets/img/logo.png" />
        <h3 class="font-bold text-2xl text-left text-dark">sandcation</h3>
      </div>
      <ul class="flex items-center gap-5 text-grey">
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
      <div class="col-span-2 ml-10">
        <nuxt-link to="/register"
          ><button class="bg-yellow px-5 py-2 rounded-lg text-white">
            Masuk
          </button></nuxt-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["active"],
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>