"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[8897],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=p(a),g=r,k=m["".concat(o,".").concat(g)]||m[g]||d[g]||l;return a?n.createElement(k,i(i({ref:e},c),{},{components:a})):n.createElement(k,i({ref:e},c))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8435:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={id:"sass-training",title:"SASS - Syntactically Awesome Style Sheets",sidebar_label:"Training Template",sidebar_position:1,tags:["Sass","training","mixins","partials","interpolation","placeholder","control directive","output style","css extends"]},i="Overview",s={unversionedId:"learning/sass/sass-training",id:"learning/sass/sass-training",title:"SASS - Syntactically Awesome Style Sheets",description:'Sass (short for "Syntactically Awesome Style Sheets") is a popular preprocessor scripting language that is used to generate CSS (Cascading Style Sheets). Sass is a more powerful and efficient way to write CSS code, as it provides additional features and functionality that are not available in standard CSS.',source:"@site/docs/learning/sass/training-template.md",sourceDirName:"learning/sass",slug:"/learning/sass/sass-training",permalink:"/docs/learning/sass/sass-training",draft:!1,editUrl:"https://github.com/axioned/handbook/tree/main/packages/create-docusaurus/templates/shared/docs/learning/sass/training-template.md",tags:[{label:"Sass",permalink:"/docs/tags/sass"},{label:"training",permalink:"/docs/tags/training"},{label:"mixins",permalink:"/docs/tags/mixins"},{label:"partials",permalink:"/docs/tags/partials"},{label:"interpolation",permalink:"/docs/tags/interpolation"},{label:"placeholder",permalink:"/docs/tags/placeholder"},{label:"control directive",permalink:"/docs/tags/control-directive"},{label:"output style",permalink:"/docs/tags/output-style"},{label:"css extends",permalink:"/docs/tags/css-extends"}],version:"current",sidebarPosition:1,frontMatter:{id:"sass-training",title:"SASS - Syntactically Awesome Style Sheets",sidebar_label:"Training Template",sidebar_position:1,tags:["Sass","training","mixins","partials","interpolation","placeholder","control directive","output style","css extends"]},sidebar:"tutorialSidebar",previous:{title:"SASS",permalink:"/docs/category/sass"},next:{title:"Code Review Checklist",permalink:"/docs/learning/sass/sass-checklist"}},o={},p=[{value:"Topics",id:"topics",level:2}],c={toc:p};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,'Sass (short for "Syntactically Awesome Style Sheets") is a popular preprocessor scripting language that is used to generate CSS (Cascading Style Sheets). Sass is a more powerful and efficient way to write CSS code, as it provides additional features and functionality that are not available in standard CSS.\nSass documentation link can be found ',(0,r.kt)("a",{parentName:"p",href:"https://sass-lang.com/documentation/"},(0,r.kt)("strong",{parentName:"a"},"here"))),(0,r.kt)("h2",{id:"topics"},"Topics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Reading Efforts ( in hrs )"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Task Efforts ( in hrs )"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"What is Sass?"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"What Is a Preprocessor?"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Sass or SCSS?"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Installing Sass"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Sass Output Style")," ",(0,r.kt)("ul",null,(0,r.kt)("li",null,":nested"),(0,r.kt)("li",null,":expanded"),(0,r.kt)("li",null,":compact"),(0,r.kt)("li",null,":compressed"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"Comments"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.5"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Variable  + objects"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"Nesting + The & character"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"Css extends"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Partials"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"Extend/Inheritance"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"Place Holder"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"Mixins"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"@rules"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"Operators"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1.5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"16"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Functions")," ",(0,r.kt)("ul",null,(0,r.kt)("li",null,"Vanilla Functions in Sass"),(0,r.kt)("li",null,"Color Functions"),(0,r.kt)("li",null,"String Functions"),(0,r.kt)("li",null,"List Functions"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"17"),(0,r.kt)("td",{parentName:"tr",align:null},"Interpolation"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.5"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"Control Directive"),(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Total Hours")),(0,r.kt)("td",{parentName:"tr",align:"center"},"24.5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"14")))),(0,r.kt)("admonition",{title:"SASS Template Google Sheet",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"SASS template reference link can be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1y4zRUecedV2ftj6yUoBCiP2MK0VZafBAYzlJ8tht6Es/edit#gid=782361990"},(0,r.kt)("strong",{parentName:"a"},"here")),".")))}d.isMDXComponent=!0}}]);