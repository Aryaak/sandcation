<template>
  <div class="xl:container mx-auto mt-10 xl:px-16 px-10">
    <Header active="home" />
    <div class="relative w-full mt-10 xl:mb-20 mb-10">
      <div
        class="
          absolute
          text-white
          font-bold
          xl:text-6xl
          text-3xl
          xl:left-20
          xl:top-40
          left-10
          top-10
        "
      >
        <h1 class="font-black">
          Staycation Seru <br />
          Dalam Satu Platform.
        </h1>
        <p class="xl:text-3xl text-sm">Cari dan booking pengalaman terbaik.</p>
        <button
          class="
            bg-yellow
            rounded-2xl
            xl:mt-14
            mt-10
            px-8
            py-2
            xl:text-xl
            text-lg
          "
        >
          Booking sekarang
        </button>
      </div>
      <img src="~assets/img/home-hero.png" class="w-full rounded-3xl" />
      <div
        class="
          xl:px-24
          px-5
          hero-card
          absolute
          align-center
          xl:w-12/12
          -bottom-14
          bg-white
          shadow-lg
          py-8
          rounded-3xl
        "
      >
        <ul class="flex gap-10">
          <li class="nav_active">Villa</li>
          <li>Apartemen</li>
          <li>Glamping</li>
          <li>Hotel</li>
        </ul>
        <div class="flex gap-10 mt-7 w-full">
          <div>
            <div class="flex gap-3 items-center">
              <div>
                <img src="~assets/img/send.png" />
              </div>
              <h4 class="xl:text-2xl font-bold">Lokasi</h4>
            </div>
            <p class="text-grey ml-8">Mau nginap dimana?</p>
          </div>
          <div>
            <div class="flex gap-3 items-center">
              <div>
                <img src="~assets/img/calendar.png" />
              </div>
              <h4 class="xl:text-2xl font-bold">Check in</h4>
            </div>
            <p class="text-grey ml-8">Pilih tanggal</p>
          </div>
          <div>
            <div class="flex gap-3 items-center">
              <div>
                <img src="~assets/img/calendar.png" />
              </div>
              <h4 class="xl:text-2xl font-bold">Check out</h4>
            </div>
            <p class="text-grey ml-8">Pilih tanggal</p>
          </div>
          <div>
            <div class="flex gap-3 items-center">
              <div>
                <img src="~assets/img/users.png" />
              </div>
              <h4 class="xl:text-2xl font-bold">Tamu</h4>
            </div>
            <p class="text-grey ml-8">Jumlah orang</p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
