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
        <h1 class="xl:font-black sm:font-thin  xl:text-7xl sm:text-xs">
          Staycation Seru <br />
          Dalam Satu Platform.
        </h1>
        <p class="xl:text-3xl sm:text-sm">Cari dan booking pengalaman terbaik.</p>
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
      <img src="~assets/img/home-hero.png" class="w-full rounded-3xl z-0" />

  <div class="bg-white rounded-xl -mt-8 shadow-xl relative mx-12 pb-8">
    <div class="grid grid-cols-12 gap-3 mx-12 ">
            <div class="col-span-12  rounded-t-2xl mx-auto input-width">
                <div class="grid grid-cols-12">
                  <p class="font-popins mt-4 text-black border-b-2 border-black col-span-2 px-5 text-center">Villa</p>
                  <p class="font-popins mt-4 text-gray-400 col-span-2 px-5 text-center">Apartement</p>
                  <p class="font-popins mt-4 text-gray-400 col-span-2 px-5 text-center">Glamping</p>
                  <p class="font-popins mt-4 text-gray-400 col-span-2 px-5 text-center">Hotel</p>
                  <p class="font-popins mt-4 text-gray-400 col-span-2 px-5 text-center0">Paket trip</p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-12 gap-3mx-12">
            <div class="col-span-12   rounded-b-2xl mx-auto input-width">
                <div class="grid grid-cols-12 mt-4 px-8">
                  <div class="flex col-span-3 px-5 text-left">
                    <img class="w-lg mt-3 mr-2 h-lg" src="~/assets/img/send.png" alt="">
                    <div>
                       <p class="text-2xl font-bold font-poppins">Lokasi</p>
                        <p class="text-sm text-gray-400">mau nginap dimana?</p>
                    </div>
                  </div>
                  <div class="flex  col-span-3 px-5 text-left">
                    <img class="w-lg mt-3 mr-2 h-lg" src="~/assets/img/calendar.png" alt="">
                    <div>
                       <p class="text-2xl font-bold font-poppins">Check In</p>
                        <p class="text-sm text-gray-400">pilih tanggal?</p>
                    </div>
                  </div>
                  <div class="flex  col-span-3 px-5 text-left">
                    <img class="w-lg mt-3 mr-2 h-lg" src="~/assets/img/calendar.png" alt="">
                    <div>
                       <p class="text-2xl font-bold font-poppins">Check Out</p>
                        <p class="text-sm text-gray-400">pilih tanggal?</p>
                    </div>
                  </div>
                  <div class="flex col-span-3 px-5 text-left">
                    <img class="w-lg mt-3 mr-2 h-lg" src="~/assets/img/users.png" alt="">
                    <div>
                       <p class="text-2xl font-bold font-poppins">Tamu</p>
                        <p class="text-sm text-gray-400">Jumlah Orang</p>
                    </div>
                  </div>
                  <div class="col-span-2 px-5 text-center0"></div>
                </div>
            </div>
        </div>
      </div>

    </div>

     <div class="paket-text">
      <p class="mt-12 font-bold text-black text-3xl">Apa itu Sandcation?</p>
    </div>

    <div class="grid grid-rows-3 gap-8 ml-16">
      <div>
        <p class="bg-yellow text-white text-xl w-10 text-center rounded-xl">01</p>
        <p class="text-2xl font-bold ">Platform Yang Dibuat Khusus <br> Untuk Staycation</p>
        <p class="text-sm text-gray-400">Staycation tanpa harus ribet, Sandcation lah solusinya.</p>
      </div>
      <div>
        <p class="bg-blue text-white text-xl w-10 text-center rounded-xl">01</p>
        <p class="text-2xl font-bold ">Booking, Berangkat, dan Nikmati</p>
        <p class="text-sm text-gray-400">Sandcation siap menangani segala kebutuhan staycation dan <br> trip kamu hanya dengan beberapa klik.</p>
      </div>
      <div>
        <p class="bg-red text-white text-xl w-10 text-center rounded-xl">01</p>
        <p class="text-2xl font-bold">Paket Liburan Lengkap</p>
        <p class="text-sm text-gray-400">Ingin sekedar istirahat menginap di villa dengan nuansa alam? <br>
        Atau ingin mengunjungi berbagai spot wisata tanpa harus ribet? <br>
        Semua tersedia di Sandcation</p>
      </div>
    </div>

    <div class="paket-text my-12">
      <p class="text-3xl font-bold">Liburan Aman Dengan Protokol Kesehatan</p>
      <p class="text-sm text-gray-400">Kami sadar akan pentingnya penerapan prokes <br>
        demi keselamatan travelers</p>
    </div>

    <div class="flex">
      <div class="px-7">
        <img src="~/assets/img/mask.png" alt="">
        <p class="text-center font-bold text-2xl">
          Fasilitas Masker
        </p>
      </div>
      <div class="px-7">
        <img src="~/assets/img/hand-sn.png" alt="">
        <p class="text-center font-bold text-2xl">
          Hand Sanitazer
        </p>
      </div>
      <div class="px-7">
        <img src="~/assets/img/termometer.png" alt="">
        <p class="text-center font-bold text-2xl">
          Cek Suhu Berkala
        </p>
      </div>
    </div>

    <div class="paket-text mt-12">
      <p class="text-3xl font-bold">Lebih Dari Sekedar Liburan</p>

      <div class="flex mt-7 justify-center">
        <div>
          <img src="~/assets/img/gedung.png" alt="">
          <p class="text-2xl font-bold">Staycation</p>
          <p class="text-gray-400">Ingin beristirahat di hotel dengan fasilitas mewah? atau ingin <br> tidur dengan pemandangan langit malam? semua bisa! <br>
          Di Sandcation terdapat pilihan akomodasi lengkap mulai dari <br> hotel, villa, apartemen, sampai dengan glamping.</p>
        </div>

         <div>
          <img src="~/assets/img/human.png" alt="">
          <p class="text-2xl font-bold">Paket Trip</p>
          <p class="text-gray-400">Ingin beristirahat di hotel dengan fasilitas mewah? atau ingin <br> tidur dengan pemandangan langit malam? semua bisa! <br>
          Di Sandcation terdapat pilihan akomodasi lengkap mulai dari <br> hotel, villa, apartemen, sampai dengan glamping.</p>
        </div>
      </div>
    </div>

    <div class="paket-text mt-12">
      <p class="font-bold text-3xl">Eksplor Ribuan Destinasi Indonesia</p>
      <p class="text-sm mt-5 text-gray-400">Ribuan spot terbaik untuk pengalaman terbaik</p>
      <div class="flex mt-5 justify-center">
        <img class="px-4" src="~/assets/img/bali.png" alt="">
        <img class="px-4" src="~/assets/img/jakarta.png" alt="">
        <img class="px-4" src="~/assets/img/malang.png" alt="">
        <img class="px-4" src="~/assets/img/city.png" alt="">

      </div>
    </div>

    <div class="paket-text ">
      <p class="text-3xl font-bold pt-12">Pilihan Tipe Akodmodasi Terengkap</p>
      <p class="text-gray-400 text-sm pt-5">Temukan penginapan yang pas untuk staycationmu</p>

      <div class="flex justify-center mt-7">
        <div class="mx-4">
          <img class="" src="~/assets/img/villa.png" alt="">
          <p class="text-left ml-8 font-bold text-2xl mt-5">Villa</p>
          <p class="text-left text-sm ml-8">3000+ Property</p>
        </div>
         <div class="mx-4">
          <img class="" src="~/assets/img/gamping.png" alt="">
          <p class="text-left ml-8 font-bold text-2xl mt-5">Glamping</p>
          <p class="text-left text-sm ml-8">570+ Property</p>
        </div>
      </div>

      <div class="flex justify-center mt-7">

        <div class="mx-4">
          <img class="mx-4 mr-5" src="~/assets/img/apartement.png" alt="">
          <p class="text-left ml-8 font-bold text-2xl mt-5">Apartement</p>
          <p class="text-left text-sm ml-8">1500+ Property</p>
        </div>
         <div class="mx-4">
          <img class="mx-4 " src="~/assets/img/hotel.png" alt="">
          <p class="text-left ml-8 font-bold text-2xl mt-5">Hotel</p>
          <p class="text-left text-sm ml-8">600+ Property</p>
        </div>
      </div>
    </div>

    <Footer class="mt-12" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
