(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a5576cf"],{"07b6":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pic upload"},[i("div",{staticClass:"picTop"},[i("span",[e._v(e._s(e.label))]),i("el-container",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[i("div",{staticClass:"el-upload el-upload--text",attrs:{tabindex:"0"}},[i("label",{staticClass:"el-icon-plus avatar-uploader-icon",attrs:{for:"upPhoto"}}),i("input",{staticClass:"el-upload__input",attrs:{type:"file",name:"file",id:"upPhoto"},on:{change:e.fileChange}})]),e.process?i("div",{staticClass:"process"},[e._v("\n                上传进度："+e._s(e.process)+"\n            ")]):e._e()])],1),i("ul",{directives:[{name:"show",rawName:"v-show",value:e.imageList.length>0,expression:"imageList.length > 0"}],staticClass:"list"},e._l(e.imageList,function(t,n){return i("li",{key:n},[i("div",[e._v("链接地址："),i("a",{attrs:{href:t,target:"_blank"}},[e._v(e._s(t))])]),i("div",{on:{click:function(i){e.del(t,n)}}},[e._v("删除")])])}),0)])},a=[],l=(i("28a5"),i("fc37")),r={props:["label","defaultValue"],data:function(){return{imageList:[],loading:!1,process:""}},methods:{fileChange:function(e){var t=this;this.loading=!0,this.process="",Object(l["b"])(e,function(e){t.loading=!1,t.process="",t.imageList.unshift(e.url)},function(e){t.process=e})},del:function(e,t){var i=this.imageList.filter(function(t){return e!==t});this.imageList=i},getData:function(){var e=this.imageList.join(",");return e}},watch:{defaultValue:function(){this.imageList=this.defaultValue.split(",")}}},c=r,s=(i("ae01"),i("2877")),o=Object(s["a"])(c,n,a,!1,null,null,null);o.options.__file="picupload.vue";t["a"]=o.exports},"28a5":function(e,t,i){"use strict";var n=i("aae3"),a=i("cb7c"),l=i("ebd6"),r=i("0390"),c=i("9def"),s=i("5f1b"),o=i("520a"),u=Math.min,d=[].push,p="split",f="length",h="lastIndex",g=!!function(){try{return new RegExp("x","y")}catch(e){}}();i("214f")("split",2,function(e,t,i,v){var m;return m="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[f]||2!="ab"[p](/(?:ab)*/)[f]||4!="."[p](/(.?)(.?)/)[f]||"."[p](/()()/)[f]>1||""[p](/.?/)[f]?function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!n(e))return i.call(a,e,t);var l,r,c,s=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,g=void 0===t?4294967295:t>>>0,v=new RegExp(e.source,u+"g");while(l=o.call(v,a)){if(r=v[h],r>p&&(s.push(a.slice(p,l.index)),l[f]>1&&l.index<a[f]&&d.apply(s,l.slice(1)),c=l[0][f],p=r,s[f]>=g))break;v[h]===l.index&&v[h]++}return p===a[f]?!c&&v.test("")||s.push(""):s.push(a.slice(p)),s[f]>g?s.slice(0,g):s}:"0"[p](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:i.call(this,e,t)}:i,[function(i,n){var a=e(this),l=void 0==i?void 0:i[t];return void 0!==l?l.call(i,a,n):m.call(String(a),i,n)},function(e,t){var n=v(m,e,this,t,m!==i);if(n.done)return n.value;var o=a(e),d=String(this),p=l(o,RegExp),f=o.unicode,h=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(g?"y":"g"),b=new p(g?o:"^(?:"+o.source+")",h),x=void 0===t?4294967295:t>>>0;if(0===x)return[];if(0===d.length)return null===s(b,d)?[d]:[];var _=0,k=0,y=[];while(k<d.length){b.lastIndex=g?k:0;var w,T=s(b,g?d:d.slice(k));if(null===T||(w=u(c(b.lastIndex+(g?0:k)),d.length))===_)k=r(d,k,f);else{if(y.push(d.slice(_,k)),y.length===x)return y;for(var C=1;C<=T.length-1;C++)if(y.push(T[C]),y.length===x)return y;k=_=w}}return y.push(d.slice(_)),y}]})},3846:function(e,t,i){i("9e1e")&&"g"!=/./g.flags&&i("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:i("0bfb")})},5119:function(e,t,i){},"5d6b":function(e,t,i){var n=i("e53d").parseInt,a=i("a1ce").trim,l=i("e692"),r=/^[-+]?0[xX]/;e.exports=8!==n(l+"08")||22!==n(l+"0x16")?function(e,t){var i=a(String(e),3);return n(i,t>>>0||(r.test(i)?16:10))}:n},"67dd":function(e,t,i){},"6b54":function(e,t,i){"use strict";i("3846");var n=i("cb7c"),a=i("0bfb"),l=i("9e1e"),r="toString",c=/./[r],s=function(e){i("2aba")(RegExp.prototype,r,e,!0)};i("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?s(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!l&&e instanceof RegExp?a.call(e):void 0)}):c.name!=r&&s(function(){return c.call(this)})},7445:function(e,t,i){var n=i("63b6"),a=i("5d6b");n(n.G+n.F*(parseInt!=a),{parseInt:a})},"7d4d":function(e,t,i){"use strict";var n=i("5119"),a=i.n(n);a.a},a1ce:function(e,t,i){var n=i("63b6"),a=i("25eb"),l=i("294c"),r=i("e692"),c="["+r+"]",s="​",o=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(e,t,i){var a={},c=l(function(){return!!r[e]()||s[e]()!=s}),o=a[e]=c?t(p):r[e];i&&(a[i]=o),n(n.P+n.F*c,"String",a)},p=d.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(o,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},aae3:function(e,t,i){var n=i("d3f4"),a=i("2d95"),l=i("2b4c")("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[l])?!!t:"RegExp"==a(e))}},abcf:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[i("div",{staticClass:"rise x add"},[i("div",{staticClass:"title"},[e._v(e._s(e.header))]),i("div",{staticClass:"content"},[e._l(e.data,function(t,n){return i("div",{key:n,staticClass:"item"},[i("span",[e._v(e._s(t.name))]),"title"===t.module?i("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}):e._e(),"url"===t.module?i("el-input",{attrs:{placeholder:t.placeholder},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}):e._e(),"beginTime"===t.module?i("el-date-picker",{attrs:{placeholder:t.placeholder,type:"date"},model:{value:e.beginTime,callback:function(t){e.beginTime=t},expression:"beginTime"}}):e._e(),"endTime"===t.module?i("el-date-picker",{attrs:{placeholder:t.placeholder,type:"date"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}}):e._e()],1)}),i("picupload",{ref:"picup",attrs:{label:"活动图片：",defaultValue:e.picDefault}}),i("div",{staticClass:"item"},[i("span",[e._v("活动简介：")]),i("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入活动简介"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1)],2),i("div",{staticClass:"btn-list"},[i("el-button",{staticClass:"btn",on:{click:function(t){e.cancle()}}},[e._v("取消")]),i("el-button",{staticClass:"btn",on:{click:function(t){e.save()}}},[e._v("保存")])],1)])])},a=[],l=(i("b383"),i("fc37")),r=i("07b6"),c=["新建","编辑"],s=[{name:"活动名称：",placeholder:"请输入活动名称",module:"title"},{name:"活动链接：",placeholder:"请输入活动链接",module:"url"},{name:"开始日期：",placeholder:"请选择开始日期",module:"beginTime",type:"date"},{name:"结束日期：",placeholder:"请选择结束日期",module:"endTime",type:"date"}],o={name:"add",data:function(){return{title:"",header:"",id:"",name:"",count:"",price:"",beginTime:"",endTime:"",remark:"",type:"",picDefault:null,data:s,loading:!1}},components:{Picupload:r["a"]},mounted:function(){this.dataInit()},methods:{dataInit:function(){var e=this.$route.query,t=e.type,i=e.id;if(this.type=t,this.id=i,"edit"!==t)return this.header=c[0];this.header=c[1],this.detailAjax()},editInit:function(e){var t=e.data,i=t.url,n=t.title,a=t.beginTime,l=t.endTime,r=t.pics;this.url=i,this.title=n,this.beginTime=a,this.endTime=l,this.picDefault=r},detailAjax:function(){var e=this;this.loading=!0,this.api.get("/activity/".concat(this.id)).then(function(t){e.loading=!1,e.editInit(t)}).catch(function(t){console.log(t),e.loading=!1,e.$message(t.message)})},editAjax:function(){var e=this,t={title:this.title,beginTime:Object(l["a"])(this.beginTime),endTime:Object(l["a"])(this.endTime),remark:this.remark,url:this.url};t.pics=this.$refs.picup.getData();var i=["post","put"],n=i[0];"edit"===this.type&&(t.id=this.id,n=i[1]),this.loading=!0,this.api[n]("/activity",t,"form").then(function(t){e.loading=!1,e.$router.go(-1)}).catch(function(t){e.loading=!1,console.log(t),e.$message(t.message)})},picChange:function(){},save:function(){this.editAjax()},cancle:function(){this.$router.go(-1)}}},u=o,d=(i("7d4d"),i("2877")),p=Object(d["a"])(u,n,a,!1,null,"75095b3b",null);p.options.__file="add.vue";t["default"]=p.exports},ae01:function(e,t,i){"use strict";var n=i("67dd"),a=i.n(n);a.a},b9e9:function(e,t,i){i("7445"),e.exports=i("584a").parseInt},e692:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(e,t,i){e.exports=i("b9e9")},fc37:function(e,t,i){"use strict";i.d(t,"c",function(){return c}),i.d(t,"a",function(){return s}),i.d(t,"b",function(){return o});i("7f7f"),i("6b54"),i("28a5");var n=i("e814"),a=i.n(n),l=(i("cadf"),i("551c"),i("097d"),i("2ef0"),i("bc3a")),r=i.n(l);function c(e){if(!e)return"";var t=new Date(e).getFullYear(),i=new Date(e).getMonth()+1,n=new Date(e).getDate();return i<10&&(i="0"+a()(i)),n<10&&(n="0"+a()(n)),"".concat(t,"-").concat(i,"-").concat(n)}function s(e){if(!e)return"";var t=new Date(e).getTime();return"".concat(t)}function o(e,t,i){if(e){var n=e.target.files[0];if(n){var a=new FormData;a.append("chunk","0"),a.append("chunks","1"),a.append("file",n,n.name);var l={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){var t=(e.loaded/e.total*100|0)+"%";i&&i(t)}};r.a.get("/login/qiniu/token").then(function(e){var i=e.data.data;a.append("token",i),u(a,l,t)})}}}function u(e,t,i){r.a.post("http://upload-z1.qiniup.com/",e,t).then(function(e){var t={message:"ok",url:"http://qiniu.tianyalei.com/".concat(e.data.key)};i&&i(t)}).catch(function(e){console.log(e,"pppp")})}}}]);
//# sourceMappingURL=chunk-5a5576cf.529433c3.js.map