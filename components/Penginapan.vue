<template>
  <div class="overflow-hidden xl:mb-0 mb-14">
    <nuxt-link :to="'/penginapan/' + hostel.id">
      <img :src="hostel.photo" class="w-full mb-5 rounded-xl" />
      <p class="text-grey">{{ hostel.category.name }}</p>

      <div class="flex items-center justify-between">
        <h1 class="font-medium text-2xl">{{ hostel.name }}</h1>
        <div class="flex justify-between gap-2">
          <img src="~assets/img/star.png" />
          <img src="~assets/img/star.png" />
          <img src="~assets/img/star.png" />
          <img src="~assets/img/star.png" />
          <img src="~assets/img/star.png" />
        </div>
      </div>

      <div class="mt-2 flex items-center gap-2">
        <img src="~assets/img/location.png" />
        <h4 class="font-lighter text-lg text-blue">{{ hostel.address }}</h4>
      </div>
      <h3 class="text-yellow font-bold text-3xl mt-5">
        IDR {{ hostel.price }}<span class="text-dark font-normal">/Malam</span>
      </h3>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["hostel"],
};
</script>

<style scoped>
</style>