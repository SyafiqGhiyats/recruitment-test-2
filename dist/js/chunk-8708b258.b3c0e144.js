(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8708b258"],{"0025":function(t,e,r){},"057f":function(t,e,r){var n=r("fc6a"),a=r("241c").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return a(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?o(t):a(n(t))}},"0b42":function(t,e,r){var n=r("861d"),a=r("e8b5"),i=r("b622"),s=i("species");t.exports=function(t){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)?n(e)&&(e=e[s],null===e&&(e=void 0)):e=void 0),void 0===e?Array:e}},"159b":function(t,e,r){var n=r("da84"),a=r("fdbc"),i=r("17c2"),s=r("9112");for(var o in a){var c=n[o],u=c&&c.prototype;if(u&&u.forEach!==i)try{s(u,"forEach",i)}catch(l){u.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,a=r("a640"),i=a("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),a=r("b622"),i=r("2d00"),s=a("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"21bb":function(t,e,r){"use strict";r("2dad")},"2dad":function(t,e,r){},"30db":function(t,e,r){"use strict";r("0025")},"428f":function(t,e,r){var n=r("da84");t.exports=n},"4de4":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").filter,i=r("1dde"),s=i("filter");n({target:"Array",proto:!0,forced:!s},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,r){var n=r("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),a=r("5135"),i=r("e538"),s=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});a(e,t)||s(e,t,{value:i.f(t)})}},8418:function(t,e,r){"use strict";var n=r("a04b"),a=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var s=n(e);s in t?a.f(t,s,i(0,r)):t[s]=r}},a434:function(t,e,r){"use strict";var n=r("23e7"),a=r("23cb"),i=r("a691"),s=r("50c4"),o=r("7b0b"),c=r("65f0"),u=r("8418"),l=r("1dde"),f=l("splice"),d=Math.max,p=Math.min,m=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var r,n,l,f,b,h,g=o(this),w=s(g.length),y=a(t,w),j=arguments.length;if(0===j?r=n=0:1===j?(r=0,n=w-y):(r=j-2,n=p(d(i(e),0),w-y)),w+r-n>m)throw TypeError(v);for(l=c(g,n),f=0;f<n;f++)b=y+f,b in g&&u(l,f,g[b]);if(l.length=n,r<n){for(f=y;f<w-n;f++)b=f+n,h=f+r,b in g?g[h]=g[b]:delete g[h];for(f=w;f>w-n+r;f--)delete g[f-1]}else if(r>n)for(f=w-n;f>y;f--)b=f+n-1,h=f+r-1,b in g?g[h]=g[b]:delete g[h];for(f=0;f<r;f++)g[f+y]=arguments[f+2];return g.length=w-n+r,l}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),i=r("d066"),s=r("c430"),o=r("83ab"),c=r("4930"),u=r("d039"),l=r("5135"),f=r("e8b5"),d=r("861d"),p=r("d9b5"),m=r("825a"),v=r("7b0b"),b=r("fc6a"),h=r("a04b"),g=r("577e"),w=r("5c6c"),y=r("7c73"),j=r("df75"),x=r("241c"),O=r("057f"),k=r("7418"),C=r("06cf"),_=r("9bf2"),S=r("d1e7"),P=r("9112"),U=r("6eeb"),M=r("5692"),E=r("f772"),F=r("d012"),A=r("90e3"),D=r("b622"),N=r("e538"),q=r("746f"),R=r("d44e"),$=r("69f3"),J=r("b727").forEach,L=E("hidden"),B="Symbol",H="prototype",T=D("toPrimitive"),I=$.set,z=$.getterFor(B),Q=Object[H],V=a.Symbol,W=i("JSON","stringify"),G=C.f,K=_.f,X=O.f,Y=S.f,Z=M("symbols"),tt=M("op-symbols"),et=M("string-to-symbol-registry"),rt=M("symbol-to-string-registry"),nt=M("wks"),at=a.QObject,it=!at||!at[H]||!at[H].findChild,st=o&&u((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=G(Q,e);n&&delete Q[e],K(t,e,r),n&&t!==Q&&K(Q,e,n)}:K,ot=function(t,e){var r=Z[t]=y(V[H]);return I(r,{type:B,tag:t,description:e}),o||(r.description=e),r},ct=function(t,e,r){t===Q&&ct(tt,e,r),m(t);var n=h(e);return m(r),l(Z,n)?(r.enumerable?(l(t,L)&&t[L][n]&&(t[L][n]=!1),r=y(r,{enumerable:w(0,!1)})):(l(t,L)||K(t,L,w(1,{})),t[L][n]=!0),st(t,n,r)):K(t,n,r)},ut=function(t,e){m(t);var r=b(e),n=j(r).concat(mt(r));return J(n,(function(e){o&&!ft.call(r,e)||ct(t,e,r[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},ft=function(t){var e=h(t),r=Y.call(this,e);return!(this===Q&&l(Z,e)&&!l(tt,e))&&(!(r||!l(this,e)||!l(Z,e)||l(this,L)&&this[L][e])||r)},dt=function(t,e){var r=b(t),n=h(e);if(r!==Q||!l(Z,n)||l(tt,n)){var a=G(r,n);return!a||!l(Z,n)||l(r,L)&&r[L][n]||(a.enumerable=!0),a}},pt=function(t){var e=X(b(t)),r=[];return J(e,(function(t){l(Z,t)||l(F,t)||r.push(t)})),r},mt=function(t){var e=t===Q,r=X(e?tt:b(t)),n=[];return J(r,(function(t){!l(Z,t)||e&&!l(Q,t)||n.push(Z[t])})),n};if(c||(V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?g(arguments[0]):void 0,e=A(t),r=function(t){this===Q&&r.call(tt,t),l(this,L)&&l(this[L],e)&&(this[L][e]=!1),st(this,e,w(1,t))};return o&&it&&st(Q,e,{configurable:!0,set:r}),ot(e,t)},U(V[H],"toString",(function(){return z(this).tag})),U(V,"withoutSetter",(function(t){return ot(A(t),t)})),S.f=ft,_.f=ct,C.f=dt,x.f=O.f=pt,k.f=mt,N.f=function(t){return ot(D(t),t)},o&&(K(V[H],"description",{configurable:!0,get:function(){return z(this).description}}),s||U(Q,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:V}),J(j(nt),(function(t){q(t)})),n({target:B,stat:!0,forced:!c},{for:function(t){var e=g(t);if(l(et,e))return et[e];var r=V(e);return et[e]=r,rt[r]=e,r},keyFor:function(t){if(!p(t))throw TypeError(t+" is not a symbol");if(l(rt,t))return rt[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!o},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:mt}),n({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(v(t))}}),W){var vt=!c||u((function(){var t=V();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,a=[t],i=1;while(arguments.length>i)a.push(arguments[i++]);if(n=e,(d(e)||void 0!==t)&&!p(t))return f(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!p(e))return e}),a[1]=e,W.apply(null,a)}})}V[H][T]||P(V[H],T,V[H].valueOf),R(V,B),F[L]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),a=r("7b0b"),i=r("df75"),s=r("d039"),o=s((function(){i(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(t){return i(a(t))}})},b727:function(t,e,r){var n=r("0366"),a=r("44ad"),i=r("7b0b"),s=r("50c4"),o=r("65f0"),c=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,f=6==t,d=7==t,p=5==t||f;return function(m,v,b,h){for(var g,w,y=i(m),j=a(y),x=n(v,b,3),O=s(j.length),k=0,C=h||o,_=e?C(m,O):r||d?C(m,0):void 0;O>k;k++)if((p||k in j)&&(g=j[k],w=x(g,k,y),t))if(e)_[k]=w;else if(w)switch(t){case 3:return!0;case 5:return g;case 6:return k;case 2:c.call(_,g)}else switch(t){case 4:return!1;case 7:c.call(_,g)}return f?-1:u||l?l:_}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"min-h-screen container"},[r("div",{staticClass:"glass"},[r("h2",[t._v("User List")]),t._l(t.users,(function(e,n){return r("div",{key:n,staticClass:"list",on:{click:function(r){return t.showModal(e)}}},[r("div",{staticClass:"list-avatar"},[r("img",{attrs:{src:e.avatar,alt:""}})]),r("div",{staticClass:"list-item"},[r("div",{staticClass:"list-item-title"},[t._v(" "+t._s(e.first_name+" "+e.last_name)+" ")]),r("div",{staticClass:"list-item-subtitle"},[t._v(t._s(e.email))])])])}))],2),r("div",{staticClass:"glass mt-1"},[r("h2",[t._v("Create new User")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[r("div",{staticClass:"d-flex"},[r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"input glass",staticStyle:{padding:"0.9rem 1rem"},attrs:{type:"text",id:"email",placeholder:"enter your name...",required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})]),r("div",{staticClass:"input-box",staticStyle:{"margin-left":"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.job,expression:"form.job"}],staticClass:"input glass",staticStyle:{padding:"0.9rem 1rem"},attrs:{type:"text",id:"email",placeholder:"enter your job...",required:""},domProps:{value:t.form.job},on:{input:function(e){e.target.composing||t.$set(t.form,"job",e.target.value)}}})])]),r("button",{staticClass:"glass btn center",staticStyle:{"margin-top":"0.5rem",padding:"0.7rem 0"}},[t._v(" submit ")])]),t.newUsers.length?r("div",{staticClass:"mt-1 d-flex",staticStyle:{"flex-direction":"column"}},t._l(t.newUsers,(function(e,n){return r("div",{key:n,staticClass:"list-item"},[r("div",{staticStyle:{width:"80%"}},[r("div",{staticClass:"list-item-title"},[t._v(t._s(e.name))]),r("div",{staticClass:"list-item-subtitle"},[t._v("as "+t._s(e.job))])]),r("div",{staticClass:"list-action"},[r("span",[t._v(" "+t._s(new Date(e.createdAt).toLocaleDateString())+" ")]),r("div",{staticClass:"d-flex",staticStyle:{"justify-content":"end"}},[r("svg",{staticClass:"glass cursor-pointer edit",staticStyle:{"margin-right":"0.5rem"},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",width:"1.5rem",viewBox:"0 0 24 24",stroke:"currentColor"},on:{click:function(r){return t.showUpdateModal(e,n)}}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"}})]),r("svg",{staticClass:"glass cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1.5rem",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},on:{click:function(e){return t.deleteUser(n)}}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}})])])])])})),0):t._e()]),r("Modal",{model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[r("div",{staticClass:"avatar"},[r("img",{attrs:{src:t.selectedUser.avatar,alt:""}})]),r("h3",[t._v(t._s(t.selectedUser.first_name+" "+t.selectedUser.last_name))]),r("h5",[t._v(t._s(t.selectedUser.email))])]),r("Modal",{model:{value:t.updateModal,callback:function(e){t.updateModal=e},expression:"updateModal"}},[r("h3",[t._v("Update data")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.update(t.updateForm.id)}}},[r("label",{attrs:{for:"name"}},[t._v("Name")]),r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.updateForm.name,expression:"updateForm.name"}],staticClass:"input glass",staticStyle:{padding:"0.9rem 1rem"},attrs:{required:"",type:"text",id:"name",placeholder:"enter your name..."},domProps:{value:t.updateForm.name},on:{input:function(e){e.target.composing||t.$set(t.updateForm,"name",e.target.value)}}})]),r("label",{attrs:{for:"job"}},[t._v("Job")]),r("div",{staticClass:"input-box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.updateForm.job,expression:"updateForm.job"}],staticClass:"input glass",staticStyle:{padding:"0.9rem 1rem"},attrs:{required:"",type:"text",id:"job",placeholder:"enter your job..."},domProps:{value:t.updateForm.job},on:{input:function(e){e.target.composing||t.$set(t.updateForm,"job",e.target.value)}}})]),r("button",{staticClass:"glass btn center",staticStyle:{"margin-top":"0.5rem",padding:"0.7rem 0"}},[t._v(" submit ")])])])],1)},a=[];r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var c=r("1da1"),u=(r("a434"),r("96cf"),r("bc3a")),l=r.n(u),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isActive?r("div",{staticClass:"modal center",on:{click:t.clickOutside}},[r("div",{ref:"wrapper",staticClass:"modal-wrapper glass"},[r("span",{staticClass:"modal-close",on:{click:function(e){t.isActive=!1}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])]),t._t("default")],2)]):t._e()},d=[],p={model:{prop:"value",event:"input"},props:{value:{required:!1}},data:function(){return{isActive:!!this.value}},methods:{clickOutside:function(t){var e=this.$refs.wrapper;e&&e!=t.target&&!e.contains(t.target)&&(this.isActive=!1)}},watch:{value:function(t){this.isActive=!!t},isActive:function(t){!!t!==this.value&&this.$emit("input",t)}}},m=p,v=(r("30db"),r("2877")),b=Object(v["a"])(m,f,d,!1,null,null,null),h=b.exports,g={name:"Home",components:{Modal:h},data:function(){return{users:[],modal:!1,updateModal:!1,selectedUser:{},form:{name:"",job:""},updateForm:{name:"",job:""},newUsers:[]}},methods:{getUsers:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("https://reqres.in/api/users");case 3:r=e.sent,n=r.data,t.users=n.data,e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),a=e.t0.response,t.bus.$emit("snackbar",{show:!0,message:a.data.error,danger:!0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},onSubmit:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.post("https://reqres.in/api/users",t.form);case 2:r=e.sent,n=r.data,t.newUsers.push(n),t.form={name:"",job:""};case 6:case"end":return e.stop()}}),e)})))()},showModal:function(t){this.selectedUser=t,this.modal=!0},showUpdateModal:function(t,e){this.updateForm=o(o({},t),{},{index:e}),this.updateModal=!0},deleteUser:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.newUsers[t].id,r.next=3,l.a.delete("https://reqres.in/api/users/"+n);case 3:e.newUsers.splice(t,1);case 4:case"end":return r.stop()}}),r)})))()},update:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,l.a.put("https://reqres.in/api/users/"+t,e.updateForm);case 2:n=r.sent,a=n.data,e.newUsers[e.updateForm.index]=a,e.updateForm={name:"",job:""},e.updateModal=!1;case 7:case"end":return r.stop()}}),r)})))()}},mounted:function(){this.getUsers()}},w=g,y=(r("21bb"),Object(v["a"])(w,n,a,!1,null,null,null));e["default"]=y.exports},dbb4:function(t,e,r){var n=r("23e7"),a=r("83ab"),i=r("56ef"),s=r("fc6a"),o=r("06cf"),c=r("8418");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,r,n=s(t),a=o.f,u=i(n),l={},f=0;while(u.length>f)r=a(n,e=u[f++]),void 0!==r&&c(l,e,r);return l}})},e439:function(t,e,r){var n=r("23e7"),a=r("d039"),i=r("fc6a"),s=r("06cf").f,o=r("83ab"),c=a((function(){s(1)})),u=!o||c;n({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return s(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-8708b258.b3c0e144.js.map