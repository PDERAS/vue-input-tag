(function(n){function e(e){for(var a,r,l=e[0],s=e[1],d=e[2],p=0,m=[];p<l.length;p++)r=l[p],o[r]&&m.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(n[a]=s[a]);c&&c(e);while(m.length)m.shift()();return i.push.apply(i,d||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],a=!0,l=1;l<t.length;l++){var s=t[l];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),n=r(r.s=t[0]))}return n}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=a,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)r.d(t,a,function(e){return n[e]}.bind(null,a));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var c=s;i.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var a=t("5da9"),o=t.n(a);o.a},"24b7":function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,"/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\nhtml{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;font-family:sans-serif\n}\nbody{margin:0\n}\narticle,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block\n}\naudio,canvas,progress,video{display:inline-block;vertical-align:baseline\n}\naudio:not([controls]){display:none;height:0\n}\n[hidden],template{display:none\n}\na{background-color:transparent;\n&:active,&:hover{outline:0\n}\n}\nabbr[title]{border-bottom:1px dotted\n}\nb,strong{font-weight:700\n}\ndfn{font-style:italic\n}\nh1{font-size:2em;margin:.67em 0\n}\nmark{background:#ff0;color:#000\n}\nsmall{font-size:80%\n}\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline\n}\nsup{top:-.5em\n}\nsub{bottom:-.25em\n}\nimg{border:0\n}\nsvg:not(:root){overflow:hidden\n}\nfigure{margin:1em 40px\n}\nhr{box-sizing:content-box;height:0\n}\npre{overflow:auto\n}\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em\n}\nbutton,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0\n}\nbutton{overflow:visible\n}\nbutton,select{text-transform:none\n}\nbutton,html input[type=button]{-webkit-appearance:button;cursor:pointer\n}\ninput{\n&[type=reset],&[type=submit]{-webkit-appearance:button;cursor:pointer\n}\n}\nbutton[disabled],html input[disabled]{cursor:default\n}\nbutton::-moz-focus-inner{border:0;padding:0\n}\ninput{line-height:normal;\n&::-moz-focus-inner{border:0;padding:0\n}\n&[type=checkbox],&[type=radio]{box-sizing:border-box;padding:0\n}\n&[type=number]{\n&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{height:auto\n}\n}\n&[type=search]{-webkit-appearance:textfield;box-sizing:content-box;\n&::-webkit-search-cancel-button,&::-webkit-search-decoration{-webkit-appearance:none\n}\n}\n}\nfieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em\n}\nlegend{border:0;padding:0\n}\ntextarea{overflow:auto\n}\noptgroup{font-weight:700\n}\ntable{border-collapse:collapse;border-spacing:0\n}\ntd,th{padding:0\n}",""])},3910:function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,"\nbody{color:#606c71;font-family:Roboto,sans-serif;font-size:16px;line-height:1.5;margin:0;padding:0\n}\na{color:#fff\n}\na:hover{opacity:.8\n}\n.site-footer a{color:#046c43\n}\n.btn{background-color:hsla(0,0%,100%,.08);border:1px solid hsla(0,0%,100%,.2);border-radius:.3rem;color:hsla(0,0%,100%,.7);display:inline-block;margin-bottom:1rem;text-decoration:none;transition:color .2s,background-color .2s,border-color .2s\n}\n.btn+.btn{margin-left:1rem\n}\n.btn:hover{background-color:hsla(0,0%,100%,.2);border-color:hsla(0,0%,100%,.3);color:hsla(0,0%,100%,.8);text-decoration:none\n}\n@media screen and (min-width:64em){\n.btn{padding:.75rem 1rem\n}\n}\n@media screen and (min-width:42em) and (max-width:64em){\n.btn{font-size:.9rem;padding:.6rem .9rem\n}\n}\n@media screen and (max-width:42em){\n.btn{display:block;font-size:.9rem;padding:.75rem;width:100%\n}\n.btn+.btn{margin-left:0;margin-top:1rem\n}\n}\n.page-header{background-color:#046c43;color:#fff;text-align:center\n}\n@media screen and (min-width:64em){\n.page-header{padding:5rem 6rem\n}\n}\n@media screen and (min-width:42em) and (max-width:64em){\n.page-header{padding:3rem 4rem\n}\n}\n@media screen and (max-width:42em){\n.page-header{padding:2rem 1rem\n}\n}\n.project-name{margin-bottom:.1rem;margin-top:0\n}\n@media screen and (min-width:64em){\n.project-name{font-size:3.25rem\n}\n}\n@media screen and (min-width:42em) and (max-width:64em){\n.project-name{font-size:2.25rem\n}\n}\n@media screen and (max-width:42em){\n.project-name{font-size:1.75rem\n}\n}\n.project-tagline{font-weight:400;margin-bottom:2rem;opacity:.7\n}\n@media screen and (min-width:64em){\n.project-tagline{font-size:1.25rem\n}\n}\n@media screen and (min-width:42em) and (max-width:64em){\n.project-tagline{font-size:1.15rem\n}\n}\n@media screen and (max-width:42em){\n.project-tagline{font-size:1rem\n}\n}\n.main-content :first-child{margin-top:0\n}\n.main-content img{max-width:100%\n}\n.main-content h1,.main-content h2,.main-content h3,.main-content h4,.main-content h5,.main-content h6{color:#159957;font-weight:400;margin-bottom:1rem;margin-top:2rem\n}\n.main-content p{margin-bottom:1em\n}\n.main-content code{background-color:#f3f6fa;border-radius:.3rem;color:#383e41;font-family:Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:.9rem;padding:2px 4px\n}\n.main-content pre{background-color:#f3f6fa;border:1px solid #dce6f0;color:#567482;font:1rem Consolas,Liberation Mono,Menlo,Courier,monospace;margin-bottom:1rem;margin-top:0;word-wrap:normal\n}\n.main-content pre>code{background:transparent;border:0;color:#567482;font-size:.9rem;margin:0;padding:0;white-space:pre;word-break:normal\n}\n.main-content .highlight{margin-bottom:1rem\n}\n.main-content .highlight pre{margin-bottom:0;word-break:normal\n}\n.main-content .highlight pre,.main-content pre{border-radius:.3rem;font-size:.9rem;line-height:1.45;overflow:auto;padding:.8rem\n}\n.main-content pre code,.main-content pre tt{background-color:transparent;border:0;display:inline;line-height:inherit;margin:0;max-width:none;overflow:initial;padding:0;word-wrap:normal\n}\n.main-content pre code:after,.main-content pre code:before,.main-content pre tt:after,.main-content pre tt:before{content:normal\n}\n.main-content ol,.main-content ul{margin-top:0\n}\n.main-content blockquote{border-left:.3rem solid #dce6f0;color:#819198;margin-left:0;padding:0 1rem\n}\n.main-content blockquote>:first-child{margin-top:0\n}\n.main-content blockquote>:last-child{margin-bottom:0\n}\n.main-content table{display:block;overflow:auto;width:100%;word-break:normal;word-break:keep-all\n}\n.main-content table th{font-weight:700\n}\n.main-content table td,.main-content table th{border:1px solid #e9ebec;padding:.5rem 1rem\n}\n.main-content dl{padding:0\n}\n.main-content dl dt{font-size:1rem;font-weight:700;margin-top:1rem;padding:0\n}\n.main-content dl dd{margin-bottom:1rem;padding:0\n}\n.main-content hr{background-color:#eff0f1;border:0;height:2px;margin:1rem 0;padding:0\n}\n@media screen and (min-width:64em){\n.main-content{font-size:1.1rem;margin:0 auto;max-width:64rem;padding:2rem 6rem\n}\n}\n@media screen and (min-width:42em) and (max-width:64em){\n.main-content{font-size:1.1rem;padding:2rem 4rem\n}\n}\n@media screen and (max-width:42em){\n.main-content{font-size:1rem;padding:2rem 1rem\n}\n}\n.site-footer{border-top:1px solid #eff0f1;margin-top:2rem;padding-top:2rem\n}\n.site-footer-owner{display:block;font-weight:700\n}\n.site-footer-credits{color:#819198\n}\n@media screen and (min-width:64em){\n.site-footer{font-size:1rem\n}\n}\n@media screen and (min-width:42em) and (max-width:64em){\n.site-footer{font-size:1rem\n}\n}\n@media screen and (max-width:42em){\n.site-footer{font-size:.9rem\n}\n}\n.form-group p.label{display:inline-block;margin-right:2rem;width:100px\n}\n.form-group input{padding:5px\n}\n.playground .vue-input-tag{margin-bottom:20px\n}",""])},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("097d");var a=t("2b0e"),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[n._m(0),t("section",{staticClass:"main-content"},[t("h3",[n._v("Install")]),n._m(1),n._m(2),t("h3",[n._v("Playground")]),t("div",{staticClass:"playground"},[t("div",{staticClass:"form-group"},[t("p",{staticClass:"label"},[n._v("placeholder:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:n.placeholder,expression:"placeholder"}],attrs:{type:"text"},domProps:{value:n.placeholder},on:{input:function(e){e.target.composing||(n.placeholder=e.target.value)}}})]),t("div",{staticClass:"form-group"},[t("p",{staticClass:"label"},[n._v("readOnly:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:n.readOnly,expression:"readOnly"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(n.readOnly)?n._i(n.readOnly,null)>-1:n.readOnly},on:{change:function(e){var t=n.readOnly,a=e.target,o=!!a.checked;if(Array.isArray(t)){var i=null,r=n._i(t,i);a.checked?r<0&&(n.readOnly=t.concat([i])):r>-1&&(n.readOnly=t.slice(0,r).concat(t.slice(r+1)))}else n.readOnly=o}}})]),t("div",{staticClass:"form-group"},[t("p",{staticClass:"label"},[n._v("addTagOnBlur:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:n.addTagOnBlur,expression:"addTagOnBlur"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(n.addTagOnBlur)?n._i(n.addTagOnBlur,null)>-1:n.addTagOnBlur},on:{change:function(e){var t=n.addTagOnBlur,a=e.target,o=!!a.checked;if(Array.isArray(t)){var i=null,r=n._i(t,i);a.checked?r<0&&(n.addTagOnBlur=t.concat([i])):r>-1&&(n.addTagOnBlur=t.slice(0,r).concat(t.slice(r+1)))}else n.addTagOnBlur=o}}})]),t("div",{staticClass:"form-group"},[t("p",{staticClass:"label"},[n._v("allowDuplicates:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:n.allowDuplicates,expression:"allowDuplicates"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(n.allowDuplicates)?n._i(n.allowDuplicates,null)>-1:n.allowDuplicates},on:{change:function(e){var t=n.allowDuplicates,a=e.target,o=!!a.checked;if(Array.isArray(t)){var i=null,r=n._i(t,i);a.checked?r<0&&(n.allowDuplicates=t.concat([i])):r>-1&&(n.allowDuplicates=t.slice(0,r).concat(t.slice(r+1)))}else n.allowDuplicates=o}}})]),t("div",{staticClass:"form-group"},[t("p",{staticClass:"label"},[n._v("limit:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:n.limit,expression:"limit"}],attrs:{type:"number"},domProps:{value:n.limit},on:{input:function(e){e.target.composing||(n.limit=e.target.value)}}})]),t("div",{staticClass:"form-group"},[t("p",{staticClass:"label"},[n._v("validate:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:n.validate,expression:"validate"}],on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,function(n){return n.selected}).map(function(n){var e="_value"in n?n._value:n.value;return e});n.validate=e.target.multiple?t:t[0]}}},[t("option",{attrs:{value:""}},[n._v("No validate")]),t("option",{attrs:{value:"text"}},[n._v("Text")]),t("option",{attrs:{value:"email"}},[n._v("Email")]),t("option",{attrs:{value:"url"}},[n._v("Url")]),t("option",{attrs:{value:"digits"}},[n._v("Digits")]),t("option",{attrs:{value:"isodate"}},[n._v("ISO Date")])])]),t("div",{staticClass:"form-group"},[t("p",{staticClass:"label"},[n._v("tags:")]),t("code",[n._v(n._s(n.tags))])]),t("div",[t("span"),t("h3",[n._v("Preview")]),t("InputTag",{attrs:{limit:n.limit,tags:n.tags,placeholder:n.placeholder,"read-only":n.readOnly,validate:n.validate,"add-tag-on-blur":n.addTagOnBlur},on:{"update:tags":function(e){n.tags=e}}}),t("span"),t("h3",[n._v("HTML")]),t("code",[n._v(" "+n._s(n.getPreviewHTML())+" ")])],1),n._m(3)])])])},i=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"page-header"},[t("h1",{staticClass:"project-name"},[n._v("Vue Input Tag")]),t("p",[n._v("Vue.js 2.0 component, inspired in "),t("a",{attrs:{href:"https://github.com/olahol/react-tagsinput",target:"_blank"}},[n._v("react-tagsinput")])]),t("a",{staticClass:"btn",attrs:{href:"https://github.com/matiastucci/vue-input-tag",target:"_blank"}},[n._v("GitHub")]),t("a",{staticClass:"btn",attrs:{href:"https://www.npmjs.com/package/vue-input-tag",target:"_blank"}},[n._v("NPM")])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[t("code",[n._v("npm install vue-input-tag --save")])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[t("code",[n._v("yarn add vue-input-tag")])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("footer",{staticClass:"site-footer"},[t("span",{staticClass:"site-footer-credits"},[t("a",{attrs:{href:"https://twitter.com/TucciMatias",target:"_blank"}},[n._v("@TucciMatias")]),t("span",[n._v(" - ")]),t("a",{attrs:{href:"https://tucci.me",target:"_blank"}},[n._v("tucci.me")])])])}],r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"vue-input-tag-wrapper",class:{"read-only":n.readOnly,"vue-input-tag-wrapper--active":n.isInputActive},on:{click:function(e){n.focusNewTag()}}},[n._l(n.innerTags,function(e,a){return t("span",{key:a,staticClass:"input-tag"},[t("span",[n._v(n._s(e))]),n.readOnly?n._e():t("a",{staticClass:"remove",on:{click:function(e){e.preventDefault(),e.stopPropagation(),n.remove(a)}}})])}),n.readOnly||n.isLimit?n._e():t("input",{directives:[{name:"model",rawName:"v-model",value:n.newTag,expression:"newTag"}],ref:"inputtag",staticClass:"new-tag",attrs:{placeholder:n.placeholder,type:"text"},domProps:{value:n.newTag},on:{keydown:[function(e){return"button"in e||!n._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete"])?(e.stopPropagation(),n.removeLastTag(e)):null},n.addNew],blur:n.handleInputBlur,focus:n.handleInputFocus,input:function(e){e.target.composing||(n.newTag=e.target.value)}}})],2)},l=[],s=t("6bde"),d=(t("ac6a"),t("456d"),t("8afe")),c=(t("c5f6"),t("3b2b"),{email:new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),url:new RegExp(/^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i),text:new RegExp(/^[a-zA-Z]+$/),digits:new RegExp(/^[\d() \.\:\-\+#]+$/),isodate:new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/)}),p={name:"InputTag",props:{tags:{type:Array,default:function(){return[]}},placeholder:{type:String,default:""},readOnly:{type:Boolean,default:!1},validate:{type:String|Function|Object,default:""},addTagOnKeys:{type:Array,default:function(){return[13,188,9]}},addTagOnBlur:{type:Boolean,default:!1},limit:{type:Number,default:-1},allowDuplicates:{type:Boolean,default:!1}},data:function(){return{newTag:"",innerTags:Object(d["a"])(this.tags),isInputActive:!1}},watch:{tags:function(){this.innerTags=Object(d["a"])(this.tags)}},computed:{isLimit:function(){return this.limit>0&&Number(this.limit)===this.innerTags.length}},methods:{focusNewTag:function(){!this.readOnly&&this.$el.querySelector(".new-tag")&&this.$el.querySelector(".new-tag").focus()},handleInputFocus:function(){this.isInputActive=!0},handleInputBlur:function(n){this.isInputActive=!1,this.addNew(n)},addNew:function(n){n&&(n.stopPropagation(),n.preventDefault());var e=!n||-1!==this.addTagOnKeys.indexOf(n.keyCode),t=n&&"blur"!==n.type;(e||!t&&this.addTagOnBlur)&&!this.isLimit&&this.newTag&&(this.allowDuplicates||-1===this.innerTags.indexOf(this.newTag))&&this.validateIfNeeded(this.newTag)&&(this.innerTags.push(this.newTag),this.newTag="",this.tagChange())},validateIfNeeded:function(n){return""===this.validate||void 0===this.validate||("function"===typeof this.validate?this.validate(n):"string"===typeof this.validate&&Object.keys(c).indexOf(this.validate)>-1?c[this.validate].test(n):"object"!==Object(s["a"])(this.validate)||void 0===this.validate.test||this.validate.test(n))},remove:function(n){this.innerTags.splice(n,1),this.tagChange()},removeLastTag:function(){this.newTag||(this.innerTags.pop(),this.tagChange())},tagChange:function(){this.$emit("update:tags",this.innerTags)}}},m=p,u=(t("8e26"),t("2877")),g=Object(u["a"])(m,r,l,!1,null,null,null);g.options.__file="InputTag.vue";var f=g.exports,h={name:"app",components:{InputTag:f},data:function(){return{readOnly:!1,addTagOnBlur:!1,allowDuplicates:!1,placeholder:"Add Tag",tags:["Jerry","Kramer","Elaine","George"],limit:10,htmlCode:"",validate:""}},methods:{getPreviewHTML:function(){var n="<InputTag";return n+=this.placeholder?' placeholder="'.concat(this.placeholder,'"'):"",n+=this.tags?' :tags.sync="tags"':"",n+=this.readOnly?' :read-only="true"':"",n+=this.addTagOnBlur?' :add-tag-on-blur="true"':"",n+=this.allowDuplicates?' :allow-duplicates="true"':"",n+=this.limit?' :limit="limit"':"",n+=this.validate?' validate="'.concat(this.validate,'"'):"","".concat(n,"/>")}}},b=h,v=(t("034f"),Object(u["a"])(b,o,i,!1,null,null,null));v.options.__file="App.vue";var w=v.exports;t("b72e");a["a"].config.productionTip=!1,new a["a"]({render:function(n){return n(w)}}).$mount("#app")},"5c94":function(n,e,t){var a=t("6900");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=t("499e").default;o("a08cad1e",a,!0,{sourceMap:!1,shadowMode:!1})},"5da9":function(n,e,t){var a=t("c8b5");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var o=t("499e").default;o("7210a84a",a,!0,{sourceMap:!1,shadowMode:!1})},6900:function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,'\n.vue-input-tag-wrapper{-webkit-appearance:textfield;background-color:#fff;border:1px solid #ccc;cursor:text;display:flex;flex-wrap:wrap;overflow:hidden;padding-left:4px;padding-top:4px;text-align:left\n}\n.vue-input-tag-wrapper .input-tag{background-color:#cde69c;border:1px solid #a5d24a;border-radius:2px;color:#638421;display:inline-block;font-size:13px;font-weight:400;margin-bottom:4px;margin-right:4px;padding:3px\n}\n.vue-input-tag-wrapper .input-tag .remove{color:#638421;cursor:pointer;font-weight:700\n}\n.vue-input-tag-wrapper .input-tag .remove:hover{text-decoration:none\n}\n.vue-input-tag-wrapper .input-tag .remove:before{content:" x"\n}\n.vue-input-tag-wrapper .new-tag{background:transparent;border:0;color:#777;flex-grow:1;font-size:13px;font-weight:400;margin-bottom:6px;margin-top:1px;outline:none;padding:4px 4px 4px 0\n}\n.vue-input-tag-wrapper.read-only{cursor:default\n}',""])},"8e26":function(n,e,t){"use strict";var a=t("5c94"),o=t.n(a);o.a},9037:function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,"\n.pl-c{color:#969896\n}\n.pl-c1,.pl-s .pl-v{color:#0086b3\n}\n.pl-e,.pl-en{color:#795da3\n}\n.pl-s .pl-s1,.pl-smi{color:#333\n}\n.pl-ent{color:#63a35c\n}\n.pl-k{color:#a71d5d\n}\n.pl-pds,.pl-s,.pl-s .pl-pse .pl-s1,.pl-sr{color:#183691\n}\n.pl-v{color:#ed6a43\n}\n.pl-id{color:#b52a1d\n}\n.pl-ii{background-color:#b52a1d;color:#f8f8f8\n}\n.pl-sr .pl-cce{color:#63a35c;font-weight:700\n}\n.pl-ml{color:#693a17\n}\n.pl-mh{color:#1d3e81;font-weight:700;\n.pl-en{color:#1d3e81;font-weight:700\n}\n}\n.pl-ms{color:#1d3e81;font-weight:700\n}\n.pl-mq{color:teal\n}\n.pl-mi{color:#333;font-style:italic\n}\n.pl-mb{color:#333;font-weight:700\n}\n.pl-md{background-color:#ffecec;color:#bd2c00\n}\n.pl-mi1{background-color:#eaffea;color:#55a532\n}\n.pl-mdr{color:#795da3;font-weight:700\n}\n.pl-mo{color:#1d3e81\n}",""])},c8b5:function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,"@import url(https://fonts.googleapis.com/css?family=Roboto);",""]),e.i(t("24b7"),""),e.i(t("9037"),""),e.i(t("3910"),""),e.push([n.i,"",""])}});
//# sourceMappingURL=app.27f37db3.js.map