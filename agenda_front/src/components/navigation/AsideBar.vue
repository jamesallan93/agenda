<template>
  <aside class="admin-sidebar">
    <div class="admin-sidebar-brand">
      <!-- begin sidebar branding-->
      <img
        class="admin-brand-logo"
        src="https://img.icons8.com/cotton/2x/bitcoin.png"
        width="40"
        alt="atmos Logo"
      />
      <!-- end sidebar branding-->
      <div class="ml-auto">
        <!-- sidebar pin-->
        <a href="#" class="admin-pin-sidebar btn-ghost btn btn-rounded-circle"></a>
        <!-- sidebar close for mobile device-->
        <a href="#" class="admin-close-sidebar"></a>
      </div>
    </div>
    <div class="admin-sidebar-wrapper js-scrollbar">
      <ul class="menu">
        <li class="menu-item">
          <router-link class="menu-link" :to="{name:'Contacts'}">
            <span class="menu-label">
              <span class="menu-name">Contatos</span>
            </span>
            <span class="menu-icon">
              <i class=" mdi mdi-account-group-outline" style="font-size: 20px;"></i>
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: "AsideBar"
};
</script>

<style></style>
