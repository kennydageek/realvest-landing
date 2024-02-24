<template>
  <section
    class="py-[150px] md:py-[150px] px-[24px] md:px-[120px] flex flex-col md:flex-row bg-[#FAFAFA]"
  >
    <div class="">
      <p class="text-[#f35c35] font-bold font-satoshi">OUR BLOG</p>
      <p
        class="text-[#252F48] text-2xl leading-[1.4] md:text-[56px] md:leading-[72px] mt-5 font-bold md:w-[546px]"
      >
        News and Insights from Our Blog
      </p>

      <p class="text-[#7D7E7F] font-semibold md:w-[546px] text-xl mt-5">
        Discover captivating real estate anecdotes and informative responses to
        frequently asked questions
      </p>
    </div>
  </section>
  <div class="">
    <!-- <tabs :tabs="tabs"> -->
    <!-- <template v-slot:tab_1> -->
    <all-articles :item="blogArray[0]" />
    <!-- </template> -->
    <!-- </tabs> -->
  </div>

  <section class="py-[80px] md:py-[150px] px-[24px] md:px-[120px]">
    <p class="text-2xl md:text-[32px] font-bold text-[#252F48]">
      All blog posts
    </p>

    <div class="flex justify-center mt-5" v-if="loading">
      <spinner />
    </div>
    <div class="mt-10 flex flex-col md:flex-row flex-wrap gap-8" v-else>
      <blog-card
        class="grow md:grow-0"
        v-for="(blog, i) in blogArray"
        :key="`blog-${i}`"
        :item="blog"
      />
    </div>

    <div class="mt-10 md:mt-16 border-t pt-5 md:pt-10">
      <pagination
        :totalRecords="totalItems"
        :currentPage="currentPage"
        :perPage="pageSize"
        @onchange="paginate"
      />
    </div>
  </section>

  <section class="pb-[100px] px-[24px] md:px-[120px] md:pb-[144px]">
    <div
      class="p-6 md:py-12 md:px-16 border border-[#E1E7EB] rounded-[16px] flex flex-col md:flex-row gap-10 justify-between"
    >
      <div class="md:w-[600px]">
        <p
          class="text-2xl md:text-[48px] text-[#2E2F35] font-semibold md:leading-[64px] mb-6"
        >
          Let’s start your Journey to financial freedom
        </p>
        <a
          href="https://app.realvest.ng/register"
          class="primary-button self-center font-bold"
          >Get Started</a
        >
      </div>

      <div
        class="text-[#252F48] text-xl font-semibold md:w-[314px] self-center order-[-1] md:order-none"
      >
        <p class="mb-5">
          Join thousands of other folks invest in real estate life
        </p>

        <img src="@/assets/images/peeeps.png" alt="" />
      </div>
    </div>
  </section>

  <section
    class="plans !bg-[#F1F5F9] justify-between py-[48px] px-[24px] md:px-[120px] md:py-[87px] flex flex-wrap md:flex-nowrap md:flex-row md:gap-[187px]"
  >
    <app-footer />
  </section>
</template>

<script>
import Tabs from '@/components/tabs.vue';
import AllArticles from '@/components/AllArticles.vue';
import BlogCard from '@/components/BlogCard.vue';
import Spinner from '@/components/Spinner.vue';
import Pagination from '@/components/Pagination.vue';
import { client } from '../../plugins/sanity';

export default {
  components: {
    Tabs,
    AllArticles,
    BlogCard,
    Pagination,
    Spinner,
  },

  data() {
    return {
      blogArray: [],
      loading: false,
      currentPage: 1,
      totalItems: 0,
      pageSize: 6,
      tabs: [
        {
          name: 'tab_1',
          title: 'All Articles',
        },
        {
          name: 'tab_2',
          title: 'Investments',
        },
        {
          name: 'tab_3',
          title: 'Commercial',
        },
        {
          name: 'tab_4',
          title: 'Market Trends',
        },
        {
          name: 'tab_3',
          title: 'Luxury',
        },
        {
          name: 'tab_3',
          title: 'Development',
        },
      ],
    };
  },

  methods: {
    async fetchAllBlogs() {
      const skip = (this.currentPage - 1) * this.pageSize;
      this.loading = true;
      const result = await client.fetch(
        `*[_type == "post"] | order(_createdAt desc) [${skip}...${
          skip + this.pageSize
        }]`
      );
      this.blogArray = result;
      console.log(this.blogArray);
      this.loading = false;
    },
    async fetchTotalItems() {
      this.loading = true;
      const totalResult = await client.fetch(`count(*[_type == "post"])`);
      this.totalItems = totalResult;
      this.loading = false;
    },
    isLastPage() {
      const totalPages = Math.ceil(this.totalItems / this.pageSize);
      return this.currentPage === totalPages;
    },
    async prev() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        await this.fetchAllBlogs();
      }
    },
    async next() {
      if (!this.isLastPage()) {
        this.currentPage += 1;
        await this.fetchAllBlogs();
      }
    },
    paginate(e) {
      this.currentPage = e;
      this.fetchAllBlogs();
    },
  },
  mounted() {
    this.fetchAllBlogs();
    this.fetchTotalItems();
  },
};
</script>

<style lang="scss" scoped></style>
