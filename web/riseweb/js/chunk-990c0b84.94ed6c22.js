(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-990c0b84"],{"6ed8":function(t,a,e){},a034:function(t,a,e){"use strict";var i=e("6ed8"),n=e.n(i);n.a},f1c6:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"goods"},[e("options",{ref:"goodsOpt",attrs:{data:t.dataOption},on:{change:t.optchange}}),e("tables",{attrs:{data:t.dataTable,list:t.tableList},on:{change:t.tabchange}}),e("div",{staticClass:"demonstration-box"},[e("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageParams.size,layout:"total, prev, pager, next",total:t.pageParams.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(a){t.currentPage=a}}})],1),e("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(a){t.dialogVisible=a}}},[e("span",[t._v(t._s(t.dialogContent))]),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.dialogVisible=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确 定")])],1)])],1)},n=[],s=e("5176"),o=e.n(s),c=(e("386d"),e("cadf"),e("551c"),e("097d"),e("3079")),d=e("9404"),l=e("b383"),r=e.n(l),g=e("9cf8"),u=e("fc37"),h={leftMenu:[],rightMenu:[{id:"r2",name:"新增"}]},p={table:[{label:"活动名称",prop:"title"},{label:"活动链接",prop:"url"},{label:"时间范围",prop:"time"}],edit:[{name:"编辑",id:"t1"},{name:"删除",id:"t2"}]},b=["确认删除该条信息?"],f={name:"campaigns",mixins:[g["a"]],data:function(){return{dataOption:h,dataTable:p,dialogVisible:!1,dialogContent:b[0],tableList:[],loading:!1,currentPage:1,id:""}},components:{Options:c["a"],Tables:d["a"]},mounted:function(){this.search()},activated:function(){this.search()},methods:{optchange:function(t){return"r1"===t.id?this.search():"r2"===t.id?this.$router.push("campaignsAdd?type=new"):void 0},tabchange:function(t){return this.id=t.data.id,"t1"===t.id?this.$router.push("campaignsAdd?type=edit&id=".concat(this.id)):"t2"===t.id?this.dialogVisible=!0:void 0},sure:function(){var t=this;this.api.delete("/activity/".concat(this.id)).then(function(a){t.loading=!1,t.search(),t.$message(a.data)}).catch(function(a){console.log(a),t.$message(a.data.message)}),this.dialogVisible=!1},search:function(){var t=this,a=this.$refs.goodsOpt.getData(),e={size:20,page:this.currentPage-1},i=o()({},a,e),n=r.a.stringify(i||{});this.loading=!0,this.api.get("/activity?".concat(n)).then(function(a){t.loading=!1,t.dataInit(a.data),t.setPage(a.data),t.tableList=a.data.list}).catch(function(a){console.log(a),t.$message(a.data.message)})},dataInit:function(t){var a=t.list.map(function(t){t.beginTime&&t.endTime&&(t.time=Object(u["c"])(t.beginTime)+" 至 "+Object(u["c"])(t.endTime))});this.tableList=a}}},m=f,v=(e("a034"),e("2877")),C=Object(v["a"])(m,i,n,!1,null,"2479428a",null);C.options.__file="campaigns.vue";a["default"]=C.exports}}]);
//# sourceMappingURL=chunk-990c0b84.94ed6c22.js.map