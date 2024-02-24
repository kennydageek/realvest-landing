<template>
  <div class="w-full md:w-[360px]">
    <nuxt-link :to="`/blog/${item.slug.current}`">
      <img :src="url" class="w-full rounded-tl-xl rounded-tr-xl" alt="" />
      <div
        class="flex flex-col border border-t-0 p-6 rounded-br-2xl rounded-bl-2xl"
      >
        <div
          class="pill-accent rounded py-2 px-4 self-start"
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
            class="text-xl text-[#252F48] font-bold md:w-[565px] md:leading-[1.3]"
          >
            {{ item.title }}
          </p>
        </div>

        <div class="text-sm font-medium mt-10 flex gap-3">
          <p>
            {{
              new Date(item._createdAt).toLocaleDateString('en-US', {
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
</template>

<script>
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/plugins/sanity';

const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
  return builder.image(source);
}

export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      url: '',
      categories: this.item.categories,
      category_text: [],
      reading_time: 0,
    };
  },

  methods: {
    async fetchCategoryText() {
      this.category_text = [];
      for (const category of this.categories) {
        const categoryResult = await client.getDocument(category._ref);
        this.category_text.push(categoryResult.title);
      }
    },
    async fetchImageUrl() {
      this.url = urlFor(this?.item?.mainImage).url();
    },

    async calculateReadingTime() {
      const data = await client.fetch(`*[
  _type == "post"]{
  title,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
    }`);

      this.reading_time = data[0].estimatedReadingTime;
    },
  },

  watch: {
    item: {
      handler: function (newValue, oldValue) {
        // Fetch category text and image URL whenever item changes
        this.categories = newValue.categories;
        this.fetchCategoryText();
        this.fetchImageUrl();
      },
      deep: true, // Watch for changes deeply
    },
  },

  mounted() {
    // Initially fetch category text and image URL
    this.fetchCategoryText();
    this.fetchImageUrl();
    this.calculateReadingTime();
  },
};
</script>

<style lang="scss" scoped></style>
