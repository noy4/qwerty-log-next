(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3538:function(e,t,n){"use strict";var a=n(7294).createElement;t.Z=function(e){var t=e.children;return a("div",{className:"container max-w-screen-md mx-auto px-5 sm:px-12"},t)}},9921:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(7294),r=n(1664),i=n(3538),o=a.createElement,u=function(){return o("footer",{className:"bg-black"},o(i.Z,null,o("div",{className:"flex justify-center items-center pt-4 pb-8"},o(r.default,{href:"/"},o("a",{className:"font-bold text-white"},"Home")))))},l=n(9008),s=a.createElement,d="/qwerty-log",c=function(){return s(l.default,null,s("link",{rel:"apple-touch-icon",sizes:"180x180",href:d+"/favicon/apple-touch-icon.png"}),s("link",{rel:"icon",type:"image/png",sizes:"32x32",href:d+"/favicon/favicon-32x32.png"}),s("link",{rel:"icon",type:"image/png",sizes:"16x16",href:d+"/favicon/favicon-16x16.png"}),s("link",{rel:"manifest",href:d+"/favicon/site.webmanifest"}),s("link",{rel:"mask-icon",href:d+"/favicon/safari-pinned-tab.svg",color:"#5bbad5"}),s("meta",{name:"msapplication-TileColor",content:"#da532c"}),s("meta",{name:"theme-color",content:"#ffffff"}),s("meta",{name:"description",content:"A statically generated blog using Next.js and Markdown, written by Qwerty."}),s("meta",{property:"og:image",content:d+"/favicon/qwerty-log.png"}))},m=a.createElement,f=function(e){var t=e.children;return m(a.Fragment,null,m(c,null),m("div",{className:"min-h-screen"},m("main",null,t)),m(u,null))}},2558:function(e,t,n){"use strict";var a=n(7294),r=n(3802),i=a.createElement;t.Z=function(e){var t=e.tags;return i(a.Fragment,null,t&&i("div",{className:"flex items-center"},i(r.lO_,{className:"w-5 h-5"}),t.map((function(e,t){return i("div",{className:"bg-gray-900 text-white text-sm mx-0.5 px-2 rounded-sm",key:t},e)}))))}},3313:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return j},default:function(){return q}});var a=n(7294),r=n(9008),i=n(3538),o=a.createElement,u=function(){return o("section",{className:"flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12"},o("h1",{className:"text-3xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8"},"Qwerty Log."),o("h4",{className:"text-center md:text-left text-lg mt-5 md:pl-8"},"A statically generated blog using"," ",o("a",{href:"https://nextjs.org/",className:"underline hover:text-success duration-200 transition-colors"},"Next.js")," ","and Markdown, written by"," ",o("a",{href:"https://twitter.com/noy_qwerty/",className:"underline hover:text-success duration-200 transition-colors"},"Qwerty"),"."))},l=n(9921),s=n(1664),d=n(3855),c=n(4262),m=n(9013),f=n(3882);function h(e,t){(0,f.Z)(2,arguments);var n=(0,m.Z)(e),a=(0,m.Z)(t),r=n.getTime()-a.getTime();return r<0?-1:r>0?1:r}function g(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})t.hasOwnProperty(n)&&(e[n]=t[n]);return e}({},e)}var v=n(1695),p=6e4,w=1440,x=43200,y=525600;function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,f.Z)(2,arguments);var a=n.locale||v.Z;if(!a.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var r=h(e,t);if(isNaN(r))throw new RangeError("Invalid time value");var i,o,u=g(n);u.addSuffix=Boolean(n.addSuffix),u.comparison=r,r>0?(i=(0,m.Z)(t),o=(0,m.Z)(e)):(i=(0,m.Z)(e),o=(0,m.Z)(t));var l,s=null==n.roundingMethod?"round":String(n.roundingMethod);if("floor"===s)l=Math.floor;else if("ceil"===s)l=Math.ceil;else{if("round"!==s)throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");l=Math.round}var d,b=o.getTime()-i.getTime(),Z=b/p,W=(0,c.Z)(o)-(0,c.Z)(i),N=(b-W)/p;if("second"===(d=null==n.unit?Z<1?"second":Z<60?"minute":Z<w?"hour":N<x?"day":N<y?"month":"year":String(n.unit))){var M=l(b/1e3);return a.formatDistance("xSeconds",M,u)}if("minute"===d){var P=l(Z);return a.formatDistance("xMinutes",P,u)}if("hour"===d){var k=l(Z/60);return a.formatDistance("xHours",k,u)}if("day"===d){var S=l(N/w);return a.formatDistance("xDays",S,u)}if("month"===d){var E=l(N/x);return 12===E&&"month"!==n.unit?a.formatDistance("xYears",1,u):a.formatDistance("xMonths",E,u)}if("year"===d){var _=l(N/y);return a.formatDistance("xYears",_,u)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}var Z={lessThanXSeconds:{one:"1\u79d2\u672a\u6e80",other:"{{count}}\u79d2\u672a\u6e80",oneWithSuffix:"\u7d041\u79d2",otherWithSuffix:"\u7d04{{count}}\u79d2"},xSeconds:{one:"1\u79d2",other:"{{count}}\u79d2"},halfAMinute:"30\u79d2",lessThanXMinutes:{one:"1\u5206\u672a\u6e80",other:"{{count}}\u5206\u672a\u6e80",oneWithSuffix:"\u7d041\u5206",otherWithSuffix:"\u7d04{{count}}\u5206"},xMinutes:{one:"1\u5206",other:"{{count}}\u5206"},aboutXHours:{one:"\u7d041\u6642\u9593",other:"\u7d04{{count}}\u6642\u9593"},xHours:{one:"1\u6642\u9593",other:"{{count}}\u6642\u9593"},xDays:{one:"1\u65e5",other:"{{count}}\u65e5"},aboutXWeeks:{one:"\u7d041\u9031\u9593",other:"\u7d04{{count}}\u9031\u9593"},xWeeks:{one:"1\u9031\u9593",other:"{{count}}\u9031\u9593"},aboutXMonths:{one:"\u7d041\u304b\u6708",other:"\u7d04{{count}}\u304b\u6708"},xMonths:{one:"1\u304b\u6708",other:"{{count}}\u304b\u6708"},aboutXYears:{one:"\u7d041\u5e74",other:"\u7d04{{count}}\u5e74"},xYears:{one:"1\u5e74",other:"{{count}}\u5e74"},overXYears:{one:"1\u5e74\u4ee5\u4e0a",other:"{{count}}\u5e74\u4ee5\u4e0a"},almostXYears:{one:"1\u5e74\u8fd1\u304f",other:"{{count}}\u5e74\u8fd1\u304f"}};var W=n(9526),N={date:(0,W.Z)({formats:{full:"y\u5e74M\u6708d\u65e5EEEE",long:"y\u5e74M\u6708d\u65e5",medium:"y/MM/dd",short:"y/MM/dd"},defaultWidth:"full"}),time:(0,W.Z)({formats:{full:"H\u6642mm\u5206ss\u79d2 zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,W.Z)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},M={lastWeek:"\u5148\u9031\u306eeeee\u306ep",yesterday:"\u6628\u65e5\u306ep",today:"\u4eca\u65e5\u306ep",tomorrow:"\u660e\u65e5\u306ep",nextWeek:"\u7fcc\u9031\u306eeeee\u306ep",other:"P"};var P=n(8486);var k={ordinalNumber:function(e,t){var n=Number(e),a=String((t||{}).unit);return"date"===a?n+"\u65e5":"year"===a?n+"\u5e74":n},era:(0,P.Z)({values:{narrow:["BC","AC"],abbreviated:["\u7d00\u5143\u524d","\u897f\u66a6"],wide:["\u7d00\u5143\u524d","\u897f\u66a6"]},defaultWidth:"wide"}),quarter:(0,P.Z)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["\u7b2c1\u56db\u534a\u671f","\u7b2c2\u56db\u534a\u671f","\u7b2c3\u56db\u534a\u671f","\u7b2c4\u56db\u534a\u671f"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,P.Z)({values:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],wide:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"]},defaultWidth:"wide"}),day:(0,P.Z)({values:{narrow:["\u65e5","\u6708","\u706b","\u6c34","\u6728","\u91d1","\u571f"],short:["\u65e5","\u6708","\u706b","\u6c34","\u6728","\u91d1","\u571f"],abbreviated:["\u65e5","\u6708","\u706b","\u6c34","\u6728","\u91d1","\u571f"],wide:["\u65e5\u66dc\u65e5","\u6708\u66dc\u65e5","\u706b\u66dc\u65e5","\u6c34\u66dc\u65e5","\u6728\u66dc\u65e5","\u91d1\u66dc\u65e5","\u571f\u66dc\u65e5"]},defaultWidth:"wide"}),dayPeriod:(0,P.Z)({values:{narrow:{am:"\u5348\u524d",pm:"\u5348\u5f8c",midnight:"\u6df1\u591c",noon:"\u6b63\u5348",morning:"\u671d",afternoon:"\u5348\u5f8c",evening:"\u591c",night:"\u6df1\u591c"},abbreviated:{am:"\u5348\u524d",pm:"\u5348\u5f8c",midnight:"\u6df1\u591c",noon:"\u6b63\u5348",morning:"\u671d",afternoon:"\u5348\u5f8c",evening:"\u591c",night:"\u6df1\u591c"},wide:{am:"\u5348\u524d",pm:"\u5348\u5f8c",midnight:"\u6df1\u591c",noon:"\u6b63\u5348",morning:"\u671d",afternoon:"\u5348\u5f8c",evening:"\u591c",night:"\u6df1\u591c"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u5348\u524d",pm:"\u5348\u5f8c",midnight:"\u6df1\u591c",noon:"\u6b63\u5348",morning:"\u671d",afternoon:"\u5348\u5f8c",evening:"\u591c",night:"\u6df1\u591c"},abbreviated:{am:"\u5348\u524d",pm:"\u5348\u5f8c",midnight:"\u6df1\u591c",noon:"\u6b63\u5348",morning:"\u671d",afternoon:"\u5348\u5f8c",evening:"\u591c",night:"\u6df1\u591c"},wide:{am:"\u5348\u524d",pm:"\u5348\u5f8c",midnight:"\u6df1\u591c",noon:"\u6b63\u5348",morning:"\u671d",afternoon:"\u5348\u5f8c",evening:"\u591c",night:"\u6df1\u591c"}},defaultFormattingWidth:"wide"})},S=n(974),E=n(6723),_={code:"ja",formatDistance:function(e,t,n){var a;return n=n||{},a="string"===typeof Z[e]?Z[e]:1===t?n.addSuffix&&Z[e].oneWithSuffix?Z[e].oneWithSuffix:Z[e].one:n.addSuffix&&Z[e].otherWithSuffix?Z[e].otherWithSuffix.replace("{{count}}",t):Z[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?a+"\u5f8c":a+"\u524d":a},formatLong:N,formatRelative:function(e,t,n,a){return M[e]},localize:k,match:{ordinalNumber:(0,S.Z)({matchPattern:/^\u7b2c?\d+(\u65e5)?(\u5e74)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,E.Z)({matchPatterns:{narrow:/^(B\.?C\.?|A\.?D\.?)/i,abbreviated:/^(\u7d00\u5143[\u524d\u5f8c]|\u897f\u66a6)/i,wide:/^(\u7d00\u5143[\u524d\u5f8c]|\u897f\u66a6)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^B/i,/^A/i],any:[/^(\u7d00\u5143\u524d)/i,/^(\u897f\u66a6|\u7d00\u5143\u5f8c)/i]},defaultParseWidth:"any"}),quarter:(0,E.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^Q[1234]/i,wide:/^\u7b2c[1234\u4e00\u4e8c\u4e09\u56db\uff11\uff12\uff13\uff14]\u56db\u534a\u671f/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|\u4e00|\uff11)/i,/(2|\u4e8c|\uff12)/i,/(3|\u4e09|\uff13)/i,/(4|\u56db|\uff14)/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,E.Z)({matchPatterns:{narrow:/^([123456789]|1[012])/,abbreviated:/^([123456789]|1[012])\u6708/i,wide:/^([123456789]|1[012])\u6708/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^1\D/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},defaultParseWidth:"any"}),day:(0,E.Z)({matchPatterns:{narrow:/^[\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f]/,short:/^[\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f]/,abbreviated:/^[\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f]/,wide:/^[\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f]\u66dc\u65e5/},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u65e5/,/^\u6708/,/^\u706b/,/^\u6c34/,/^\u6728/,/^\u91d1/,/^\u571f/]},defaultParseWidth:"any"}),dayPeriod:(0,E.Z)({matchPatterns:{any:/^(AM|PM|\u5348\u524d|\u5348\u5f8c|\u6b63\u5348|\u6df1\u591c|\u771f\u591c\u4e2d|\u591c|\u671d)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^(A|\u5348\u524d)/i,pm:/^(P|\u5348\u5f8c)/i,midnight:/^\u6df1\u591c|\u771f\u591c\u4e2d/i,noon:/^\u6b63\u5348/i,morning:/^\u671d/i,afternoon:/^\u5348\u5f8c/i,evening:/^\u591c/i,night:/^\u6df1\u591c/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}},D=a.createElement,T=function(e){var t=e.dateString,n=(0,d.Z)(t);return D("div",null,function(e,t){return(0,f.Z)(1,arguments),b(e,Date.now(),t)}(n,{addSuffix:!0,locale:_}))},z=n(2558),C=a.createElement,X=function(e){var t=e.title,n=e.tags,a=e.date,r=e.slug;return C("div",null,C("h3",{className:"text-2xl mb-1 leading-snug"},C(s.default,{as:"/posts/".concat(r),href:"/posts/[slug]"},C("a",{className:"hover:underline"},t))),C("div",{className:"flex items-center mb-6"},C(z.Z,{tags:n}),C("div",{className:"text-base ml-auto text-gray-600"},C(T,{dateString:a}))))},Q=a.createElement,A=function(e){var t=e.posts;return Q("section",null,t.map((function(e){return Q(X,{key:e.slug,title:e.title,coverImage:e.coverImage,date:e.date,author:e.author,slug:e.slug,excerpt:e.excerpt,tags:e.tags})})))},H=a.createElement,j=!0,q=function(e){var t=e.allPosts;return H(a.Fragment,null,H(l.Z,null,H(r.default,null,H("title",null,"Qwerty Log")),H(i.Z,null,H(u,null),t.length>0&&H(A,{posts:t}))))}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3313)}])}},function(e){e.O(0,[774,351,329],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);