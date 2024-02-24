<script>
export default {
  name: 'Tabs',
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    activeTab: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<template>
  <div>
    <nav
      class="mb-4 flex space-x-8 bg-[#FAFAFA] py-[8px] md:py-[8px] pb-0 px-[24px] md:px-[120px] overflow-scroll"
      aria-label="Tabs"
    >
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        class="text-[#6D7A8D] !font-bold whitespace-nowrap py-4 px-1 border-b-4"
        :class="[
          activeTab === index
            ? 'border-primary-100 !text-[#252F48]  border-[#F35C35]'
            : 'border-transparent text-[#252F48] ',
        ]"
        @click="activeTab = index"
      >
        {{ tab.title }}
      </button>
    </nav>

    <div class="">
      <slot :name="tabs[activeTab].name"></slot>
    </div>
  </div>
</template>
