(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b923e1e"],{"0ba0":function(e,t,r){},"229d":function(e,t,r){"use strict";r("0ba0")},bc22:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sign-in",staticStyle:{height:"75vh"}},[r("a-row",{attrs:{type:"flex",gutter:24,justify:"space-around",align:"center"}},[r("div",{staticStyle:{width:"100vw",display:"flex","justify-content":"center"}},[r("a-col",{staticClass:"col-form mt-4",attrs:{span:24,md:12,lg:6,xl:6}},[r("a-card",[r("h3",{staticClass:"mb-15 text-center text-primary mt-4"},[e._v("gescapro")]),r("h5",{staticClass:"font-regular text-center text-muted"},[e._v(" Entrez l'adresse email et le mot de passe pour se connecter ")]),r("a-form",{staticClass:"login-form mt-4",attrs:{id:"components-form-demo-normal-login",form:e.form,hideRequiredMark:!0},on:{submit:e.LoginSubmit}},[r("a-form-item",{staticClass:"mb-10",attrs:{label:"Adresse email",colon:!1}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,message:"Please input your email!"}]}],expression:"[\n                'email',\n                {\n                  rules: [\n                    { required: true, message: 'Please input your email!' },\n                  ],\n                },\n              ]"}],attrs:{placeholder:"Adresse email"}})],1),r("a-form-item",{staticClass:"mb-5",attrs:{label:"Mot de passe",colon:!1}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"Please input your password!"}]}],expression:"[\n                'password',\n                {\n                  rules: [\n                    {\n                      required: true,\n                      message: 'Please input your password!',\n                    },\n                  ],\n                },\n              ]"}],attrs:{type:"password",placeholder:"Mot de passe"}})],1),r("a-form-item",[r("a-button",{staticClass:"login-form-button",attrs:{type:"primary",block:"","html-type":"submit"}},[e._v(" CONNEXION ")])],1)],1)],1)],1)],1)])],1)},a=[],o={data(){return{callbackControle:Object({NODE_ENV:"production",VUE_APP_API_BASE_URL:"http://dshadmin.gescapro.net/api/auth/admin",VUE_APP_API_BASE_URL_PROFILE:"http://dsh-collecteur-profile.gwsafrique.com/api",VUE_APP_NAME:"gescapro",VUE_APP_NAME_VIEW:"DSH",BASE_URL:"/"}).VUE_APP_API_BASE_URL_CONTROLE,callback:"http://dshadmin.gescapro.net/api/auth/admin"}},beforeCreate(){this.form=this.$form.createForm(this,{name:"normal_login"})},methods:{ShowAlert(e,t,r){this.$notification[e]({message:t,description:r})},LoginSubmit(e){e.preventDefault(),this.form.validateFields((e,t)=>{e?this.ShowAlert("warning","Erreur","Veillez remplir tous les champs"):this.$http.post(this.callback+"/login",t).then(e=>{let t=localStorage;console.log(e),1==e.body.status?(t.setItem("token",`${e.body.token_type} ${e.body.access_token}`),t.setItem("id",e.body.info.id),t.setItem("username",e.body.info.username),t.setItem("code_secret",e.body.info.code_secret),t.setItem("type",e.body.info.adminAttributes),this.$router.push({name:"Dashboard"})):this.ShowAlert("error","Erreur",e.body.message)},e=>{e&&this.ShowAlert("error","Erreur","Erreur lors de la requete")})})}}},i=o,n=(r("229d"),r("2877")),l=Object(n["a"])(i,s,a,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-4b923e1e.7de8c2eb.js.map