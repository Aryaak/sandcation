<template>
  <div class="loading z-50" v-if="$store.state.loading">
    <div class="loading-content">
      <img class="block mx-auto" src="~assets/img/loading.gif" width="100px" />
      <p class="text-center font-bold text-2xl">Tunggu Sebentar</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>