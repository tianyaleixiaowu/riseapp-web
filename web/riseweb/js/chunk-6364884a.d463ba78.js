(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6364884a"],{"67bd":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"goods"},[i("options",{ref:"goodsOpt",attrs:{data:t.dataOption},on:{change:t.optchange}}),i("tables",{attrs:{data:t.dataTable,list:t.tableList},on:{change:t.tabchange}}),i("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(a){t.dialogVisible=a}}},[i("span",[t._v(t._s(t.dialogContent))]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(a){t.dialogVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确 定")])],1)])],1)},o=[],n=i("5176"),s=i.n(n),l=(i("386d"),i("cadf"),i("551c"),i("097d"),i("3079")),c=i("9404"),d=i("b383"),r=i.n(d),u=i("9cf8"),h=i("3ebc"),p={leftMenu:[{name:"校区名称：",placeholder:"请选择校区名称",module:"schoolId",type:"select"}],rightMenu:[{id:"r1",name:"查询"},{id:"r2",name:"新增"}]},g={table:[{label:"校区名称",prop:"schoolName"},{label:"班级名称",prop:"name"},{label:"联系人",prop:"contactPerson"},{label:"联系人手机",prop:"mobile"}],edit:[{name:"编辑",id:"t1"},{name:"删除",id:"t2"}]},b=["确认删除该条信息?"],f={name:"schoolClass",mixins:[u["a"]],data:function(){return{dataOption:p,dataTable:g,dialogVisible:!1,dialogContent:b[0],tableList:[],loading:!1,currentPage:1,id:""}},components:{Options:l["a"],Tables:c["a"]},mounted:function(){this.search(),this.dropInit()},methods:{dropInit:function(){var t=this;Object(h["g"])(function(a){var i=t.dataOption.leftMenu;i=i.map(function(t){return"schoolId"===t.module&&(t.options=a),t}),t.dataOption.leftMenu=i})},optchange:function(t){return console.log(t.id+"--id被单击了"),"r1"===t.id?this.search():"r2"===t.id?this.$router.push("/school/classAdd?type=new"):void 0},tabchange:function(t){return console.log(t.id+"--id被单击了"),this.id=t.data.id,"t1"===t.id?this.$router.push("/school/classAdd?type=edit&id=".concat(this.id)):"t2"===t.id?this.dialogVisible=!0:void 0},sure:function(){var t=this;this.api.delete("/class/".concat(this.id)).then(function(a){t.loading=!1,t.search(),t.$message(a.data)}).catch(function(a){console.log(a),t.$message(a.data.message)}),this.dialogVisible=!1},search:function(){var t=this,a=this.$refs.goodsOpt.getData(),i=s()({},a);this.loading=!0,this.api.get("/class?".concat(r.a.stringify(i))).then(function(a){t.loading=!1,t.tableList=a.data}).catch(function(a){console.log(a),t.$message(a.data.message)})},dataInit:function(){}}},m=f,v=(i("aba5"),i("2877")),O=Object(v["a"])(m,e,o,!1,null,"7f8dcaa2",null);O.options.__file="class.vue";a["default"]=O.exports},aba5:function(t,a,i){"use strict";var e=i("b803"),o=i.n(e);o.a},b803:function(t,a,i){}}]);
//# sourceMappingURL=chunk-6364884a.d463ba78.js.map