(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73b6a5f5"],{bf22:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[a("a-statistic",{staticClass:"text-success",class:"text-"+t.status,attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,precision:0,groupSeparator:"."}}),a("div",{staticClass:"icon",domProps:{innerHTML:t._s(t.icon)}})],1)},o=[],i={props:{title:{type:String,default:""},value:{type:Number,default:0},prefix:{type:String,default:""},suffix:{type:String,default:""},icon:{type:String,default:""},status:{type:String,default:"success"}},data(){return{}}},r=i,l=a("2877"),n=Object(l["a"])(r,s,o,!1,null,null,null);e["a"]=n.exports},f303:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-row",{attrs:{gutter:24}},t._l(t.stats,(function(t,e){return a("a-col",{key:e,staticClass:"mb-24",attrs:{span:24,lg:12,xl:6}},[a("WidgetCounter",{attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,icon:t.icon,status:t.status}})],1)})),1),a("a-row",{attrs:{gutter:24}},[a("a-col",{staticClass:"mb-24",attrs:{span:12,lg:12,xl:24}},[a("a-card",{staticClass:"card card-body border-0"},[a("div",{staticClass:"mb-4 d-flex justify-content-between align-items-center"},[a("a-input-search",{staticStyle:{width:"300px"},attrs:{placeholder:"Recherche ici"},on:{change:t.onSearch},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),a("a-button",{staticClass:"mx-2",on:{click:function(e){return t.$router.go(-1)}}},[t._v("Retour")])],1),a("a-table",{attrs:{columns:t.columns,"data-source":t.data,pagination:!0},scopedSlots:t._u([{key:"etat",fn:function(e,s){return[0==s.etat?a("span",{staticClass:"text-success"},[t._v("Online")]):t._e(),1==s.etat?a("span",{staticClass:"text-danger"},[t._v("Offline")]):t._e()]}},{key:"operation",fn:function(e,s){return[a("a-row",[a("a-col",{attrs:{span:12}},[a("div",{staticClass:"d-flex justify-content-center"},[1==s.status?a("a-popconfirm",{attrs:{title:"Sûre de desarchiver?"},on:{confirm:function(){return t.Archive(s.key)}}},[a("a-button",{staticClass:"mx-2",attrs:{type:"warning",size:"small"}},[t._v("Desarchiver")])],1):t._e()],1)])],1)]}}])})],1)],1)],1)],1)},o=[],i=a("bf22"),r={components:{WidgetCounter:i["a"]},beforeCreate(){this.form=this.$form.createForm(this,{name:"normal_login"})},data(){return{callback:"http://dshadmin.gescapro.net/api/auth/admin",namApp:"gescapro",token_admin:null,stats:[],width:1e3,columns:[],data:[],data_s:[],value:null,buttonText:"Détail",visible:!1,confirmLoading:!1,villes:null,quartiers:null,row:5,page:1,total_page:0,nom:null,prenom:null,numero:null,ville:null,quartier:null,password:null}},mounted(){this.password=`${this.namApp}@${Math.floor(8999*Math.random()+1e3)}`,this.columns=[{title:"Date de creation",dataIndex:"created_at",key:"created_at",scopedSlots:{customRender:"name"}},{title:"Nom/Prénom collecteur",dataIndex:"nom",key:"nom"},{title:"Numéro de téléphone",dataIndex:"numero",key:"numero"},{title:"Agence",dataIndex:"agence",key:"agence"},{title:"Etat",dataIndex:"etat",key:"etat",scopedSlots:{customRender:"etat"}},{title:"Action",key:"Action",scopedSlots:{customRender:"operation"}}],this.stats=[{title:"Nombre d'agent collecteur",value:0,prefix:"",suffix:"",icon:'<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>\n                            <path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>\n                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>\n                        </svg>'}],this.listeVille(),this.listeCollecteur()},methods:{showAlert(t,e,a){this.$notification[t]({message:e,description:a})},listeVille(){let t=localStorage;this.token_admin=t.getItem("token");let e={headers:{Authorization:this.token_admin}};this.$http.post(this.callback+"/ville/liste",{},e).then(t=>{let e=t.body.data;this.villes=e},t=>{this.showAlert("error","Erreur",t.body.message)})},listeQuartier(t){let e=localStorage;this.token_admin=e.getItem("token");let a={headers:{Authorization:this.token_admin}};this.$http.post(this.callback+"/quartier/liste?all=true",{},a).then(e=>{let a=e.body.data;this.quartiers=[];for(let s=0;s<a.length;s++)a[s].id_ville==t&&this.quartiers.push(a[s])},t=>{this.showAlert("error","Erreur",t.body.message)})},listeCollecteur(){let t=localStorage;this.token_admin=t.getItem("token");let e={headers:{Authorization:this.token_admin}};this.$http.post(this.callback+"/agent_collecteur/list/archived",{},e).then(t=>{let e=t.body.data;console.log(t.body),this.data=[];for(let a=0;a<e.length;a++)this.data.push({key:e[a].id,created_at:new Date(e[a].created_at).toLocaleString(),nom:`${e[a].nom} ${e[a].prenom}`,numero:"(+228) "+e[a].numero,agence:e[a].agc_name,status:e[a].is_active,etat:e[a].is_disconnect}),this.data_s=this.data},t=>{this.showAlert("error","Error",t.body.message)})},next(){let t=localStorage;this.token_admin=t.getItem("token");let e={headers:{Authorization:this.token_admin}};this.page+=1,this.$http.post(`${this.callback}/agent_collecteur/list?row=${this.row}&page=${this.page}`,{},e).then(t=>{let e=t.body.data;console.log(this.data_s),this.data=[];let a=Object.keys(e).map((function(t){return e[t]}));for(let s=0;s<a.length;s++)console.log(a[s]),this.data.push({key:a[s].id,created_at:new Date(a[s].created_at).toLocaleString(),nom:`${a[s].nom} ${a[s].prenom}`,numero:"(+228) "+a[s].numero,agence:a[s].agc_name,status:a[s].is_active,etat:a[s].is_disconnect}),this.data_s=this.data},t=>{this.showAlert("error","Error",t.body.message)})},preview(){let t=localStorage;this.token_admin=t.getItem("token");let e={headers:{Authorization:this.token_admin}};this.page-=1,this.$http.post(`${this.callback}/agent_collecteur/list?row=${this.row}&page=${this.page}`,{},e).then(t=>{let e=t.body.data;console.log(this.data_s),this.data=[];let a=Object.keys(e).map((function(t){return e[t]}));for(let s=0;s<a.length;s++)this.data.push({key:a[s].id,created_at:new Date(a[s].created_at).toLocaleString(),nom:`${a[s].nom} ${a[s].prenom}`,numero:"(+228) "+a[s].numero,agence:a[s].agc_name,status:a[s].is_active,etat:a[s].is_disconnect}),this.data_s=this.data},t=>{this.showAlert("error","Error",t.body.message)})},showModal(){this.visible=!0},block(t){let e=localStorage;this.token_admin=e.getItem("token");let a={headers:{Authorization:this.token_admin}};this.$http.post(`${this.callback}/agent_collecteur/${t}/state/change`,{},a).then(t=>{this.showAlert("success","Success",t.body.message),this.listeCollecteur()},t=>{this.showAlert("error","Erreur",t.body.message)})},Archive(t){let e=localStorage;this.token_admin=e.getItem("token");let a={headers:{Authorization:this.token_admin}};this.$http.post(`${this.callback}/agent_collecteur/${t}/archive-state/change`,{},a).then(t=>{this.showAlert("success","Success",t.body.message),this.listeCollecteur()},t=>{this.showAlert("error","Erreur",t.body.message)})},handleOk(t){t.preventDefault(),this.form.validateFields((t,e)=>{t?console.log("error"):(this.confirmLoading=!0,this.collecteurSubmit(e),setTimeout(()=>{this.listeCollecteur(),this.visible=!1,this.confirmLoading=!1},2e3))})},handleCancel(t){this.visible=!1},collecteurSubmit(t){let e=localStorage;this.token_admin=e.getItem("token");let a={headers:{Authorization:this.token_admin}},s={nom:t.nom,prenom:t.prenom,numero:t.numero,id_quartier:t.quartier,password:this.password};this.$http.post(this.callback+"/agent_collecteur/create",s,a).then(t=>{this.showAlert("success","Success","Agent collecteur creer avec success"),this.form.resetFields()},t=>{this.showAlert("error","Error",t.body.message)})},onSearch(){let t=localStorage;this.token_admin=t.getItem("token");let e={headers:{Authorization:this.token_admin}};this.$http.post(`${this.callback}/agent_collecteur/list?search=${this.value}&row=${this.row}&page=1`,{},e).then(t=>{let e=t.body.data;console.log(t.body),this.data=[];for(let a=0;a<e.length;a++)this.data.push({key:e[a].id,created_at:new Date(e[a].created_at).toLocaleString(),nom:`${e[a].nom} ${e[a].prenom}`,numero:"(+228) "+e[a].numero,agence:e[a].agc_name,status:e[a].is_active}),this.data_s=this.data},t=>{this.showAlert("error","Error",t.body.message)})}}},l=r,n=a("2877"),c=Object(n["a"])(l,s,o,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-73b6a5f5.b4e36153.js.map