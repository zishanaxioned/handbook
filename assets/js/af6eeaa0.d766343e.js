"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[9968],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),c=p(a),k=r,g=c["".concat(o,".").concat(k)]||c[k]||m[k]||l;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5310:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={id:"css-training",title:"CSS - Cascading Style Sheets",sidebar_label:"Training Template",sidebar_position:1,tags:["css","cascading style sheets"]},i=void 0,s={unversionedId:"learning/css/css-training",id:"learning/css/css-training",title:"CSS - Cascading Style Sheets",description:"Overview",source:"@site/docs/learning/css/training-template.md",sourceDirName:"learning/css",slug:"/learning/css/css-training",permalink:"/docs/learning/css/css-training",draft:!1,editUrl:"https://github.com/axioned/handbook/tree/main/packages/create-docusaurus/templates/shared/docs/learning/css/training-template.md",tags:[{label:"css",permalink:"/docs/tags/css"},{label:"cascading style sheets",permalink:"/docs/tags/cascading-style-sheets"}],version:"current",sidebarPosition:1,frontMatter:{id:"css-training",title:"CSS - Cascading Style Sheets",sidebar_label:"Training Template",sidebar_position:1,tags:["css","cascading style sheets"]},sidebar:"tutorialSidebar",previous:{title:"CSS",permalink:"/docs/category/css"},next:{title:"Code Review Checklist",permalink:"/docs/learning/css/css-checklist"}},o={},p=[{value:"Overview",id:"overview",level:2},{value:"<strong>CSS - Reading Topics</strong>",id:"css---reading-topics",level:2},{value:"1. Adding CSS to HTML",id:"1-adding-css-to-html",level:3},{value:"2. Selectors",id:"2-selectors",level:3},{value:"3. CSS Box Model",id:"3-css-box-model",level:3},{value:"4. Positioning",id:"4-positioning",level:3},{value:"5. Float",id:"5-float",level:3},{value:"6. Box-sizing",id:"6-box-sizing",level:3},{value:"7. Display",id:"7-display",level:3},{value:"8. Animation",id:"8-animation",level:3},{value:"9. Understanding CSS inheritance",id:"9-understanding-css-inheritance",level:3},{value:"10. Introduction to CSS sprite and Web Safe Fonts",id:"10-introduction-to-css-sprite-and-web-safe-fonts",level:3},{value:"11. Responsiveness",id:"11-responsiveness",level:3}],d={toc:p};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."),(0,r.kt)("p",null,"CSS is among the core languages of the open web and is standardized across Web browsers according to W3C specifications. Previously, the development of various parts of CSS specification was done synchronously, which allowed the versioning of the latest recommendations. You might have heard about CSS1, CSS2.1, or even CSS3. There will never be a CSS3 or a CSS4; rather, everything is now CSS without a version number."),(0,r.kt)("h2",{id:"css---reading-topics"},(0,r.kt)("strong",{parentName:"h2"},"CSS - Reading Topics")),(0,r.kt)("h3",{id:"1-adding-css-to-html"},"1. Adding CSS to HTML"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What is CSS?")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS"},"https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://skillcrush.com/blog/css/"},"https://skillcrush.com/blog/css/")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://www.hostinger.in/tutorials/difference-between-inline-external-and-internal-css"},"https://www.hostinger.in/tutorials/difference-between-inline-external-and-internal-css"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What are different methods to apply CSS?")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Which one is best practice to use?")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"2-selectors"},"2. Selectors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What are selector and its types?")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://css-tricks.com/almanac/selectors/"},"https://css-tricks.com/almanac/selectors/")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://www.freecodecamp.org/news/css-selectors-cheat-sheet/"},"https://www.freecodecamp.org/news/css-selectors-cheat-sheet/")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048"},"https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048"))))))),(0,r.kt)("h3",{id:"3-css-box-model"},"3. CSS Box Model"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What is Box model?")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model"},"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://css-tricks.com/the-css-box-model/"},"https://css-tricks.com/the-css-box-model/")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://www.youtube.com/watch?v=rIO5326FgPE"},"https://www.youtube.com/watch?v=rIO5326FgPE")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing"},"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"List all properties of box model")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What is margin collapsing?")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"4-positioning"},"4. Positioning"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Static")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://css-tricks.com/almanac/properties/p/position/"},"https://css-tricks.com/almanac/properties/p/position/")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/position"},"https://developer.mozilla.org/en-US/docs/Web/CSS/position")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://learnlayout.com/position.html"},"https://learnlayout.com/position.html"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Relative")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Absolute")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Fixed")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Sticky")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"5-float"},"5. Float"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What Is A CSS Float Property?")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://www.smashingmagazine.com/2009/10/the-mystery-of-css-float-property/"},"https://www.smashingmagazine.com/2009/10/the-mystery-of-css-float-property/")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/float"},"https://developer.mozilla.org/en-US/docs/Web/CSS/float")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://css-tricks.com/all-about-floats/"},"https://css-tricks.com/all-about-floats/"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"SPECIFICS ON FLOATED ELEMENTS")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Clearing Floats")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"6-box-sizing"},"6. Box-sizing"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Box Model History")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"},"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://www.bitdegree.org/learn/css-box-sizing"},"https://www.bitdegree.org/learn/css-box-sizing")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://css-tricks.com/box-sizing/"},"https://css-tricks.com/box-sizing/"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Present-Day box-sizing")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"7-display"},"7. Display"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Inline")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://css-tricks.com/almanac/properties/d/display/"},"https://css-tricks.com/almanac/properties/d/display/"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Block")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Inline-Block")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Flex")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"8-animation"},"8. Animation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Animation properties")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations"},"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://thoughtbot.com/blog/css-animation-for-beginners"},"https://thoughtbot.com/blog/css-animation-for-beginners")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://webkit.org/blog/324/css-animation-2/"},"https://webkit.org/blog/324/css-animation-2/"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Transitions and transform")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"9-understanding-css-inheritance"},"9. Understanding CSS inheritance"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"How is CSS Inheritance Useful?")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance"},"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://www.sitepoint.com/css-inheritance-introduction/"},"https://www.sitepoint.com/css-inheritance-introduction/"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Forcing Inheritance")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"10-introduction-to-css-sprite-and-web-safe-fonts"},"10. Introduction to CSS sprite and Web Safe Fonts"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"What are CSS Sprites?")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://css-tricks.com/css-sprites/"},"https://css-tricks.com/css-sprites/")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://www.smashingmagazine.com/2009/04/the-mystery-of-css-sprites-techniques-tools-and-tutorials/"},"https://www.smashingmagazine.com/2009/04/the-mystery-of-css-sprites-techniques-tools-and-tutorials/"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Why use CSS Sprites?")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"How do you use CSS Sprites?")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Web Safe fonts")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://www.cssfontstack.com/"},"https://www.cssfontstack.com/"))))))),(0,r.kt)("h3",{id:"11-responsiveness"},"11. Responsiveness"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Types of layouts")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"},"https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://learn.shayhowe.com/advanced-html-css/responsive-web-design/"},"https://learn.shayhowe.com/advanced-html-css/responsive-web-design/")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://marksheet.io/css-responsiveness.html"},"https://marksheet.io/css-responsiveness.html")),(0,r.kt)("li",null,(0,r.kt)("a",{parentName:"td",href:"https://css-tricks.com/nine-basic-principles-responsive-web-design/"},"https://css-tricks.com/nine-basic-principles-responsive-web-design/"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Creating fluid layouts")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Media queries")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Hamburger icon")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Responsive navigation menu")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Video and background image responsive")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("admonition",{title:"CSS Template Google Sheet",type:"tip"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"CSS Cheatsheet ",(0,r.kt)("a",{parentName:"li",href:"https://htmlcheatsheet.com/css/"},(0,r.kt)("em",{parentName:"a"},"Link 1"))," ",(0,r.kt)("a",{parentName:"li",href:"https://www.interviewbit.com/css-cheat-sheet/"},(0,r.kt)("em",{parentName:"a"},"Link 2"))),(0,r.kt)("li",{parentName:"ol"},"CSS Template Reference link can be found ",(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/18vnt-qOtInzMr0LIMzgzOiHP-LPeJ3KjRfZzckeWtUc/edit#gid=0"},(0,r.kt)("strong",{parentName:"a"},"here"))))))}m.isMDXComponent=!0}}]);