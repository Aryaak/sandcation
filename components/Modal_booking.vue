<template>
    <div class="container mx-auto mt-10 my-8">
      <Header/>
        <p class="paket-text text-3xl font-bold mt-20 mb-10">Detail Pesanan</p>
        <div class="grid grid-cols-12 gap-8 bg-gray-200 w-3/4 box-bed py-12 rounded-t-3xl">
          <div class="col-span-5">
              <img src="~/assets/img/bed-room.jpg" class="ml-9" alt="">
          </div>
          <div class="col-span-5 col-start-7 gap ml-18">
              <p class="text-3xl font-bold mt-12">Vasa Hotel Surabaya</p>
              <p class="text-md font-bold mt-3"> Deluxe Suite Double Bed</p>
              <p class="mt-2 text-gray-400">1 kamar . 1 tamu . 1 malam</p>
          </div>
        </div>
        <div class="grid grid-cols-12 mx-auto  bg-gray-200 w-3/4 box-bed py-12 border-b-2 border-gray-400">
          <div class="col-span-3 col-start-3 -mt-16">
             <p class="text-3xl font-bold">Check In</p> <br>
             <p class="text-3xl font-bold">Check Out</p>
          </div>
          <div class="col-span-3 col-start-9 ml-10">
             <div class="-mt-16">
             <p class="text-gray-400">4 Juli 2021</p> <br>
             <p class="text-gray-400">5 Juli 2021</p>
             </div>
          </div>
        </div>
        <div class="grid grid-cols-12 mx-auto bg-gray-200 w-3/4 box-bed py-8 rounded-b-3xl">
            <div class="col-span-3 col-start-3">
              <p class="text-3xl font-bold">Total</p> <br>
            </div>
            <div class="col-span-3 col-start-9 ml-10">
            <div class="">
              <p class="text-yellow text-3xl font-bold">IDR 500.000,-</p> <br>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-12 mx-auto  w-3/4 box-bed py-8 rounded-b-3xl">
            <div class="col-span-12 col-start-3">
              <p class="text-3xl font-bold -ml-20">Pembayaran</p> <br>
               <div class="flex -ml-20">
                 <img src="~/assets/img/bca.png" alt="">
                 <p class="text-yellow font-bold text-3xl ml-16">0123456789</p>
               </div>
            </div>
          </div>

       <div class="grid grid-cols-12 mx-auto bg-gray-200  w-3/4 box-bed py-8 leading-relaxed h-2xl border-dashed border-2 border-black rounded-3xl">
          <div class="col-span-2 col-start-6 mt-12">
              <img src="~/assets/img/export-icon.png" class="mx-auto" alt="">
          </div>
        </div>


        <div class="grid grid-cols-12 gap-8 my-14 mt-4 w-3/4 box-bed py-12 ">
          <div class="col-span-12 bg-yellow rounded-xl">
            <p class="px-5 py-2 text-white">Mohon selesaikan pembayaran selama 1x24jam dengan cara transfer ke nomor rekening yang telah tertera,
            Lalu upload dokumen atau foto bukti transfer dikolom yang telah tersedia.</p>
          </div>
        </div>

           <div class="grid grid-cols-12 gap-8 my-14 mt-4 w-3/4 box-bed py-12 ">
            <div class="col-span-2 col-start-10 bg-yellow rounded-xl">
              <p class="px-5 py-2 text-center text-white">Lanjutkan</p>
            </div>
        </div>
        </div>
</template>
