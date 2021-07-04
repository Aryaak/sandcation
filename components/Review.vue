<template>
  <div class="border-grey rounded-xl px-5 py-10 border-2">
    <div class="flex items-center mb-5">
      <img src="~assets/img/profile.png" />
      <div>
        <p class="font-bold">{{ review.user.name }}</p>
        <p class="text-grey">{{ date }}</p>
      </div>
    </div>
    <div class="flex gap-2 mb-5">
      <img v-for="i of review.stars" :key="i" src="~assets/img/star.png" />
    </div>
    <p>
      {{ review.review }}
    </p>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      date: "",
    };
  },
  props: ["review"],
  created() {
    let date = moment(this.review.created_at);
    this.date = date.fromNow();
  },
};
</script>

<style scoped>
</style>