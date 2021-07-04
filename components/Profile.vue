<template>
  <div class="bg-semiGray rounded-x py-8 px-14">
    <h4 class="font-bold text-2xl text-center">Profile</h4>
    <p class="text-grey text-center mb-8">Mari atur detail profilemu</p>
    <div class="border-grey border-2 px-5 py-2 rounded-xl mb-5">
      <div class="mb-2 flex justify-between items-center">
        <p class="text-grey">Nama</p>
        <p class="text-yellow font-medium">Ubah</p>
      </div>
      <input
        type="text"
        class="bg-semiGray focus:outline-none text-xl"
        v-model="name"
      />
    </div>
    <div class="border-grey border-2 px-5 py-2 rounded-xl mb-5">
      <div class="mb-2 flex justify-between items-center">
        <p class="text-grey">Email</p>
        <p class="text-yellow font-medium">Ubah</p>
      </div>
      <input
        type="text"
        class="bg-semiGray focus:outline-none text-xl"
        v-model="email"
      />
    </div>
    <div class="border-grey border-2 px-5 py-2 rounded-xl mb-5">
      <div class="mb-2 flex justify-between items-center">
        <p class="text-grey">No telepon</p>
        <p class="text-yellow font-medium">Ubah</p>
      </div>
      <input type="text" class="bg-semiGray focus:outline-none text-xl" />
    </div>
    <div class="border-grey border-2 px-5 py-2 rounded-xl mb-5">
      <div class="mb-2 flex justify-between items-center">
        <p class="text-grey">Tanggal Lahir</p>
        <p class="text-yellow font-medium">Ubah</p>
      </div>
      <input type="text" class="bg-semiGray focus:outline-none text-xl" />
    </div>
    <div class="border-grey border-2 px-5 py-2 rounded-xl mb-5">
      <div class="mb-2 flex justify-between items-center">
        <p class="text-grey">Gender</p>
        <p class="text-yellow font-medium">Ubah</p>
      </div>
      <input type="text" class="bg-semiGray focus:outline-none text-xl" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      birth: "",
      gender: "",
    };
  },
  computed: mapGetters({ getUser: "auth/getUser" }),
  created() {
    this.name = this.getUser.name;
    this.email = this.getUser.email;
  },
};
</script>

<style lang="scss" scoped>
</style>