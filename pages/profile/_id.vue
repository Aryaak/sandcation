<template>
  <div class="xl:container mx-auto mt-10 xl:px-16 px-10">
    <Header active="" />
    <div class="grid grid-cols-12 justify-items-end gap-10 mt-10 xl:mb-10 mb-5">
      <div class="bg-semiGray w-full rounded-lg py-8 col-span-4">
        <div class="text-center mb-10">
          <img class="block mx-auto w-6/12" src="~assets/img/foto.png" />
          <p class="text-grey mt-2">Selamat Datang</p>
          <h4 class="font-bold text-2xl">{{ getUser.name }}</h4>
        </div>
        <div class="mb-10">
          <ul class="flex flex-col gap-5">
            <li
              class="text-grey px-14 flex items-center gap-3"
              :class="{ profile_nav_active: nav == 'profile' }"
              @click="navigation('profile')"
            >
              <img src="~assets/img/person.png" />
              <span>Profile</span>
            </li>
            <li
              class="text-grey px-14 flex items-center gap-3"
              :class="{ profile_nav_active: nav == 'history' }"
              @click="navigation('history')"
            >
              <img src="~assets/img/history.png" /> <span>Riwayat</span>
            </li>
            <li
              class="text-grey px-14 flex items-center gap-3"
              :class="{ profile_nav_active: nav == 'service' }"
              @click="navigation('service')"
            >
              <img src="~assets/img/home.png" /> <span>Penyedia Jasa</span>
            </li>
          </ul>
        </div>
        <button
          class="
            bg-red
            px-8
            py-2
            rounded-xl
            text-lg text-white
            mx-auto
            block
            mb-10
          "
          @click="submit()"
        >
          Keluar
        </button>
      </div>
      <div class="col-span-8 w-full">
        <Profile v-if="nav == 'profile'" />
        <Service v-if="nav == 'service'" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  middleware({ store, redirect }) {
    //   return redirect("/login");
    // }
    console.log(store.getters.auth);
  },
  data() {
    return {
      nav: localStorage.getItem("profile_nav") || "profile",
    };
  },
  methods: {
    ...mapActions({
      logout: "auth/logout",
    }),
    navigation(nav) {
      localStorage.setItem("profile_nav", nav);
      this.nav = nav;
    },
    submit() {
      this.logout();
    },
  },
  computed: mapGetters({ getUser: "auth/getUser" }),
};
</script>

<style scoped>
</style>