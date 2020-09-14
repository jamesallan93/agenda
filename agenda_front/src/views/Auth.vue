<template>
  <div id="app">
    <main class="admin-main">
      <router-view />
    </main>
  </div>
</template>
<script>
export default {
  mounted() {
    document.body.classList.add("jumbo-page");
    document.body.classList.remove("pace-done");
  }
};
</script>

<style lang="scss">
</style>
