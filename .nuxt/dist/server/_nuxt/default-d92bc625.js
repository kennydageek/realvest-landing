import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { useSSRContext } from "vue";
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
const _imports_0 = "" + __buildAssetsURL("logo.b6e3746f.svg");
const _imports_1 = "" + __buildAssetsURL("menu.f4c0acf1.svg");
const _imports_2 = "" + __buildAssetsURL("xmark.8aa16631.svg");
const navbar_vue_vue_type_style_index_0_scoped_7cd9d1e6_lang = "";
const _sfc_main$1 = {
  data() {
    return {
      isSidebarOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-7cd9d1e6><div class="navbar fixed w-full z-[9999999] py-5 px-[24px] md:px-[120px] background-blue flex justify-between" data-v-7cd9d1e6><div class="self-center" data-v-7cd9d1e6><img${ssrRenderAttr("src", _imports_0)} class="w-[120px] object-cover" alt="" data-v-7cd9d1e6></div><ul class="md:flex gap-6 self-center hidden" data-v-7cd9d1e6><li class="p-3" data-v-7cd9d1e6><a href="#" class="nav-links" data-v-7cd9d1e6>Home</a></li><li class="p-3" data-v-7cd9d1e6><a href="#" class="nav-links" data-v-7cd9d1e6>About Us</a></li><li class="p-3" data-v-7cd9d1e6><a href="#" class="nav-links" data-v-7cd9d1e6>Blog</a></li><li class="p-3" data-v-7cd9d1e6><a href="#" class="nav-links" data-v-7cd9d1e6>FAQs</a></li></ul><div class="self-center gap-4 hidden md:flex" data-v-7cd9d1e6><a href="#" class="secondary-button self-center" data-v-7cd9d1e6>Login</a><a href="#" class="primary-button self-center" data-v-7cd9d1e6>Sign Up</a></div><img${ssrRenderAttr("src", _imports_1)} alt="" class="self-center md:hidden" data-v-7cd9d1e6></div><div class="${ssrRenderClass([{ active: $data.isSidebarOpen }, "sidebar md:hidden"])}" data-v-7cd9d1e6><div class="flex justify-between" data-v-7cd9d1e6><img${ssrRenderAttr("src", _imports_0)} class="w-[120px] object-cover" alt="" data-v-7cd9d1e6><div class="!self-center" data-v-7cd9d1e6><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-7cd9d1e6></div></div><ul class="sidebar-links" data-v-7cd9d1e6><li data-v-7cd9d1e6><a href="#" class="nav-links" data-v-7cd9d1e6>Home</a></li><li class="mt-4" data-v-7cd9d1e6><a href="#" class="nav-links" data-v-7cd9d1e6>About Us</a></li><li class="mt-4" data-v-7cd9d1e6><a href="#" class="nav-links" data-v-7cd9d1e6>Blog</a></li><li class="mt-4" data-v-7cd9d1e6><a href="#" class="nav-links" data-v-7cd9d1e6>FAQs</a></li></ul><div class="flex space-x-4 mt-12" data-v-7cd9d1e6><a href="#" class="secondary-button grow" data-v-7cd9d1e6>Login</a><a href="#" class="primary-button grow" data-v-7cd9d1e6>Sign Up</a></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-7cd9d1e6"]]);
const _sfc_main = {
  // components: { navbar, AppFooter },
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_navbar = __nuxt_component_0;
  _push(`<!--[--><div class="w-screen z-50">`);
  _push(ssrRenderComponent(_component_navbar, null, null, _parent));
  _push(`</div><div class="">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-d92bc625.js.map
