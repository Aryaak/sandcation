<template>
  <div>
    <nav class="xl:flex hidden justify-between items-center px-14">
      <div class="flex gap-4 items-center flex-grow">
        <img src="~assets/img/logo.png" />
        <h3 class="font-bold text-2xl text-left text-dark">sandcation</h3>
      </div>

      <ul class="xl:flex items-center gap-2 hidden text-grey">
        <li
          class="hover:cursor-pointer"
          :class="{
            'font-bold': active == 'isi_data',
            'text-dark': active == 'isi_data',
          }"
        >
          Isi Data >
        </li>
        <li
          class="hover:cursor-pointer"
          :class="{
            'font-bold': active == 'detail',
            'text-dark': active == 'detail',
          }"
        >
          Detail Pesanan & Pembayaran >
        </li>
        <li
          class="hover:cursor-pointer"
          :class="{
            'font-bold': active == 'tiket',
            'text-dark': active == 'tiket',
          }"
        >
          E-Tiket Dikirimkan
        </li>
        <li>
          <button
            @click="setModal(false)"
            class="bg-red px-5 py-1 ml-5 text-white rounded-xl"
          >
            Tutup
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["active"],
  methods: {
    ...mapMutations({
      setModal: "setModal",
    }),
  },
};
</script>

<style scoped>
</style>