(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-544c2e12"],{"07b6":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pic upload"},[n("div",{staticClass:"picTop"},[n("span",[e._v(e._s(e.label))]),n("el-container",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[n("div",{staticClass:"el-upload el-upload--text",attrs:{tabindex:"0"}},[n("label",{staticClass:"el-icon-plus avatar-uploader-icon",attrs:{for:"upPhoto"}}),n("input",{staticClass:"el-upload__input",attrs:{type:"file",name:"file",id:"upPhoto"},on:{change:e.fileChange}})]),e.process?n("div",{staticClass:"process"},[e._v("\n                上传进度："+e._s(e.process)+"\n            ")]):e._e()])],1),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.imageList.length>0,expression:"imageList.length > 0"}],staticClass:"list"},e._l(e.imageList,function(t,i){return n("li",{key:i},[n("div",[e._v("链接地址："),n("a",{attrs:{href:t,target:"_blank"}},[e._v(e._s(t))])]),n("div",{on:{click:function(n){e.del(t,i)}}},[e._v("删除")])])}),0)])},a=[],c=(n("28a5"),n("fc37")),o={props:["label","defaultValue"],data:function(){return{imageList:[],loading:!1,process:""}},methods:{fileChange:function(e){var t=this;this.loading=!0,this.process="",Object(c["b"])(e,function(e){t.loading=!1,t.process="",t.imageList.unshift(e.url)},function(e){t.process=e})},del:function(e,t){var n=this.imageList.filter(function(t){return e!==t});this.imageList=n},getData:function(){var e=this.imageList.join(",");return e}},watch:{defaultValue:function(){this.imageList=this.defaultValue.split(",")}}},l=o,s=(n("ae01"),n("2877")),r=Object(s["a"])(l,i,a,!1,null,null,null);r.options.__file="picupload.vue";t["a"]=r.exports},2770:function(e,t,n){"use strict";var i=n("d68b"),a=n.n(i);a.a},"28a5":function(e,t,n){"use strict";var i=n("aae3"),a=n("cb7c"),c=n("ebd6"),o=n("0390"),l=n("9def"),s=n("5f1b"),r=n("520a"),u=Math.min,d=[].push,p="split",f="length",h="lastIndex",m=!!function(){try{return new RegExp("x","y")}catch(e){}}();n("214f")("split",2,function(e,t,n,g){var v;return v="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[f]||2!="ab"[p](/(?:ab)*/)[f]||4!="."[p](/(.?)(.?)/)[f]||"."[p](/()()/)[f]>1||""[p](/.?/)[f]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!i(e))return n.call(a,e,t);var c,o,l,s=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,m=void 0===t?4294967295:t>>>0,g=new RegExp(e.source,u+"g");while(c=r.call(g,a)){if(o=g[h],o>p&&(s.push(a.slice(p,c.index)),c[f]>1&&c.index<a[f]&&d.apply(s,c.slice(1)),l=c[0][f],p=o,s[f]>=m))break;g[h]===c.index&&g[h]++}return p===a[f]?!l&&g.test("")||s.push(""):s.push(a.slice(p)),s[f]>m?s.slice(0,m):s}:"0"[p](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,i){var a=e(this),c=void 0==n?void 0:n[t];return void 0!==c?c.call(n,a,i):v.call(String(a),n,i)},function(e,t){var i=g(v,e,this,t,v!==n);if(i.done)return i.value;var r=a(e),d=String(this),p=c(r,RegExp),f=r.unicode,h=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(m?"y":"g"),b=new p(m?r:"^(?:"+r.source+")",h),x=void 0===t?4294967295:t>>>0;if(0===x)return[];if(0===d.length)return null===s(b,d)?[d]:[];var _=0,k=0,y=[];while(k<d.length){b.lastIndex=m?k:0;var w,T=s(b,m?d:d.slice(k));if(null===T||(w=u(l(b.lastIndex+(m?0:k)),d.length))===_)k=o(d,k,f);else{if(y.push(d.slice(_,k)),y.length===x)return y;for(var C=1;C<=T.length-1;C++)if(y.push(T[C]),y.length===x)return y;k=_=w}}return y.push(d.slice(_)),y}]})},3846:function(e,t,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"5d6b":function(e,t,n){var i=n("e53d").parseInt,a=n("a1ce").trim,c=n("e692"),o=/^[-+]?0[xX]/;e.exports=8!==i(c+"08")||22!==i(c+"0x16")?function(e,t){var n=a(String(e),3);return i(n,t>>>0||(o.test(n)?16:10))}:i},"67dd":function(e,t,n){},"6b54":function(e,t,n){"use strict";n("3846");var i=n("cb7c"),a=n("0bfb"),c=n("9e1e"),o="toString",l=/./[o],s=function(e){n("2aba")(RegExp.prototype,o,e,!0)};n("79e5")(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?s(function(){var e=i(this);return"/".concat(e.source,"/","flags"in e?e.flags:!c&&e instanceof RegExp?a.call(e):void 0)}):l.name!=o&&s(function(){return l.call(this)})},7445:function(e,t,n){var i=n("63b6"),a=n("5d6b");i(i.G+i.F*(parseInt!=a),{parseInt:a})},a1ce:function(e,t,n){var i=n("63b6"),a=n("25eb"),c=n("294c"),o=n("e692"),l="["+o+"]",s="​",r=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),d=function(e,t,n){var a={},l=c(function(){return!!o[e]()||s[e]()!=s}),r=a[e]=l?t(p):o[e];n&&(a[n]=r),i(i.P+i.F*l,"String",a)},p=d.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(r,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},aa7e:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[n("div",{staticClass:"rise x add"},[n("div",{staticClass:"title"},[e._v(e._s(e.title))]),n("div",{staticClass:"content"},[e._l(e.data,function(t,i){return n("div",{key:i,staticClass:"item"},[n("span",[e._v(e._s(t.name))]),"name"===t.module?n("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}):e._e(),"count"===t.module?n("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.count,callback:function(t){e.count=t},expression:"count"}}):e._e(),"price"===t.module?n("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}}):e._e(),"beginTime"===t.module?n("el-date-picker",{attrs:{placeholder:t.placeholder,type:"date"},model:{value:e.beginTime,callback:function(t){e.beginTime=t},expression:"beginTime"}}):e._e(),"endTime"===t.module?n("el-date-picker",{attrs:{placeholder:t.placeholder,type:"date"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}}):e._e()],1)}),n("picupload",{ref:"picup",attrs:{label:"商品图片：",defaultValue:e.picDefault}}),n("div",{staticClass:"item"},[n("span",[e._v("商品简介：")]),n("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入商品简介"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1)],2),n("div",{staticClass:"btn-list"},[n("el-button",{staticClass:"btn",on:{click:function(t){e.cancle()}}},[e._v("取消")]),n("el-button",{staticClass:"btn",on:{click:function(t){e.save()}}},[e._v("保存")])],1)])])},a=[],c=(n("7f7f"),n("b383"),n("fc37")),o=n("07b6"),l=["新建","编辑"],s=[{name:"商品名称：",placeholder:"请输入商品名称",module:"name"},{name:"商品数量：",placeholder:"请输入商品数量",module:"count"},{name:"商品价格：",placeholder:"请输入商品价格",module:"price"},{name:"开始日期：",placeholder:"请选择开始日期",module:"beginTime",type:"date"},{name:"结束日期：",placeholder:"请选择结束日期",module:"endTime",type:"date"}],r={name:"add",data:function(){return{title:"",id:"",name:"",count:"",price:"",beginTime:"",endTime:"",remark:"",type:"",picDefault:null,data:s,loading:!1}},components:{Picupload:o["a"]},mounted:function(){this.dataInit()},methods:{dataInit:function(){var e=this.$route.query,t=e.type,n=e.id;if(this.type=t,this.id=n,"edit"!==t)return this.title=l[0];this.title=l[1],this.detailAjax()},editInit:function(e){var t=e.data,n=t.name,i=t.count,a=t.price,c=t.beginTime,o=t.endTime,l=t.pics;this.name=n,this.count=i,this.price=a,this.beginTime=c,this.endTime=o,this.picDefault=l},detailAjax:function(){var e=this;this.loading=!0,this.api.get("/goods/".concat(this.id)).then(function(t){e.loading=!1,e.editInit(t)}).catch(function(t){console.log(t),e.loading=!1,e.$message(t.message)})},editAjax:function(){var e=this,t={name:this.name,beginTime:Object(c["a"])(this.beginTime),endTime:Object(c["a"])(this.endTime),remark:this.remark,price:this.price,count:this.count};t.pics=this.$refs.picup.getData();var n=["post","put"],i=n[0];"edit"===this.type&&(t.id=this.id,i=n[1]),this.loading=!0,this.api[i]("/goods",t,"form").then(function(t){e.loading=!1,e.$router.go(-1)}).catch(function(t){e.loading=!1,console.log(t),e.$message(t.message)})},save:function(){this.editAjax()},cancle:function(){this.$router.go(-1)}}},u=r,d=(n("2770"),n("2877")),p=Object(d["a"])(u,i,a,!1,null,"3b15ea7c",null);p.options.__file="add.vue";t["default"]=p.exports},aae3:function(e,t,n){var i=n("d3f4"),a=n("2d95"),c=n("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==a(e))}},ae01:function(e,t,n){"use strict";var i=n("67dd"),a=n.n(i);a.a},b9e9:function(e,t,n){n("7445"),e.exports=n("584a").parseInt},d68b:function(e,t,n){},e692:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(e,t,n){e.exports=n("b9e9")},fc37:function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return r});n("7f7f"),n("6b54"),n("28a5");var i=n("e814"),a=n.n(i),c=(n("cadf"),n("551c"),n("097d"),n("2ef0"),n("bc3a")),o=n.n(c);function l(e){if(!e)return"";var t=new Date(e).getFullYear(),n=new Date(e).getMonth()+1,i=new Date(e).getDate();return n<10&&(n="0"+a()(n)),i<10&&(i="0"+a()(i)),"".concat(t,"-").concat(n,"-").concat(i)}function s(e){if(!e)return"";var t=new Date(e).getTime();return"".concat(t)}function r(e,t,n){if(e){var i=e.target.files[0];if(i){var a=new FormData;a.append("chunk","0"),a.append("chunks","1"),a.append("file",i,i.name);var c={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){var t=(e.loaded/e.total*100|0)+"%";n&&n(t)}};o.a.get("/login/qiniu/token").then(function(e){var n=e.data.data;a.append("token",n),u(a,c,t)})}}}function u(e,t,n){o.a.post("http://upload-z1.qiniup.com/",e,t).then(function(e){var t={message:"ok",url:"http://qiniu.tianyalei.com/".concat(e.data.key)};n&&n(t)}).catch(function(e){console.log(e,"pppp")})}}}]);
//# sourceMappingURL=chunk-544c2e12.299f5bd9.js.map