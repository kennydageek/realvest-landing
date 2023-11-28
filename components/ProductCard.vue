<template>
  <div class="shadow-lg p-0 h-min-[26rem] bg-gray-50">
    <div class="h-52 bg-gray-50 rounded-md">
      <img
        class="card-filled p-0 h-full w-full rounded-md"
        :src="product.postal_image"
      />
    </div>
    <div class="p-5">
      <div class="text-2xl font-extrabold mb-3 text-[#f35c35]">
        {{ formatAsMoney(product?.unit_price) }}
      </div>
      <div class="font-bold text-xl text-[#1e293b]">{{ product.name }}</div>
      <div class="font-extralight text-sm mb-5 h-10 text-[#1e293b]">
        {{ product.meta.location.address }}
      </div>
      <div class="flex flex-row mt-6">
        <div
          v-if="product.status == 'inactive'"
          class="outline-button rounded-none rounded-l grow bg-green-200 !text-green-700"
        >
          <i class="bi-check2-circle" /> Sold Out
        </div>
        <a
          v-else
          :href="`https://app.realvest.ng/market-place/${product.id}/purchase`"
          class="outline-button grow text-gray-800 rounded-none border border-gray-300 hover:border-gray-300 rounded-l py-[8px] px-[20px] font-medium"
        >
          Buy Now
        </a>
        <a
          :href="`https://app.realvest.ng/market-place/${product.id}`"
          class="outline-button grow text-grow-800 font-medium rounded-none border border-gray-300 hover:border-gray-300 rounded-r py-[8px] px-[20px]"
          >Details</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { formatAsMoney } from '../utils/formatAsMoney';

export default {
  props: {
    product: {
      type: Object,
      required: () => {},
    },
  },
  methods: {
    formatAsMoney,
  },
  mounted() {
    console.log(this.product);
  },
};
</script>
