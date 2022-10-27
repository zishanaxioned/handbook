"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[5272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,b=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={id:"Dependabot",title:"Dependabot for module updates",sidebar_label:"Dependabot for module updates",tags:["GitHub","GitHub Actions","CI/CD","Dependabot","Maintenance"]},i=void 0,s={unversionedId:"processes/security/Dependabot",id:"processes/security/Dependabot",title:"Dependabot for module updates",description:"Dependabot alleviates that pain by raising a PR against a particular module automatically, so you can spend less time updating dependencies and more time building.",source:"@site/docs/processes/security/dependabot.md",sourceDirName:"processes/security",slug:"/processes/security/Dependabot",permalink:"/handbook/docs/processes/security/Dependabot",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/processes/security/dependabot.md",tags:[{label:"GitHub",permalink:"/handbook/docs/tags/git-hub"},{label:"GitHub Actions",permalink:"/handbook/docs/tags/git-hub-actions"},{label:"CI/CD",permalink:"/handbook/docs/tags/ci-cd"},{label:"Dependabot",permalink:"/handbook/docs/tags/dependabot"},{label:"Maintenance",permalink:"/handbook/docs/tags/maintenance"}],version:"current",frontMatter:{id:"Dependabot",title:"Dependabot for module updates",sidebar_label:"Dependabot for module updates",tags:["GitHub","GitHub Actions","CI/CD","Dependabot","Maintenance"]},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/handbook/docs/category/security"},next:{title:"Security Self-Audit",permalink:"/handbook/docs/processes/security/self-audit"}},l={},u=[{value:"Creating <code>.yml</code> config file for Dependabot",id:"creating-yml-config-file-for-dependabot",level:2},{value:"Steps to config Dependabot:",id:"steps-to-config-dependabot",level:2},{value:"Future enhancement to keep eye out for:",id:"future-enhancement-to-keep-eye-out-for",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Dependabot alleviates that pain by raising a PR against a particular module automatically, so you can spend less time updating dependencies and more time building."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"General notes:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can not select the source branch for your dependency/package branch."),(0,o.kt)("li",{parentName:"ul"},"To run the Dependabot, the ",(0,o.kt)("inlineCode",{parentName:"li"},".yml")," file needs to be in the default branch (main), If you want to run your Dependabot from any other branch, then you have to ",(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch"},"change your default branch")," to required one."),(0,o.kt)("li",{parentName:"ul"},"Specify target branch should be present in the remote branches.")),(0,o.kt)("admonition",{title:"Caution",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Before changing default branch: Make sure your CI/CD flow doesn\u2019t get interrupted")),(0,o.kt)("h2",{id:"creating-yml-config-file-for-dependabot"},"Creating ",(0,o.kt)("inlineCode",{parentName:"h2"},".yml")," config file for Dependabot"),(0,o.kt)("p",null,"Please follow the below link:\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#about-the-dependabotyml-file"},"Configuration options for the dependabot.yml file - GitHub Docs")),(0,o.kt)("h2",{id:"steps-to-config-dependabot"},"Steps to config Dependabot:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to your repository"),(0,o.kt)("li",{parentName:"ul"},"Click on \u201cinsights\u201d from top menus"),(0,o.kt)("li",{parentName:"ul"},"Select \u201cDependency Graph\u201d"),(0,o.kt)("li",{parentName:"ul"},"Click on \u201cDependabot\u201d option from the sub top-menus"),(0,o.kt)("li",{parentName:"ul"},"Click on \u201ccreate config file\u201d"),(0,o.kt)("li",{parentName:"ul"},"Paste the below code into config file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# To get started with Dependabot version updates, you\'ll need to specify which\n# package ecosystems to update and where the package manifests are located.\n# Please see the documentation for all configuration options:\n# https://docs.github.com/github/administering-a-repository/configuration-options-for-dependency-updates\n\nversion: 2\nupdates:\n  - package-ecosystem: "npm" # See documentation for possible values\n    directory: "/" # Location of package manifests\n    schedule:\n      interval: "weekly"\n      day: "monday"\n      time: "05:00"\n      # Use USA Standard Time (UTC +05:00)\n      timezone: "America/New_York"\n    # Allow up to 10 open pull requests for npm dependencies\n    open-pull-requests-limit: 10\n    # to npm package against the `feature-cfm-module-updates` branch\n    target-branch: "feature-cfm-gcloud-dev"\n    # Labels on pull requests for version updates only\n    labels:\n      - "npm dependency"\n    # Add assignees\n    assignees:\n      - "smayuraxioned"\n    # Add reviewers\n    reviewers:\n      - "smayuraxioned"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Commit the changes into the default branch"),(0,o.kt)("li",{parentName:"ul"},"After successfully configuring Dependabot, you will start getting mails about PR for module updates")),(0,o.kt)("h2",{id:"future-enhancement-to-keep-eye-out-for"},"Future enhancement to keep eye out for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Dependabot/feedback/issues/889"},"Question about multiple target branches #889")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Dependabot/Dependabot-core/issues/2721#ref-issue-865405957"},"Select where to create branch from #2721")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Dependabot/Dependabot-core/issues/3546"},"Command to switch target-branch of a specific Pull request #3546"))))}c.isMDXComponent=!0}}]);