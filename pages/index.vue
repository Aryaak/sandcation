<template>
  <div class="container mx-auto mt-10">
    <Header active="home" />
    <div class="relative w-full mt-10 mb-20">
      <div class="absolute left-20 top-40 text-white">
        <h1 class="font-black text-6xl">
          Staycation Seru <br />
          Dalam Satu Platform.
        </h1>
        <p class="text-3xl">Cari dan booking pengalaman terbaik.</p>
        <button class="bg-yellow rounded-2xl mt-14 px-8 py-2 text-xl">
          Booking sekarang
        </button>
      </div>
      <img src="~assets/img/home-hero.png" class="w-full rounded-3xl" />
      <div class="hero-card py-8 px-8 rounded-3xl shadow-lg">
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
              <h4 class="text-2xl font-bold">Lokasi</h4>
            </div>
            <p class="text-grey ml-8">Mau nginap dimana?</p>
          </div>
          <div>
            <div class="flex gap-3 items-center">
              <div>
                <img src="~assets/img/calendar.png" />
              </div>
              <h4 class="text-2xl font-bold">Check in</h4>
            </div>
            <p class="text-grey ml-8">Pilih tanggal</p>
          </div>
          <div>
            <div class="flex gap-3 items-center">
              <div>
                <img src="~assets/img/calendar.png" />
              </div>
              <h4 class="text-2xl font-bold">Check out</h4>
            </div>
            <p class="text-grey ml-8">Pilih tanggal</p>
          </div>
          <div>
            <div class="flex gap-3 items-center">
              <div>
                <img src="~assets/img/users.png" />
              </div>
              <h4 class="text-2xl font-bold">Tamu</h4>
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
