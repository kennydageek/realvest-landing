<template>
  <div class="flex relative">
    <nav
      :class="{ 'fixed left-0': isFixed }"
      ref="nav"
      class="hidden md:flex flex-col self-start md:w-[300px]"
    >
      <button
        v-for="(topic, index) in topics"
        :key="index"
        class="text-sm text-left text-gray-700 px-4 py-2 border-l-4 border-l-[#F1F5F9] self-start"
        :class="{
          ' text-[#252F48] font-bold border-l-[#F35C35]': activeTab === index,
        }"
        @click="scrollToTopic(topic.id, index)"
      >
        {{ topic.title }}
      </button>
    </nav>

    <div
      class="md:ml-8 w-full scrollbar h-[600px] overflow-scroll"
      id="cont-scroll"
    >
      <!-- <div v-for="(topic, index) in topics" :key="index" class="topic-section"> -->
      <div class="block-content">
        <sanity-blocks
          :blocks="body"
          :serializers="serializers"
        ></sanity-blocks>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { SanityBlocks } from 'sanity-blocks-vue-component';

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
  components: { SanityBlocks },
  props: {
    body: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      activeTab: 0,
      isFixed: false,
      topics: [],
      newBody: [],
      serializers: {
        types: {
          image: (data) => {
            return h('img', { src: urlFor(data)?.url() });
          },
        },
      },
    };
  },
  mounted() {
    this.extractTopicsFromBody();
    this.observeTopics();
    window.addEventListener('scroll', this.handleScroll);
    console.log(this.$refs);

    // this.linkTabs();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    linkTabs() {
      let blockContentDiv = document.querySelector('.block-content');

      // Select all heading elements (h1 to h6) within the 'block-content' div
      let headingElements = blockContentDiv.querySelectorAll(
        'h1, h2, h3, h4, h5, h6'
      );

      // console.log(headingElements);
      let topics = this.topics;

      // Loop through each heading element and attach an id attribute
      headingElements.forEach(function (heading, index) {
        // Create a unique id based on the index
        let id = topics[index].id;
        // 'heading-' + (index + 1);
        // Assign the id attribute to the heading element
        heading.setAttribute('id', id);
      });
    },
    extractTopicsFromBody() {
      if (!this.body || !this.body.length) return;

      this.topics = this.body
        .filter((block) => ['h2', 'h3', 'h4', 'h5', 'h6'].includes(block.style))
        .map((block) => {
          // Assuming the heading text is the first child
          const title = block.children.find(
            (child) => child._type === 'span'
          ).text;
          const id = title.toLowerCase().replace(/\s+/g, '-'); // Generate ID from text
          block.children.find((child) => child._type === 'span')._key = id; // Update key to match ID
          return {
            title: title,
            id: id,
          };
        });

      console.log(this.topics);
      this.linkTabs();
    },

    scrollToTopic(index, num) {
      this.activeTab = num;
      console.log(index);
      const element = document.getElementById(index);
      if (element) {
        const container = document.getElementById('cont-scroll');
        if (container) {
          container.scrollTo({
            top: element.offsetTop - container.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    },
    observeTopics() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.id.split('-')[1]);
            this.activeTab = index;
          }
        });
      }, options);

      this.topics.forEach((_, index) => {
        const target = document.getElementById(`topic-${index}`);
        if (target) {
          observer.observe(target);
        }
      });
    },
    handleScroll() {
      const navOffsetTop = this.$refs.nav.getBoundingClientRect().top;
      this.isFixed = navOffsetTop <= 0; // Set isFixed based on nav's position relative to viewport
    },
  },
};
</script>

<style>
/* Add custom styles for tabs and content */

.scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
