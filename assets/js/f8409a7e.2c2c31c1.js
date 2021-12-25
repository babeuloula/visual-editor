"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[206],{4852:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9645:function(e,t,n){n.d(t,{I:function(){return a}});var o=n(9231),r=n(4151),i=JSON.parse('[{"title":"Album example","titleAlign":"center","content":"<p>Something short and leading about the collection below\u2014its contents, the creator, etc. Make it short and sweet, but not too short so folks don\'t simply skip over it entirely.</p>","buttons":[{"label":"Main call to action","url":"#","type":"primary"},{"label":"Secondary action","url":"#","type":"secondary"}],"backgroundSize":"cover","backgroundRepeat":"no-repeat","backgroundXPosition":"center","backgroundYPosition":"center","padding":5,"_name":"hero","backgroundColor":null,"textColor":"--bs-primary","background":"","backgroundMobile":""},{"icons":[{"title":"First title","content":"<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p><p><br></p>"},{"title":"Second title","content":"<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>"},{"title":"Third title","content":"<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>"}],"backgroundSize":"cover","backgroundRepeat":"no-repeat","backgroundXPosition":"center","backgroundYPosition":"center","padding":5,"_name":"icons-columns"},{"title":"Pricing","titleAlign":"center","content":"<p>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It\u2019s built with default Bootstrap components and utilities with little customization.</p>","prices":[{"title":"Free","price":"0\u20ac","features":"10 users included\\n2 GB of storage\\nEmail support\\nHelp center access","label":"Sign up for free","url":"#","type":"secondary"},{"title":"Pro","price":"15\u20ac","features":"20 users included\\n10 GB of storage\\nPriority email support\\nHelp center access","label":"Get started","url":"#","type":"primary"},{"title":"Enterprise","price":"29\u20ac","features":"30 users included\\n15 GB of storage\\nPhone and email support\\nHelp center access","label":"Contact us","url":"#","type":"primary"}],"backgroundSize":"cover","backgroundRepeat":"no-repeat","backgroundXPosition":"center","backgroundYPosition":"center","padding":5,"_name":"pricing"},{"title":"Lorem ipsum dolor sit amet","titleAlign":"right","content":"<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>","buttons":[{"label":"Call to action","url":"","type":"primary"},{"label":"Call to action","url":"","type":"secondary"}],"backgroundSize":"cover","backgroundRepeat":"no-repeat","backgroundXPosition":"center","backgroundYPosition":"center","padding":3,"_name":"hero","backgroundColor":null}]');n(8113);function a(e){var t=e.className,a=(0,o.useState)("hidden"),l=a[0],u=a[1],s=(0,o.useRef)();return(0,o.useEffect)((function(){Promise.all([n.e(487),n.e(221)]).then(n.bind(n,6053)),s.current.addEventListener("veClose",(function(){return u("hidden")}))}),[s.current]),o.createElement(o.Fragment,null,o.createElement("button",{className:"button button--secondary "+t,onClick:function(){return u((function(e){return void 0===e?"hidden":void 0}))}},"Test the editor"),"undefined"!=typeof document&&r.createPortal(o.createElement("div",{style:{zIndex:9999,position:"relative",isolation:"isolate"}},o.createElement("visual-editor",{hidden:l,name:"content",preview:"https://visual-editor.droapp.com",iconsUrl:"/[name].svg",value:JSON.stringify(i),ref:s})),document.body))}},4083:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var o=n(5339),r=n(7318),i=(n(9231),n(4852)),a=n(9645),l=["components"],u={sidebar_position:1,id:"intro"},s="Getting started",c={unversionedId:"intro",id:"intro",title:"Getting started",description:"The editor uses custom element, you first have to register your page before registering the element. Then you can use it anywhere you want in your HTML document.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/visual-editor/docs/intro",editUrl:"https://github.com/boxraiser/visual-editor/tree/main/docs/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"intro"},sidebar:"tutorialSidebar",next:{title:"Defining your components",permalink:"/visual-editor/docs/component"}},d=[{value:"Registering your page components",id:"registering-your-page-components",children:[],level:2},{value:"Add the editor on your page",id:"add-the-editor-on-your-page",children:[],level:2},{value:"How the data is formatted ?",id:"how-the-data-is-formatted-",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"The editor uses custom element, you first have to register your page before registering the element. Then you can use it anywhere you want in your HTML document."),(0,i.kt)(a.I,{mdxType:"EditorDemo"}),(0,i.kt)("h2",{id:"registering-your-page-components"},"Registering your page components"),(0,i.kt)("p",null,"Start by instantiating the editor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { VisualEditor } from 'visual-editor'\n\nlet editor = new VisualEditor()\n")),(0,i.kt)("p",null,"Then register your page components using the ",(0,i.kt)("inlineCode",{parentName:"p"},"registerComponent")," method that expect 2 parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A unique identifier for the block (string)"),(0,i.kt)("li",{parentName:"ul"},"An option object object (see ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Grafikart/VisualEditor/blob/master/src/types.ts#L24"},"EditorComponentDefinition")," for more information)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { HTMLText, Repeater, Text, Row, Select } from 'visual-editor'\n\n// Register a component / block\neditor.registerComponent('hero', {\n  title: 'Hero',\n  category: 'Banner',\n  fields: [\n    new Text('title', {multiline: false}),\n    new HTMLText('content'),\n    new Repeater('buttons', {\n      title: 'Boutons',\n      addLabel: 'Add a new button',\n      fields: [\n        new Row([\n          new Text('label', { label: 'Libell\xe9', default: 'Call to action' }),\n          new Text('url', { label: 'Lien' }),\n          new Select('type', {\n            default: 'primary',\n            label: 'type',\n            options: [\n              { label: 'Primaire', value: 'primary' },\n              { label: 'Secondaire', value: 'secondary' },\n            ],\n          }),\n        ])\n      ],\n    })\n  ],\n})\n")),(0,i.kt)("p",null,"When all your components are registered you can define the custom element using the ",(0,i.kt)("inlineCode",{parentName:"p"},"defineElement")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"editor.defineElement()\n")),(0,i.kt)("h2",{id:"add-the-editor-on-your-page"},"Add the editor on your page"),(0,i.kt)("p",null,"You now have a custom element ",(0,i.kt)("inlineCode",{parentName:"p"},"visual-editor")," that you can use to display the editor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<visual-editor\n  hidden\n  name="content"\n  preview="http://localhost:3000/preview"\n  iconsUrl="/assets/editor/[name].svg"\n  value="[]"\n></visual-editor>\n')),(0,i.kt)("p",null,"There are multiple attributes :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hidden"),", toggle this attribute to show or hide the editor"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),", name for the field (will be passed to an hidden textarea)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preview"),", endpoint called to render the preview"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"iconsUrl"),", path used to resolve component icons URL (","[name]"," will be replaced by the ID of the component)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," (optional), will set the default value for the editor (expect a JSON array)")),(0,i.kt)("p",null,"The custom element will create a hidden field that will be used to store the data, no need for additional JavaScript you will receive the data when the form is submitted."),(0,i.kt)("h2",{id:"how-the-data-is-formatted-"},"How the data is formatted ?"),(0,i.kt)("p",null,"The data use a simple structure (to be usable with any framework or technology)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},' [\n  {\n    "_name": "hero",\n    "<fieldname>": "<value>",\n    "<fieldname>": "<value>",\n    "<fieldname>": "<value>"\n  },\n  {\n    "_name": "hero",\n    "<fieldname>": "<value>",\n    "<fieldname>": "<value>",\n    "<fieldname>": "<value>"\n  }\n]\n')),(0,i.kt)("p",null,"A real world example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "title": "Album example",\n    "titleAlign": "center",\n    "content": "<p>Something short and leading about the collection below\u2014its contents, the creator, etc. Make it short and sweet, but not too short so folks don\'t simply skip over it entirely.</p>",\n    "buttons": [\n      {\n        "label": "Main call to action",\n        "url": "#",\n        "type": "primary"\n      },\n      {\n        "label": "Secondary action",\n        "url": "#",\n        "type": "secondary"\n      }\n    ],\n    "backgroundSize": "cover",\n    "backgroundRepeat": "no-repeat",\n    "backgroundXPosition": "center",\n    "backgroundYPosition": "center",\n    "padding": 5,\n    "_name": "hero",\n    "backgroundColor": null,\n    "textColor": "--bs-primary",\n    "background": "",\n    "backgroundMobile": ""\n  },\n  {\n    "icons": [\n      {\n        "title": "Pro",\n        "content": "<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>"\n      },\n      {\n        "title": "Pro",\n        "content": "<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>"\n      },\n      {\n        "title": "Pro",\n        "content": "<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>"\n      }\n    ],\n    "backgroundSize": "cover",\n    "backgroundRepeat": "no-repeat",\n    "backgroundXPosition": "center",\n    "backgroundYPosition": "center",\n    "padding": 5,\n    "_name": "icons-columns"\n  },\n  {\n    "title": "Pricing",\n    "titleAlign": "center",\n    "content": "<p>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It\u2019s built with default Bootstrap components and utilities with little customization.</p>",\n    "prices": [\n      {\n        "title": "Free",\n        "price": "0\u20ac",\n        "features": "10 users included\\n2 GB of storage\\nEmail support\\nHelp center access",\n        "label": "Sign up for free",\n        "url": "#",\n        "type": "secondary"\n      },\n      {\n        "title": "Pro",\n        "price": "15\u20ac",\n        "features": "20 users included\\n10 GB of storage\\nPriority email support\\nHelp center access",\n        "label": "Get started",\n        "url": "#",\n        "type": "primary"\n      },\n      {\n        "title": "Enterprise",\n        "price": "29\u20ac",\n        "features": "30 users included\\n15 GB of storage\\nPhone and email support\\nHelp center access",\n        "label": "Contact us",\n        "url": "#",\n        "type": "primary"\n      }\n    ],\n    "backgroundSize": "cover",\n    "backgroundRepeat": "no-repeat",\n    "backgroundXPosition": "center",\n    "backgroundYPosition": "center",\n    "padding": 5,\n    "_name": "pricing"\n  },\n  {\n    "title": "Lorem ipsum dolor sit amet",\n    "titleAlign": "right",\n    "content": "<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>",\n    "buttons": [\n      {\n        "label": "Call to action",\n        "url": "",\n        "type": "primary"\n      },\n      {\n        "label": "Call to action",\n        "url": "",\n        "type": "secondary"\n      }\n    ],\n    "backgroundSize": "cover",\n    "backgroundRepeat": "no-repeat",\n    "backgroundXPosition": "center",\n    "backgroundYPosition": "center",\n    "padding": 3,\n    "_name": "hero",\n    "backgroundColor": null\n  }\n]\n')))}m.isMDXComponent=!0}}]);