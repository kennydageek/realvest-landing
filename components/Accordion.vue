<template>
  <div class="accordion">
    <div
      v-for="(section, index) in sections"
      :key="index"
      class="accordion-section mb-6"
    >
      <div
        @click="toggleSection(index)"
        class="accordion-header cursor-pointer flex justify-between items-center bg-gray-200 p-4 font-semibold text-[#252F48]"
      >
        {{ section.header }}
        <span :class="{ 'transform rotate-180': isOpen(index) }"
          ><img src="@/assets/images/down-arrow.svg"
        /></span>
      </div>
      <div v-show="isOpen(index)" class="accordion-content p-4">
        {{ section.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openSections: [], // Array to keep track of open sections
      sections: [
        {
          header: 'How do I sign up and earn?',
          content: 'Content for Section 1',
        },
        {
          header: 'How do I access my referral bonuses?',
          content: 'Content for Section 2',
        },
        {
          header: 'Do I get bonuses for every of my downline’s payment?',
          content: 'Content for Section 3',
        },
        {
          header: 'Can I see my downlines payment?',
          content: 'Content for Section 4',
        },
      ],
    };
  },
  methods: {
    toggleSection(index) {
      // Toggle the open state of the clicked section
      const isOpen = this.isOpen(index);
      if (isOpen) {
        this.openSections = this.openSections.filter((i) => i !== index);
      } else {
        this.openSections.push(index);
      }
    },
    isOpen(index) {
      // Check if a section is open
      return this.openSections.includes(index);
    },
  },
};
</script>
