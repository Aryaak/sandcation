<template>
  <div class="xl:container mx-auto mt-10 xl:px-16 px-10">
    <Header/>

    <div class="grid grid-cols-12 gap-8 mx-auto">
        <p class="col-span-5 text-xl mt-12 font-bold font-poppins">Masukkan Gambar</p>
    </div>

     <div class="grid grid-cols-12 gap-8 mx-auto mt-5">
       <img src="~/assets/img/sea.png" class="col-span-12 w-screen" alt="">
    </div>

    <div class="grid grid-cols-12 gap-8 mx-auto mt-5">
      <div class="col-span-2">
        <img src="~/assets/img/input-gambar.png" alt="">
      </div>
       <div class="col-span-2">
          <div class="col-span-2">
        <img src="~/assets/img/thumbnail-1.png" alt="">
      </div>
      </div>
       <div class="col-span-2">
          <div class="col-span-2">
        <img src="~/assets/img/thumbnail-2.png" alt="">
      </div>
      </div>
    </div>


    <div class="mx-auto">
      <p class="text-black font-poppins text-3xl mt-8">Detail Perjalanan Wisata</p> <br>
         <div class="grid grid-cols-12 gap-8 ">
           <div class="col-span-12">
              <label class=" text-black font-poppins text-xl">Nama Agensi Trip</label>
              <input type="text" class="bg-gray-200 normal-height h-8 input-width rounded-xl h-28">
              <p class="bg-gray text-sm text-gray-400">isi sesuai di nama aslinya</p>
           </div>
        </div>

        <div class="grid grid-cols-12 gap-8 mt-5">
           <div class="col-span-12 ">
              <label class=" text-black font-poppins text-xl">Deskripsi Perjalanan wisata</label>
              <input type="text" class="bg-gray-200 large-height h-8 input-width rounded-xl">
           </div>
        </div>

        <div class="grid grid-cols-12 gap-8 mt-5">
           <div class="col-span-12 ">
              <label class=" text-black font-poppins text-xl">Intrnerary</label>
              <input type="text" class="bg-gray-200 normal-height h-8 input-width rounded-xl">
           </div>
        </div>

        <div class="grid grid-cols-12 gap-8 mt-5">
           <div class="col-span-12 ">
              <label class=" text-black font-poppins text-xl">Kategori</label>
              <input type="text" class="bg-gray-200 normal-height h-8 input-width rounded-xl">
           </div>
        </div>

        <div class="grid grid-cols-12 gap-8 mt-5">
           <div class="col-span-12 ">
              <label class=" text-black font-poppins text-xl">Fitur</label>
              <input type="text" class="bg-gray-200 normal-height input-width rounded-xl">
           </div>
        </div>

        <div class="grid grid-cols-12 gap-8 mt-5">
           <div class="col-span-12 ">
              <label class=" text-black font-poppins text-xl">Harga</label>
              <input type="text" class="bg-gray-200 normal-height input-width rounded-xl">
           </div>
        </div>


    </div>

  </div>
</template>
