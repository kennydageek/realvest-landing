<template>
  <!-- <router-link :to="'/'"> -->
  <div
    class="border rounded-2xl flex flex-col sub-card grow-[1] w-[300px] md:w-[440px] relative"
  >
    <div class="h-[240px] bg-black rounded-t-2xl w-full">
      <div
        class="text-3xl bg-primary p-3 my-2 absolute mt-[190px] ml-5 text-white drop-shadow-lg text-center rounded-xl"
        style="text-shadow: 0 1px 1px #000"
      >
        <i class="bi-house-check"></i>
      </div>
      <img
        :src="product.src"
        class="rounded-t-2xl w-full h-[240px] object-cover"
      />
    </div>

    <span
      class="inline m-6 py-2 px-4 rounded-lg self-start justify-self-start"
      :class="`${
        product.type === 'Investments'
          ? 'bg-[#f0f6ff]'
          : product.type === 'Business'
          ? 'bg-[#F1F0FE]'
          : product.type === 'Real Estate'
          ? 'bg-[#FEF7F5]'
          : ''
      }`"
    >
      <p
        :class="`${
          product.type === 'Investments'
            ? 'text-[#3071D2]'
            : product.type === 'Business'
            ? 'text-[#7065F0]'
            : product.type === 'Real Estate'
            ? 'text-[#F35C35]'
            : ''
        }`"
      >
        {{ product.type }}
      </p>
    </span>

    <div class="px-6 pb-6">
      <div class="text-[16px] md:text-[19px] font-semibold text-[#000]">
        {{ product.title }}
      </div>

      <div
        class="flex flex-row justify-between md:justify-start font-thin text-gray-500 text-xl pt-5 space-x-10"
      >
        <div class="flex">
          <!-- <img src="@/assets/images/size.svg" class="inline" /> -->
          <div class="mt-1 font-medium text-sm">{{ product.duration }}</div>
        </div>
        <div class="self-center">
          <img src="@/assets/images/circle.svg" alt="" />
        </div>
        <div class="flex">
          <!-- <img src="@/assets/images/layer.svg" class="inline" /> -->
          <div class="mt-1 text-sm font-medium">{{ product.read }}</div>
        </div>
      </div>
    </div>
  </div>
  <!-- </router-link> -->
</template>

<script>
// import { formatAsMoney } from '../utils/formatAsMoney';

export default {
  props: {
    product: {
      type: Object,
      required: () => {},
    },
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
