(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2be00be4"],{"0e91":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"goods"},[i("options",{ref:"goodsOpt",attrs:{data:t.dataOption},on:{change:t.optchange}}),i("tables",{attrs:{data:t.dataTable,list:t.tableList},on:{change:t.tabchange}}),i("div",{staticClass:"demonstration-box"},[i("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageParams.size,layout:"total, prev, pager, next",total:t.pageParams.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1),i("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("span",[t._v(t._s(t.dialogContent))]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确 定")])],1)])],1)},n=[],s=i("5176"),o=i.n(s),d=(i("7f7f"),i("386d"),i("cadf"),i("551c"),i("097d"),i("3079")),c=i("9404"),r=i("b383"),l=i.n(r),u=i("9cf8"),g=i("fc37"),h={leftMenu:[],rightMenu:[{id:"r2",name:"新增"}]},p={table:[{label:"问卷名称",prop:"title"},{label:"时间范围",prop:"time"}],edit:[{name:"问卷统计",id:"t3"},{name:"编辑",id:"t1"},{name:"删除",id:"t2"}]},f=["确认删除该条信息?"],b={name:"question",mixins:[u["a"]],data:function(){return{dataOption:h,dataTable:p,dialogVisible:!1,dialogContent:f[0],tableList:[],loading:!1,currentPage:1,name:"",id:""}},components:{Options:d["a"],Tables:c["a"]},mounted:function(){this.search()},methods:{optchange:function(t){return console.log(t.id+"--id被单击了"),"r1"===t.id?this.search():"r2"===t.id?this.$router.push("/service/questionAdd?type=new"):void 0},tabchange:function(t){return console.log(t.id+"--id被单击了"),this.id=t.data.id,this.name=t.data.title,"t1"===t.id?this.$router.push("/service/questionAdd?type=edit&id=".concat(this.id)):"t2"===t.id?this.dialogVisible=!0:"t3"===t.id?this.$router.push("/service/quesStatistic?type=detail&id=".concat(this.id,"&name=").concat(this.name)):"t4"===t.id?this.$router.push("/service/quesDetail?type=detail&id=".concat(this.id)):void 0},sure:function(){var t=this;this.api.delete("/survey/".concat(this.id)).then(function(e){t.loading=!1,t.search(),t.$message(e.data)}).catch(function(e){console.log(e),t.$message(e.data.message)}),this.dialogVisible=!1},search:function(){var t=this,e=this.$refs.goodsOpt.getData(),i={size:20,page:this.currentPage-1},a=o()({},e,i),n=l.a.stringify(a||{});this.loading=!0,this.api.get("/survey?".concat(n)).then(function(e){t.loading=!1,t.dataInit(e.data),t.setPage(e.data),t.tableList=e.data.list}).catch(function(e){console.log(e),t.$message(e.data.message)})},dataInit:function(t){var e=t.list.map(function(t){t.beginTime&&t.endTime&&(t.time=Object(g["c"])(t.beginTime)+" 至 "+Object(g["c"])(t.endTime))});this.tableList=e}}},m=b,v=(i("32e4"),i("2877")),y=Object(v["a"])(m,a,n,!1,null,"45f05c32",null);y.options.__file="question.vue";e["default"]=y.exports},"32e4":function(t,e,i){"use strict";var a=i("a5d0"),n=i.n(a);n.a},a5d0:function(t,e,i){}}]);
//# sourceMappingURL=chunk-2be00be4.886d1f8b.js.map