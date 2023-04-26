"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[9645],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=d(a),k=r,g=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return a?n.createElement(g,i(i({ref:e},s),{},{components:a})):n.createElement(g,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7527:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={id:"php-checklist",title:"PHP Code Review Checklist",sidebar_label:"Code Review Checklist",sidebar_position:2,tags:["PHP code review","PHP checklist","PHP tags","control structures","method arguments"]},i="Checklist",o={unversionedId:"learning/php/php-checklist",id:"learning/php/php-checklist",title:"PHP Code Review Checklist",description:"Sr No. | Check | Description |",source:"@site/docs/learning/php/code-review-checklist.md",sourceDirName:"learning/php",slug:"/learning/php/php-checklist",permalink:"/docs/learning/php/php-checklist",draft:!1,editUrl:"https://github.com/axioned/handbook/tree/main/packages/create-docusaurus/templates/shared/docs/learning/php/code-review-checklist.md",tags:[{label:"PHP code review",permalink:"/docs/tags/php-code-review"},{label:"PHP checklist",permalink:"/docs/tags/php-checklist"},{label:"PHP tags",permalink:"/docs/tags/php-tags"},{label:"control structures",permalink:"/docs/tags/control-structures"},{label:"method arguments",permalink:"/docs/tags/method-arguments"}],version:"current",sidebarPosition:2,frontMatter:{id:"php-checklist",title:"PHP Code Review Checklist",sidebar_label:"Code Review Checklist",sidebar_position:2,tags:["PHP code review","PHP checklist","PHP tags","control structures","method arguments"]},sidebar:"tutorialSidebar",previous:{title:"Training Template",permalink:"/docs/learning/php/php-training"},next:{title:"Project Management",permalink:"/docs/category/project-management"}},p={},d=[],s={toc:d};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"checklist"},"Checklist"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Sr No."),(0,r.kt)("th",{parentName:"tr",align:null},"Check"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Backend Validation")),(0,r.kt)("td",{parentName:"tr",align:null},"Does the validation present in .php file?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Site Scripting")),(0,r.kt)("td",{parentName:"tr",align:null},"Does developer use htmlentities() to prevent their site from cross scripting? ",(0,r.kt)("br",null),(0,r.kt)("br",null),"If you use the less than (<) or greater than (>) signs in your text, the browser might mix them with tags.",(0,r.kt)("br",null),"Character entities are used to display reserved characters in HTML.",(0,r.kt)("br",null),(0,r.kt)("br",null),"For Example -",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"$company = htmlentities(trim($_POST['company']), ENT_COMPAT);"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"$services = htmlentities(trim($_POST['services']), ENT_COMPAT);"),(0,r.kt)("br",null),(0,r.kt)("br",null)," How to check htmlentities() developer has used or not?",(0,r.kt)("ol",null,(0,r.kt)("li",null,"Write ",(0,r.kt)("inlineCode",{parentName:"td"},"<script>")," for alert box in form filed."),(0,r.kt)("li",null,"Submit the form."),(0,r.kt)("li",null,"Submit the form."))," If Alert appear in Backend then it is an issue.",(0,r.kt)("br",null),(0,r.kt)("br",null),"eg. Use below code:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},'<script> function myFunction(){ alert("Hello World!"); } <\/script>'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Files MUST use only <?php and <?= tags.")),(0,r.kt)("td",{parentName:"tr",align:null},"Does the developer use <?php and <?= tags only?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Class names MUST be declared in \u201cStudlyCaps\u201d.")),(0,r.kt)("td",{parentName:"tr",align:null},"For Example -",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"class EmployeeData {}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Class constants MUST be declared in all upper-case with underscore separators.")),(0,r.kt)("td",{parentName:"tr",align:null},"For Example -",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"const VERSION = '1.0';"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"const MATH_PI = '3.14';"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Method names MUST be declared in \u201ccamelCase\u201d.")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"public function employeeReadData() {}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"7"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Avoid fopen wrappers/reliance on fopen wrappers (PHP/SQL)")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"8"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Avoid unsanitized variables (PHP/SQL)")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Ensure all Functions are outside of Loops")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"10"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Create classes out of functions where appropriate")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"11"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implement inheritance")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"12"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"PHP Tags")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"12.1"),(0,r.kt)("td",{parentName:"tr",align:null},"PHP code MUST use the long <?php ?> tags or the short-echo <?= ?> tags. It MUST NOT use the other tag variations."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"13"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Files")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"13.1"),(0,r.kt)("td",{parentName:"tr",align:null},"All PHP files MUST use the Unix LF (line feed) line ending."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"13.2"),(0,r.kt)("td",{parentName:"tr",align:null},"All PHP files MUST end with a single blank line."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"13.3"),(0,r.kt)("td",{parentName:"tr",align:null},"The closing ?> tag MUST be omitted from files containing only PHP."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"14"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Lines")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"14.1"),(0,r.kt)("td",{parentName:"tr",align:null},"There MUST NOT be a hard limit on line length."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"14.2"),(0,r.kt)("td",{parentName:"tr",align:null},"The soft limit on line length MUST be 120 characters; automated style checkers MUST warn but MUST NOT error at the soft limit."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"14.3"),(0,r.kt)("td",{parentName:"tr",align:null},"Lines SHOULD NOT be longer than 80 characters; lines longer than that SHOULD be split into multiple subsequent lines of no more than 80 characters each."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"14.4"),(0,r.kt)("td",{parentName:"tr",align:null},"There MUST NOT be trailing whitespace at the end of non-blank lines."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"14.5"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank lines MAY be added to improve readability and to indicate related blocks of code."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"14.6"),(0,r.kt)("td",{parentName:"tr",align:null},"There MUST NOT be more than one statement per line."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"15"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Indentation")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"15.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Code MUST use an indent of 4 spaces for each indent level, and MUST NOT use tabs for indenting."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"16"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Namespace and Use Declaration")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"16.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Namespace Declaration"),(0,r.kt)("td",{parentName:"tr",align:null},"If present, is there one blank line after the namespace declaration? Are all the use declarations written after the namespace declaration?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"16.2"),(0,r.kt)("td",{parentName:"tr",align:null},"Use Declaration"),(0,r.kt)("td",{parentName:"tr",align:null},"There MUST be one use keyword per declaration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"16.3"),(0,r.kt)("td",{parentName:"tr",align:null},"There MUST be one blank line after the all use block."),(0,r.kt)("td",{parentName:"tr",align:null},"For example:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"<?php namespace Vendor\\Package;use FooClass;use BarClass as Bar;use OtherVendor\\OtherPackage\\BazClass;"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"17"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Extends and Implements")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"17.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Declaration"),(0,r.kt)("td",{parentName:"tr",align:null},"The extends and implements keywords MUST be declared on the same line as the class name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"17.2"),(0,r.kt)("td",{parentName:"tr",align:null},"Class Declaration"),(0,r.kt)("td",{parentName:"tr",align:null},"The opening brace for the class MUST go on its own line; the closing brace for the class MUST go on the next line after the body.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"18"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Properties")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"18.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Visibility MUST be declared on all properties."),(0,r.kt)("td",{parentName:"tr",align:null},"Are the properties defined by prefixing the declaration with the keywords public, protected or private?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"18.2"),(0,r.kt)("td",{parentName:"tr",align:null},"Avoid var keyword for property"),(0,r.kt)("td",{parentName:"tr",align:null},"Has var keyword used to declare a property?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"18.3"),(0,r.kt)("td",{parentName:"tr",align:null},"Avoid more than one property per statement"),(0,r.kt)("td",{parentName:"tr",align:null},"Are there more than one property declared per statement?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"18.4"),(0,r.kt)("td",{parentName:"tr",align:null},"Property name"),(0,r.kt)("td",{parentName:"tr",align:null},"Property names SHOULD NOT be prefixed with a single underscore to indicate protected or private visibility.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"18.5"),(0,r.kt)("td",{parentName:"tr",align:null},"A property declaration looks like the following."),(0,r.kt)("td",{parentName:"tr",align:null},"Example:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"<?php namespace Vendor\\Package; class ClassName { public $foo = null; }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"19"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Methods")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"19.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Visibility declaration on all methods."),(0,r.kt)("td",{parentName:"tr",align:null},"Are the methods defined by prefixing the declaration with the keywords public, protected or private?",(0,r.kt)("br",null),"A method declaration looks like the following. Note the placement of parentheses, commas, spaces, and braces:",(0,r.kt)("br",null),(0,r.kt)("br",null),"Example:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"<?php namespace Vendor\\Package; class   ClassName { public function fooBarBaz($arg1, &$arg2, $arg3 = []) { // method body } }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"19.2"),(0,r.kt)("td",{parentName:"tr",align:null},"Method names"),(0,r.kt)("td",{parentName:"tr",align:null},"Method names SHOULD NOT be prefixed with a single underscore to indicate protected or private visibility.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"19.3"),(0,r.kt)("td",{parentName:"tr",align:null},"Method Declaration"),(0,r.kt)("td",{parentName:"tr",align:null},"Method names MUST NOT be declared with a space after the method name. The opening brace MUST go on its own line, and the closing brace MUST go on the next line following the body.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"19.4"),(0,r.kt)("td",{parentName:"tr",align:null},"Method parenthesis"),(0,r.kt)("td",{parentName:"tr",align:null},"There MUST NOT be a space after the opening parenthesis, and there MUST NOT be a space before the closing parenthesis.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"20"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Method Arguments")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"20.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Arguments Declaration"),(0,r.kt)("td",{parentName:"tr",align:null},"In the argument list, there MUST NOT be a space before each comma, and there MUST be one space after each comma.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"20.2"),(0,r.kt)("td",{parentName:"tr",align:null},"Arguments with default value"),(0,r.kt)("td",{parentName:"tr",align:null},"Method arguments with default values MUST go at the end of the argument list.",(0,r.kt)("br",null),"Example:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"<?php namespace Vendor\\Package; class ClassName { public function foo($arg1, &$arg2, $arg3 = []) { // method body } }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"21"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Abstract, final, and static")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"21.1"),(0,r.kt)("td",{parentName:"tr",align:null},"When present, the abstract and final declarations MUST precede the visibility declaration."),(0,r.kt)("td",{parentName:"tr",align:null},"Are the they defined by prefixing the declaration with the keywords public, protected or private?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"21.2"),(0,r.kt)("td",{parentName:"tr",align:null},"When present, the static declaration MUST come after the visibility declaration."),(0,r.kt)("td",{parentName:"tr",align:null},"Example:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"<?php namespace Vendor\\Package; abstract class ClassName { protected static $foo; abstract protected function zim(); final public static function bar() { // method body } }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"22"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Method and Function Calls")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"22.1"),(0,r.kt)("td",{parentName:"tr",align:null},"When making a method or function call, there MUST NOT be a space between the method or function name and the opening parenthesis, there MUST NOT be a space after the opening parenthesis, and there MUST NOT be a space before the closing parenthesis. In the argument list, there MUST NOT be a space before each comma, and there MUST be one space after each comma."),(0,r.kt)("td",{parentName:"tr",align:null},"Example:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"<?php bar(); $foo->bar($arg1); Foo::bar($arg2, $arg3);"),(0,r.kt)("br",null),"Argument lists MAY be split across multiple lines, where each subsequent line is indented once. When doing so, the first item in the list MUST be on the next line, and there MUST be only one argument per line.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"<?php $foo->bar( $longArgument, $longerArgument, $muchLongerArgument );"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"23"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Control Structures")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"23.1"),(0,r.kt)("td",{parentName:"tr",align:null},"There MUST be one space after the control structure keyword"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"23.2"),(0,r.kt)("td",{parentName:"tr",align:null},"There MUST NOT be a space after the opening parenthesis"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"23.3"),(0,r.kt)("td",{parentName:"tr",align:null},"There MUST NOT be a space before the closing parenthesis"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"23.4"),(0,r.kt)("td",{parentName:"tr",align:null},"There MUST be one space between the closing parenthesis and the opening brace"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"23.5"),(0,r.kt)("td",{parentName:"tr",align:null},"The structure body MUST be indented once"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"23.6"),(0,r.kt)("td",{parentName:"tr",align:null},"The closing brace MUST be on the next line after the body"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"24"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Closures")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"24.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Closures MUST be declared with a space after the function keyword, and a space before and after the use keyword."),(0,r.kt)("td",{parentName:"tr",align:null},"A closure declaration looks like the following. Note the placement of parentheses, commas, spaces, and braces:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"<?php $closureWithArgs = function ($arg1, $arg2) { // body }; $closureWithArgsAndVars = function ($arg1, $arg2) use ($var1, $var2) { // body };"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"24.2"),(0,r.kt)("td",{parentName:"tr",align:null},"The opening brace MUST go on the same line, and the closing brace MUST go on the next line following the body."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"24.3"),(0,r.kt)("td",{parentName:"tr",align:null},"There MUST NOT be a space after the opening parenthesis of the argument list or variable list, and there MUST NOT be a space before the closing parenthesis of the argument list or variable list."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"24.4"),(0,r.kt)("td",{parentName:"tr",align:null},"In the argument list and variable list, there MUST NOT be a space before each comma, and there MUST be one space after each comma."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"24.5"),(0,r.kt)("td",{parentName:"tr",align:null},"Closure arguments with default values MUST go at the end of the argument list."),(0,r.kt)("td",{parentName:"tr",align:null},"A closure declaration looks like the following. Note the placement of parentheses, commas, spaces, and braces:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"<?php $closureWithArgs = function ($arg1, $arg2) { // body }; $closureWithArgsAndVars = function ($arg1, $arg2) use ($var1, $var2) { // body };"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"24.6"),(0,r.kt)("td",{parentName:"tr",align:null},"Argument lists and variable lists MAY be split across multiple lines, where each subsequent line is indented once. When doing so, the first item in the list MUST be on the next line, and there MUST be only one argument or variable per line.",(0,r.kt)("br",null),"When the ending list (whether or arguments or variables) is split across multiple lines, the closing parenthesis and opening brace MUST be placed together on their own line with one space between them."),(0,r.kt)("td",{parentName:"tr",align:null},"The following are examples of closures with and without argument lists and variable lists split across multiple lines.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"<?php $longArgs_noVars = function ( $longArgument, $longerArgument, $muchLongerArgument ) { // body }; $noArgs_longVars = function () use ( $longVar1, $longerVar2, $muchLongerVar3 ) { // body }; $longArgs_longVars = function ( $longArgument, $longerArgument, $muchLongerArgument ) use ( $longVar1, $longerVar2, $muchLongerVar3 ) { // body }; $longArgs_shortVars = function ( $longArgument, $longerArgument, $muchLongerArgument ) use ($var1) { // body }; $shortArgs_longVars = function ($arg) use ( $longVar1, $longerVar2, $muchLongerVar3 ) { // body };"),(0,r.kt)("br",null),"Note that the formatting rules also apply when the closure is used directly in a function or method call as an argument.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"<?php $foo->bar( $arg1, function ($arg2) use ($var1) { // body }, $arg3 );"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"25"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Including Code")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"25.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Anywhere you are unconditionally including a class file, use require_once. Anywhere you are conditionally including a class file (for example, factory methods), use include_once. Either of these will ensure that class files are included only once. They share the same file list, so you don't need to worry about mixing them - a file included with require_once will not be included again by include_once."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"26"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Naming Conventions")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"27"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Global Variables and Functions")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"27.1"),(0,r.kt)("td",{parentName:"tr",align:null},"If your package needs to define global variables, their names should start with a single underscore followed by the package name and another underscore. For example, the PEAR package uses a global variable called $_PEAR_destructor_object_list."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"27.2"),(0,r.kt)("td",{parentName:"tr",align:null},'Global functions should be named using the "studly caps" style (also referred to as "bumpy case" or "camel caps"). In addition, they should have the package name as a prefix, to avoid name collisions between packages. The initial letter of the name (after the prefix) is lowercase, and each letter that starts a new "word" is capitalized.'),(0,r.kt)("td",{parentName:"tr",align:null},"An example:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"XML_RPC_serializeData()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"28"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Classes")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"28.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Classes should be given descriptive names. Avoid using abbreviations where possible. Class names should always begin with an uppercase letter. The PEAR class hierarchy is also reflected in the class name, each level of the hierarchy separated with a single underscore."),(0,r.kt)("td",{parentName:"tr",align:null},"Examples of good class names are:",(0,r.kt)("br",null),"Log",(0,r.kt)("br",null),"Net_Gear",(0,r.kt)("br",null),"HTML_Upload_Error")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"29"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Class Variables and Methods")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"29.1"),(0,r.kt)("td",{parentName:"tr",align:null},'Class variables (a.k.a properties) and methods should be named using the "studly caps" style (also referred to as "bumpy case" or "camel caps").'),(0,r.kt)("td",{parentName:"tr",align:null},'Some examples (these would be ""public"" members):',(0,r.kt)("br",null),"Example:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"$counter, connect()"),(0,r.kt)("br",null),(0,r.kt)("br",null)," Private class members are preceded by a single underscore.",(0,r.kt)("br",null),"Example:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"_sort(), _initTree(), $_status"),(0,r.kt)("br",null),(0,r.kt)("br",null)," Protected class members are not preceded by a single underscore.",(0,r.kt)("br",null),"Example:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"protected $somevar, protected function initTree()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"30"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Constants")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"30.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Constants should always be all-uppercase, with underscores to separate words. Prefix constant names with the uppercase name of the class/package they are used in."),(0,r.kt)("td",{parentName:"tr",align:null},"Example: DB_DATASOURCENAME")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"31"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Arrays")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"31.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Assignments in arrays may be aligned. When splitting array definitions onto several lines, the last value may also have a trailing comma."),(0,r.kt)("td",{parentName:"tr",align:null},"This is valid PHP syntax and helps to keep code diffs minimal:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"<?php $some_array = array( 'foo'  => 'bar', 'spam' => 'ham', );?>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"32"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Strings")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"32.1"),(0,r.kt)("td",{parentName:"tr",align:null},"In general, we use single quotes to enclose literal strings."),(0,r.kt)("td",{parentName:"tr",align:null},"Example:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"$vision = 'Inspiring people to share';"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"32.2"),(0,r.kt)("td",{parentName:"tr",align:null},"If you'd like to insert values from variables, concatenate strings."),(0,r.kt)("td",{parentName:"tr",align:null},"Example:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"$message = 'Hey ' . $name . ', you look ' . $appearance . ' today!';"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"32.3"),(0,r.kt)("td",{parentName:"tr",align:null},"A space must be inserted before and after the dot for better readability."),(0,r.kt)("td",{parentName:"tr",align:null},"Example:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"$vision = 'Inspiring people ' . 'to share.';"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"32.4"),(0,r.kt)("td",{parentName:"tr",align:null},"You may break a string into multiple lines if you use the dot operator. You'll have to indent each following line to mark them as part of the value assignment."),(0,r.kt)("td",{parentName:"tr",align:null},"Example:",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"$vision = 'Inspiring' . people ' . to ' . share';"))))),(0,r.kt)("admonition",{title:"PHP Checklist Google Sheet",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"PHP Checklist reference link can be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1kbpSVE_ysY8Is5qvuWfCDTTTMp_Wtt5js7FBZzqGODk/edit#gid=216983308"},(0,r.kt)("strong",{parentName:"a"},"here")),".")))}m.isMDXComponent=!0}}]);