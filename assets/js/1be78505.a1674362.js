"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[514,643],{4852:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,f=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9974:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(5339),a=n(9231),o=n(1506),l={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(670).default,theme:l};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var u=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},p=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=s({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=s({},n,{backgroundColor:null}),a};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var h=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?p(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=s({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?s({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),i(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),i(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=s({},f(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?s({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),i(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,p=t[l],f=n[l][o];if("string"==typeof f?(p=l>0?p:["plain"],s=f):(p=m(p,f.type),f.alias&&(p=m(p,f.alias)),s=f.content),"string"==typeof s){var h=s.split(u),b=h.length;c.push({types:p,content:h[0]});for(var y=1;y<b;y++)d(c),i.push(c=[]),c.push({types:p,content:h[y]})}else l++,t.push(p),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return d(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),b=h;var y=n(4429),v=n(3955),g={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},E=n(6189),k=function(){var e=(0,v.LU)().prism,t=(0,E.Z)().isDarkTheme,n=e.theme||g,r=e.darkTheme||n;return t?r:n},Z="codeBlockContainer_6Rhk",T="codeBlockContent_BfA4",N="codeBlockTitle_iToj",C="codeBlock_Sqxa",_="copyButton_N1o1",S="codeBlockLines_6s35";function O(e){var t,n=e.children,l=e.className,i=e.metastring,s=e.title,u=(0,v.LU)().prism,d=(0,a.useState)(!1),m=d[0],p=d[1],f=(0,a.useState)(!1),h=f[0],g=f[1];(0,a.useEffect)((function(){g(!0)}),[]);var E=(0,v.bc)(i)||s,O=k(),P=Array.isArray(n)?n.join(""):n,I=null!=(t=(0,v.Vo)(l))?t:u.defaultLanguage,w=(0,v.nZ)(P,i,I),x=w.highlightLines,L=w.code,A=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}a.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus()}(L),p(!0),setTimeout((function(){return p(!1)}),2e3)};return a.createElement(b,(0,r.Z)({},c,{key:String(h),theme:O,code:L,language:I}),(function(e){var t=e.className,n=e.style,c=e.tokens,i=e.getLineProps,s=e.getTokenProps;return a.createElement("div",{className:(0,o.Z)(Z,l,v.kM.common.codeBlock)},E&&a.createElement("div",{style:n,className:N},E),a.createElement("div",{className:(0,o.Z)(T,I)},a.createElement("pre",{tabIndex:0,className:(0,o.Z)(t,C,"thin-scrollbar"),style:n},a.createElement("code",{className:S},c.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=i({line:e,key:t});return x.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},s({token:e,key:t})))})),a.createElement("br",null))})))),a.createElement("button",{type:"button","aria-label":(0,y.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,o.Z)(_,"clean-btn"),onClick:A},m?a.createElement(y.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(y.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},1070:function(e,t,n){n.r(t),n.d(t,{default:function(){return oe}});var r=n(9231),a=n(4852),o=n(3846),l=n(9390),c=n(1506),i=n(3955),s=n(4608),u=n(587),d=n(5339);var m=function(e){return r.createElement("svg",(0,d.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(4429),f=n(7318),h=n(8864),b=n(3154),y=n(9975),v="menuLinkText_0DEp",g="hasHref_SnOh",E=n(8113),k=["items"],Z=["item"],T=["item","onItemClick","activePath","level"],N=["item","onItemClick","activePath","level"],C=(0,r.memo)((function(e){var t=e.items,n=(0,f.Z)(e,k);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(_,(0,d.Z)({key:t,item:e},n))})))}));function _(e){var t=e.item,n=(0,f.Z)(e,Z);return"category"===t.type?0===t.items.length?null:r.createElement(S,(0,d.Z)({item:t},n)):r.createElement(O,(0,d.Z)({item:t},n))}function S(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,l=e.level,s=(0,f.Z)(e,T),u=n.items,m=n.label,b=n.collapsible,y=n.className,k=n.href,Z=function(e){var t=(0,E.Z)();return(0,r.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0}),[e,t])}(n),N=(0,i._F)(n,o),_=(0,i.uR)({initialState:function(){return!!b&&(!N&&n.collapsed)}}),S=_.collapsed,O=_.setCollapsed,P=_.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,o=(0,i.D9)(t);(0,r.useEffect)((function(){t&&!o&&n&&a(!1)}),[t,o,n,a])}({isActive:N,collapsed:S,setCollapsed:O}),r.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":S},y)},r.createElement("div",{className:"menu__list-item-collapsible"},r.createElement(h.Z,(0,d.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":b&&!k,"menu__link--active":N},t[v]=!b,t[g]=!!Z,t)),onClick:b?function(e){null==a||a(n),k?O(!1):(e.preventDefault(),P())}:function(){null==a||a(n)},href:b?null!=Z?Z:"#":Z},s),m),k&&b&&r.createElement("button",{"aria-label":(0,p.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:m}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),P()}})),r.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},r.createElement(C,{items:u,tabIndex:S?-1:0,onItemClick:a,activePath:o,level:l+1})))}function O(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=e.level,l=(0,f.Z)(e,N),s=t.href,u=t.label,m=t.className,p=(0,i._F)(t,a);return r.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:u},r.createElement(h.Z,(0,d.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,b.Z)(s)&&{onClick:n?function(){return n(t)}:void 0},l),(0,b.Z)(s)?u:r.createElement("span",null,u,r.createElement(y.Z,null))))}var P="sidebar_4Aos",I="sidebarWithHideableNavbar_FT8L",w="sidebarHidden_tmCV",x="sidebarLogo_Kd3u",L="menu_27tw",A="menuWithAnnouncementBar_sUmi",j="collapseSidebarButton_zvcW",D="collapseSidebarButtonIcon_ZH8Y";function B(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",j),onClick:t},r.createElement(m,{className:D}))}function M(e){var t,n,a=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,d=function(){var e=(0,i.nT)().isActive,t=(0,r.useState)(e),n=t[0],a=t[1];return(0,i.RF)((function(t){var n=t.scrollY;e&&a(0===n)}),[e]),e&&n}(),m=(0,i.LU)(),p=m.navbar.hideOnScroll,f=m.hideableSidebar;return r.createElement("div",{className:(0,c.Z)(P,(t={},t[I]=p,t[w]=s,t))},p&&r.createElement(u.Z,{tabIndex:-1,className:x}),r.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",L,(n={},n[A]=d,n))},r.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},r.createElement(C,{items:o,activePath:a,level:1}))),f&&r.createElement(B,{onClick:l}))}var F=function(e){var t=e.toggleSidebar,n=e.sidebar,a=e.path;return r.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},r.createElement(C,{items:n,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function R(e){return r.createElement(i.Cv,{component:F,props:e})}var H=r.memo(M),W=r.memo(R);function z(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(H,e),a&&r.createElement(W,e))}var V=n(1500),U=n(9974),q=n(4754),K="details_b4bU";function Y(e){var t=Object.assign({},e);return r.createElement(i.PO,(0,d.Z)({},t,{className:(0,c.Z)("alert alert--info",K,t.className)}))}var J=["mdxType","originalType"];var X={head:function(e){var t=r.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var a=e.props,o=(a.mdxType,a.originalType,(0,f.Z)(a,J));return r.createElement(e.props.originalType,o)}return e}(e)}));return r.createElement(V.Z,e,t)},code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(U.Z,e):r.createElement("code",e)},a:function(e){return r.createElement(h.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(n)&&(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:r.createElement(U.Z,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(Y,(0,d.Z)({},e,{summary:n}),a)},h1:(0,q.Z)("h1"),h2:(0,q.Z)("h2"),h3:(0,q.Z)("h3"),h4:(0,q.Z)("h4"),h5:(0,q.Z)("h5"),h6:(0,q.Z)("h6")},G=n(5643),Q="backToTopButton_B-vE",$="backToTopButtonShow_8aHh";function ee(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var te=function(){var e,t=(0,r.useState)(!1),n=t[0],a=t[1],o=(0,r.useRef)(!1),l=ee(),s=l.smoothScrollTop,u=l.cancelScrollToTop;return(0,i.RF)((function(e,t){var n=e.scrollY,r=null==t?void 0:t.scrollY;if(r)if(o.current)o.current=!1;else{var l=n<r;if(l||u(),n<300)a(!1);else if(l){var c=document.documentElement.scrollHeight;n+window.innerHeight<c&&a(!0)}else a(!1)}})),(0,i.SL)((function(e){e.location.hash&&(o.current=!0,a(!1))})),r.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,Q,(e={},e[$]=n,e)),type:"button",onClick:function(){return s()}})},ne=n(7281),re={docPage:"docPage_VAGy",docMainContainer:"docMainContainer_VmPb",docSidebarContainer:"docSidebarContainer_ff9X",docMainContainerEnhanced:"docMainContainerEnhanced_8yF-",docSidebarContainerHidden:"docSidebarContainerHidden_F81b",collapsedDocSidebar:"collapsedDocSidebar_vQEy",expandSidebarButtonIcon:"expandSidebarButtonIcon_bJsu",docItemWrapperEnhanced:"docItemWrapperEnhanced_JJj+"};function ae(e){var t,n,o,s=e.currentDocRoute,u=e.versionMetadata,d=e.children,f=e.sidebarName,h=(0,i.Vq)(),b=u.pluginId,y=u.version,v=(0,r.useState)(!1),g=v[0],E=v[1],k=(0,r.useState)(!1),Z=k[0],T=k[1],N=(0,r.useCallback)((function(){Z&&T(!1),E((function(e){return!e}))}),[Z]);return r.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadata:{version:y,tag:(0,i.os)(b,y)}},r.createElement("div",{className:re.docPage},r.createElement(te,null),h&&r.createElement("aside",{className:(0,c.Z)(re.docSidebarContainer,(t={},t[re.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(re.docSidebarContainer)&&g&&T(!0)}},r.createElement(z,{key:f,sidebar:h,path:s.path,onCollapse:N,isHidden:Z}),Z&&r.createElement("div",{className:re.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},r.createElement(m,{className:re.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,c.Z)(re.docMainContainer,(n={},n[re.docMainContainerEnhanced]=g||!h,n))},r.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",re.docItemWrapper,(o={},o[re.docItemWrapperEnhanced]=g,o))},r.createElement(a.Zo,{components:X},d)))))}var oe=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,l=t.find((function(e){return(0,ne.LX)(a.pathname,e)}));if(!l)return r.createElement(G.default,null);var c=l.sidebar,s=c?n.docsSidebars[c]:null;return r.createElement(r.Fragment,null,r.createElement(V.Z,null,r.createElement("html",{className:n.className})),r.createElement(i.qu,{version:n},r.createElement(i.bT,{sidebar:s},r.createElement(ae,{currentDocRoute:l,versionMetadata:n,sidebarName:c},(0,o.Z)(t,{versionMetadata:n})))))}},4754:function(e,t,n){n.d(t,{N:function(){return m},Z:function(){return p}});var r=n(7318),a=n(5339),o=n(9231),l=n(1506),c=n(4429),i=n(3955),s="anchorWithStickyNavbar_sorw",u="anchorWithHideOnScrollNavbar_sDKK",d=["id"],m=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children))},p=function(e){return"h1"===e?m:(t=e,function(e){var n,m=e.id,p=(0,r.Z)(e,d),f=(0,i.LU)().navbar.hideOnScroll;return m?o.createElement(t,(0,a.Z)({},p,{className:(0,l.Z)("anchor",(n={},n[u]=f,n[s]=!f,n)),id:m}),p.children,o.createElement("a",{className:"hash-link",href:"#"+m,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,p)});var t}},5643:function(e,t,n){n.r(t);var r=n(9231),a=n(9390),o=n(4429);t.default=function(){return r.createElement(a.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},r.createElement("main",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--6 col--offset-3"},r.createElement("h1",{className:"hero__title"},r.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.createElement("p",null,r.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);