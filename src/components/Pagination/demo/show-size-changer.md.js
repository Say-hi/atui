webpackJsonp([76,194],{457:function(n,a){"use strict";n.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:1,title:{"zh-CN":"\u9875\u7801\u6539\u53d8\u4e0e\u8df3\u8f6c\u529f\u80fd","en-US":"Type"},filename:"src/components/Pagination/demo/show-size-changer.md",id:"src-components-Pagination-demo-show-size-changer"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pagination</span> <span class="token attr-name">:curr-page</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>currPage<span class="token punctuation">"</span></span> <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>total<span class="token punctuation">"</span></span> <span class="token attr-name">:page-size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>15<span class="token punctuation">"</span></span> <span class="token attr-name">:page-size-options</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span> <span class="token attr-name">show-jumper</span> <span class="token attr-name">show-size-changer</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pagination</span><span class="token punctuation">></span></span>'}],preview:'<pagination :curr-page="currPage" :total="total" :page-size="15" :page-size-options="options" show-jumper show-size-changer></pagination>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    pagination: atui.Pagination\n  },\n  data: function() {\n    return {\n      currPage: 3,\n      total: 273,\n      options: [\n        15, 25, 35, 45\n      ]\n    }\n  }\n})"}}});