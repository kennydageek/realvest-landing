<template>
  <div>
    <!-- Navbar -->
    <div
      class="navbar fixed w-full z-[9999999] py-5 px-[24px] md:px-[120px] background-blue flex justify-between"
    >
      <div class="self-center">
        <img
          src="@/assets/images/logo.svg"
          class="w-[120px] object-cover"
          alt=""
        />
      </div>

      <!-- Navbar Links (hidden on mobile) -->
      <ul class="md:flex gap-6 self-center hidden">
        <li class="p-3">
          <nuxt-link href="/" class="nav-links">Home</nuxt-link>
        </li>
        <li class="p-3">
          <nuxt-link href="/#about" class="nav-links">About Us</nuxt-link>
        </li>
        <li class="p-3">
          <nuxt-link to="/blog" class="nav-links">Blog</nuxt-link>
        </li>
        <li class="p-3">
          <nuxt-link to="/#FAQ" class="nav-links">FAQS</nuxt-link>
        </li>
      </ul>

      <!-- Navbar Buttons (hidden on mobile) -->
      <div class="self-center gap-4 hidden md:flex">
        <a
          href="https://app.realvest.ng/login"
          class="secondary-button self-center"
          >Login</a
        >
        <a
          href="https://app.realvest.ng/register"
          class="primary-button self-center"
          >Sign Up</a
        >
      </div>

      <!-- Hamburger Menu (visible on mobile) -->
      <img
        src="@/assets/images/menu.svg"
        alt=""
        class="self-center md:hidden"
        @click="toggleSidebar"
      />
    </div>

    <!-- Sidebar (initially hidden) -->
    <div class="sidebar md:hidden" :class="{ active: isSidebarOpen }">
      <!-- Close button for the sidebar -->
      <div class="flex justify-between">
        <img
          src="@/assets/images/logo.svg"
          class="w-[120px] object-cover"
          alt=""
        />
        <div class="!self-center" @click="closeSidebar">
          <img src="@/assets/images/xmark.svg" alt="" />
        </div>
      </div>

      <!-- Sidebar Links -->
      <ul class="sidebar-links">
        <li>
          <nuxt-link href="/" class="nav-links" @click="closeSidebar"
            >Home</nuxt-link
          >
        </li>
        <li class="mt-4" @click="closeSidebar">
          <a href="/#about" class="nav-links">About Us</a>
        </li>
        <li class="mt-4" @click="closeSidebar">
          <a href="/#FAQ" class="nav-links">FAQs</a>
        </li>
        <li class="mt-4" @click="closeSidebar">
          <nuxt-link to="/blog" class="nav-links">Blog</nuxt-link>
        </li>
      </ul>

      <!-- Sidebar Buttons -->
      <div class="flex space-x-4 mt-12">
        <a href="https://app.realvest.ng/login" class="secondary-button grow"
          >Login</a
        >
        <a href="https://app.realvest.ng/register" class="primary-button grow"
          >Sign Up</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background: rgba(22, 47, 72, 0.7);
  backdrop-filter: blur(10px);
}
/* Add styles for the sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: -1000px; /* Initially off-screen */
  width: 100%;
  height: 100%;
  background: rgba(22, 47, 72, 0.3);
  backdrop-filter: blur(10px); /* Adjust as needed */
  transition: left 0.7s ease-in-out;
  z-index: 9999999999;
  padding: 24px;
}

.sidebar.active {
  left: 0; /* Slide in when active */
}

.sidebar-links {
  // padding: 20px;
  margin-top: 48px;
  list-style: none;
}

.sidebar-links a {
  text-decoration: none;
  color: #fff; /* Adjust as needed */
  font-size: 16px;
  padding: 10px 0;
  display: block;
}

.close-btn {
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  position: absolute;
  top: 20px;
  right: 20px;
}

.sidebar-buttons {
  margin-top: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar-buttons a {
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
}
</style>
