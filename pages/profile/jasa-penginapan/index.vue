<template>
  <div class="xl:container mt-10 xl:px-16 mx-4 px-1 mb-10">
    <Header />

    <p v-if="!validate" class="text-danger mt-10 italic">
      Harap isi semua kolom dengan benar!
    </p>
    <div class="grid grid-cols-12 gap-8 mx-auto mt-12">
      <p class="col-span-5 text-xl font-bold font-poppins">Masukkan Gambar</p>
    </div>

    <div class="grid grid-cols-2 gap-8 mx-auto mt-5">
      <div class="relative">
        <input
          id="photo"
          class="absolute bottom-2 opacity-0 z-50 left-0"
          type="file"
          @change="changeFile()"
        />
        <div class="flex gap-2 items-center">
          <img src="~/assets/img/input-gambar.png" class="w-1/12" />
          <p>{{ fileName }}</p>
        </div>
      </div>
    </div>

    <div class="mx-auto">
      <p class="text-black font-poppins text-3xl mt-8">Detail Penginapan</p>
      <br />
      <div class="grid grid-cols-12 gap-8 mt-5">
        <div class="xl:col-span-12 xs:col-span-10">
          <label class="text-black font-poppins text-xl">Nama Penginapan</label>
          <input
            type="text"
            class="
              bg-gray-200
              normal-height
              h-8
              input-width
              rounded-xl
              px-5
              h-28
            "
            v-model="name"
          />
          <p class="bg-gray text-sm text-gray-400">
            isi sesuai di nama aslinya
          </p>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-8 mt-5">
        <div class="xl:col-span-12 xs:col-span-10">
          <label class="text-black font-poppins text-xl">Alamat</label>
          <input
            type="text"
            class="
              bg-gray-200
              normal-height
              h-8
              input-width
              rounded-xl
              px-5
              h-28
            "
            v-model="address"
          />
          <p class="bg-gray text-sm text-gray-400">
            isi sesuai di alamat aslinya
          </p>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-8 mt-5">
        <div class="xl:col-span-12 xs:col-span-10">
          <label class="text-black font-poppins text-xl"
            >Deskripsi Penginapan</label
          >
          <client-only placeholder="loading...">
            <ckeditor-nuxt v-model="description" :config="editorConfig" />
          </client-only>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-8 mt-5">
        <div class="xl:col-span-12 xs:col-span-10">
          <label class="text-black font-poppins text-xl">Pelayanan</label>
          <client-only placeholder="loading...">
            <ckeditor-nuxt v-model="service" :config="editorConfig" />
          </client-only>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-8 mt-5">
        <div class="xl:col-span-12 xs:col-span-10">
          <label class="text-black font-poppins text-xl">Kategori</label>
          <select
            class="block bg-gray-200 normal-height input-width rounded-xl px-5"
            v-model="category"
          >
            <option v-for="c in getHostelCategory" :key="c.id" :value="c.id">
              {{ c.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-8 mt-5">
        <div class="xl:col-span-12 xs:col-span-10">
          <label class="text-black font-poppins text-xl">Tipe Kamar</label>
          <input
            type="text"
            class="bg-gray-200 normal-height input-width rounded-xl px-5"
            v-model="type"
          />
        </div>
      </div>

      <div class="grid grid-cols-12 gap-8 mt-5">
        <div class="xl:col-span-12 xs:col-span-10">
          <label class="text-black font-poppins text-xl">Harga</label>
          <input
            type="number"
            class="bg-gray-200 normal-height input-width rounded-xl px-5"
            v-model="price"
          />
        </div>
      </div>

      <div class="grid grid-cols-12 gap-8 mt-5">
        <div class="xl:col-span-12 xs:col-span-10">
          <label class="text-black font-poppins text-xl">Nomor telepon</label>
          <input
            type="text"
            class="bg-gray-200 normal-height input-width rounded-xl px-5"
            v-model="phone"
          />
        </div>
      </div>

          <div class="grid grid-cols-12 mt-6 mb-24">
            <div class="xl:col-span-4 xs:col-span-12 xl:col-start-10 xs:col-start-2 ">
              <button class="bg-yellow rounded-lg text-white xl:text-xl xs:text-xs w-28">
                Edit
              </button>
              <button
                @click="submit()"
                class="bg-yellow rounded-lg xl:text-xl xs:text-xs text-white w-28"
              >
                Ajukan
              </button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    "ckeditor-nuxt": () => {
      if (process.client) {
        return import("@blowstack/ckeditor-nuxt");
      }
    },
  },
  data() {
    return {
      editorConfig: {
        simpleUpload: {
          uploadUrl: "path_to_image_controller",
          headers: {
            Authorization: "optional_token",
          },
        },
      },
      fileName: "Belum ada file yang diupload",
      fileData: null,
      name: "",
      description: "",
      service: "",
      category: "",
      type: "",
      price: "",
      phone: "",
      address: "",
      validate: true,
    };
  },
  methods: {
    ...mapActions({
      fetchHostelCategory: "hostel/fetchHostelCategory",
      storeHostel: "hostel/storeHostel",
    }),
    submit() {
      let formData = new FormData();
      formData.append("file", this.fileData);
      this.validate = true;
      if (
        !this.name ||
        !this.description ||
        !this.service ||
        !this.category ||
        !this.type ||
        !this.price ||
        !this.phone ||
        !this.address
      ) {
        this.validate = false;
        return;
      }
      this.storeHostel({
        fileData: formData,
        name: this.name,
        description: this.description,
        service: this.service,
        category_id: this.category,
        type: this.type,
        price: this.price,
        phone: this.phone,
        user_id: this.getUser.id,
        address: this.address,
      });
    },

    changeFile() {
      this.fileName = document.getElementById("photo").files[0].name;
      this.fileData = document.getElementById("photo").files[0];
    },
  },
  created() {
    this.fetchHostelCategory();
  },
  computed: mapGetters({
    getHostelCategory: "hostel/getHostelCategory",
    getUser: "auth/getUser",
  }),
};
</script>


