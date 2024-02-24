<template>
  <div class="flex items-center justify-between py-3">
    <div class="flex flex-1 justify-between sm:hidden">
      <a
        href="#"
        class="relative inline-flex gap-2 items-center rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
        @click="newPage(pages.prev)"
      >
        <img
          src="@/assets/images/arrow-left.svg"
          alt=""
          class="self-center"
        />Previous</a
      >
      <a
        href="#"
        class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-50 gap-2"
        @click="newPage(pages.next)"
        >Next
        <img src="@/assets/images/arrow-right.svg" alt="" class="self-center" />
      </a>
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <nav class="isolate inline-flex" aria-label="Pagination">
          <a
            href="#"
            class="relative inline-flex items-center rounded-xl mx-1 px-4 py-2 text-gray-400 bg-gray-100 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            @click="newPage(pages.prev)"
          >
            <span class="sr-only">Previous</span>
            <i class="bi-chevron-left"></i>
          </a>
          <span v-for="(n, i) in pages.items" :key="i">
            <a
              href="#"
              @click="newPage(n)"
              class="relative inline-flex items-center rounded-xl mx-1 px-5 py-2 text-gray-400 hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
              :class="{
                'bg-primary text-white hover:text-gray-400 hover:bg-primary':
                  current === n,
              }"
            >
              {{ n }}
            </a>
          </span>
          <span
            class="relative inline-flex items-center rounded-xl mx-1 px-5 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            @click="newPage(pages.next)"
          >
            <div>
              <span class="sr-only">Next</span>
              <img src="@/assets/images/arrow-right.svg" alt="" />
            </div>
          </span>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    totalRecords: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      from: 1,
      to: this.perPage,
      current: this.currentPage,
      maxPages: Math.ceil(this.totalRecords / this.perPage),
      pages: {},
    };
  },
  methods: {
    newPage: function (page) {
      if (page > 0 && page <= this.maxPages) {
        this.current = page;
        this.setPage();
        this.$emit('onchange', page);
      }
    },
    setPage() {
      this.from = this.perPage * (this.current - 1) + 1;
      const to = this.from + this.perPage - 1;
      this.to = to > this.totalRecords ? this.totalRecords : to;
      this.pages = this.paginate();
    },
    paginate() {
      const current = this.current;
      const max = this.maxPages;

      if (!current || !max) return null;

      let prev = current === 1 ? null : current - 1;
      let next = current === max ? null : current + 1;
      let items = [1];

      if (current === 1 && max === 1) return { current, prev, next, items };
      if (current > 4) items.push('…');

      let r = 2,
        r1 = current - r,
        r2 = current + r;

      for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push(i);

      if (r2 + 1 < max) items.push('…');
      if (r2 < max) items.push(max);

      return { current, prev, next, items };
    },
  },
  watch: {
    currentPage: function (val) {
      this.current = val;
      this.setPage();
    },
    totalRecords: function (val) {
      this.maxPages = Math.ceil(val / this.perPage);
    },
    perPage: function (val) {
      this.maxPages = Math.ceil(this.totalRecords / val);
      this.setPage();
    },
  },
  mounted() {
    setTimeout(() => this.newPage(1), 100);
  },
};
</script>
