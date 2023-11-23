<template>
  <div class="accordion">
    <div
      v-for="(section, index) in sections"
      :key="index"
      class="accordion-section mb-6"
      :class="isOpen(index) ? 'border rounded-2xl border-[#f35c35]' : ''"
    >
      <div
        @click="toggleSection(index)"
        class="accordion-header cursor-pointer flex justify-between items-center bg-[#F1F5F9] py-4 px-6 font-semibold text-[#252F48] rounded-2xl"
        :class="isOpen(index) ? 'bg-[#fff]  ' : 'bg-[#f1f5f9]'"
      >
        {{ section.header }}
        <span :class="{ 'transform rotate-180': isOpen(index) }"
          ><img src="@/assets/images/down-arrow.svg"
        /></span>
      </div>
      <div v-show="isOpen(index)" class="accordion-content p-4">
        <hr />
        <p class="mt-5">{{ section.content }}</p>
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
          content:
            'All you need do is click the register button on the landing page, fill all fields and follow each prompts as you go',
        },
        {
          header: 'How do I access my referral bonuses?',
          content: `Once you've received bonuses from your downline transactions, the cash reward sent to your wallet for monthly withdrawal`,
        },
        {
          header: 'Do I get bonuses for every of my downline’s payment?',
          content:
            'Yes you get a cash reward on every payment your downline makes',
        },
        {
          header: 'Can I see my downlines payment?',
          content: `Yes, you can. When you navigate to the referral module, there's a table of all downline activities`,
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
