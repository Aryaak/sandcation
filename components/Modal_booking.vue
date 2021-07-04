<template>
    <div class="container mx-auto mt-10 my-12">
      <Header/>
        <p class="paket-text text-3xl font-bold mt-20 mb-10">Detail Pesanan</p>
        <div class="grid grid-cols-12 gap-8 bg-gray-200 w-3/4 box-bed py-12 rounded-t-3xl">
          <div class="xl:col-span-5 xs:col-span-10">
              <img src="~/assets/img/bed-room.jpg" class="mx-auto xs:pr-10 xs:w-9/12" alt="">
          </div>
          <div class="xl:col-span-5 xs:col-span-10 col-start-7 gap ml-18 text-center">
              <p class="xl:text-3xl xs:text-lg xs:pr-10 font-bold mt-12">Vasa Hotel Surabaya</p>
              <p class="xl:text-md xs:text-lg xs:pr-10 font-bold mt-3"> Deluxe Suite Double Bed</p>
              <p class="mt-2 text-gray-400 xl:text-lg xs:text-base xs:pr-10">1 kamar . 1 tamu . 1 malam</p>
          </div>
        </div>
        <div class="grid grid-cols-12 mx-auto  bg-gray-200 w-3/4 box-bed py-12 border-b-2 border-gray-400">
          <div class="col-span-3 col-start-3 -mt-16">
             <p class=" xl:text-3xl xs:text-sm font-bold">Check In</p> <br>
             <p class=" xl:text-3xl xs:text-sm font-bold">Check Out</p>
          </div>
          <div class="col-span-6 col-start-9 ml-10 ">
             <div class="-mt-16">
             <p class="text-gray-400 xl:text-3xl xs:text-xs xs:pr-2">4 Juli 2021</p> <br>
             <p class="text-gray-400 xl:text-3xl xs:text-xs xs:pr-2">5 Juli 2021</p>
             </div>
          </div>
        </div>
        <div class="grid grid-cols-12 mx-auto bg-gray-200 w-3/4 box-bed py-8 rounded-b-3xl">
            <div class="col-span-3 col-start-3">
              <p class="xl:text-3xl xs:text-base font-bold">Total</p> <br>
            </div>
            <div class="col-span-3 xs:col-start-7 xl:col-start-9 ml-10">
            <div class="">
              <p class="text-yellow xl:text-3xl xs:col-start-2 font-bold">IDR 500.000,-</p> <br>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-12 mx-auto  w-3/4 box-bed py-8 rounded-b-3xl">
            <div class="col-span-12 col-start-3 xl:pl-0 xs:pl-20">
              <p class="xl:text-3xl xs:text-base font-bold -ml-20">Pembayaran</p> <br>
               <div class="flex -ml-20">
                 <img src="~/assets/img/bca.png" class="xs:w-12" alt="">
                 <p class="text-yellow font-bold xl:text-3xl xs:text-base ml-16">0123456789</p>
               </div>
            </div>
          </div>

       <div class="grid grid-cols-12 mx-auto bg-gray-200  w-3/4 box-bed py-8 leading-relaxed xl:h-2xl  border-dashed border-2 border-black rounded-3xl">
          <div class="col-span-2 col-start-6 xl:mt-12 xs:mt-0">
              <img src="~/assets/img/input-gambar.png">
          </div>
        </div>


        <div class="grid grid-cols-12 gap-8 my-14 mt-4 w-3/4 box-bed py-12 ">
          <div class="col-span-12 bg-yellow rounded-xl ">
            <p class="px-5 py-2 text-white xl:text-xl xs:text-xs ">Mohon selesaikan pembayaran selama 1x24jam dengan cara transfer ke nomor rekening yang telah tertera,
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
