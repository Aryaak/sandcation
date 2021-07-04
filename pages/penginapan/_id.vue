<template>
  <div class="xl:container mx-auto mt-10 xl:px-16 px-10">
    <ModalBooking />
    <Header active="penginapan" />
    <div class="relative w-full mt-10 xl:mb-10 mb-5">
      <img :src="getHostel.photo" class="w-full rounded-3xl" />
    </div>
    <div class="grid xl:grid-cols-12 grid-cols-1 justify-items-end">
      <div class="col-span-8 mb-10 xl:mb-0 mr-auto">
        <p class="text-grey text-2xl">{{ getHostel.category.name }}</p>
        <h1 class="font-medium text-5xl">{{ getHostel.name }}</h1>
        <div class="flex items-center gap-2 mb-10">
          <img src="~assets/img/location.png" width="20px" />
          <h2 class="font-lighter text-3xl text-blue">
            {{ getHostel.address }}
          </h2>
        </div>
        <h3
          class="font-medium text-2xl border-yellow border-b-4 w-max pb-2 mb-5"
        >
          Tentang
        </h3>
        <p class="text-lg" v-html="getHostel.description"></p>
      </div>

      <div class="relative col-span-4 mx-auto xl:mx-0">
        <div
          class="
            relative
            xl:right-0
            w-max
            xl:-top-28
            bg-white
            border-yellow
            rounded-tl-2xl
            mb-20
            xl:mb-0
          "
        >
          <div
            class="
              bg-yellow
              px-14
              py-5
              font-semibold
              text-white text-2xl text-center
              rounded-tl-2xl rounded-tr-2xl
              xl:rounded-tr-none
            "
          >
            Booking sekarang
          </div>
          <div
            class="
              px-5
              py-5
              border-yellow border-2
              pb-14
              rounded-bl-2xl rounded-br-2xl
            "
          >
            <div class="flex justify-between gap-x-14 pt-3">
              <div>
                <p class="mb-3">penyedia :</p>
                <div class="flex items-center gap-3 mb-3">
                  <img
                    v-if="getHostel.user.photo"
                    :src="getHostel.user.photo"
                  />
                  <p class="font-bold">Jhon Doe</p>
                </div>
                <p class="mb-3">pelayanan :</p>
                <ol class="list-decimal ml-3">
                  <li>2 kamar mandi</li>
                  <li>2 kasur</li>
                  <li>AC</li>
                  <li>Televisi</li>
                </ol>
              </div>
              <div>
                <div class="flex gap-2">
                  <img src="~assets/img/star.png" />
                  <img src="~assets/img/star.png" />
                  <img src="~assets/img/star.png" />
                  <img src="~assets/img/star.png" />
                  <img src="~assets/img/star.png" />
                </div>
                <p class="mb-3">{{ getHostel.reviews.length }} reviewer</p>

                <h4 class="text-yellow font-bold text-2xl">
                  IDR {{ getHostel.price }}
                </h4>
                <p class="mb-3">per malam</p>
              </div>
            </div>
          </div>
          ><button
            @click="setModal(true)"
            v-if="getLoged"
            class="bg-yellow absolute right-5 -bottom-10 p-5 rounded-full"
          >
            <img src="~assets/img/calendar-plus.png" />
          </button>
        </div>
        <div v-if="checkAuthor()">
          <div
            class="text-center border-yellow border-b-4 w-max mx-auto pb-2 mb-5"
          >
            <h3 class="font-medium text-2xl">Review Anda</h3>
          </div>
          <div v-if="!getReview">
            <div class="flex mx-auto justify-center gap-2 mb-5" id="stars">
              <img
                v-if="!stars.one"
                class="unstar"
                src="~assets/img/unstar.png"
                @click="starsReview(1)"
              />
              <img
                @click="starsReview(1)"
                v-if="stars.one"
                class="star"
                src="~assets/img/star.png"
              />
              <img
                v-if="!stars.two"
                class="unstar"
                src="~assets/img/unstar.png"
                @click="starsReview(2)"
              />
              <img
                @click="starsReview(2)"
                v-if="stars.two"
                class="star"
                src="~assets/img/star.png"
              />
              <img
                v-if="!stars.three"
                class="unstar"
                src="~assets/img/unstar.png"
                @click="starsReview(3)"
              />
              <img
                @click="starsReview(3)"
                v-if="stars.three"
                class="star"
                src="~assets/img/star.png"
              />
              <img
                v-if="!stars.four"
                class="unstar"
                src="~assets/img/unstar.png"
                @click="starsReview(4)"
              />
              <img
                @click="starsReview(4)"
                v-if="stars.four"
                class="star"
                src="~assets/img/star.png"
              />
              <img
                v-if="!stars.five"
                class="unstar"
                src="~assets/img/unstar.png"
                @click="starsReview(5)"
              />
              <img
                @click="starsReview(5)"
                v-if="stars.five"
                class="star"
                src="~assets/img/star.png"
              />
            </div>
            <textarea
              v-model="review"
              placeholder="Ceritakan pengalaman anda!"
              class="
                border-yellow border-2
                mx-auto
                p-5
                rounded-lg
                w-full
                focus:outline-none
              "
              cols="12"
              rows="5"
            ></textarea>
            <button
              @click="submit()"
              class="
                bg-yellow
                rounded-2xl
                text-white
                mt-5
                px-8
                py-2
                xl:text-xl
                text-lg
                w-full
                focus:outline-none
                mb-20
                xl:mb-0
              "
            >
              Kirim
            </button>
          </div>
          <div v-if="getReview">
            <Review :review="getReview" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex gap-2 mb-5">
        <h3
          class="font-medium text-2xl border-yellow border-b-4 w-max pb-2 mb-5"
        >
          Review
        </h3>
        <span class="text-grey mt-2 text-lg"
          >({{ getHostel.reviews.length }})</span
        >
      </div>
      <div class="grid xl:grid-cols-3 grid-cols-1 mb-10 xl:mb-0 gap-10">
        <Review
          v-for="review in getHostel.reviews"
          :key="review.id"
          :review="review"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import ModalBooking from "~/components/ModalBooking.vue";
export default {
  components: { ModalBooking },
  data() {
    return {
      stars: {
        one: true,
        two: false,
        three: false,
        four: false,
        five: false,
      },

      review: "",
    };
  },
  methods: {
    ...mapActions({
      fetchHostelById: "hostel/fetchHostelById",
      fetchReview: "review/fetchReview",
      storeReview: "review/storeReview",
    }),
    ...mapMutations({
      setModal: "setModal",
    }),
    checkAuthor() {
      // getHostel.user.id != !getUser.id && getLoged
      if (this.getLoged) {
        return this.getHostel.user.id != !this.getUser.id;
      } else {
        return false;
      }
    },
    starsReview(order) {
      switch (order) {
        case 1:
          this.stars.one = true;
          this.stars.two = false;
          this.stars.three = false;
          this.stars.four = false;
          this.stars.five = false;
          break;
        case 2:
          this.stars.one = true;
          this.stars.two = true;
          this.stars.three = false;
          this.stars.four = false;
          this.stars.five = false;
          break;
        case 3:
          this.stars.one = true;
          this.stars.two = true;
          this.stars.three = true;
          this.stars.four = false;
          this.stars.five = false;
          break;
        case 4:
          this.stars.one = true;
          this.stars.two = true;
          this.stars.three = true;
          this.stars.four = true;
          this.stars.five = false;
          break;
        case 5:
          this.stars.one = true;
          this.stars.two = true;
          this.stars.three = true;
          this.stars.four = true;
          this.stars.five = true;
          break;
      }
    },
    async submit() {
      const stars = Array.from(document.getElementsByClassName("star")).length;
      await this.storeReview({
        user_id: this.getUser.id,
        hostel_id: this.$route.params.id,
        review: this.review,
        stars: stars,
      });
      this.fetchReview({
        user_id: this.getUser.id,
        hostel_id: this.$route.params.id,
      });
      this.fetchHostelById(this.$route.params.id);
    },
  },
  computed: mapGetters({
    getHostel: "hostel/getHostel",
    getUser: "auth/getUser",
    getReview: "review/getReview",
    getLoged: "auth/getLoged",
  }),
  created() {
    this.fetchHostelById(this.$route.params.id);
    if (this.getLoged) {
      this.fetchReview({
        user_id: this.getUser.id,
        hostel_id: this.$route.params.id,
      });
    }
  },
};
</script>

<style scoped>
</style>