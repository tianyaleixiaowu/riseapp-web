(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bd8eb7d"],{"243e":function(t,a,i){},a193:function(t,a,i){"use strict";var e=i("243e"),o=i.n(e);o.a},cba8:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"goods"},[i("options",{ref:"goodsOpt",attrs:{data:t.dataOption},on:{change:t.optchange}}),i("tables",{attrs:{data:t.dataTable,list:t.tableList},on:{change:t.tabchange}}),i("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(a){t.dialogVisible=a}}},[i("span",[t._v(t._s(t.dialogContent))]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(a){t.dialogVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确 定")])],1)])],1)},o=[],n=i("5176"),s=i.n(n),l=(i("386d"),i("3079")),d=i("9404"),c=(i("b383"),i("9cf8")),r={leftMenu:[],rightMenu:[{id:"r2",name:"新增"}]},h={table:[{label:"校区名称",prop:"name"},{label:"联系人姓名",prop:"contactPerson"},{label:"联系人手机",prop:"mobile"},{label:"校区地址",prop:"address"}],edit:[{name:"编辑",id:"t1"},{name:"删除",id:"t2"}]},u=["确认删除该条信息?"],g={name:"schoolList",mixins:[c["a"]],data:function(){return{dataOption:r,dataTable:h,dialogVisible:!1,dialogContent:u[0],tableList:[],loading:!1,currentPage:1,id:""}},components:{Options:l["a"],Tables:d["a"]},mounted:function(){this.search()},methods:{optchange:function(t){return"r1"===t.id?this.search():"r2"===t.id?this.$router.push("/school/listAdd?type=new"):void 0},tabchange:function(t){return this.id=t.data.id,"t1"===t.id?this.$router.push("/school/listAdd?type=edit&id=".concat(this.id)):"t2"===t.id?this.dialogVisible=!0:void 0},sure:function(){var t=this;this.api.delete("/school/".concat(this.id)).then(function(a){t.loading=!1,t.search(),t.$message(a.data)}).catch(function(a){console.log(a),t.$message(a.data.message)}),this.dialogVisible=!1},search:function(){var t=this,a=this.$refs.goodsOpt.getData(),i={size:20,page:this.currentPage-1};s()({},a,i);this.loading=!0,this.api.get("/school").then(function(a){t.loading=!1,t.tableList=a.data}).catch(function(a){console.log(a),t.$message(a.data.message)})},dataInit:function(){}}},p=g,b=(i("a193"),i("2877")),f=Object(b["a"])(p,e,o,!1,null,"53b9d4a2",null);f.options.__file="list.vue";a["default"]=f.exports}}]);
//# sourceMappingURL=chunk-4bd8eb7d.13e53076.js.map