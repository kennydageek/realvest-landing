import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "destr";
import "klona";
import "defu";
const formatAsMoney = (amount) => {
  if (!amount) {
    amount = 0;
  }
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN"
  }).format(amount);
};
const _sfc_main$7 = {
  props: {
    product: {
      type: Object,
      required: () => {
      }
    }
  },
  methods: {
    formatAsMoney
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "shadow-lg p-0 h-min-[26rem] bg-gray-50" }, _attrs))}><div class="h-52 bg-gray-50 rounded-md"><img class="card-filled p-0 h-full w-full rounded-md"${ssrRenderAttr("src", $props.product.postal_image)}></div><div class="p-5"><div class="text-2xl font-extrabold mb-3 text-[#f35c35]">${ssrInterpolate($options.formatAsMoney((_a = $props.product) == null ? void 0 : _a.unit_price))}</div><div class="font-bold text-xl text-[#1e293b]">${ssrInterpolate($props.product.name)}</div><div class="font-extralight text-sm mb-5 h-10 text-[#1e293b]">${ssrInterpolate($props.product.meta.location.address)}</div><div class="flex flex-row mt-6">`);
  if ($props.product.status == "inactive") {
    _push(`<div class="outline-button rounded-none rounded-l grow bg-green-200 !text-green-700"><i class="bi-check2-circle"></i> Sold Out </div>`);
  } else {
    _push(`<a href="https://app.realvest.ng" class="outline-button grow text-gray-800 rounded-none rounded-l"> Buy Now </a>`);
  }
  _push(`<a href="https://app.realvest.ng" class="outline-button grow text-grow-800 rounded-none rounded-r">Details</a></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const Spinner_vue_vue_type_style_index_0_scoped_97803055_lang = "";
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "loader" }, _attrs))} data-v-97803055></span>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Spinner.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-97803055"]]);
const _imports_0$5 = "" + __buildAssetsURL("circle.4249f693.svg");
const ArticleCard_vue_vue_type_style_index_0_scoped_dcb97fff_lang = "";
const _sfc_main$5 = {
  props: {
    product: {
      type: Object,
      required: () => {
      }
    }
  },
  methods: {
    // formatAsMoney,
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border rounded-2xl flex flex-col sub-card grow-[1] w-[300px] md:w-[440px] relative" }, _attrs))} data-v-dcb97fff><div class="h-[240px] bg-black rounded-t-2xl w-full" data-v-dcb97fff><div class="text-3xl bg-primary p-3 my-2 absolute mt-[190px] ml-5 text-white drop-shadow-lg text-center rounded-xl" style="${ssrRenderStyle({ "text-shadow": "0 1px 1px #000" })}" data-v-dcb97fff><i class="bi-house-check" data-v-dcb97fff></i></div><img${ssrRenderAttr("src", $props.product.src)} class="rounded-t-2xl w-full h-[240px] object-cover" data-v-dcb97fff></div><span class="${ssrRenderClass([`${$props.product.type === "Investments" ? "bg-[#f0f6ff]" : $props.product.type === "Business" ? "bg-[#F1F0FE]" : $props.product.type === "Real Estate" ? "bg-[#FEF7F5]" : ""}`, "inline m-6 py-2 px-4 rounded-lg self-start justify-self-start"])}" data-v-dcb97fff><p class="${ssrRenderClass(`${$props.product.type === "Investments" ? "text-[#3071D2]" : $props.product.type === "Business" ? "text-[#7065F0]" : $props.product.type === "Real Estate" ? "text-[#F35C35]" : ""}`)}" data-v-dcb97fff>${ssrInterpolate($props.product.type)}</p></span><div class="px-6 pb-6" data-v-dcb97fff><div class="text-[16px] md:text-[19px] font-semibold text-[#000]" data-v-dcb97fff>${ssrInterpolate($props.product.title)}</div><div class="flex flex-row justify-between md:justify-start font-thin text-gray-500 text-xl pt-5 space-x-10" data-v-dcb97fff><div class="flex" data-v-dcb97fff><div class="mt-1 font-medium text-sm" data-v-dcb97fff>${ssrInterpolate($props.product.duration)}</div></div><div class="self-center" data-v-dcb97fff><img${ssrRenderAttr("src", _imports_0$5)} alt="" data-v-dcb97fff></div><div class="flex" data-v-dcb97fff><div class="mt-1 text-sm font-medium" data-v-dcb97fff>${ssrInterpolate($props.product.read)}</div></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArticleCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-dcb97fff"]]);
const _imports_0$4 = "" + __buildAssetsURL("star-rate.51bad527.svg");
const _imports_1$3 = "" + __buildAssetsURL("format-quote.1171d0d0.svg");
const _sfc_main$4 = {
  props: {
    review: {
      type: Object,
      default: () => {
      }
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#252F48] p-10 w-[full] md:w-[350px] rounded-2xl relative" }, _attrs))}><p class="text-white font-semibold">${ssrInterpolate($props.review.review)}</p><div class="mt-6"><div class="img-text flex justify-between relative self-center top-0"><div class="flex gap-3 self-center"><img${ssrRenderAttr("src", $props.review.image)} alt="" class="self-center"><div class="text-white font-semibold"><p>${ssrInterpolate($props.review.name)}</p><img${ssrRenderAttr("src", _imports_0$4)} alt=""></div></div><img${ssrRenderAttr("src", _imports_1$3)} class="self-center hidden md:block" alt=""></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReviewCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ReviewCard = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const Review1 = "" + __buildAssetsURL("Lilian-Alex.899a9450.svg");
const Review2 = "" + __buildAssetsURL("avatar-ian.66716691.svg");
const Review3 = "" + __buildAssetsURL("kehinde-ajibade.12912e15.svg");
const _imports_0$3 = "" + __buildAssetsURL("arrow-left-disabled.2b7a8d51.svg");
const _imports_1$2 = "" + __buildAssetsURL("arrow-right-enabled.b35540f4.svg");
const Carousel_vue_vue_type_style_index_0_scoped_26d72249_lang = "";
const _sfc_main$3 = {
  components: { ReviewCard },
  data() {
    return {
      currentIndex: 0,
      slidesPerPage: 1,
      // Set the number of slides you want to show per page
      slideWidth: 100,
      // Set the width of each slide in percentage
      reviews: [
        {
          review: "Being new to the realm of real estate investment, this platform has simplified the learning process and enabled me to effectively seize the opportunity it presents.",
          name: "Lilian Alex",
          image: Review1
        },
        {
          review: "I learned about this product through a friend, and I have been amazed by its capabilities. It encompasses everything I need to elevate my endeavors.",
          name: "Ian Hendrix",
          image: Review2
        },
        {
          review: "'Initially skeptical about using this app, I was pleasantly surprised by the outcome. I will soon be acquiring my home, and I couldn't be happier.'",
          name: "Kehinde ajibade",
          image: Review3
        },
        {
          review: "I learned about this product through a friend, and I have been amazed by its capabilities. It encompasses everything I need to elevate my endeavors.",
          name: "Ian Hendrix",
          image: Review2
        },
        {
          review: "'Initially skeptical about using this app, I was pleasantly surprised by the outcome. I will soon be acquiring my home, and I couldn't be happier.'",
          name: "Kehinde ajibade",
          image: Review3
        }
      ]
    };
  },
  computed: {
    totalSlides() {
      return Math.ceil(this.reviews.length / this.slidesPerPage);
    }
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    },
    nextSlide() {
      if (this.currentIndex < this.totalSlides - 1) {
        this.currentIndex++;
      }
    },
    calculateSlidesPerPage() {
      return window.innerWidth < 376 ? this.slidesPerPage = 1 : this.slidesPerPage = 3;
    },
    onResize() {
      console.log(this);
      this.slidesPerPage = this.calculateSlidesPerPage();
      console.log(window.innerWidth);
    }
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    this.calculateSlidesPerPage();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_review_card = ReviewCard;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "carousel" }, _attrs))} data-v-26d72249><div class="carousel-inner" style="${ssrRenderStyle({ transform: `translateX(-${$data.currentIndex * 107.5}%)` })}" data-v-26d72249><!--[-->`);
  ssrRenderList($data.reviews, (review, index2) => {
    _push(`<div class="carousel-item" data-v-26d72249>`);
    _push(ssrRenderComponent(_component_review_card, {
      class: "grow",
      review
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="flex gap-2 justify-center mt-8 md:gap-6 md:absolute md:right-0 md:top-[40px] w-100" data-v-26d72249><div class="" data-v-26d72249><img${ssrRenderAttr("src", _imports_0$3)} alt="" class="cursor-pointer w-10" data-v-26d72249></div><div data-v-26d72249>`);
  if ($data.currentIndex < $data.reviews.length - 1) {
    _push(`<img${ssrRenderAttr("src", _imports_1$2)} alt="" class="cursor-pointer w-10" data-v-26d72249>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Carousel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-26d72249"]]);
const _imports_0$2 = "" + __buildAssetsURL("down-arrow.555a7e1a.svg");
const _sfc_main$2 = {
  data() {
    return {
      openSections: [],
      // Array to keep track of open sections
      sections: [
        {
          header: "How do I sign up and earn?",
          content: "All you need do is click the register button on the landing page, fill all fields and follow each prompts as you go"
        },
        {
          header: "How do I access my referral bonuses?",
          content: `Once you've received bonuses from your downline transactions, the cash reward sent to your wallet for monthly withdrawal`
        },
        {
          header: "Do I get bonuses for every of my downline’s payment?",
          content: "Yes you get a cash reward on every payment your downline makes"
        },
        {
          header: "Can I see my downlines payment?",
          content: `Yes, you can. When you navigate to the referral module, there's a table of all downline activities`
        }
      ]
    };
  },
  methods: {
    toggleSection(index2) {
      const isOpen = this.isOpen(index2);
      if (isOpen) {
        this.openSections = this.openSections.filter((i) => i !== index2);
      } else {
        this.openSections.push(index2);
      }
    },
    isOpen(index2) {
      return this.openSections.includes(index2);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion" }, _attrs))}><!--[-->`);
  ssrRenderList($data.sections, (section, index2) => {
    _push(`<div class="${ssrRenderClass([$options.isOpen(index2) ? "border rounded-2xl border-[#f35c35]" : "", "accordion-section mb-6"])}"><div class="${ssrRenderClass([$options.isOpen(index2) ? "bg-[#fff]  " : "bg-[#f1f5f9]", "accordion-header cursor-pointer flex justify-between items-center bg-[#F1F5F9] py-4 px-6 font-semibold text-[#252F48] rounded-2xl"])}">${ssrInterpolate(section.header)} <span class="${ssrRenderClass({ "transform rotate-180": $options.isOpen(index2) })}"><img${ssrRenderAttr("src", _imports_0$2)}></span></div><div style="${ssrRenderStyle($options.isOpen(index2) ? null : { display: "none" })}" class="accordion-content p-4"><hr><p class="mt-5">${ssrInterpolate(section.content)}</p></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Accordion.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0$1 = "" + __buildAssetsURL("logo-variant.43a371cb.svg");
const _imports_1$1 = "" + __buildAssetsURL("sms.e25c896b.svg");
const _imports_2$1 = "" + __buildAssetsURL("call.1be1e48f.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="logo self-start md:basis-[350px]"><img${ssrRenderAttr("src", _imports_0$1)} alt=""><div class="copy mt-6 font-medium"><p>2 Tinuola Close,Akowonjo Road, Egbeda, Lagos state, Nigeria</p><div class="flex gap-2 mt-6 font-medium"><img${ssrRenderAttr("src", _imports_1$1)} alt=""><p>hello@realvest.ng</p></div><div class="flex gap-2 mt-3 font-medium"><img${ssrRenderAttr("src", _imports_2$1)} alt=""><p>09018269497</p></div></div></div><div class="company self-start md:basis-40"><h1 class="text-[#252F48] md:text-xl font-bold">Company</h1><div class="links mt-4 font-medium"><a class="block mt-6">Home</a><a class="block mt-4">About Us</a><a class="block mt-4">Blog</a><a class="block mt-4">FAQs</a></div></div><div class="company self-start md:basis-40"><h1 class="text-[#252F48] md:text-xl font-bold">Social media</h1><div class="links mt-4 font-medium"><a class="block mt-6">Twitter</a><a class="block mt-4">Facebook</a><a class="block mt-4">LinkedIn</a><a class="block mt-4">Instagram</a></div></div><div class="company self-start md:basis-40"><h1 class="text-[#252F48] md:text-xl font-bold">Legal</h1><div class="links mt-4 font-medium"><a class="block mt-6">Privacy Policy</a><a class="block mt-4">Terms &amp; Conditions</a></div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const Article1 = "" + __buildAssetsURL("article-1.1f5f97da.png");
const Article2 = "" + __buildAssetsURL("article-2.ddb5e3e6.png");
const _imports_0 = "" + __buildAssetsURL("arrow-circle-right.57455966.svg");
const _imports_1 = "" + __buildAssetsURL("header-image-2.673d863c.png");
const _imports_2 = "" + __buildAssetsURL("affordable.14b9e835.svg");
const _imports_3 = "" + __buildAssetsURL("referral.004244e4.svg");
const _imports_4 = "" + __buildAssetsURL("home.560c84e1.svg");
const _imports_5 = "" + __buildAssetsURL("money.5e076cf6.svg");
const _imports_6 = "" + __buildAssetsURL("transaction.fad4b514.svg");
const _imports_7 = "" + __buildAssetsURL("tick-circle.8be52297.svg");
const _imports_8 = "" + __buildAssetsURL("right-arrow.98728c7e.svg");
const _imports_9 = "" + __buildAssetsURL("FAQ.d9ea9852.png");
const index_vue_vue_type_style_index_0_scoped_97339429_lang = "";
const _sfc_main = {
  components: {
    ProductCard: __nuxt_component_0,
    ArticleCard: __nuxt_component_2,
    ReviewCard,
    Accordion: __nuxt_component_4,
    AppFooter: __nuxt_component_5,
    Spinner: __nuxt_component_1,
    Carousel: __nuxt_component_3
  },
  data() {
    return {
      products: [],
      perPage: 6,
      loading: false,
      articles: [
        {
          src: Article1,
          type: "Investments",
          title: "Notable investments that contribute to long-term wealth accumulation",
          duration: "5 weeks ago",
          read: "10 mins read"
        },
        {
          src: Article2,
          type: "Business",
          title: "Entrepreneurial opportunities suitable for young adults to explore",
          duration: "5 weeks ago",
          read: "10 mins read"
        },
        {
          src: Article1,
          type: "Real Estate",
          title: "Promising properties poised for significant growth in the upcoming years",
          duration: "5 weeks ago",
          read: "10 mins read"
        },
        {
          src: Article2,
          type: "Business",
          title: "Entrepreneurial opportunities suitable for young adults to explore",
          duration: "5 weeks ago",
          read: "10 mins read"
        },
        {
          src: Article1,
          type: "Real Estate",
          title: "Promising properties poised for significant growth in the upcoming years",
          duration: "5 weeks ago",
          read: "10 mins read"
        }
      ]
    };
  },
  methods: {
    async fetchData(perpage) {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch(
          `https://sea-lion-app-95ko8.ondigitalocean.app/products?per_page=${perpage}&page=1`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        this.products = jsonData.data.records;
        console.log(this.products);
      } catch (error) {
        this.error = `Error fetching data: ${error.message}`;
      } finally {
        this.loading = false;
      }
    },
    // Move the carousel to the left
    moveCarouselLeft() {
      const container = document.querySelector(".review-carousel");
      const cardWidth = container.firstElementChild.clientWidth;
      container.scrollLeft -= cardWidth * 3;
    },
    // Move the carousel to the right
    moveCarouselRight() {
      const container = document.querySelector(".review-carousel");
      const cardWidth = container.firstElementChild.clientWidth;
      container.scrollLeft += cardWidth * 3;
    },
    loadMore() {
      console.log("kenny");
      this.perPage += 3;
      this.fetchData(this.perPage);
    }
  },
  mounted() {
    this.fetchData(this.perPage);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_product_card = __nuxt_component_0;
  const _component_spinner = __nuxt_component_1;
  const _component_article_card = __nuxt_component_2;
  const _component_carousel = __nuxt_component_3;
  const _component_accordion = __nuxt_component_4;
  const _component_app_footer = __nuxt_component_5;
  _push(`<!--[--><div class="py-20 background-blue bg-[url(&#39;@/assets/images/vector.svg&#39;)] object-cover bg-no-repeat bg-center relative h-[100vh] md:h-[110vh] mt-10" data-v-97339429><div class="text-center w-full md:w-[1121px] mx-auto px-6" data-v-97339429><h1 class="text-white font-bold text-[40px] md:text-[72px] leading-[56px] md:leading-[80px]" data-v-97339429> Explore the finest plans to acquire your dream home </h1><p class="w-[90%] md:w-[787px] mx-auto mt-8 text-[16px] md:text-xl mb-10 text-white font-semibold leading-[28px]" data-v-97339429> With our platform, you can explore and select from top-notch plans that align with your vision, bringing you closer to the home you&#39;ve always desired. </p><div class="cta mt-10" data-v-97339429><a href="#" class="primary-button px-8 rounded-[12px] inline-flex space-x-[10px] justify-center self-center" data-v-97339429><p class="font-bold text-[16px] self-center" data-v-97339429>Get Started</p><img${ssrRenderAttr("src", _imports_0)} class="self-center" alt="" data-v-97339429></a></div><div class="px-[24px] md:px-[120px] absolute top-[90%] md:top-[55%]" data-v-97339429><img${ssrRenderAttr("src", _imports_1)} alt="" class="object-cover w-full hidden md:block" data-v-97339429><img${ssrRenderAttr("src", _imports_1)} alt="" class="object-cover w-full block md:hidden" data-v-97339429></div></div></div><section class="mt-[200px] md:mt-[350px] px-[24px] md:px-[120px] pb-12 md:pb-[144px] flex flex-col md:flex-row md:space-x-[50px] space-y-[50px] md:space-y-0" data-v-97339429><div class="self-center md:w-[45%]" data-v-97339429><div class="head-pill text-[#37445D] inline-block px-6 py-3 mb-4 border-2 border-[#f35c35] rounded-[32px] text-sm font-semibold" data-v-97339429><p data-v-97339429>ABOUT US</p></div><h1 class="text-[#252F48] font-bold text-[32px] md:text-[48px]" data-v-97339429> Here’s what we offer at<span class="text-[#f35c35]" data-v-97339429> Realvest</span></h1><p class="text-[16px] font-[500] md:font-semibold md:w-[90%]" data-v-97339429> We understand the significance of trust when it comes to real estate investment. That&#39;s why we prioritize transparency, reliability, and accountability in everything we do </p><div class="mt-10 flex space-x-[47px] md:space-y-0 space-y-[47px]" data-v-97339429><div class="self-end" data-v-97339429><p class="text-[24px] md:text-[40px] text-[#252f48] font-bold" data-v-97339429> 60K<span class="text-[#f35c35]" data-v-97339429>+</span></p><p class="text-sm md:text-[16px] font-semibold" data-v-97339429>Realtors</p></div><div data-v-97339429><p class="text-[24px] md:text-[40px] text-[#252f48] font-bold" data-v-97339429> 120<span class="text-[#f35c35]" data-v-97339429>+</span></p><p class="text-sm md:text-[16px] font-semibold" data-v-97339429>Properties</p></div><div data-v-97339429><p class="text-[24px] md:text-[40px] text-[#252f48] font-bold" data-v-97339429> 10K<span class="text-[#f35c35]" data-v-97339429>+</span></p><p class="text-sm md:text-[16px] font-semibold" data-v-97339429>Subscriptions</p></div></div></div><div class="second-div w-full md:w-[55%] flex flex-col md:flex-row flex-wrap self-start gap-8" data-v-97339429><div class="card space-y-[40px] md:space-y-0 bg-white md:w-[47%] hover:bg-[#f35c35] hover:text-white transition-colors" data-v-97339429><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-97339429><p class="mt-6 card-title text-[#252748] font-semibold text-xl" data-v-97339429> Reliable investment plans </p><p data-v-97339429> We provide you with trustworthy investment plans resulting to a solid foundation for financial goals. </p></div><div class="card bg-white md:w-[47%] hover:bg-[#f35c35] hover:text-white" data-v-97339429><img${ssrRenderAttr("src", _imports_3)} alt="" data-v-97339429><p class="mt-6 card-title text-[#252748] font-semibold text-xl" data-v-97339429> Referral bonuses </p><p data-v-97339429> By referring others to invest, you can enjoy extra incentives in the form of referral bonuses. </p></div><div class="card bg-white md:w-[47%] hover:bg-[#f35c35] hover:text-white" data-v-97339429><img${ssrRenderAttr("src", _imports_4)} alt="" data-v-97339429><p class="mt-6 card-title text-[#252748] font-semibold text-xl" data-v-97339429> Best homes close to you </p><p data-v-97339429> Explore a curated selection of top-notch residences nearby for your consideration. </p></div><div class="card bg-white md:w-[47%] hover:bg-[#f35c35] hover:text-white" data-v-97339429><img${ssrRenderAttr("src", _imports_5)} alt="" data-v-97339429><p class="mt-6 card-title text-[#252748] font-semibold text-xl" data-v-97339429> Secure payment options </p><p data-v-97339429> When it comes to buying homes, you have access to various secure payment options. </p></div></div></section><section class="plans !bg-[#F1F5F9] py-[48px] px-[24px] md:px-[120px] md:py-[87px] flex flex-col md:flex-row md:space-x-[100px]" data-v-97339429><img${ssrRenderAttr("src", _imports_6)} alt="" class="order-1 md:order-none" data-v-97339429><div class="self-center" data-v-97339429><h1 class="text-[32px] leading-[48px] md:text-[48px] text-[#252F48] font-bold md:leading-[64px]" data-v-97339429> You have access to subscribe to the best plans easily </h1><ul class="mt-6" data-v-97339429><li class="flex gap-2" data-v-97339429><img${ssrRenderAttr("src", _imports_7)} alt="" data-v-97339429><p class="font-semibold" data-v-97339429> Select the the home you’d like to subscribe to </p></li><li class="flex gap-2 mt-4" data-v-97339429><img${ssrRenderAttr("src", _imports_7)} alt="" data-v-97339429><p class="font-semibold" data-v-97339429>Select the plan best suitable to you</p></li><li class="flex gap-2 mt-4" data-v-97339429><img${ssrRenderAttr("src", _imports_7)} alt="" data-v-97339429><p class="font-semibold" data-v-97339429> Enter duration of payment and number of units </p></li><li class="flex gap-2 mt-4" data-v-97339429><img${ssrRenderAttr("src", _imports_7)} alt="" data-v-97339429><p class="font-semibold" data-v-97339429>Review your subscription details</p></li><li class="flex gap-2 mt-4" data-v-97339429><img${ssrRenderAttr("src", _imports_7)} alt="" data-v-97339429><p class="font-semibold" data-v-97339429>Make your payment and start your journey!</p></li></ul></div></section><section class="!bg-[#FFF] py-[48px] px-[24px] md:px-[120px] md:py-[80px] md:flex-row gap-10 md:gap-[131.8px]" data-v-97339429><h2 class="text-[32px] md:text-5xl font-bold text-[#252f48]" data-v-97339429> Featured Homes </h2><p class="mt-4 md:w-[560px]" data-v-97339429> You get to see and experience the best quality homes and property close to you. Click on one of the best properties below and enjoy </p><div class="flex flex-wrap gap-[28px] mt-[56px]" data-v-97339429><!--[-->`);
  ssrRenderList($data.products, (product, index2) => {
    _push(ssrRenderComponent(_component_product_card, {
      key: index2,
      product,
      class: "w-[300px] relative grow"
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
  if ($data.loading) {
    _push(`<div class="text-[#f35c35] text-xl mt-10 text-center" data-v-97339429>`);
    _push(ssrRenderComponent(_component_spinner, null, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="mt-10 md:mt-16 flex justify-center" data-v-97339429>`);
  if ($data.perPage <= 6) {
    _push(`<span class="secondary-button border-0 cursor-pointer" data-v-97339429>Load more</span>`);
  } else {
    _push(`<a class="secondary-button border-0 cursor-pointer" href="https://app.realvest.ng" data-v-97339429>See all</a>`);
  }
  _push(`</div></section><section class="!bg-[#FFF] py-[48px] px-[24px] md:px-[120px] md:py-[80px] md:flex-row gap-10 md:gap-[131.8px] overflow-scroll" data-v-97339429><div class="flex flex-col md:flex-row justify-between" data-v-97339429><div class="md:w-[513px]" data-v-97339429><div class="head-pill text-[#37445D] inline-block px-6 py-3 mb-4 border-2 border-[#f35c35] rounded-[32px] text-sm font-semibold" data-v-97339429><p data-v-97339429>OUR BLOG</p></div><h2 class="text-[#252f48] font-bold text-[32px] md:text-[48px]" data-v-97339429> What’s in our Articles </h2></div><p class="font-medium md:font-bold md:w-[519px] self-end" data-v-97339429> Stay ahead of the curve with Realvest&#39;s blog contents, delivering timely updates and valuable insights on real estate, finances, investments, and more. </p><div class="self-end text-[#f35c35] mt-10 md:mt-0 flex justify-end justify-self-end grow-0" data-v-97339429><a href="https://app.realvest.ng" class="font-semibold" data-v-97339429> See all</a><img${ssrRenderAttr("src", _imports_8)} alt="" data-v-97339429></div></div><div class="grid grid-flow-col w-full min-w-full overflow-x-scroll overflow-y-hidden pb-10 gap-[28px] mt-[24px] md:mt-[56px]" data-v-97339429><!--[-->`);
  ssrRenderList($data.articles, (product, i) => {
    _push(ssrRenderComponent(_component_article_card, {
      class: "self-start",
      product,
      key: `article-${i}`
    }, null, _parent));
  });
  _push(`<!--]--></div></section><section class="!bg-[#171D2C] py-[48px] px-[24px] md:px-[120px] md:py-[80px] md:flex-row gap-10 md:gap-[131.8px] overflow-hidden relative" data-v-97339429><div class="mb-[13.66px] relative bg-no-repeat bg-cover bg-[url(&#39;@/assets/images/dotted-map.svg&#39;)]" data-v-97339429><div class="flex justify-between" data-v-97339429><div data-v-97339429><h2 class="text-[32px] md:text-[48px] text-[#fff] font-bold" data-v-97339429> Experience beyond our words </h2><p class="text-white" data-v-97339429> Listen to what our realtors and customers are saying about us </p></div></div><div class="review-carousel flex justify-between gap-6 mt-[56px]" data-v-97339429>`);
  _push(ssrRenderComponent(_component_carousel, { class: "w-full" }, null, _parent));
  _push(`</div></div></section><section class="plans !bg-[#fff] py-[48px] px-[24px] md:px-[120px] md:py-[87px] flex flex-col md:flex-row gap-10 md:gap-[100px]" data-v-97339429><img${ssrRenderAttr("src", _imports_9)} alt="" class="md:w-1/2 w-full self-start object-cover" data-v-97339429><div class="self-center order-[-1] md:order-none w-full" data-v-97339429><div class="head-pill text-[#37445D] inline-block px-6 py-3 mb-4 border-2 border-[#f35c35] rounded-[32px] text-sm font-semibold" data-v-97339429><p data-v-97339429>FAQs</p></div><h1 class="text-[32px] leading-[48px] md:text-[48px] text-[#252F48] font-bold md:leading-[64px]" data-v-97339429> Get the answer to all your queries </h1><p class="font-medium mt-4" data-v-97339429> Stay ahead of the curve with Realvest&#39;s blog contents, delivering timely updates and valuable insights on real estate, finances, investments, and more. </p><div class="mt-6" data-v-97339429>`);
  _push(ssrRenderComponent(_component_accordion, null, null, _parent));
  _push(`</div></div></section><section class="plans !bg-[#F1F5F9] justify-between py-[48px] px-[24px] md:px-[120px] md:py-[87px] flex flex-wrap md:flex-nowrap md:flex-row gap-10 md:gap-[187px]" data-v-97339429>`);
  _push(ssrRenderComponent(_component_app_footer, null, null, _parent));
  _push(`</section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-97339429"]]);
export {
  index as default
};
//# sourceMappingURL=index-77d0be66.js.map
