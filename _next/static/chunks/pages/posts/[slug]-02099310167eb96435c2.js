(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{3538:function(e,t,n){"use strict";var a=n(7294).createElement;t.Z=function(e){var t=e.children;return a("div",{className:"container max-w-screen-md mx-auto px-5 sm:px-12"},t)}},9921:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(7294),r=n(1664),l=n(3538),i=a.createElement,c=function(){return i("footer",{className:"bg-black"},i(l.Z,null,i("div",{className:"flex justify-center items-center pt-4 pb-8"},i(r.default,{href:"/"},i("a",{className:"font-bold text-white"},"Home")))))},o=n(9008),s=a.createElement,u="/qwerty-log",m=function(){return s(o.default,null,s("link",{rel:"apple-touch-icon",sizes:"180x180",href:u+"/favicon/apple-touch-icon.png"}),s("link",{rel:"icon",type:"image/png",sizes:"32x32",href:u+"/favicon/favicon-32x32.png"}),s("link",{rel:"icon",type:"image/png",sizes:"16x16",href:u+"/favicon/favicon-16x16.png"}),s("link",{rel:"manifest",href:u+"/favicon/site.webmanifest"}),s("link",{rel:"mask-icon",href:u+"/favicon/safari-pinned-tab.svg",color:"#000"}),s("meta",{name:"msapplication-TileColor",content:"#da532c"}),s("meta",{name:"msapplication-config",content:u+"/favicon/browserconfig.xml"}),s("meta",{name:"theme-color",content:"#ffffff"}),s("meta",{name:"description",content:"A statically generated blog using Next.js and Markdown, written by Qwerty."}),s("meta",{property:"og:image",content:u+"/favicon/qwerty-log.png"}))},f=a.createElement,d=function(e){var t=e.children;return f(a.Fragment,null,f(m,null),f("div",{className:"min-h-screen"},f("main",null,t)),f(c,null))}},2558:function(e,t,n){"use strict";var a=n(7294),r=n(3802),l=a.createElement;t.Z=function(e){var t=e.tags;return l(a.Fragment,null,t&&l("div",{className:"flex items-center"},l(r.lO_,{className:"w-5 h-5"}),t.map((function(e,t){return l("div",{className:"bg-gray-900 text-white text-sm mx-0.5 px-2 rounded-sm",key:t},e)}))))}},392:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return b},default:function(){return y}});var a=n(7294),r=n(2918),l=n(9008),i=n(1163),c=n(3538),o=n(9921),s=n(21),u=n.n(s),m=a.createElement,f=function(e){var t=e.content;return m("div",{className:u().markdown,dangerouslySetInnerHTML:{__html:t}})},d=n(3855),g=n(3022),v=a.createElement,p=function(e){var t=e.dateString,n=(0,d.Z)(t);return v("time",{dateTime:t},(0,g.Z)(n,"y\u5e74M\u6708d\u65e5"))},h=a.createElement,x=function(e){var t=e.children;return h("h1",{className:"mt-16 text-3xl font-bold tracking-tighter mb-4"},t)},w=n(2558),_=a.createElement,k=function(e){var t=e.title,n=e.tags,r=e.date;return _(a.Fragment,null,_(x,null,t),_("div",{className:"flex items-center mb-1"},_(w.Z,{tags:n}),_("div",{className:"text-base text-gray-600 ml-auto"},_(p,{dateString:r}))))},N=a.createElement,b=!0,y=function(e){var t=e.post,n=(0,i.useRouter)();return n.isFallback||null!==t&&void 0!==t&&t.slug?N(o.Z,null,N(c.Z,null,n.isFallback?N(x,null,"Loading\u2026"):N(a.Fragment,null,N("article",{className:"mb-32"},N(l.default,null,N("title",null,t.title)),N(k,{title:t.title,coverImage:t.coverImage,date:t.date,author:t.author,tags:t.tags}),N(f,{content:t.content}))))):N(r.default,{statusCode:404})}},9035:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(392)}])},21:function(e){e.exports={markdown:"markdown-styles_markdown__1x9gM"}}},function(e){e.O(0,[774,351,329,127],(function(){return t=9035,e(e.s=t);var t}));var t=e.O();_N_E=t}]);