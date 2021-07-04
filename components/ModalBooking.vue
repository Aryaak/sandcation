<template>
  <div
    class="container mx-auto mt-10 my-8 modal-booking"
    v-if="$store.state.showModal"
  >
    <ModalHeader :active="nav" />
    <div>
      <IsiData v-if="nav == 'isi_data'" @navigation="navigation('detail')" />
      <ModalDetail v-if="nav == 'detail'" @navigation="navigation('tiket')" />
      <Tiket v-if="nav == 'tiket'" @navigation="navigation('tiket')" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: "isi_data",
    };
  },
  methods: {
    navigation(newNav) {
      this.nav = newNav;
    },
  },
};
</script>

