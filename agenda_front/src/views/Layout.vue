<template>
  <span>
    <AsideBar />
    <main class="admin-main">
      <NavBarTop />
      <router-view />
    </main>
  </span>
</template>

<script>
import AsideBar from "@/components/navigation/AsideBar.vue";
import NavBarTop from "@/components/navigation/NavBarTop";

export default {
  components: {
    AsideBar,
    NavBarTop,
  },

  mounted() {
    document.body.classList.remove("jumbo-page");
    document.body.classList.add("pace-done");
  },
};
</script>

<style></style>
