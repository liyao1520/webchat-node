(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7fa6660"],{"2ad4":function(e,s,t){"use strict";t("96f8")},3786:function(e,s,t){var r=t("0c6d"),a=r.request;function o(e,s,t){return a({url:"/user",method:"POST",data:{username:e,password:s,sex:t}})}function i(e,s){return a({url:"/login",method:"POST",data:{id:e,password:s}})}e.exports={register:o,login:i}},"935e":function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"register",style:e.registerStyle},[t("div",{staticClass:"form"},[t("h2",{staticClass:"title"},[e._v("用户注册")]),t("el-steps",{attrs:{active:e.active,simple:""}},[t("el-step",{attrs:{title:"填写表单",icon:"el-icon-edit"}}),t("el-step",{attrs:{title:"提交表单",icon:"el-icon-upload"}}),t("el-step",{attrs:{title:"完成注册",icon:"el-icon-success"}})],1),3===this.active?t("div",{staticClass:"success"},[t("div",{staticClass:"tips"},[e._v("恭喜你注册成功!")]),t("div",{staticClass:"info"},[t("div",{staticClass:"username"},[e._v(" 昵称: "),t("span",{staticClass:"content"},[e._v(e._s(e.user.username))])]),t("div",{staticClass:"id"},[e._v(" 账号: "),t("span",{staticClass:"content"},[e._v(e._s(e.user.id))])])]),e._m(0)]):t("div",{staticClass:"main"},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[t("el-form-item",{attrs:{label:"昵称:",prop:"username"}},[t("el-input",{attrs:{placeholder:"起一个好听的昵称~"},model:{value:e.form.username,callback:function(s){e.$set(e.form,"username",s)},expression:"form.username"}})],1),t("el-form-item",{attrs:{label:"密码:",prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"输入密码"},model:{value:e.form.password,callback:function(s){e.$set(e.form,"password",s)},expression:"form.password"}})],1),t("el-form-item",{attrs:{label:"确认密码:",prop:"repassword"}},[t("el-input",{attrs:{type:"password",placeholder:"再次输入密码"},model:{value:e.form.repassword,callback:function(s){e.$set(e.form,"repassword",s)},expression:"form.repassword"}})],1),t("el-form-item",{attrs:{label:"性别:"}},[t("el-radio",{attrs:{label:"男"},model:{value:e.form.sex,callback:function(s){e.$set(e.form,"sex",s)},expression:"form.sex"}},[e._v("男")]),t("el-radio",{attrs:{label:"女"},model:{value:e.form.sex,callback:function(s){e.$set(e.form,"sex",s)},expression:"form.sex"}},[e._v("女")])],1),t("el-form-item",[t("el-button",{staticStyle:{"margin-left":"80px"},attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("提交")]),t("i",{directives:[{name:"show",rawName:"v-show",value:e.loadingIsShow,expression:"loadingIsShow"}],staticClass:"el-icon-loading loading"})],1)],1)],1)],1)])},a=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"msg"},[e._v("请牢记自己的账号"),t("a",{attrs:{href:"/login"}},[e._v("去登陆")])])}],o=t("3786"),i={data:function(){var e=this,s=function(s,t,r){""===t?r(new Error("请再次输入密码")):t!==e.form.password?r(new Error("两次输入密码不一致!")):r()};return{registerStyle:{backgroundImage:"url(".concat(t("dc97"),")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"},form:{username:"",password:"",repassword:"",sex:"男"},active:1,loadingIsShow:!1,rules:{username:[{required:!0,message:"请输入昵称",trigger:"blur"},{min:1,max:10,message:"长度在 1 到 10 个字符"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{required:!0,pattern:/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{8,16}$/,message:"密码至少包含数字、大字母、小写字母、符号至少两种，8-16位长度",trigger:"blur"}],repassword:[{validator:s}]},user:{}}},methods:{submitClick:function(){this.loadingIsShow=!0,this.active=2},submitForm:function(){var e=this;this.$refs["form"].validate((function(s){if(!s)return!1;e.loadingIsShow=!0,e.active=2;var t=e.form,r=t.username,a=t.password,i=t.sex;Object(o["register"])(r,a,i).then((function(s){e.user=s.data,console.log(e.user),e.loadingIsShow=!1,e.active=3})).catch((function(){e.loadingIsShow=!1,e.active=1,alert("服务器开了点小差~")}))}))}}},l=i,n=(t("2ad4"),t("2877")),c=Object(n["a"])(l,r,a,!1,null,"3c78c8e6",null);s["default"]=c.exports},"96f8":function(e,s,t){},dc97:function(e,s,t){e.exports=t.p+"img/bg.e6fccbaf.png"}}]);
//# sourceMappingURL=chunk-b7fa6660.d56480f4.js.map