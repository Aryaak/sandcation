<template>
  <div class="xl:container mx-auto mt-10 xl:px-16 px-10">
    <Header active="trip" />
    <div class="relative w-full mt-10 xl:mb-20 mb-10 overflow-hidden">
      <h1
        class="
          absolute
          text-white
          font-bold
          xl:text-6xl
          text-3xl
          xl:left-20
          xl:top-40
          left-10
          top-20
        "
      >
        Trip Nyaman dengan <br />
        Sandcation.
      </h1>
      <img src="~assets/img/trip-hero.png" class="w-full rounded-3xl" />
    </div>
    <div class="text-center xl:mb-20 mb-10">
      <h2 class="font-bold xl:text-5xl text-3xl">Paket Trip</h2>
      <p class="text-grey xl:text-md text-sm">
        Ayo cari dan pesan liburanmu sekarang juga
      </p>
    </div>
    <div class="grid xl:grid-cols-3 grid-cols-1 gap-10 xl:mb-20 mb-10">
      <Trip />
      <Trip />
      <Trip />
      <Trip />
      <Trip />
      <Trip />
      <Trip />
      <Trip />
      <Trip />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>