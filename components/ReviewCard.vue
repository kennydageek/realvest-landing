<template>
  <div class="bg-[#252F48] p-10 w-[full] md:w-[350px] rounded-2xl relative">
    <p class="text-white font-semibold">
      {{ review.review }}
    </p>
    <div class="mt-6">
      <div class="img-text flex justify-between relative self-center top-0">
        <div class="flex gap-3 self-center">
          <img :src="review.image" alt="" class="self-center" />
          <div class="text-white font-semibold">
            <p>{{ review.name }}</p>
            <img src="@/assets/images/star-rate.svg" alt="" />
          </div>
        </div>
        <img
          src="@/assets/images/format-quote.svg"
          class="self-center hidden md:block"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
