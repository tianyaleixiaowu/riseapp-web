(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-165b692c","chunk-43b660d9"],{"11a33":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"goods"},[a("options",{ref:"goodsOpt",attrs:{data:t.dataOption},on:{change:t.optchange}}),a("tables",{attrs:{data:t.dataTable,list:t.tableList},on:{change:t.tabchange}}),a("div",{staticClass:"demonstration-box"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageParams.size,layout:"total, prev, pager, next",total:t.pageParams.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1),a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("span",[t._v(t._s(t.dialogContent))]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确 定")])],1)])],1)},i=[],o=a("5176"),s=a.n(o),l=(a("386d"),a("f499")),r=a.n(l),c=a("3079"),d=a("9404"),u=a("b383"),g=a.n(u),f=a("3ebc"),h=a("9cf8"),p={leftMenu:[{id:"1",name:"校区：",placeholder:"请选择校区名称",module:"schoolId",type:"select"},{id:"2",name:"班级：",placeholder:"请选择班级名称",module:"classId",type:"select"}],rightMenu:[]},b={table:[{label:"校区",prop:"schoolName"},{label:"班级",prop:"className"},{label:"带班老师",prop:"teacherName"},{label:"学员",prop:"userName"},{label:"积分",prop:"score"},{label:"备注",prop:"remark"}],edit:[{name:"拒绝",id:"t1"}]},m=["确认拒绝该审批?"],v={name:"integral",mixins:[h["a"]],data:function(){return{dataOption:p,dataTable:JSON.parse(r()(b)),dialogVisible:!1,dialogContent:m[0],tableList:[],loading:!1,currentPage:1,id:"",type:""}},components:{Options:c["a"],Tables:d["a"]},mounted:function(){this.init(),this.search(),this.dropInit()},methods:{init:function(){var t=this.$route.query,e=t.type,a=t.id;if(this.id=a,this.type=e,"detail"===e)return this.dataOption.rightMenu=[{id:"r1",name:"查询"},{id:"r2",name:"取消"}],this.dataTable.edit=[];this.dataOption.rightMenu=[{id:"r1",name:"查询"}],this.dataTable=b},dropInit:function(){var t=this;Object(f["h"])(function(e){var a=t.dataOption.leftMenu;a=a.map(function(t){return"schoolId"===t.module&&(t.options=e),t}),t.dataOption.leftMenu=a})},optchange:function(t){return console.log(t.id+"--id被单击了"),"r1"===t.id?this.search():"r2"===t.id?this.$router.go(-1):void 0},tabchange:function(t){if(console.log(t.id+"--id被单击了"),this.id=t.data.id,"t1"===t.id)return this.dialogVisible=!0},sure:function(){var t=this;this.api.delete("/score/".concat(this.id)).then(function(e){t.loading=!1,t.search(),t.$message(e.data)}).catch(function(e){console.log(e),t.$message(e.data.message)}),this.dialogVisible=!1},search:function(){var t=this,e=this.$refs.goodsOpt.getData(),a={size:20,page:this.currentPage-1},n=s()({},e,a);"detail"===this.type&&(n=s()({},i,{userId:this.id}));var i=g.a.stringify(n||{});this.loading=!0,this.api.get("/score?".concat(i)).then(function(e){t.loading=!1,t.dataInit(e.data),t.setPage(e.data),t.tableList=e.data.list}).catch(function(e){console.log(e),t.$message(e.data.message)})},dataInit:function(t){}}},_=v,y=(a("ee7e"),a("2877")),P=Object(y["a"])(_,n,i,!1,null,"1b9ff622",null);P.options.__file="integral.vue";e["default"]=P.exports},2960:function(t,e,a){"use strict";var n=a("c461"),i=a.n(n);i.a},"41f3":function(t,e,a){"use strict";var n=a("8fcd"),i=a.n(n);i.a},"745d":function(t,e,a){},"8fcd":function(t,e,a){},9404:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("el-table",{attrs:{data:t.tableList}},[t._l(t.data.table,function(t,e){return a("el-table-column",{key:e,attrs:{prop:t.prop,label:t.label,width:t.width,align:"center"}})}),t.data.edit&&t.data.edit.length>0?a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(t.data.edit,function(n,i){return a("el-button",{key:i,attrs:{type:"text",size:"small"},on:{click:function(a){t.handle(e.row,n)}}},[t._v(t._s(n.name))])})}}])}):t._e()],2)],1)],1)},i=[],o={name:"table",props:["data","list","loading"],data:function(){return{tableList:[]}},mounted:function(){},methods:{handle:function(t,e){var a={data:t,id:e.id};this.$emit("change",a)}},watch:{list:function(t){this.tableList=t}}},s=o,l=(a("2960"),a("2877")),r=Object(l["a"])(s,n,i,!1,null,"32822608",null);r.options.__file="tables.vue";e["a"]=r.exports},"9cf8":function(t,e,a){"use strict";a("386d");var n={size:20,totalCount:1,totalPage:1},i={data:function(){return{pageParams:n,currentPage:1}},methods:{setPage:function(t){this.pageParams.totalCount=t.totalCount,this.pageParams.totalPage=t.totalPage},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.currentPage=t}},watch:{currentPage:function(){this.search()}}};e["a"]=i},a21f:function(t,e,a){var n=a("584a"),i=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},c461:function(t,e,a){},d26b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("integral")},i=[],o=a("11a33"),s={name:"listIntegral",data:function(){return{}},components:{Integral:o["default"]}},l=s,r=(a("41f3"),a("2877")),c=Object(r["a"])(l,n,i,!1,null,"d694990a",null);c.options.__file="integral.vue";e["default"]=c.exports},ee7e:function(t,e,a){"use strict";var n=a("745d"),i=a.n(n);i.a},f499:function(t,e,a){t.exports=a("a21f")}}]);
//# sourceMappingURL=chunk-165b692c.bb80a606.js.map