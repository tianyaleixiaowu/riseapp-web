(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30716e8e","chunk-3d43467e"],{"11a33":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"goods"},[e("options",{ref:"goodsOpt",attrs:{data:t.dataOption},on:{change:t.optchange}}),e("tables",{attrs:{data:t.dataTable,list:t.tableList},on:{change:t.tabchange}}),e("div",{staticClass:"demonstration-box"},[e("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageParams.size,layout:"total, prev, pager, next",total:t.pageParams.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(a){t.currentPage=a}}})],1),e("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(a){t.dialogVisible=a}}},[e("span",[t._v(t._s(t.dialogContent))]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.dialogVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确 定")])],1)])],1)},i=[],o=e("5176"),s=e.n(o),l=(e("386d"),e("f499")),r=e.n(l),c=(e("cadf"),e("551c"),e("097d"),e("3079")),d=e("9404"),u=e("b383"),g=e.n(u),f=e("3ebc"),h=e("9cf8"),p={leftMenu:[{id:"1",name:"校区：",placeholder:"请选择校区名称",module:"schoolId",type:"select"},{id:"2",name:"班级：",placeholder:"请选择班级名称",module:"classId",type:"select"}],rightMenu:[]},b={table:[{label:"校区",prop:"schoolName"},{label:"班级",prop:"className"},{label:"带班老师",prop:"teacherName"},{label:"积分",prop:"score"},{label:"备注",prop:"remark"}],edit:[{name:"拒绝",id:"t1"}]},m=["确认拒绝该审批?"],v={name:"integral",mixins:[h["a"]],data:function(){return{dataOption:p,dataTable:JSON.parse(r()(b)),dialogVisible:!1,dialogContent:m[0],tableList:[],loading:!1,currentPage:1,id:"",type:""}},components:{Options:c["a"],Tables:d["a"]},mounted:function(){this.init(),this.search(),this.dropInit()},methods:{init:function(){var t=this.$route.query,a=t.type,e=t.id;if(this.id=e,this.type=a,"detail"===a)return this.dataOption.rightMenu=[{id:"r1",name:"查询"},{id:"r2",name:"取消"}],this.dataTable.edit=[];this.dataOption.rightMenu=[{id:"r1",name:"查询"}],this.dataTable=b},dropInit:function(){var t=this;Object(f["g"])(function(a){var e=t.dataOption.leftMenu;e=e.map(function(t){return"schoolId"===t.module&&(t.options=a),t}),t.dataOption.leftMenu=e})},optchange:function(t){return console.log(t.id+"--id被单击了"),"r1"===t.id?this.search():"r2"===t.id?this.$router.go(-1):void 0},tabchange:function(t){if(console.log(t.id+"--id被单击了"),this.id=t.data.id,"t1"===t.id)return this.dialogVisible=!0},sure:function(){var t=this;this.api.delete("/score/".concat(this.id)).then(function(a){t.loading=!1,t.search(),t.$message(a.data)}).catch(function(a){console.log(a),t.$message(a.data.message)}),this.dialogVisible=!1},search:function(){var t=this,a=this.$refs.goodsOpt.getData(),e={size:20,page:this.currentPage-1},n=s()({},a,e);"detail"===this.type&&(n=s()({},i,{userId:this.id}));var i=g.a.stringify(n||{});this.loading=!0,this.api.get("/score?".concat(i)).then(function(a){t.loading=!1,t.dataInit(a.data),t.setPage(a.data),t.tableList=a.data.list}).catch(function(a){console.log(a),t.$message(a.data.message)})},dataInit:function(t){}}},_=v,y=(e("8d5a"),e("2877")),P=Object(y["a"])(_,n,i,!1,null,"cef81960",null);P.options.__file="integral.vue";a["default"]=P.exports},2960:function(t,a,e){"use strict";var n=e("c461"),i=e.n(n);i.a},"41f3":function(t,a,e){"use strict";var n=e("8fcd"),i=e.n(n);i.a},"8d5a":function(t,a,e){"use strict";var n=e("d963"),i=e.n(n);i.a},"8fcd":function(t,a,e){},9404:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-container",[e("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[e("el-table",{attrs:{data:t.tableList}},[t._l(t.data.table,function(t,a){return e("el-table-column",{key:a,attrs:{prop:t.prop,label:t.label,width:t.width,align:"center"}})}),t.data.edit&&t.data.edit.length>0?e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return t._l(t.data.edit,function(n,i){return e("el-button",{key:i,attrs:{type:"text",size:"small"},on:{click:function(e){t.handle(a.row,n)}}},[t._v(t._s(n.name))])})}}])}):t._e()],2)],1)],1)},i=[],o={name:"table",props:["data","list","loading"],data:function(){return{tableList:[]}},mounted:function(){},methods:{handle:function(t,a){var e={data:t,id:a.id};this.$emit("change",e)}},watch:{list:function(t){this.tableList=t}}},s=o,l=(e("2960"),e("2877")),r=Object(l["a"])(s,n,i,!1,null,"32822608",null);r.options.__file="tables.vue";a["a"]=r.exports},"9cf8":function(t,a,e){"use strict";e("386d");var n={size:20,totalCount:1,totalPage:1},i={data:function(){return{pageParams:n,currentPage:1}},methods:{setPage:function(t){this.pageParams.totalCount=t.totalCount,this.pageParams.totalPage=t.totalPage},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.currentPage=t}},watch:{currentPage:function(){this.search()}}};a["a"]=i},a21f:function(t,a,e){var n=e("584a"),i=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},c461:function(t,a,e){},d26b:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("integral")},i=[],o=e("11a33"),s={name:"listIntegral",data:function(){return{}},components:{Integral:o["default"]}},l=s,r=(e("41f3"),e("2877")),c=Object(r["a"])(l,n,i,!1,null,"d694990a",null);c.options.__file="integral.vue";a["default"]=c.exports},d963:function(t,a,e){},f499:function(t,a,e){t.exports=e("a21f")}}]);
//# sourceMappingURL=chunk-30716e8e.3b41c6cc.js.map