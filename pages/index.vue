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
        <h1 class="xl:font-black   xl:text-7xl xs:text-xs">
          Staycation Seru <br />
          Dalam Satu Platform.
        </h1>
        <p class="xl:text-3xl xs:text-sm">Cari dan booking pengalaman terbaik.</p>
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

  <div class="bg-white rounded-xl -mt-8 shadow-xl relative mx-4 pb-8">
    <div class="grid grid-cols-12 gap-3 mx-12 ">
            <div class="col-span-12  rounded-t-2xl mx-auto input-width">
                <div class="grid grid-cols-12 ">
                  <p class="font-popins mt-4 text-black border-b-2 border-black xl:col-span-2 xs:col-span-12 xs:text-xs px-5 text-center">Villa</p>
                  <p class="font-popins mt-4 text-gray-400 xl:col-span-2 xs:col-span-12 xs:text-xs px-5 text-center">Apartement</p>
                  <p class="font-popins mt-4 text-gray-400 xl:col-span-2 xs:col-span-12 xs:text-xs px-5 text-center">Glamping</p>
                  <p class="font-popins mt-4 text-gray-400 xl:col-span-2 xs:col-span-12 xs:text-xs px-5 text-center">Hotel</p>
                  <p class="font-popins mt-4 text-gray-400 xl:col-span-2 xs:col-span-12 xs:text-xs px-5 text-center">Paket trip</p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-12 gap-0">
            <div class="col-span-12   rounded-b-2xl mx-auto input-width xs:-ml-6">
                <div class="grid grid-cols-12 mt-4 px-8">
                  <div class="flex xl:col-span-3 xs:col-span-6 px-5 text-left">
                    <img class="w-lg mt-3 xl:mr-1 xs:mr-4 h-lg" src="~/assets/img/send.png" alt="">
                    <div class="">
                       <p class="xl:text-2xl xs:text-base font-bold font-poppins">Lokasi</p>
                        <p class="xl:text-sm xs:text-xs  text-gray-400">mau nginap dimana?</p>
                    </div>
                  </div>
                  <div class="flex  xl:col-span-3 xs:col-span-6 px-5 text-left">
                    <img class="w-lg mt-3 xl:mr-1 xs:mr-4 h-lg" src="~/assets/img/calendar.png" alt="">
                    <div class="">
                       <p class="xl:text-2xl xs:text-base font-bold font-poppins">Check In</p>
                        <p class="xl:text-sm xs:text-xs  text-gray-400">pilih tanggal?</p>
                    </div>
                  </div>
                  <div class="flex  xl:col-span-3 xs:col-span-6 px-5 text-left">
                    <img class="w-lg mt-3 xl:mr-1 xs:mr-4 h-lg" src="~/assets/img/calendar.png" alt="">
                    <div class="">
                       <p class="xl:text-2xl xs:text-base font-bold font-poppins">Check Out</p>
                        <p class="xl:text-sm xs:text-xs  text-gray-400">pilih tanggal?</p>
                    </div>
                  </div>
                  <div class="flex xl:col-span-3 xs:col-span-6 px-5 text-left">
                    <img class="w-lg mt-3 xl:mr-1 xs:mr-4 h-lg" src="~/assets/img/users.png" alt="">
                    <div class="">
                       <p class="xl:text-2xl xs:text-base font-bold font-poppins">Tamu</p>
                        <p class="xl:text-sm xs:text-xs  text-gray-400">Jumlah Orang</p>
                    </div>
                  </div>
                  <div class="col-span-2 px-5 text-center0"></div>
                </div>
            </div>
        </div>
      </div>

    </div>

     <div class="paket-text">
      <p class="mt-12 font-bold text-black xl:text-3xl xs:text-base">Apa itu Sandcation?</p>
    </div>

    <div class="grid grid-rows-3 xs:gap-3  xl:gap-8   xl:ml-16 xs:ml-0">
      <div class="my-auto">
        <p class="xs:text-sm bg-yellow text-white xl:text-xl w-10 text-center rounded-xl">01</p>
        <p class="xl:text-2xl font-bold ">Platform Yang Dibuat Khusus <br> Untuk Staycation</p>
        <p class="text-sm text-gray-400">Staycation tanpa harus ribet, Sandcation lah solusinya.</p>
      </div>
      <div class="my-auto">
        <p class="xs:text-sm bg-blue text-white texl:xt-xl w-10 text-center rounded-xl">02</p>
        <p class="xl:text-2xl font-bold ">Booking, Berangkat, dan Nikmati</p>
        <p class="text-sm text-gray-400">Sandcation siap menangani segala kebutuhan staycation dan <br> trip kamu hanya dengan beberapa klik.</p>
      </div>
      <div class="my-auto">
        <p class="xs:text-sm bg-red text-white texxl:t-xl w-10 text-center rounded-xl">03</p>
        <p class="xl:text-2xl font-bold">Paket Liburan Lengkap</p>
        <p class="text-sm text-gray-400">Ingin sekedar istirahat menginap di villa dengan nuansa alam? <br>
        Atau ingin mengunjungi berbagai spot wisata tanpa harus ribet? <br>
        Semua tersedia di Sandcation</p>
      </div>
    </div>

    <div class="paket-text my-12">
      <p class="xl:text-3xl xs:text-base font-bold">Liburan Aman Dengan Protokol Kesehatan</p>
      <p class="xl:text-sm xs:text-xs text-gray-400">Kami sadar akan pentingnya penerapan prokes <br>
        demi keselamatan travelers</p>
    </div>

    <div class="xl:flex">
      <div class="px-7">
        <img src="~/assets/img/mask.png" class="xs:w-8/12 mx-auto" alt="">
        <p class="text-center font-bold xl:text-2xl xs:text-base">
          Fasilitas Masker
        </p>
      </div>
      <div class="px-7">
        <img src="~/assets/img/hand-sn.png" class="xs:w-8/12 mx-auto" alt="">
        <p class="text-center font-bold xl:text-2xl xs:text-base">
          Hand Sanitazer
        </p>
      </div>
      <div class="px-7">
        <img src="~/assets/img/termometer.png" class="xs:w-8/12 mx-auto" alt="">
        <p class="text-center font-bold xl:text-2xl xs:text-base">
          Cek Suhu Berkala
        </p>
      </div>
    </div>

    <div class="paket-text mt-12">
      <p class="xl:text-3xl xs:text-base font-bold">Lebih Dari Sekedar Liburan</p>

      <div class="md:flex mt-7 justify-center">
        <div class="mb-10">
          <img src="~/assets/img/gedung.png" alt="">
          <p class="xl:text-2xl xs:text-lg font-bold">Staycation</p>
          <p class="text-gray-400 xs:text-xs xl:text-sm">Ingin beristirahat di hotel dengan fasilitas mewah? atau ingin <br> tidur dengan pemandangan langit malam? semua bisa! <br>
          Di Sandcation terdapat pilihan akomodasi lengkap mulai dari <br> hotel, villa, apartemen, sampai dengan glamping.</p>
        </div>

         <div class="mb-10">
          <img src="~/assets/img/human.png" alt="">
          <p class="xl:text-2xl xs:text-lg font-bold">Paket Trip</p>
          <p class="text-gray-400 xs:text-xs xl:text-sm">Ingin beristirahat di hotel dengan fasilitas mewah? atau ingin <br> tidur dengan pemandangan langit malam? semua bisa! <br>
          Di Sandcation terdapat pilihan akomodasi lengkap mulai dari <br> hotel, villa, apartemen, sampai dengan glamping.</p>
        </div>
      </div>
    </div>

    <div class="paket-text mt-12">
      <p class="font-bold xl:text-3xl xs:text-base">Eksplor Ribuan Destinasi Indonesia</p>
      <p class="xl:text-sm xs:text-xs mt-5 text-gray-400">Ribuan spot terbaik untuk pengalaman terbaik</p>
      <div class="flex mt-5 justify-center">
        <img class="px-4" src="~/assets/img/bali.png" alt="">
        <img class="px-4" src="~/assets/img/jakarta.png" alt="">
        <img class="px-4" src="~/assets/img/malang.png" alt="">
        <img class="px-4" src="~/assets/img/city.png" alt="">

      </div>
    </div>

    <div class="paket-text ">
      <p class="xl:text-3xl font-bold pt-12">Pilihan Tipe Akodmodasi Terengkap</p>
      <p class="text-gray-400 text-sm pt-5">Temukan penginapan yang pas untuk staycationmu</p>

      <div class="md:flex justify-center mt-7">
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

      <div class="md:flex justify-center mt-7">

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
