"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6103],{20895:function(e,t,a){a.d(t,{dK:function(){return i},_k:function(){return s},vc:function(){return o.a},rx:function(){return c},qo:function(){return m},Hk:function(){return u},Iz:function(){return d}});var n=a(31336),r=a.n(n),l=a(813),o=a.n(l);a(30892)(r()),a(64332)(r()),a(74182)(r());var i=["it","en"],s=!1,c="2e7cf2b5",m=8,u=50,d={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},46165:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(63366),r=a(67294),l=a(86010),o=a(47629),i=a(36742),s="sidebar_2ahu",c="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",p=a(24973);function v(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var f=["sidebar","toc","children"];var h=function(e){var t=e.sidebar,a=e.toc,i=e.children,s=(0,n.Z)(e,f),c=t&&t.items.length>0;return r.createElement(o.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},c&&r.createElement("aside",{className:"col col--3"},r.createElement(v,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&r.createElement("div",{className:"col col--2"},a))))}},94884:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(67294),r=a(86010),l=a(3905),o=a(24973),i=a(36742),s=a(44996),c=a(63773),m=a(96845),u=a(86146),d="blogPostTitle_GeHD",g="blogPostData_291c",p="blogPostDetailsFull_3kfx",v=a(87682),f="image_1yU8";var h=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,o=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},o&&n.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:f,src:o,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(i.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},_="authorCol_1R69";function E(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",_),key:t},n.createElement(h,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var b=function(e){var t,a,f,h,_=(f=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return f(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=(0,s.C)().withBaseUrl,N=e.children,k=e.frontMatter,Z=e.assets,y=e.metadata,P=e.truncated,w=e.isBlogPostPage,L=void 0!==w&&w,T=y.date,C=y.formattedDate,x=y.permalink,I=y.tags,H=y.readingTime,M=y.title,U=y.editUrl,A=y.authors,B=null!=(t=Z.image)?t:k.image,R=!L&&P,S=I.length>0;return n.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(h=L?"h1":"h2",n.createElement("header",null,n.createElement(h,{className:d,itemProp:"headline"},L?M:n.createElement(i.Z,{itemProp:"url",to:x},M)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:T,itemProp:"datePublished"},C),void 0!==H&&n.createElement(n.Fragment,null," \xb7 ",_(H))),n.createElement(E,{authors:A,assets:Z}))),B&&n.createElement("meta",{itemProp:"image",content:b(B,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},N)),(S||P)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[p]=L,a))},S&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":R})},n.createElement(v.Z,{tags:I})),L&&U&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:U})),R&&n.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":S})},n.createElement(i.Z,{to:y.permalink,"aria-label":"Read more about "+M},n.createElement("b",null,n.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},84147:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(67294),r=a(41217),l=a(46165),o=a(94884),i=a(24973),s=a(36742);var c=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(63773),u=a(94346);var d=function(e){var t,a=e.content,i=e.sidebar,s=a.frontMatter,d=a.assets,g=a.metadata,p=g.title,v=g.description,f=g.nextItem,h=g.prevItem,_=g.date,E=g.tags,b=g.authors,N=s.hide_table_of_contents,k=s.keywords,Z=s.toc_min_heading_level,y=s.toc_max_heading_level,P=null!=(t=d.image)?t:s.image;return n.createElement(l.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:i,toc:!N&&a.toc&&a.toc.length>0?n.createElement(u.Z,{toc:a.toc,minHeadingLevel:Z,maxHeadingLevel:y}):void 0},n.createElement(r.Z,{title:p,description:v,keywords:k,image:P},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:_}),b.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:b.map((function(e){return e.url})).filter(Boolean).join(",")}),E.length>0&&n.createElement("meta",{property:"article:tag",content:E.map((function(e){return e.label})).join(",")})),n.createElement(o.Z,{frontMatter:s,assets:d,metadata:g,isBlogPostPage:!0},n.createElement(a,null)),(f||h)&&n.createElement(c,{nextItem:f,prevItem:h}))}},86146:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(67294),r=a(24973),l=a(87462),o=a(63366),i=a(86010),s="iconEdit_2_ui",c=["className"],m=function(e){var t=e.className,a=(0,o.Z)(e,c);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(63773);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},25002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(87462),r=a(63366),l=a(67294),o=a(63773),i=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,g=void 0===d?void 0:d,p=e.minHeadingLevel,v=e.maxHeadingLevel,f=(0,r.Z)(e,i),h=(0,o.LU)(),_=null!=p?p:h.tableOfContents.minHeadingLevel,E=null!=v?v:h.tableOfContents.maxHeadingLevel,b=(0,o.DA)({toc:t,minHeadingLevel:_,maxHeadingLevel:E}),N=(0,l.useMemo)((function(){if(u&&g)return{linkClassName:u,linkActiveClassName:g,minHeadingLevel:_,maxHeadingLevel:E}}),[u,g,_,E]);return(0,o.Si)(N),l.createElement(s,(0,n.Z)({toc:b,className:c,linkClassName:u},f))}},37211:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=a(86010),l=a(36742),o="tag_1Okp",i="tagRegular_3MiF",s="tagWithCount_1HU1";var c=function(e){var t,a=e.permalink,c=e.name,m=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(o,(t={},t[i]=!m,t[s]=m,t))},c,m&&n.createElement("span",null,m))}},87682:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=a(86010),l=a(24973),o=a(37211),i="tags_2ga9",s="tag_11ep";function c(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(i,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:s},n.createElement(o.Z,{name:t,permalink:a}))}))))}},546:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(87462),r=a(63366),l=a(67294),o=a(86010),i=a(36742),s=a(63773),c=a(44996),m="footerLogoLink_qW4Z",u=a(98465),d=["to","href","label","prependBaseUrlToHref"];function g(e){var t=e.to,a=e.href,o=e.label,s=e.prependBaseUrlToHref,m=(0,r.Z)(e,d),u=(0,c.Z)(t),g=(0,c.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(i.Z,(0,n.Z)({className:"footer__link-item"},a?{href:s?g:a}:{to:u},m),o)}var p=function(e){var t=e.sources,a=e.alt;return l.createElement(u.Z,{className:"footer__logo",alt:a,sources:t})};var v=function(){var e=(0,s.LU)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,u=t.logo,d=void 0===u?{}:u,v={light:(0,c.Z)(d.src),dark:(0,c.Z)(d.srcDark||d.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(g,e))}))):null)}))),(d||a)&&l.createElement("div",{className:"footer__bottom text--center"},d&&(d.src||d.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},d.href?l.createElement(i.Z,{href:d.href,className:m},l.createElement(p,{alt:d.alt,sources:v})):l.createElement(p,{alt:d.alt,sources:v})),a?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}},94346:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),r=a(63366),l=a(67294),o=a(86010),i=a(25002),s="tableOfContents_rbnR",c=a(51721),m=function(e){function t(){return e.apply(this,arguments)||this}(0,c.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){(window.adsbygoogle=window.adsbygoogle||[]).push({})},a.render=function(){return l.createElement("div",{className:"verticalDisplayAd",key:Math.random()},l.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-3253384067482467","data-ad-slot":"2898075240","data-ad-format":"auto","data-full-width-responsive":"true"}))},t}(l.Component),u=["className"];var d=function(e){var t=e.className,a=(0,r.Z)(e,u);return l.createElement("div",{className:(0,o.Z)(s,"thin-scrollbar",t)},l.createElement(i.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})),l.createElement(m,null))}}}]);