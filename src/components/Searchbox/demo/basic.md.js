webpackJsonp([69,194],{464:function(a,n){"use strict";a.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Type"},filename:"src/components/Searchbox/demo/basic.md",id:"src-components-Searchbox-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>searchbox</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u8bf7\u8f93\u5165\u5173\u952e\u8bcd\u641c\u7d22<span class="token punctuation">"</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>defaultVal<span class="token punctuation">"</span></span> <span class="token attr-name">:search-list</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>searchList<span class="token punctuation">"</span></span> <span class="token attr-name">text-field</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">@value-change</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>valueChange<span class="token punctuation">"</span></span> <span class="token attr-name">@value-check</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>valueCheck<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>searchbox</span><span class="token punctuation">></span></span>'}],preview:'<searchbox placeholder="\u8bf7\u8f93\u5165\u5173\u952e\u8bcd\u641c\u7d22" :value="defaultVal" :search-list="searchList" text-field="name" @value-change="valueChange" @value-check="valueCheck"></searchbox>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    searchbox: atui.Searchbox\n  },\n  data: function() {\n    return {\n      defaultVal: '\u679c',\n      searchList: [\n        {name: '\u6c34\u679c', value: '1'},\n        {name: '\u82f9\u679c', value: '2'},\n        {name: '\u9999\u8549', value: '3'},\n        {name: '\u4eba\u53c2\u679c', value: '4'},\n        {name: '\u8349\u8393', value: '5'},\n        {name: '\u8292\u679c', value: '6'},\n        {name: '\u5e72\u679c', value: '11'},\n        {name: '\u78a7\u6839\u679c', value: '12'},\n        {name: '\u8170\u679c', value: '13'},\n        {name: '\u6838\u6843', value: '14'},\n        {name: '\u674f\u4ec1', value: '15'},\n        {name: '\u7d20\u6750', value: '21'},\n        {name: '\u9999\u83dc', value: '22'}\n      ]\n    }\n  },\n  methods: {\n    valueChange (val) {\n      console.log(val);\n    },\n    valueCheck (item) {\n      console.log(item);\n    }\n  }\n})"}}});