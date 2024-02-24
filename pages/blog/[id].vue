<template>
  <div class="flex justify-center mt-40" v-if="loading">
    <spinner />
  </div>
  <div
    class="py-20 md:px-[120px] px-[24px] mt-10 md:mt-20 scroll-smooth"
    v-else
  >
    <div class="flex gap-2 mb-10">
      <img src="@/assets/images/caret-left.svg" alt="" />
      <nuxt-link to="/blog" class="text-sm">GO BACK</nuxt-link>
    </div>

    <div class="flex flex-col md:items-center">
      <div
        class="rounded py-2 px-4 mb-5 self-center"
        :class="
          category_text[0] === 'Investment'
            ? 'pill-accent'
            : category_text[0] === 'Real Estate' ||
              category_text[0] === 'Commerce'
            ? 'pill-estate'
            : category_text[0] === 'Business' ||
              category_text[0] === 'Development'
            ? 'pill-business'
            : category_text[0] === 'Market Trends'
            ? 'pill-success'
            : 'pill-luxury'
        "
      >
        {{ category_text[0] }}
      </div>
      <p
        class="text-2xl md:text-[40px] text-[#252F48] font-bold md:leading-[56px] text-center md:w-[728px] mx-auto mb-5"
      >
        {{ blogObject?.title }}
      </p>

      <div class="text-sm font-medium flex gap-3">
        <p>{{ date }}</p>
        <div class="w-1 h-1 rounded-[50%] bg-[#A0AEC0] self-center"></div>
        <p>{{ reading_time }} mins read</p>
      </div>

      <img
        :src="url"
        class="rounded-xl block mt-10 w-full md:h-[500px] object-cover"
        alt=""
      />
    </div>

    <section class="py-20 pt-0 md:px-[120px] mt-20 scroll-smooth relative">
      <page-tracker :body="blogObject.body" />
    </section>

    <section class="py-20 md:px-[] px-[] scroll-smooth">
      <p class="text-[#252F48] text-2xl md:text-[32px] font-bold mb-10">
        Latest blogs
      </p>

      <div class="flex flex-col md:flex-row gap-10 flex-wrap">
        <blog-card
          class="grow md:grow-0"
          v-for="(blog, i) in blogArray"
          :key="`blog-${i}`"
          :item="blog"
        />
        <!-- <blog-card />
      <blog-card />
      <blog-card /> -->
      </div>
    </section>
  </div>
  <section
    class="plans !bg-[#F1F5F9] justify-between py-[48px] px-[24px] md:px-[120px] md:py-[87px] flex flex-wrap md:flex-nowrap md:flex-row md:gap-[187px]"
  >
    <app-footer />
  </section>
</template>

<script>
import { client } from '../../plugins/sanity.js'; // Import groq from the Sanity client package
import Spinner from '@/components/Spinner.vue';
import { SanityBlocks } from 'sanity-blocks-vue-component';
import imageUrlBuilder from '@sanity/image-url';
// import ShareNetwork from 'vue-social-sharing';
import PageTracker from '@/components/PageTracker.vue';
import BlogCard from '@/components/BlogCard.vue';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default {
  components: { Spinner, SanityBlocks, PageTracker, BlogCard },
  data() {
    return {
      blogObject: {},
      loading: false,
      authorName: '',
      date: '',
      blocks: [],
      url: '',
      reading_time: '',
      serializers: {
        types: {
          image: (data) => {
            return h('img', { src: urlFor(data).width(400).url() });
          },
        },
      },
      category_text: [],
      blogArray: [],
    };
  },

  methods: {
    async fetchBlogsBySlug() {
      this.loading = true;
      const result = await client.fetch(
        `*[_type == 'post' && slug.current == "${this.$route.params.id}"][0]`
      );
      //   console.log(this.$route.params.id);
      console.log(result);
      this.blogObject = result;

      for (const category of this?.blogObject?.categories) {
        const categoryResult = await client.getDocument(category._ref);
        this.category_text.push(categoryResult.title);
      }

      //   this.authorName = await client.getDocument(result.author._ref);
      this.date = formatDate(result._createdAt);
      this.blocks = result.body;
      console.log(result.body);
      this.url = urlFor(result?.mainImage).url();
      console.log(this.url);
      //   this.blocks = result.body;

      this.loading = false;
      return result;
    },
    async fetchAllBlogs(pageNumber, pageSize) {
      const skip = (pageNumber - 1) * pageSize;
      this.loading = true;
      const result = await client.fetch(
        `*[_type == "post"] | order(_createdAt desc) [${skip}...${
          skip + pageSize
        }]`
      );
      this.blogArray = result;
      console.log(result);
      this.loading = false;
      return result;
    },

    async calculateReadingTime() {
      this.loading = true;
      const data = await client.fetch(`*[
  _type == "post"]{
  slug,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
    }`);

      this.reading_time = data[0].estimatedReadingTime;
      this.loading = false;
      console.log(this.reading_time);
    },
  },

  mounted() {
    this.fetchBlogsBySlug();
    this.fetchAllBlogs(1, 3);
    this.calculateReadingTime();
  },
};
</script>

<style lang="scss" scoped></style>
