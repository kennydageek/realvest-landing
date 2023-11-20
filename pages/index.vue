<template>
  <div
    class="py-20 background-blue bg-[url('@/assets/images/vector.svg')] object-cover bg-no-repeat bg-center relative h-screen md:h-[110vh]"
  >
    <div class="text-center w-full md:w-[1121px] mx-auto">
      <h1
        class="text-white font-bold text-[40px] md:text-[72px] leading-[56px] md:leading-[80px]"
      >
        Explore the finest plans to acquire your dream home
      </h1>
      <p
        class="w-[90%] md:w-[787px] mx-auto mt-8 text-[16px] md:text-xl mb-10 text-white font-semibold leading-[28px]"
      >
        With our platform, you can explore and select from top-notch plans that
        align with your vision, bringing you closer to the home you've always
        desired.
      </p>
      <div class="cta mt-10">
        <a
          href="#"
          class="primary-button px-8 rounded-[12px] inline-flex gap-[10px] justify-center self-center"
        >
          <p class="font-bold text-[16px] self-center">Get Started</p>
          <img
            src="@/assets/images/arrow-circle-right.svg"
            class="self-center"
            alt=""
        /></a>
      </div>
      <div class="px-[24px] md:px-[120px] absolute top-[80%] md:top-[55%]">
        <img
          src="@/assets/images/dashboard-elements.svg"
          alt=""
          class="object-cover w-full hidden md:block"
        />
        <img
          src="@/assets/images/dashboard-elements-mobile.svg"
          alt=""
          class="object-cover w-full block md:hidden"
        />
      </div>
    </div>
  </div>

  <!-- Section about -->
  <section
    class="mt-[200px] md:mt-[500px] px-[24px] md:px-[120px] pb-12 md:pb-[144px] flex flex-col md:flex-row gap-[50px]"
  >
    <div class="self-center md:w-[45%]">
      <div
        class="head-pill text-[#37445D] inline-block px-6 py-3 mb-4 border-2 border-[#f35c35] rounded-[32px] text-sm font-semibold"
      >
        <p>ABOUT US</p>
      </div>
      <h1 class="text-[#252F48] font-bold text-[32px] md:text-[48px]">
        Here’s what we offer at<span class="text-[#f35c35]"> Realvest</span>
      </h1>
      <p class="text-[16px] font-[500] md:font-semibold md:w-[90%]">
        We understand the significance of trust when it comes to real estate
        investment. That's why we prioritize transparency, reliability, and
        accountability in everything we do
      </p>

      <div class="mt-10 flex gap-[47px]">
        <div>
          <p class="text-[24px] md:text-[40px] text-[#252f48] font-bold">
            60K<span class="text-[#f35c35]">+</span>
          </p>
          <p class="text-sm md:text-[16px] font-semibold">Realtors</p>
        </div>

        <div>
          <p class="text-[24px] md:text-[40px] text-[#252f48] font-bold">
            120<span class="text-[#f35c35]">+</span>
          </p>
          <p class="text-sm md:text-[16px] font-semibold">Properties</p>
        </div>

        <div>
          <p class="text-[24px] md:text-[40px] text-[#252f48] font-bold">
            10K<span class="text-[#f35c35]">+</span>
          </p>
          <p class="text-sm md:text-[16px] font-semibold">Subscriptions</p>
        </div>
      </div>
    </div>
    <div
      class="second-div w-full md:w-[55%] flex flex-col md:flex-row flex-wrap self-start gap-8"
    >
      <div class="card bg-white md:w-[47%]">
        <img src="@/assets/images/affordable.svg" alt="" />
        <p class="mt-6 text-[#252748] font-semibold text-xl">
          Reliable investment plans
        </p>
        <p>
          We provide you with trustworthy investment plans resulting to a solid
          foundation for financial goals.
        </p>
      </div>

      <div class="card bg-white md:w-[47%]">
        <img src="@/assets/images/referral.svg" alt="" />
        <p class="mt-6 text-[#252748] font-semibold text-xl">
          Referral bonuses
        </p>
        <p>
          By referring others to invest, you can enjoy extra incentives in the
          form of referral bonuses.
        </p>
      </div>

      <div class="card bg-white md:w-[47%]">
        <img src="@/assets/images/home.svg" alt="" />
        <p class="mt-6 text-[#252748] font-semibold text-xl">
          Best homes close to you
        </p>
        <p>
          Explore a curated selection of top-notch residences nearby for your
          consideration.
        </p>
      </div>

      <div class="card bg-white md:w-[47%]">
        <img src="@/assets/images/money.svg" alt="" />
        <p class="mt-6 text-[#252748] font-semibold text-xl">
          Secure payment options
        </p>
        <p>
          When it comes to buying homes, you have access to various secure
          payment options.
        </p>
      </div>
    </div>
  </section>

  <!-- Section plans -->
  <section
    class="plans !bg-[#F1F5F9] py-[48px] px-[24px] md:px-[120px] md:py-[87px] flex flex-col md:flex-row gap-10 md:gap-[131.8px]"
  >
    <img
      src="@/assets/images/transaction.svg"
      alt=""
      class="order-1 md:order-none"
    />

    <div class="self-center">
      <h1
        class="text-[32px] leading-[48px] md:text-[48px] text-[#252F48] font-bold md:leading-[64px]"
      >
        You have access to subscribe to the best plans easily
      </h1>
      <ul class="mt-6">
        <li class="flex gap-2">
          <img src="@/assets/images/tick-circle.svg" alt="" />
          <p class="font-semibold">
            Select the the home you’d like to subscribe to
          </p>
        </li>
        <li class="flex gap-2 mt-4">
          <img src="@/assets/images/tick-circle.svg" alt="" />
          <p class="font-semibold">Select the plan best suitable to you</p>
        </li>
        <li class="flex gap-2 mt-4">
          <img src="@/assets/images/tick-circle.svg" alt="" />
          <p class="font-semibold">
            Enter duration of payment and number of units
          </p>
        </li>
        <li class="flex gap-2 mt-4">
          <img src="@/assets/images/tick-circle.svg" alt="" />
          <p class="font-semibold">Review your subscription details</p>
        </li>
        <li class="flex gap-2 mt-4">
          <img src="@/assets/images/tick-circle.svg" alt="" />
          <p class="font-semibold">Make your payment and start your journey!</p>
        </li>
      </ul>
    </div>
  </section>

  <!-- Section Featured Homes -->
  <section
    class="!bg-[#FFF] py-[48px] px-[24px] md:px-[120px] md:py-[80px] md:flex-row gap-10 md:gap-[131.8px]"
  >
    <h2 class="text-[32px] md:text-5xl font-bold text-[#252f48]">
      Featured Homes
    </h2>
    <p class="mt-4 md:w-[560px]">
      You get to see and experience the best quality homes and property close to
      you. Click on one of the best properties below and enjoy
    </p>
    <div class="flex flex-wrap gap-[28px] mt-[56px]">
      <product-card
        v-for="(product, index) in 6"
        :key="index"
        :product="product"
        class="w-[300px] relative"
      />
    </div>

    <div class="mt-10 md:mt-16 flex justify-center">
      <span class="secondary-button border-0">Load more</span>
    </div>
  </section>

  <!-- Section blogs -->
  <section
    class="!bg-[#FFF] py-[48px] px-[24px] md:px-[120px] md:py-[80px] md:flex-row gap-10 md:gap-[131.8px] overflow-scroll"
  >
    <div class="flex flex-col md:flex-row">
      <div class="md:w-[513px]">
        <div
          class="head-pill text-[#37445D] inline-block px-6 py-3 mb-4 border-2 border-[#f35c35] rounded-[32px] text-sm font-semibold"
        >
          <p>OUR BLOG</p>
        </div>
        <h2 class="text-[#252f48] font-bold text-[32px] md:text-[48px]">
          What’s in our Articles
        </h2>
      </div>
      <p class="font-medium md:font-bold md:w-[519px] self-end">
        Stay ahead of the curve with Realvest's blog contents, delivering timely
        updates and valuable insights on real estate, finances, investments, and
        more.
      </p>

      <div
        class="self-end text-[#f35c35] mt-10 md:mt-0 flex justify-end justify-self-end grow-[1]"
      >
        <a href="#" class="font-semibold"> See all</a>
        <img src="@/assets/images/right-arrow.svg" alt="" />
      </div>
    </div>
    <div
      class="grid grid-flow-col w-full min-w-full overflow-x-scroll overflow-y-hidden pb-10 gap-[28px] mt-[24px] md:mt-[56px]"
    >
      <article-card
        class="self-start"
        v-for="(product, i) in products"
        :product="product"
        :key="`article-${i}`"
      />
    </div>
  </section>

  <section
    class="!bg-[#252F48] py-[48px] px-[24px] md:px-[120px] md:py-[80px] md:flex-row gap-10 md:gap-[131.8px] overflow-scroll"
  >
    <div class="text-center mb-[13.66px] relative">
      <h2 class="text-[32px] md:text-[48px] text-[#fff] font-bold">
        Our Happy Realtors
      </h2>
      <p class="text-white">Listen to what others are saying about us</p>
    </div>
    <img
      src="@/assets/images/reviews-desktop.png"
      alt=""
      class="hidden md:block"
    />
    <img src="@/assets/images/testimonial.png" alt="" class="md:hidden" />

    <review-card class="hidden" />
  </section>

  <section
    class="plans !bg-[#fff] py-[48px] px-[24px] md:px-[120px] md:py-[87px] flex flex-col md:flex-row gap-10 md:gap-[187px]"
  >
    <img src="@/assets/images/FAQ.png" alt="" class="self-center w-[45%]" />

    <div class="self-center order-[-1] md:order-none">
      <div
        class="head-pill text-[#37445D] inline-block px-6 py-3 mb-4 border-2 border-[#f35c35] rounded-[32px] text-sm font-semibold"
      >
        <p>FAQs</p>
      </div>
      <h1
        class="text-[32px] leading-[48px] md:text-[48px] text-[#252F48] font-bold md:leading-[64px]"
      >
        Get the answer to all your queries
      </h1>
      <p class="font-medium mt-4">
        Stay ahead of the curve with Realvest's blog contents, delivering timely
        updates and valuable insights on real estate, finances, investments, and
        more.
      </p>

      <div class="mt-6">
        <accordion />
      </div>
    </div>
  </section>

  <section
    class="plans !bg-[#F1F5F9] justify-between py-[48px] px-[24px] md:px-[120px] md:py-[87px] flex flex-wrap md:flex-nowrap md:flex-row gap-10 md:gap-[187px]"
  >
    <app-footer />
  </section>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import ArticleCard from '@/components/ArticleCard.vue';
import Article1 from '@/assets/images/article-1.png';
import Article2 from '@/assets/images/article-2.png';
import ReviewCard from '@/components/ReviewCard.vue';
import Accordion from '@/components/Accordion.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: { ProductCard, ArticleCard, ReviewCard, Accordion, AppFooter },
  data() {
    return {
      products: [
        {
          type: 'Investments',
          title:
            'Notable investments that contribute to long-term wealth accumulation',
          duration: '5 weeks ago',
          read: '10 mins read',
          src: Article1,
        },
        {
          type: 'Business',
          title:
            'Entrepreneurial opportunities suitable for young adults to explore',
          duration: '5 weeks ago',
          read: '10 mins read',
          src: Article2,
        },
        {
          type: 'Real Estate',
          title:
            'Promising properties poised for significant growth in the upcoming years',
          duration: '5 weeks ago',
          read: '10 mins read',
          src: Article1,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
