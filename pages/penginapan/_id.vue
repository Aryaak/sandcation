<template>
  <div class="xl:container mx-auto mt-10 xl:px-16 px-10">
    <Header active="penginapan" />
    <div class="relative w-full mt-10 xl:mb-10 mb-5">
      <img src="~assets/img/hotel.jpg" class="w-full rounded-3xl" />
    </div>
    <div class="grid xl:grid-cols-12 grid-cols-1 justify-items-end">
      <div class="col-span-8 mb-10 xl:mb-0">
        <p class="text-grey text-2xl">Hotel</p>
        <h1 class="font-medium text-5xl">Vasa Hotel Surabaya</h1>
        <div class="flex items-center gap-2 mb-10">
          <img src="~assets/img/location.png" width="20px" />
          <h2 class="font-lighter text-3xl text-blue">Mayjend, Surabaya</h2>
        </div>
        <h3
          class="font-medium text-2xl border-yellow border-b-4 w-max pb-2 mb-5"
        >
          Tentang
        </h3>
        <p class="text-lg">
          Sebagai salah satu hotel bintang 5 terbaru yang paling mewah di
          Surabaya Barat, Vasa Hotel Surabaya merupakan surga kemewahan yang
          modern. Terletak di jantung Surabaya Barat, dekat dengan jalan raya
          dan 30 menit dari Bandara Internasional Juanda, hotel bintang 5 kami
          mudah dijangkau dari lokasi perkantoran prestisius di Surabaya, tempat
          atraksi, bersejarah, pusat perbelanjaan kelas atas, restoran, dan
          hiburan malam. Dengan desain yang luar biasa, Vasa Hotel Surabaya
          menawarkan 383 kamar, suite dan Vasa Residences yang memadukan antara
          privasi dan kenyamanan apartemen pribadi dengan layanan dan fasilitas
          hotel mewah kelas dunia. Semua akomodasi menawarkan kamar yang lebih
          luas dibandingkan kamar hotel standar di Surabaya dan cocok untuk masa
          menginap jangka pendek maupun panjang. Fasilitas tamu berkisar mulai
          dari restoran dan bar yang menakjubkan, kolam renang outdoor, pusat
          kebugaran, hingga gedung acara yang mengesankan serta sebuah Chapel
          pernikahan outdoor. Perpaduan bisnis yang inovatif dan akan melampaui
          ekspektasi Anda akan gaya, kenyamanan, layanan terbaik, dan seni
          dengan teknologi, Vasa Hotel Surabaya akan menyambut Anda dengan
          kesenangan perjalanan.
        </p>
      </div>

      <div class="relative col-span-4 mx-auto xl:mx-0">
        <div
          class="
            relative
            xl:right-0
            w-max
            xl:-top-28
            bg-white
            border-yellow
            rounded-tl-2xl
            mb-20
            xl:mb-0
          "
        >
          <div
            class="
              bg-yellow
              px-14
              py-5
              font-semibold
              text-white text-2xl text-center
              rounded-tl-2xl rounded-tr-2xl
              xl:rounded-tr-none
            "
          >
            Booking sekarang
          </div>
          <div
            class="
              px-5
              py-5
              border-yellow border-2
              pb-14
              rounded-bl-2xl rounded-br-2xl
            "
          >
            <div class="flex justify-between gap-x-14 pt-3">
              <div>
                <p class="mb-3">penyedia :</p>
                <div class="flex items-center gap-3 mb-3">
                  <img src="~assets/img/profile.png" />
                  <p class="font-bold">Jhon Doe</p>
                </div>
                <p class="mb-3">pelayanan :</p>
                <ol>
                  <li>2 kamar mandi</li>
                  <li>2 kasur</li>
                  <li>AC</li>
                  <li>Televisi</li>
                </ol>
              </div>
              <div>
                <div class="flex gap-2">
                  <img src="~assets/img/star.png" />
                  <img src="~assets/img/star.png" />
                  <img src="~assets/img/star.png" />
                  <img src="~assets/img/star.png" />
                  <img src="~assets/img/star.png" />
                </div>
                <p class="mb-3">5 reviewer</p>

                <h4 class="text-yellow font-bold text-2xl">IDR 793,261</h4>
                <p class="mb-3">per malam</p>
              </div>
            </div>
          </div>
          <button
            class="bg-yellow absolute right-5 -bottom-10 p-5 rounded-full"
          >
            <img src="~assets/img/calendar-plus.png" />
          </button>
        </div>
        <div
          class="text-center border-yellow border-b-4 w-max mx-auto pb-2 mb-5"
        >
          <h3 class="font-medium text-2xl">Review Anda</h3>
        </div>
        <div class="flex mx-auto justify-center gap-2 mb-5">
          <img class="block" src="~assets/img/star.png" />
          <img class="block" src="~assets/img/star.png" />
          <img class="block" src="~assets/img/star.png" />
          <img class="block" src="~assets/img/star.png" />
          <img class="block" src="~assets/img/star.png" />
        </div>
        <textarea
          placeholder="Ceritakan pengalaman anda!"
          class="
            border-yellow border-2
            mx-auto
            p-5
            rounded-lg
            w-full
            focus:outline-none
          "
          cols="12"
          rows="5"
        ></textarea>
        <button
          class="
            bg-yellow
            rounded-2xl
            text-white
            mt-5
            px-8
            py-2
            xl:text-xl
            text-lg
            w-full
            focus:outline-none
            mb-20
            xl:mb-0
          "
        >
          Kirim
        </button>
      </div>
    </div>
    <div>
      <div class="flex gap-2 mb-5">
        <h3
          class="font-medium text-2xl border-yellow border-b-4 w-max pb-2 mb-5"
        >
          Review
        </h3>
        <span class="text-grey mt-2 text-lg">(974)</span>
      </div>
      <div class="grid xl:grid-cols-3 grid-cols-1 mb-10 xl:mb-0 gap-10">
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
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