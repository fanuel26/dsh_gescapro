(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73b510c7"],{ab23:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-row",{attrs:{gutter:24}},t._l(t.stats,(function(t,e){return a("a-col",{key:e,staticClass:"mb-24",attrs:{span:24,lg:12,xl:6}},[a("WidgetCounter",{attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,icon:t.icon,status:t.status}})],1)})),1),a("a-row",{attrs:{gutter:24}},[a("a-col",{staticClass:"mb-24",attrs:{span:12,lg:12,xl:24}},[a("a-card",{staticClass:"card card-body border-0"},[a("div",{staticClass:"my-2"},[a("a-input-search",{staticStyle:{width:"300px"},attrs:{placeholder:"Recherche ici"},on:{change:t.onSearch},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),a("a-table",{attrs:{columns:t.columns,"data-source":t.data},scopedSlots:t._u([{key:"operation",fn:function(e,s){return[a("router-link",{attrs:{to:{name:"Pret_detail",params:{id:s.key}}}},[a("a-button",{attrs:{type:"primary",size:"small"}},[t._v("Détail")])],1)]}}])})],1)],1)],1)],1)},i=[],n=a("bf22");const r=[{title:"Tous les clients epargnes",value:0,prefix:"",suffix:"",icon:'<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t<path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>\n\t\t\t\t\t\t\t<path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>\n\t\t\t\t\t\t\t<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>\n\t\t\t\t\t\t</svg>'}];var l={components:{WidgetCounter:n["a"]},data(){return{callback:"http://dshadmin.gescapro.net/api/auth/admin",namApp:"gescapro",token_admin:null,stats:r,columns:[],data:[],data_s:[],value:null,buttonText:"Détail"}},mounted(){this.columns=[{title:"Date de creation",dataIndex:"created_at",key:"created_at",scopedSlots:{customRender:"name"}},{title:"Nom/Prénom client",dataIndex:"nom",key:"nom"},{title:"Numéro de téléphone",dataIndex:"numero",key:"numero"},{title:"Profession",dataIndex:"profession",key:"profession"},{title:"Quartier",dataIndex:"quartier",key:"quartier"},{title:"Collecteur en charge",dataIndex:"collecteur",key:"collecteur"},{title:"Action",key:"Action",scopedSlots:{customRender:"operation"}}],this.listeClient()},methods:{showAlert(t,e,a){this.$notification[t]({message:e,description:a})},listeClient(){let t=localStorage;this.token_admin=t.getItem("token");let e={headers:{Authorization:this.token_admin}};this.$http.post(this.callback+"/client/carnet/epargne",{},e).then(t=>{let e=t.body;this.stats[0].value=e.length,this.data=[];for(let a=0;a<e.length;a++)this.data.push({key:e[a].id,created_at:new Date(e[a].created_at).toLocaleString(),nom:e[a].nom,numero:e[a].numero,profession:e[a].profession,quartier:e[a].quartier,collecteur:e[a].collecteur}),this.data_s=this.data},t=>{this.showAlert("error","Error",t.body.message)})},onSearch(){this.value=this.value.toLowerCase();let t=this.data_s;this.data=[];for(let e=0;e<t.length;e++){let a=t[e].nom.toLowerCase().indexOf(this.value),s=t[e].numero.toLowerCase().indexOf(this.value);(a>-1||s>-1)&&this.data.push(t[e])}}}},o=l,u=a("2877"),c=Object(u["a"])(o,s,i,!1,null,null,null);e["default"]=c.exports},bf22:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{staticClass:"widget-1",attrs:{bordered:!1}},[a("a-statistic",{staticClass:"text-success",class:"text-"+t.status,attrs:{title:t.title,value:t.value,prefix:t.prefix,suffix:t.suffix,precision:0,groupSeparator:"."}}),a("div",{staticClass:"icon",domProps:{innerHTML:t._s(t.icon)}})],1)},i=[],n={props:{title:{type:String,default:""},value:{type:Number,default:0},prefix:{type:String,default:""},suffix:{type:String,default:""},icon:{type:String,default:""},status:{type:String,default:"success"}},data(){return{}}},r=n,l=a("2877"),o=Object(l["a"])(r,s,i,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-73b510c7.60ecf865.js.map