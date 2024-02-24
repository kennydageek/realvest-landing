<template>
  <div class="py-[40px] md:py-[40px] px-[24px] md:px-[120px]">
    <p class="font-bold text-[#252F48] text-[24px] md:text-[32px]">
      Recent blog posts
    </p>
    <div class="flex justify-center mt-20" v-if="loading">
      <spinner />
    </div>

    <div class="mt-10 flex flex-col md:flex-row gap-10" v-else>
      <div class="md:w-[664px]">
        <nuxt-link :to="`/blog/${item?.slug.current}`">
          <img :src="url" class="w-full rounded-xl object-cover" alt="" />
          <div class="flex flex-col mt-4">
            <div
              class="rounded py-2 px-4 self-start"
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

            <div class="mt-4 flex justify-between">
              <p
                class="text-2xl md:text-[32px] text-[#252F48] font-bold md:w-[565px] md:leading-[1.3]"
              >
                {{ item?.title }}
              </p>
              <img
                src="@/assets/images/arrow-up-right.svg"
                class="self-start"
                alt=""
              />
            </div>
            <p class="text-[#37445D] text-xl font-semibold mt-4">
              {{ item?.description }}
            </p>

            <div class="text-xl font-medium mt-10 flex gap-3">
              <p>
                {{
                  new Date(item?._createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                  })
                }}
              </p>
              <div class="w-1 h-1 rounded-[50%] bg-[#A0AEC0] self-center"></div>
              <p>{{ reading_time }} mins read</p>
            </div>
          </div>
        </nuxt-link>
      </div>

      <div class="">
        <div v-for="(blog, i) in blogArray" :key="`article-blog-${i}`">
          <nuxt-link
            :to="`/blog/${blog.slug.current}`"
            class="flex gap-4 flex-col md:flex-row mb-10"
          >
            <img
              :src="urlFor(blog.mainImage).url()"
              class="rounded-xl w-[216px] object-cover"
              alt=""
            />
            <div class="md:w-[332px]">
              <div
                class="rounded py-2 px-4 inline-block"
                :class="
                  blogArrayCat &&
                  blogArrayCat[i] &&
                  blogArrayCat[i][0].title === 'Investment'
                    ? 'pill-accent'
                    : (blogArrayCat &&
                        blogArrayCat[i] &&
                        blogArrayCat[i][0].title === 'Real Estate') ||
                      (blogArrayCat &&
                        blogArrayCat[i] &&
                        blogArrayCat[i][0].title === 'Commerce')
                    ? 'pill-estate'
                    : (blogArrayCat &&
                        blogArrayCat[i] &&
                        blogArrayCat[i][0].title === 'Business') ||
                      (blogArrayCat &&
                        blogArrayCat[i] &&
                        blogArrayCat[i][0].title === 'Development')
                    ? 'pill-business'
                    : blogArrayCat &&
                      blogArrayCat[i] &&
                      blogArrayCat[i][0].title === 'Market Trends'
                    ? 'pill-success'
                    : 'pill-luxury'
                "
              >
                {{
                  blogArrayCat && blogArrayCat[i] && blogArrayCat[i][0].title
                }}
              </div>
              <p class="text-xl font-bold text-[#252F48] mt-4">
                {{ blog.title }}
              </p>
              <div class="text-sm font-medium mt-5 flex gap-3">
                <p>
                  {{
                    new Date(item?._createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                    })
                  }}
                </p>
                <div
                  class="w-1 h-1 rounded-[50%] bg-[#A0AEC0] self-center"
                ></div>
                <p>{{ reading_time }} mins read</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/plugins/sanity';
import Spinner from './Spinner.vue';

const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
  return builder.image(source);
}

export default {
  components: { Spinner },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      url: '',
      categories: this?.item?.categories,
      category_text: [],
      reading_time: 0,
      blogArrayCat: [],
      blogArray: [],
      blogCat: '',
      loading: false,
      currentPage: 1,
      totalItems: 0,
      pageSize: 3,
      loading: false,
    };
  },

  computed: {
    formattedBlogCategory() {
      let result;
    },
  },

  methods: {
    async fetchCategoryText() {
      console.log(this?.categories);
      this.loading = true;
      this.category_text = [];
      for (const category of this?.categories) {
        const categoryResult = await client.getDocument(category._ref);
        this.category_text.push(categoryResult.title);
      }
      this.loading = false;
    },
    async fetchImageUrl() {
      this.loading = true;
      this.url = urlFor(this?.item?.mainImage).url();
      this.loading = false;
    },

    async calculateReadingTime() {
      this.loading = true;
      const data = await client.fetch(`*[
  _type == "post"]{
  title,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
    }`);

      this.reading_time = data[0].estimatedReadingTime;
      this.loading = false;
    },

    async fetchAllBlogs() {
      this.loading = true;
      const skip = (this.currentPage - 1) * this.pageSize;
      this.loading = true;
      const result = await client.fetch(
        `*[_type == "post"] | order(_createdAt desc) [${skip}...${
          skip + this.pageSize
        }]`
      );
      this.blogArray = result;

      let data = await Promise.all(
        this.blogArray.map(async (blog) => {
          let categoriesResult = [];
          for (const category of blog.categories) {
            const categoryResult = await client.getDocument(category._ref);
            categoriesResult.push(categoryResult);
          }
          return categoriesResult;
        })
      );
      this.blogArrayCat = data;
      //   for (const category of this.blogArray) {

      //   for (const category of this.blogArray) {
      //     console.log(category);
      //     const categoryResult = await client.getDocument(category.categories);
      //     this.blogArrayCat.push(categoryResult.title);
      //   }

      //   this.blogArray.map((blog) => {
      //     console.log(blog);
      //   });
      console.log(this.blogArray);
      this.loading = false;
    },
    async fetchTotalItems() {
      this.loading = true;
      const totalResult = await client.fetch(`count(*[_type == "post"])`);
      this.totalItems = totalResult;
      this.loading = false;
    },

    urlFor(source) {
      return builder.image(source);
    },
  },

  watch: {
    item: {
      handler: function (newValue, oldValue) {
        // Fetch category text and image URL whenever item changes
        this.categories = newValue.categories;
        this.fetchCategoryText();
        this.fetchImageUrl();
        this.calculateReadingTime();
        this.fetchAllBlogs();
        this.fetchTotalItems();
      },
      deep: true, // Watch for changes deeply
    },
  },

  mounted() {
    // Initially fetch category text and image URL
    this.fetchCategoryText();
    this.fetchImageUrl();
    this.calculateReadingTime();
    this.fetchAllBlogs();
    this.fetchTotalItems();
  },
};
</script>

<style lang="scss" scoped></style>
