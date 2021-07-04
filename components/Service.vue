<template>
  <div>
    <h4 class="font-bold text-2xl text-center">Penyedia Jasa</h4>
    <p class="text-grey text-center mb-20">
      daftarkan propetimu di sand cation
    </p>
    <nuxt-link to="/profile/jasa-trip">
      <div class="relative mb-14">
        <h2 class="absolute font-bold text-white text-5xl bottom-24 left-10">
          Agensi Trip
        </h2>
        <img src="~assets/img/ship.png" class="rounded-2xl" /></div
    ></nuxt-link>

    <nuxt-link to="/profile/jasa-penginapan">
      <div class="relative">
        <h2 class="absolute font-bold text-white text-5xl bottom-24 left-10">
          Properti Penginapan
        </h2>
        <img src="~assets/img/hotel-2.png" class="rounded-2xl" />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>