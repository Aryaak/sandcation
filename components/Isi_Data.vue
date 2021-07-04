<template>
  <div class="container mx-auto mt-10 px-10">
      <Header/>
      <div class="mx-auto">
          <div class="grid grid-cols-12 gap-8">
            <p class="col-span-12 text-3xl font-poppins mt-12 font-bold">Detail Pemesanan</p>
          </div>

          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12">
                 <input type="text" class="input-width bg-gray-200 normal-height rounded-md px-5" placeholder="Nama Lengkap">
                 <p class="text-gray-400 text-sm col-span-12">Isi sesuai seperti di KTP/SIM/Paspor tanpa tanda baca dan gelar</p>
            </div>
          </div>

           <div class="grid grid-cols-12 gap-4 mt-8">
            <div class="col-span-3">
                  <select name="cars" class="input-width bg-gray-200 normal-height">
                    <option value="+62" class="text-center">+62</option>
                  </select>
                 <p class="text-sm text-gray-400">kode negara</p>
            </div>

            <div class="col-span-9">
              <input type="number" class="input-width bg-gray-200 normal-height">
              <p class="text-gray-400 text-sm" min="0">Nomor telepon</p>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-4 mt-8">
            <div class="col-span-12">
                 <input type="text" class="input-width bg-gray-200 normal-height rounded-md px-5" placeholder="Alamat Email">
                 <p class="text-gray-400 text-sm col-span-12">E-Ticket akan dikirimkan ke alamat email ini</p>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-8">
            <p class="col-span-12 text-3xl font-poppins mt-12 font-bold">Detail Pemesanan</p>
          </div>

          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12">
                 <input type="text" class="input-width bg-gray-200 normal-height rounded-md px-5" placeholder="Tipe Kamar">
                 <p class="text-gray-400 text-sm col-span-12">Tipe kamar yang anda inginkan  </p>
            </div>
          </div>


           <div class="grid grid-cols-12 gap-4 mt-8">
            <div class="col-span-6">
                <input type="date" placeholder="check in" class="input-width bg-gray-200 normal-height rounded-md px-5">
                 <p class="text-sm text-gray-400">pilih tanggal anda check-in</p>
            </div>

            <div class="col-span-6">
               <input type="date" placeholder="checkout" class="input-width bg-gray-200 normal-height rounded-md px-5">
                 <p class="text-sm text-gray-400">pilih tanggal anda check-out</p>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-8">
            <p class="col-span-12 text-3xl font-poppins mt-12 font-bold">Permintaan Khusus</p>
          </div>

          <div class="grid grid-cols-12 gap-4 mt-8">
            <div class="col-span-12">
                 <input type="text" class="input-width bg-gray-200 large-height rounded-md px-5" placeholder="Tulis disini">
                 <p class="text-gray-400 text-sm col-span-12">Punya permintaan tambahan? tulis dikotak ini. Permintaan tergantung ketersediaan dan mungkin akan terkena biaya tambahan</p>
            </div>
          </div>

      </div>

  </div>
</template>
