<template>
  <div class="logo self-start md:basis-[350px] mb-10 md:mb-0 md:space-y-0">
    <img src="@/assets/images/logo-variant.svg" alt="" />

    <div class="copy mt-6 font-medium">
      <p class="mt-4">
        2 Tinuola Close,Akowonjo Road, Egbeda, Lagos state, Nigeria
      </p>
      <div class="flex mt-6 md:gap-2 font-medium">
        <img src="@/assets/images/sms.svg" alt="" />
        <p class="ml-2 md:ml-0">hello@realvest.ng</p>
      </div>
      <div class="flex mt-3 md:gap-2 font-medium">
        <img src="@/assets/images/call.svg" alt="" />
        <p class="ml-2 md:ml-0">09018269497</p>
      </div>
    </div>
  </div>
  <!-- <div class="flex flex-col md:flex-row items-center gap-8"> -->
  <div class="company self-start md:basis-40">
    <h1 class="text-[#252F48] md:text-xl font-bold">Company</h1>
    <div class="links mt-4 font-medium">
      <a class="block mt-6" href="#home">Home</a>
      <a class="block mt-4" href="#about">About Us</a>
      <!-- <a class="block mt-4" href="#blog">Blog</a> -->
      <a class="block mt-4" href="#FAQ">FAQs</a>
    </div>
  </div>

  <div class="company self-start md:basis-40 ml-10 md:ml-0 mr-10 md:mr-0">
    <h1 class="text-[#252F48] md:text-xl font-bold">Social media</h1>
    <div class="links mt-4 font-medium">
      <a class="block mt-4" href="https://twitter.com/pertinencegroup"
        >Twitter</a
      >
      <a
        class="block mt-6"
        href="https://web.facebook.com/profile.php?id=412976838887916&amp;ref=br_rs"
        target="_blank"
        >Facebook</a
      >
      <!-- <a class="block mt-4">LinkedIn</a> -->
      <a class="block mt-4" href="https://www.instagram.com/pertinencegroup/"
        >Instagram</a
      >
    </div>
  </div>

  <div class="company self-start md:basis-40 md:ml-0 mt-10 md:mt-0">
    <h1 class="text-[#252F48] md:text-xl font-bold">Legal</h1>
    <div class="links mt-4 font-medium">
      <nuxt-link to="/privacy" class="block mt-6">Privacy Policy</nuxt-link>
      <router-link class="block mt-4" to="/terms"
        >Terms & Conditions</router-link
      >
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
