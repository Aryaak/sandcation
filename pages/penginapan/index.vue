<template>
  <div class="container mx-auto mt-10">
    <Header active="penginapan" />
    <div class="relative w-full mt-10 mb-20 overflow-hidden">
      <h1 class="absolute text-white font-bold text-6xl left-20 top-40">
        Booking penginapan <br />
        sesuai pilihanmu.
      </h1>
      <img src="~assets/img/penginapan-hero.jpg" class="w-full rounded-3xl" />
    </div>
    <div class="text-center mb-20">
      <h2 class="font-bold text-5xl">Booking Penginapan</h2>
      <p class="text-grey">
        Ayo booking penginapan yang sesuai dengan pilihanmu
      </p>
    </div>
    <div class="grid grid-cols-3 gap-10 mb-20">
      <Penginapan />
      <Penginapan />
      <Penginapan />
      <Penginapan />
      <Penginapan />
      <Penginapan />
      <Penginapan />
      <Penginapan />
      <Penginapan />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>