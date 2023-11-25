const tailwind = `/*! tailwindcss v3.3.3 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.visible{visibility:visible}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.top-0{top:0}.top-\\[90\\%\\]{top:90%}.z-50{z-index:50}.z-\\[9999999\\]{z-index:9999999}.order-1{order:1}.order-\\[-1\\]{order:-1}.m-6{margin:1.5rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2{margin-bottom:.5rem;margin-top:.5rem}.mb-10{margin-bottom:2.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.mb-\\[13\\.66px\\]{margin-bottom:13.66px}.ml-5{margin-left:1.25rem}.mt-1{margin-top:.25rem}.mt-10{margin-top:2.5rem}.mt-12{margin-top:3rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.mt-6{margin-top:1.5rem}.mt-8{margin-top:2rem}.mt-\\[190px\\]{margin-top:190px}.mt-\\[200px\\]{margin-top:200px}.mt-\\[24px\\]{margin-top:24px}.mt-\\[56px\\]{margin-top:56px}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.contents{display:contents}.hidden{display:none}.h-10{height:2.5rem}.h-52{height:13rem}.h-\\[100vh\\]{height:100vh}.h-\\[240px\\]{height:240px}.h-full{height:100%}.h-screen{height:100vh}.w-10{width:2.5rem}.w-\\[120px\\]{width:120px}.w-\\[300px\\]{width:300px}.w-\\[90\\%\\]{width:90%}.w-\\[full\\]{width:full}.w-full{width:100%}.w-screen{width:100vw}.min-w-full{min-width:100%}.grow{flex-grow:1}.grow-0{flex-grow:0}.grow-\\[1\\]{flex-grow:1}.rotate-180{--tw-rotate:180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(180deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180,.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.resize{resize:both}.grid-flow-col{grid-auto-flow:column}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-10{gap:2.5rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.gap-\\[28px\\]{gap:28px}.space-x-10>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:2.5rem;margin-left:calc(2.5rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(2.5rem*var(--tw-space-x-reverse))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:1rem;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(1rem*var(--tw-space-x-reverse))}.space-x-\\[10px\\]>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:10px;margin-left:calc(10px*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(10px*var(--tw-space-x-reverse))}.space-x-\\[47px\\]>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:47px;margin-left:calc(47px*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(47px*var(--tw-space-x-reverse))}.space-y-\\[40px\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(40px*var(--tw-space-y-reverse));margin-top:40px;margin-top:calc(40px*(1 - var(--tw-space-y-reverse)))}.space-y-\\[47px\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(47px*var(--tw-space-y-reverse));margin-top:47px;margin-top:calc(47px*(1 - var(--tw-space-y-reverse)))}.space-y-\\[50px\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(50px*var(--tw-space-y-reverse));margin-top:50px;margin-top:calc(50px*(1 - var(--tw-space-y-reverse)))}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.\\!self-center{align-self:center!important}.self-center{align-self:center}.justify-self-start{justify-self:start}.justify-self-end{justify-self:end}.overflow-hidden{overflow:hidden}.overflow-scroll{overflow:scroll}.overflow-y-hidden{overflow-y:hidden}.overflow-x-scroll{overflow-x:scroll}.overflow-y-scroll{overflow-y:scroll}.rounded-2xl{border-radius:1rem}.rounded-\\[12px\\]{border-radius:12px}.rounded-\\[32px\\]{border-radius:32px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-none{border-radius:0}.rounded-xl{border-radius:.75rem}.rounded-l{border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.rounded-r{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.rounded-t-2xl{border-top-left-radius:1rem;border-top-right-radius:1rem}.border{border-width:1px}.border-0{border-width:0}.border-2{border-width:2px}.border-\\[\\#f35c35\\]{--tw-border-opacity:1;border-color:#f35c35;border-color:rgb(243 92 53/var(--tw-border-opacity))}.\\!bg-\\[\\#171D2C\\]{--tw-bg-opacity:1!important;background-color:#171d2c!important;background-color:rgb(23 29 44/var(--tw-bg-opacity))!important}.\\!bg-\\[\\#F1F5F9\\]{--tw-bg-opacity:1!important;background-color:#f1f5f9!important;background-color:rgb(241 245 249/var(--tw-bg-opacity))!important}.\\!bg-\\[\\#FFF\\],.\\!bg-\\[\\#fff\\]{--tw-bg-opacity:1!important;background-color:#fff!important;background-color:rgb(255 255 255/var(--tw-bg-opacity))!important}.bg-\\[\\#252F48\\]{--tw-bg-opacity:1;background-color:#252f48;background-color:rgb(37 47 72/var(--tw-bg-opacity))}.bg-\\[\\#F1F0FE\\]{--tw-bg-opacity:1;background-color:#f1f0fe;background-color:rgb(241 240 254/var(--tw-bg-opacity))}.bg-\\[\\#F1F5F9\\]{--tw-bg-opacity:1;background-color:#f1f5f9;background-color:rgb(241 245 249/var(--tw-bg-opacity))}.bg-\\[\\#FEF7F5\\]{--tw-bg-opacity:1;background-color:#fef7f5;background-color:rgb(254 247 245/var(--tw-bg-opacity))}.bg-\\[\\#f0f6ff\\]{--tw-bg-opacity:1;background-color:#f0f6ff;background-color:rgb(240 246 255/var(--tw-bg-opacity))}.bg-\\[\\#f1f5f9\\]{--tw-bg-opacity:1;background-color:#f1f5f9;background-color:rgb(241 245 249/var(--tw-bg-opacity))}.bg-\\[\\#fff\\]{--tw-bg-opacity:1;background-color:#fff;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-black{--tw-bg-opacity:1;background-color:#000;background-color:rgb(0 0 0/var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity:1;background-color:#f9fafb;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bg-green-200{--tw-bg-opacity:1;background-color:#bbf7d0;background-color:rgb(187 247 208/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:#fff;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-\\[url\\(\\'\\@\\/assets\\/images\\/dotted-map\\.svg\\'\\)\\]{background-image:url(` + __buildAssetsURL("dotted-map.3d86e846.svg") + ")}.bg-\\[url\\(\\'\\@\\/assets\\/images\\/vector\\.svg\\'\\)\\]{background-image:url(" + __buildAssetsURL("vector.1bdf1b2c.svg") + ")}.bg-cover{background-size:cover}.bg-center{background-position:50%}.bg-no-repeat{background-repeat:no-repeat}.object-cover{object-fit:cover}.p-0{padding:0}.p-10{padding:2.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.px-\\[24px\\]{padding-left:24px;padding-right:24px}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-20{padding-bottom:5rem;padding-top:5rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-4{padding-bottom:1rem;padding-top:1rem}.py-5{padding-bottom:1.25rem;padding-top:1.25rem}.py-\\[48px\\]{padding-bottom:48px;padding-top:48px}.pb-10{padding-bottom:2.5rem}.pb-12{padding-bottom:3rem}.pb-6{padding-bottom:1.5rem}.pt-5{padding-top:1.25rem}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-\\[16px\\]{font-size:16px}.text-\\[24px\\]{font-size:24px}.text-\\[32px\\]{font-size:32px}.text-\\[40px\\]{font-size:40px}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-\\[500\\]{font-weight:500}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.font-extralight{font-weight:200}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-thin{font-weight:100}.leading-\\[28px\\]{line-height:28px}.leading-\\[48px\\]{line-height:48px}.leading-\\[56px\\]{line-height:56px}.\\!text-green-700{--tw-text-opacity:1!important;color:#15803d!important;color:rgb(21 128 61/var(--tw-text-opacity))!important}.text-\\[\\#000\\]{--tw-text-opacity:1;color:#000;color:rgb(0 0 0/var(--tw-text-opacity))}.text-\\[\\#1e293b\\]{--tw-text-opacity:1;color:#1e293b;color:rgb(30 41 59/var(--tw-text-opacity))}.text-\\[\\#252748\\]{--tw-text-opacity:1;color:#252748;color:rgb(37 39 72/var(--tw-text-opacity))}.text-\\[\\#252F48\\],.text-\\[\\#252f48\\]{--tw-text-opacity:1;color:#252f48;color:rgb(37 47 72/var(--tw-text-opacity))}.text-\\[\\#3071D2\\]{--tw-text-opacity:1;color:#3071d2;color:rgb(48 113 210/var(--tw-text-opacity))}.text-\\[\\#37445D\\]{--tw-text-opacity:1;color:#37445d;color:rgb(55 68 93/var(--tw-text-opacity))}.text-\\[\\#6D7A8D\\]{--tw-text-opacity:1;color:#6d7a8d;color:rgb(109 122 141/var(--tw-text-opacity))}.text-\\[\\#7065F0\\]{--tw-text-opacity:1;color:#7065f0;color:rgb(112 101 240/var(--tw-text-opacity))}.text-\\[\\#F35C35\\],.text-\\[\\#f35c35\\]{--tw-text-opacity:1;color:#f35c35;color:rgb(243 92 53/var(--tw-text-opacity))}.text-\\[\\#fff\\]{--tw-text-opacity:1;color:#fff;color:rgb(255 255 255/var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:#6b7280;color:rgb(107 114 128/var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:#1f2937;color:rgb(31 41 55/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:#fff;color:rgb(255 255 255/var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.drop-shadow-lg{--tw-drop-shadow:drop-shadow(0 10px 8px rgba(0,0,0,.04)) drop-shadow(0 4px 3px rgba(0,0,0,.1));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) drop-shadow(0 10px 8px rgb(0 0 0/.04)) drop-shadow(0 4px 3px rgb(0 0 0/.1))}.drop-shadow-lg,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.hover\\:bg-\\[\\#f35c35\\]:hover{--tw-bg-opacity:1;background-color:#f35c35;background-color:rgb(243 92 53/var(--tw-bg-opacity))}.hover\\:text-white:hover{--tw-text-opacity:1;color:#fff;color:rgb(255 255 255/var(--tw-text-opacity))}@media (min-width:768px){.md\\:absolute{position:absolute}.md\\:right-0{right:0}.md\\:top-\\[40px\\]{top:40px}.md\\:top-\\[55\\%\\]{top:55%}.md\\:order-none{order:0}.md\\:mt-0{margin-top:0}.md\\:mt-16{margin-top:4rem}.md\\:mt-\\[350px\\]{margin-top:350px}.md\\:mt-\\[56px\\]{margin-top:56px}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:h-\\[110vh\\]{height:110vh}.md\\:w-1\\/2{width:50%}.md\\:w-\\[1121px\\]{width:1121px}.md\\:w-\\[350px\\]{width:350px}.md\\:w-\\[440px\\]{width:440px}.md\\:w-\\[45\\%\\]{width:45%}.md\\:w-\\[47\\%\\]{width:47%}.md\\:w-\\[513px\\]{width:513px}.md\\:w-\\[519px\\]{width:519px}.md\\:w-\\[55\\%\\]{width:55%}.md\\:w-\\[560px\\]{width:560px}.md\\:w-\\[787px\\]{width:787px}.md\\:w-\\[90\\%\\]{width:90%}.md\\:basis-40{flex-basis:10rem}.md\\:basis-\\[350px\\]{flex-basis:350px}.md\\:flex-row{flex-direction:row}.md\\:flex-nowrap{flex-wrap:nowrap}.md\\:justify-start{justify-content:flex-start}.md\\:gap-6{gap:1.5rem}.md\\:gap-\\[100px\\]{gap:100px}.md\\:gap-\\[131\\.8px\\]{gap:131.8px}.md\\:gap-\\[187px\\]{gap:187px}.md\\:space-x-\\[100px\\]>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:100px;margin-left:calc(100px*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(100px*var(--tw-space-x-reverse))}.md\\:space-x-\\[50px\\]>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:50px;margin-left:calc(50px*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(50px*var(--tw-space-x-reverse))}.md\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:0;margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}.md\\:px-\\[120px\\]{padding-left:120px;padding-right:120px}.md\\:py-\\[80px\\]{padding-bottom:80px;padding-top:80px}.md\\:py-\\[87px\\]{padding-bottom:87px;padding-top:87px}.md\\:pb-\\[144px\\]{padding-bottom:144px}.md\\:text-5xl{font-size:3rem;line-height:1}.md\\:text-\\[16px\\]{font-size:16px}.md\\:text-\\[19px\\]{font-size:19px}.md\\:text-\\[40px\\]{font-size:40px}.md\\:text-\\[48px\\]{font-size:48px}.md\\:text-\\[72px\\]{font-size:72px}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}.md\\:font-bold{font-weight:700}.md\\:font-semibold{font-weight:600}.md\\:leading-\\[64px\\]{line-height:64px}.md\\:leading-\\[80px\\]{line-height:80px}}";
export {
  tailwind as default
};
//# sourceMappingURL=entry-styles-1.mjs-cd177422.js.map
