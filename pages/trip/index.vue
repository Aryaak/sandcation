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

    <div class="paket-text">
      <p class="mt-12 font-bold text-black text-3xl">Paket trip</p>
    </div>

    <div class="flex justify-center mt-12">
      <div class="mx-12 ">
        <img src="~/assets/img/nusa-peninda.png" alt="">
        <div class="text-center">
          <p class="text-gray-400">open trip</p>
          <p class="text-2xl font-poppins font-bold">Paket Wisata Nusa <br>
          Penida - 3D2N </p>
        <p class="text-yellow text-xl"> <span class="text-sm text-gray-400">Mulai dari</span> IDR1.500.000 </p>
        </div>
      </div>
       <div class="mx-12">
        <img src="~/assets/img/raja-ampat.png" alt="">
         <div class="text-center">
          <p class="text-gray-400">open trip</p>
          <p class="text-2xl font-poppins font-bold">Paket Wisata Raja <br>
          Ampat - 4D3N</p>
        <p class="text-yellow text-xl"> <span class="text-sm text-gray-400">Mulai dari</span> IDR3.900.000 </p>
        </div>
      </div>
       <div class="mx-12">
        <img src="~/assets/img/labuan-bajo.png" alt="">
        <div class="text-center">
          <p class="text-gray-400">open trip</p>
          <p class="text-2xl font-poppins font-bold">Paket Wisata Sailing <br>
          Labuan Bajo - 3D2N</p>
        <p class="text-yellow text-xl"> <span class="text-sm text-gray-400">Mulai dari</span> IDR2.200.000 </p>
        </div>
      </div>
    </div>
     <div class="flex justify-center mt-12">
      <div class="mx-12 ">
        <img src="~/assets/img/pulo-cinta.png" alt="">
         <div class="text-center">
          <p class="text-gray-400">open trip</p>
          <p class="text-2xl font-poppins font-bold">Paket Wisata Pulo <br>
          Cinta - 3D2N</p>
        <p class="text-yellow text-xl"> <span class="text-sm text-gray-400">Mulai dari</span> IDR2.700.000 </p>
        </div>
      </div>
       <div class="mx-12">
        <img src="~/assets/img/karimun-jawa.png" alt="">
         <div class="text-center">
          <p class="text-gray-400">open trip</p>
          <p class="text-2xl font-poppins font-bold">Paket Wisata Karimun <br>
          Jawa - 3D1N</p>
        <p class="text-yellow text-xl"> <span class="text-sm text-gray-400">Mulai dari</span> IDR890.000 </p>
        </div>
      </div>
       <div class="mx-12">
        <img src="~/assets/img/pulau-rate.png" alt="">
         <div class="text-center">
          <p class="text-gray-400">open trip</p>
          <p class="text-2xl font-poppins font-bold">Paket Wisata pulau <br>
          Rote - 2D1N</p>
        <p class="text-yellow text-xl"> <span class="text-sm text-gray-400">Mulai dari</span> IDR2.500.000 </p>
        </div>
      </div>
    </div>
     <div class="flex justify-center mt-12">
      <div class="mx-12 ">
        <img src="~/assets/img/pulau-belitung.png" alt="">
         <div class="text-center">
          <p class="text-gray-400">open trip</p>
          <p class="text-2xl font-poppins font-bold">Paket Wisata Pulau <br>
          Belitung - 3D2N</p>
        <p class="text-yellow text-xl"> <span class="text-sm text-gray-400">Mulai dari</span> IDR1.050.000 </p>
        </div>
      </div>
       <div class="mx-12">
        <img src="~/assets/img/pualu-bali.png" alt="">
         <div class="text-center">
          <p class="text-gray-400">open trip</p>
          <p class="text-2xl font-poppins font-bold">Paket Wisata Pulau <br>
          Bali - 3D2N</p>
        <p class="text-yellow text-xl"> <span class="text-sm text-gray-400">Mulai dari</span> IDR1.450.000 </p>
        </div>
      </div>
       <div class="mx-12">
        <img src="~/assets/img/kawah-ijen.png" alt="">
         <div class="text-center">
          <p class="text-gray-400">open trip</p>
          <p class="text-2xl font-poppins font-bold">Paket Wisata Kawah <br>
          Ijen - Midnight</p>
        <p class="text-yellow text-xl"> <span class="text-sm text-gray-400">Mulai dari</span> IDR2.200.000 </p>
        </div>
      </div>
    </div>
    <Footer class="mt-20"/>
  </div>
</template>
