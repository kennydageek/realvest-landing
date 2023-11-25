<template>
  <div class="carousel">
    <div
      class="carousel-inner"
      :style="{ transform: `translateX(-${currentIndex * 107.5}%)` }"
    >
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="carousel-item"
      >
        <!-- Your content for each carousel item goes here -->
        <review-card class="grow" :review="review" />
      </div>
    </div>

    <!-- <button @click="prevSlide" class="carousel-button">
      Prevdfdfdfddfdfdfdfdfdfdfdf
    </button>
    <button @click="nextSlide" class="carousel-button">Next</button> -->

    <div
      class="flex gap-2 justify-center mt-8 md:gap-6 md:absolute md:right-0 md:top-[40px] w-100"
    >
      <div class="">
        <img
          src="@/assets/images/arrow-left-disabled.svg"
          alt=""
          @click="prevSlide"
          class="cursor-pointer w-10"
        />
      </div>
      <div>
        <img
          v-if="currentIndex < reviews.length - 1"
          src="@/assets/images/arrow-right-enabled.svg"
          alt=""
          @click="nextSlide"
          class="cursor-pointer w-10"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ReviewCard from '@/components/ReviewCard';
// import Review1 from '@/assets/images/lilian-alex.svg';
import Review2 from '@/assets/images/avatar-ian.svg';
import Review3 from '@/assets/images/kehinde-ajibade.svg';
export default {
  components: { ReviewCard },

  data() {
    return {
      currentIndex: 0,
      slidesPerPage: 1, // Set the number of slides you want to show per page
      slideWidth: 100, // Set the width of each slide in percentage
      reviews: [
        {
          review:
            'Being new to the realm of real estate investment, this platform has simplified the learning process and enabled me to effectively seize the opportunity it presents.',
          name: 'Lilian Alex',
          image: Review1,
        },
        {
          review:
            'I learned about this product through a friend, and I have been amazed by its capabilities. It encompasses everything I need to elevate my endeavors.',
          name: 'Ian Hendrix',
          image: Review2,
        },

        {
          review:
            "'Initially skeptical about using this app, I was pleasantly surprised by the outcome. I will soon be acquiring my home, and I couldn't be happier.'",
          name: 'Kehinde ajibade',
          image: Review3,
        },
        {
          review:
            'I learned about this product through a friend, and I have been amazed by its capabilities. It encompasses everything I need to elevate my endeavors.',
          name: 'Ian Hendrix',
          image: Review2,
        },

        {
          review:
            "'Initially skeptical about using this app, I was pleasantly surprised by the outcome. I will soon be acquiring my home, and I couldn't be happier.'",
          name: 'Kehinde ajibade',
          image: Review3,
        },
      ],
    };
  },
  computed: {
    totalSlides() {
      return Math.ceil(this.reviews.length / this.slidesPerPage);
    },
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    },
    nextSlide() {
      if (this.currentIndex < this.totalSlides - 1) {
        this.currentIndex++;
      }
    },
    calculateSlidesPerPage() {
      return window.innerWidth < 376
        ? (this.slidesPerPage = 1)
        : (this.slidesPerPage = 3);
    },
    onResize() {
      console.log(this);
      this.slidesPerPage = this.calculateSlidesPerPage();
      console.log(window.innerWidth);
    },
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
    this.calculateSlidesPerPage();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>

<style scoped>
/* .carousel {
  position: relative;
  width: 100%;
  overflow-x: hidden;
} */

.carousel-inner {
  display: flex;
  gap: 24px;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  display: flex;
  gap: 24px;
  flex: 1 0 100%;
}

.carousel img {
  width: 100%;
  height: auto;
}

.carousel-button {
  /* position: absolute;
  top: 50%; */
  transform: translateY(-50%);
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.carousel-button:hover {
  background-color: #2980b9;
}

@media (min-width: 768px) {
  .carousel-item {
    flex: 0 0 33.33%; /* Display three items on larger screens */
  }
}

.carousel img {
  width: 100%;
  height: auto;
}
</style>
