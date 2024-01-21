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
          header: 'What is the minimum and maximum unit to be subscribed?',
          content:
            'The minimum number of housing units available for subscription is 1, while there is no set maximum limit for individuals. However, please note that unit availability is finite.',
        },
        {
          header: 'What is the duration of the home ownership commitment?',
          content: `We have varying duration depending on the choice of housing unit. Terrace bungalows have a payment plan of as long as 10 years while the stand -alone bungalow duration is as long as 5 years`,
        },
        {
          header: 'What locations are available for Home Ownership?',
          content:
            'Mowe, Ogun State \nIbeju-Lekki, Lagos state \nGwagwalada, Abuja \nOwerri Imo State\nOgbomosho, Oyo State\nIkola, Alagbado\nTrademoore, Abuja',
        },
        {
          header: 'How is default charge calculated?',
          content: `Kindly refer to Terms and Conditions for default charge rate.`,
        },
        {
          header:
            'Is it possible to conclude my home ownership commitment before the agreed timeframe?',
          content: `Yes, it is possible. Termination however attracts an administrative charge of 40% on the amount paid so far as at point of termination.`,
        },
        {
          header:
            'Does the company give room for transfer of ownership of an existing payment plan?',
          content: `
Yes, a client can transfer ownership of an ongoing payment plan or completed plan of any of the RealVest products. All that needs to be done is to carry the company along and give a one month notice to ensure proper documentation is done. Kindly refer to the terms and conditions for administrative charge.`,
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
