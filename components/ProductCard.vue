<template>
  <!-- <router-link :to="'/'"> -->
  <div class="border rounded-2xl flex flex-col sub-card grow-[1]">
    <div class="h-[240px] bg-black rounded-t-2xl w-full">
      <div
        class="text-3xl bg-primary p-3 my-2 absolute mt-[190px] ml-5 text-white drop-shadow-lg text-center rounded-xl"
        style="text-shadow: 0 1px 1px #000"
      >
        <i class="bi-house-check"></i>
      </div>
      <img
        src="@/assets/images/postal.png"
        class="rounded-t-2xl w-full h-[240px] object-cover"
      />
      <div
        class="relative md:-mt-[130px] z-[100] text-center invisible md:visible"
      >
        <router-link class="primary-button-light view-button mr-5" :to="`/`"
          >View Details</router-link
        >
        <router-link class="primary-button view-button" :to="`/`"
          >Buy Now</router-link
        >
      </div>
    </div>
    <div class="p-7">
      <div class="text-[#f35c35] text-[24px] font-bold">₦ 1,000,000</div>
      <div class="text-[24px] font-semibold text-[#252f48]">
        5 bedroom duplex
      </div>
      <div class="text-gray-500 mb-10">12 Bamidele Avenue, Lekki Phase 2</div>
      <hr />
      <div
        class="flex flex-row font-thin text-gray-500 text-xl pt-5 space-x-10"
      >
        <div class="flex">
          <img src="@/assets/images/size.svg" class="inline" />
          <div class="mt-1 ml-3 text-sm">1,422 SQFT</div>
        </div>
        <div class="flex">
          <img src="@/assets/images/layer.svg" class="inline" />
          <div class="mt-1 ml-3 text-sm">30 Units left</div>
        </div>

        <!-- <div class="flex text-success" >
            <i class="bi-check2-square text-4xl"></i>
            <div class="mt-1 ml-3 font-bold text-2xl">Sold Out</div>
          </div> -->
      </div>
      <div class="primary-button w-full mt-6 md:hidden">Buy now</div>
    </div>
  </div>
  <!-- </router-link> -->
</template>

<script>
// import { formatAsMoney } from '../utils/formatAsMoney';

export default {
  props: {
    // product: {
    //   type: Object,
    //   required: () => {},
    // },
  },
  methods: {
    // formatAsMoney,
  },
};
</script>

<style lang="scss" scoped>
.sub-card img {
  :hover > & {
    opacity: 0.6;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.sub-card .view-button {
  :hover > & {
    opacity: 1;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.sub-card .view-button {
  opacity: 0;
}
</style>
