(function(e){function t(t){for(var l,r,s=t[0],n=t[1],c=t[2],d=0,m=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],l=!0,r=1;r<a.length;r++){var s=a[r];0!==i[s]&&(l=!1)}l&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var l={},r={app:0},i={app:0},o=[];function s(e){return n.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ecb6b6bc"}[e]+".js"}function n(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(e){var t=[],a={about:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var l="css/"+({about:"about"}[e]||e)+"."+{about:"ed65e174"}[e]+".css",i=n.p+l,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===l||d===i))return t()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){c=m[s],d=c.getAttribute("data-href");if(d===l||d===i)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var l=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=l,delete r[e],u.parentNode.removeChild(u),a(o)},u.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(u)})).then((function(){r[e]=0})));var l=i[e];if(0!==l)if(l)t.push(l[2]);else{var o=new Promise((function(t,a){l=i[e]=[t,a]}));t.push(l[2]=o);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,n.nc&&d.setAttribute("nonce",n.nc),d.src=s(e);var m=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(u);var a=i[e];if(0!==a){if(a){var l=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+l+": "+r+")",m.name="ChunkLoadError",m.type=l,m.request=r,a[1](m)}i[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},n.m=e,n.c=l,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var u=d;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"11d9":function(e,t,a){"use strict";var l=a("ef48"),r=a.n(l);r.a},"199c":function(e,t){},"206d":function(e,t,a){"use strict";var l=a("e50d"),r=a.n(l);r.a},2376:function(e,t,a){"use strict";var l=a("bdd2"),r=a.n(l);r.a},"23be":function(e,t,a){"use strict";var l=a("199c"),r=a.n(l);t["default"]=r.a},"25f4":function(e,t,a){},"3dfd":function(e,t,a){"use strict";var l=a("b103"),r=a("23be"),i=(a("5c0b"),a("2877")),o=Object(i["a"])(r["default"],l["a"],l["b"],!1,null,null,null);t["default"]=o.exports},"4dc6":function(e,t,a){},"559a":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var l=a("2b0e"),r=a("3dfd"),i=a("8c4f"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login my-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 col-md-8 col-sm-12 col-xs-12 m-auto"},[a("div",{staticClass:"card p-5"},[e._m(0),a("div",{staticClass:"my-5"},[a("form",{attrs:{name:"loginForm"},on:{submit:e.submitForm}},[a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"4","label-cols-lg":"3",label:"Username:","label-for":"username"}},[a("b-form-input",{attrs:{id:"username",required:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"4","label-cols-lg":"3",label:"Password:","label-for":"password"}},[a("b-form-input",{attrs:{type:"password",id:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e.checkError?a("div",[e._v(e._s(e.message))]):e._e(),a("b-button",{staticClass:"mt-3",attrs:{type:"submit",variant:"success"}},[e._v("Sign In")])],1)]),e._m(1)])])])])])},s=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"logo"},[l("img",{attrs:{src:a("a87f"),width:"100",height:"auto",alt:"mtc-logo"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[e._v("\n            In case you have forgotten the password or you have trouble\n            logging please contact:\n            "),a("a",{attrs:{href:"tel:09619711447"}},[e._v("9619711447")])])}],n=a("bc3a"),c=a.n(n),d=(a("7514"),{getMessage:function(e,t,a){var r=l["default"]._.find(this.messages,["name",e]);return{msg:r.messages[t],code:a.status,data:a.data}},messages:[{name:"login",messages:{200:"Congratulations! login successful.",500:"Internal server error",403:"Invalid Username or Password.",default:"Some error occurred."}},{name:"verifyqr",messages:{200:"Entry successful.",412:"No such member exists.",default:"Some error occured."}},{name:"memberEntry",messages:{200:"User fount.",403:"Member does not exists.",401:" Unauthorized access.",default:"Some error occured."}},{name:"verifyMemberAtEntry",messages:{200:"Verification and Entry created.",403:"Entry already done.",default:"Some error occured."}},{name:"verifyMemberAtPit",messages:{200:"Verification and Entry created.",403:"Entry already done.",default:"Some error occured."}},{name:"getEntry",messages:{200:"Entry data",204:"No entries for today.",default:"Some error occured."}},{name:"entryDashboard",messages:{200:"",204:"No data fount",default:"Some error occured."}},{name:"showgame",messages:{200:"all data.",204:"Content not found. The page you have requested cannot be displayed right now. It may be temporarily unavailable. Please try again.",default:"Some error occured."}},{name:"addpoint",messages:{200:"save succesful.",204:"No member found.",default:"Some error occured."}}]}),m="http://api.mtcmarudharcup.com/",u={uploadUrl:"http://fileupload.mtcmarudharcup.com/api/upload/",readFileUrl:"http://fileupload.mtcmarudharcup.com/api/upload/readFile",login:function(e,t){return c.a.post("".concat(m,"User/login"),e).then((function(e){t(d.getMessage("login",200,e))})).catch((function(e){l["default"]._.isEqual(e.response.status,403)&&t(d.getMessage("login",403,e.response))}))},getOneByToken:function(e,t){return c.a.get("".concat(m,"User/getOneByToken/").concat(e)).then((function(e){t(e)})).catch((function(e){t(e)}))},saveTeam:function(e,t){return c.a.post("".concat(m,"Team/saveTeam"),e).then((function(e){t(e)})).catch((function(e){t(e)}))},updateTeam:function(e,t,a){return c.a.put("".concat(m,"Team/updateTeam/").concat(e),t).then((function(e){a(e)})).catch((function(e){a(e)}))},getOneByUser:function(e,t){return c.a.get("".concat(m,"Team/getOneByUser/").concat(e)).then((function(e){t(e)})).catch((function(e){t(e)}))},getOneTeam:function(e,t){return c.a.get("".concat(m,"Team/getOne/").concat(e)).then((function(e){t(e)})).catch((function(e){t(e)}))},searchPlayer:function(e,t){return c.a.get("".concat(m,"Player/"),{params:e}).then((function(e){t(e)})).catch((function(e){t(e)}))},getPlayerCount:function(e,t){return c.a.get("".concat(m,"Setting/"),{params:e}).then((function(e){t(e)})).catch((function(e){t(e)}))},savePlayer:function(e,t){return c.a.post("".concat(m,"Player/savePlayer"),e).then((function(e){t(e)})).catch((function(e){t(e)}))},deletePlayer:function(e,t){return c.a.delete("".concat(m,"Player/deletePlayer/").concat(e)).then((function(e){t(e)})).catch((function(e){t(e)}))},getOnePlayer:function(e,t){return c.a.get("".concat(m,"Player/getOne/").concat(e)).then((function(e){t(e)})).catch((function(e){t(e)}))},updatePlayer:function(e,t,a){return c.a.put("".concat(m,"Player/updatePlayer/").concat(e),t).then((function(e){a(e)})).catch((function(e){a(e)}))},upload:function(e,t){c.a.post(this.uploadUrl,e).then((function(e){t(e)})).catch((function(e){t(e)}))}},p={data:function(){return{form:{},checkError:!1}},methods:{submitForm:function(e){var t=this;e.preventDefault(),this.form.username&&this.form.password?u.login(this.form,(function(e){if(t._.isEqual(e.code,200)){var a=e.data.accessToken.length-1,l=e.data.accessToken[a].token;t.$router.push({name:"Team Detail",params:{token:l}})}else t._.isEqual(e.code,403)&&(t.checkError=!0,t.message=e.msg)})):(this.checkError=!0,this.message="All fields are mandatory.")}}},f=p,b=(a("206d"),a("2877")),g=Object(b["a"])(f,o,s,!1,null,null,null),h=g.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"team-detail my-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto"},[a("div",{staticClass:"card p-5"},[a("div",{staticClass:"text-right"},[a("router-link",{attrs:{to:"/login"}},[a("b-button",{attrs:{variant:"danger"}},[e._v("Logout")])],1)],1),e._m(0),e.addTeam?a("div",{staticClass:"my-5 mx-auto mobile-space"},[a("b-form",{staticClass:"save-team",attrs:{inline:"",name:"addTeamDetail"},on:{submit:e.addTeamForm}},[a("label",{staticClass:"mr-sm-2 mb-2",attrs:{for:"inline-form-input-team-name"}},[e._v("Team Name:")]),a("b-input",{staticClass:"mb-2 mr-4",attrs:{id:"inline-form-input-team-name",placeholder:"Team Name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),a("label",{staticClass:"mr-sm-2 mb-2",attrs:{for:"inline-form-input-village"}},[e._v("Village:")]),a("b-input",{staticClass:"mb-2 mr-4",attrs:{id:"inline-form-input-village",placeholder:"Village"},model:{value:e.form.village,callback:function(t){e.$set(e.form,"village",t)},expression:"form.village"}}),a("b-button",{staticClass:"mr-4 mb-2",attrs:{raised:"",variant:"primary"},on:{click:e.onClickFile}},[e._v("Upload Team Logo")]),a("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:e.onFilePicked}}),e.teamLogo?a("div",{staticClass:"mr-4"},[a("img",{attrs:{src:e._f("uploadpath")(e.teamLogo),width:"100",height:"auto",alt:""}})]):e._e(),a("b-button",{staticClass:"mb-2",attrs:{type:"submit",variant:"success"}},[e._v("Submit")])],1),e.checkError?a("div",[e._v(e._s(e.message))]):e._e()],1):e._e(),e.showTeam?a("div",{staticClass:"my-5 mx-auto"},[a("b-form",{staticClass:"edit-team",attrs:{inline:""}},[a("label",{staticClass:"mr-sm-2 mb-2",attrs:{for:"inline-form-custom-select-pref"}},[e._v("Team Name:")]),a("b-input",{staticClass:"mb-2 mr-4",attrs:{id:"inline-form-input-name",placeholder:"Team Name"},model:{value:e.teamDetail.name,callback:function(t){e.$set(e.teamDetail,"name",t)},expression:"teamDetail.name"}}),a("label",{staticClass:"mr-sm-2 mb-2",attrs:{for:"inline-form-custom-select-pref"}},[e._v("Village:")]),a("b-input",{staticClass:"mb-2 mr-4",attrs:{id:"inline-form-input-name",placeholder:"Village"},model:{value:e.teamDetail.village,callback:function(t){e.$set(e.teamDetail,"village",t)},expression:"teamDetail.village"}}),a("div",{staticClass:"mobile-spacing"},[a("b-button",{staticClass:"mr-2 mb-2",attrs:{raised:"",variant:"primary"},on:{click:e.onClickFile}},[e._v("Upload Team Logo")]),a("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:e.onFilePicked}}),a("img",{staticClass:"img-fluid mr-4",attrs:{src:e._f("uploadpath")(e.teamDetail.logo),width:"100",height:"auto",alt:""}}),a("b-button",{staticClass:"mr-4 mb-2 mobile-save",attrs:{variant:"success"},on:{click:e.updateTeam}},[e._v("Save")]),a("b-button",{staticClass:"mb-2 mobile-cancel",attrs:{variant:"warning"},on:{click:e.goToPage}},[e._v("Cancel")])],1)],1),e.checkError?a("div",[e._v(e._s(e.message))]):e._e()],1):e._e(),e.showAddPlayers&&e.totalPlayers!=e.playerDetails.length?a("div",{staticClass:"text-center mb-5"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{variant:"primary"}},[e._v("Add Team Member")]),a("memberRegistration",{attrs:{teamId:e.teamDetail._id}})],1):e._e(),e.showPlayers?a("div",{staticClass:"table-responsive text-nowrap"},[a("table",{staticClass:"table table-hover"},[e._m(1),a("tbody",[a("div",{},[a("deleteView",{staticClass:"text-center",attrs:{data:{id:e.id}},on:{event_child:e.deleteAndRefresh}})],1),e._l(e.playerDetails,(function(t,l){return a("tr",{key:t._id},[a("td",[e._v(e._s(l+1))]),a("td",[e._v(e._s(t.fullName))]),a("td",[e._v(e._s(t.age))]),a("td",[e._v(e._s(t.keyRole))]),a("td",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"view"+t._id,expression:"'view' + player._id"}],attrs:{variant:"info"}},[e._v("View")]),a("div",{},[a("memberView",{attrs:{display:t}})],1)],1),a("td",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"edit"+t._id,expression:"'edit' + player._id"}],attrs:{variant:"primary"}},[e._v("Edit")]),a("div",{},[a("memberEdit",{attrs:{edit:t}})],1)],1),a("td",[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"delete"+t._id,expression:"'delete' + player._id"}],attrs:{variant:"danger"}},[e._v("Delete")]),a("deleteView",{staticClass:"text-center",attrs:{data:{id:t._id}},on:{event_child:e.deleteAndRefresh}})],1)])}))],2)])]):e._e()])])])])])},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[a("span",{staticClass:"head-title"},[e._v("Team Details")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("No.")]),a("th",[e._v("Name")]),a("th",[e._v("Age")]),a("th",[e._v("Role")]),a("th",{attrs:{colspan:"3"}},[e._v("Action")])])])}],D=(a("7f7f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-modal",{ref:"deleteButton",attrs:{id:"delete"+e.data.id,title:"Are sure you want to delete?","hide-footer":"","no-stacking":""}},[a("b-button",{staticClass:"mr-3",attrs:{variant:"outline-danger"},on:{click:function(t){return e.close()}}},[e._v("Delete")]),a("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.$bvModal.hide("delete"+e.data.id)}}},[e._v("Cancel")])],1)],1)}),k=[],_={props:["data"],name:"Delete",data:function(){return{status:"",modal:"",deleteData:{}}},created:function(){this.page=this.$route.params.page},methods:{close:function(){this.modal=this.id;var e={};e._id=this.data.id,this.$bvModal.hide("delete"+this.data.id),this.$emit("event_child",e)},deleteTostr:function(){200==this.status?this.$toasted.success("Data Deleted Successfully"):this.$toasted.error("Data Deleted Unsuccessfully")},closeCancelModal:function(){this.hideDeleteModal()}}},w=_,T=(a("cefe"),Object(b["a"])(w,D,k,!1,null,null,null)),x=T.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-modal",{ref:"memberView",attrs:{id:"view"+e.display._id,"hide-footer":"",centered:"","no-stacking":"",title:"VIEW TEAM MEMBER"}},[a("form",{attrs:{name:"playerForm"}},[a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"First Name:","label-for":"Firstname"}},[a("b-form-input",{attrs:{id:"Firstname",readonly:""},model:{value:e.playerDetail.firstName,callback:function(t){e.$set(e.playerDetail,"firstName",t)},expression:"playerDetail.firstName"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Middle Name:","label-for":"middleName"}},[a("b-form-input",{attrs:{id:"middleName",readonly:""},model:{value:e.playerDetail.middleName,callback:function(t){e.$set(e.playerDetail,"middleName",t)},expression:"playerDetail.middleName"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Last Name:","label-for":"lastName"}},[a("b-form-input",{attrs:{id:"lastName",readonly:""},model:{value:e.playerDetail.surname,callback:function(t){e.$set(e.playerDetail,"surname",t)},expression:"playerDetail.surname"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Contact No:","label-for":"contact"}},[a("b-form-input",{attrs:{type:"tel",maxlength:"10",id:"contact",readonly:""},model:{value:e.playerDetail.mobile,callback:function(t){e.$set(e.playerDetail,"mobile",t)},expression:"playerDetail.mobile"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Email ID:","label-for":"email"}},[a("b-form-input",{attrs:{type:"email",id:"email",readonly:""},model:{value:e.playerDetail.email,callback:function(t){e.$set(e.playerDetail,"email",t)},expression:"playerDetail.email"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Age:","label-for":"age"}},[a("b-form-input",{attrs:{id:"age",type:"tel",maxlength:"2",readonly:""},model:{value:e.playerDetail.age,callback:function(t){e.$set(e.playerDetail,"age",t)},expression:"playerDetail.age"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Key Role:","label-for":"key-role"}},[a("b-form-select",{attrs:{id:"key-role",options:e.keyRole,disabled:""},model:{value:e.playerDetail.keyRole,callback:function(t){e.$set(e.playerDetail,"keyRole",t)},expression:"playerDetail.keyRole"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Batting Type:","label-for":"battingType"}},[a("b-form-select",{attrs:{id:"battingType",options:e.battingType,disabled:""},model:{value:e.playerDetail.battingType,callback:function(t){e.$set(e.playerDetail,"battingType",t)},expression:"playerDetail.battingType"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Bowling Type:","label-for":"bowlingType"}},[a("b-form-select",{attrs:{id:"bowlingType",options:e.bowlingType,disabled:""},model:{value:e.playerDetail.bowlingType,callback:function(t){e.$set(e.playerDetail,"bowlingType",t)},expression:"playerDetail.bowlingType"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Wicket Keeper:","label-for":"wicketkeeper"}},[a("b-form-select",{attrs:{id:"wicketkeeper",options:e.wicketKeeper,disabled:""},model:{value:e.playerDetail.isWicketkeeper,callback:function(t){e.$set(e.playerDetail,"isWicketkeeper",t)},expression:"playerDetail.isWicketkeeper"}})],1),e.playerDetail.photograph?a("b-form-group",[a("img",{attrs:{src:e._f("uploadpath")(e.playerDetail.photograph),width:"150",height:"auto"}})]):e._e()],1)])],1)},P=[],$={name:"MemberView",props:["display"],data:function(){return{status:"",modal:"",playerDetail:{},keyRole:[{value:"Batsman",text:"Batsman"},{value:"Bowler",text:"Bowler"},{value:"All rounder",text:"All rounder"}],battingType:[{value:"Right Hand",text:"Right Hand"},{value:"Left Hand",text:"Left Hand"}],bowlingType:[{value:"Right Arm Medium Pace",text:"Right Arm Medium Pace"},{value:"Left Arm Medium Pace",text:"Left Arm Medium Pace"},{value:"Left Arm Spinner",text:"Left Arm Spinner"},{value:"Off Spinner",text:"Off Spinner"},{value:"Leg Spinner",text:"Leg Spinner"},{value:"None",text:"None"}],wicketKeeper:[{value:!0,text:"Yes"},{value:!1,text:"No"}]}},created:function(){this.page=this.$route.params.page,this.playerDetail=this.display}},N=$,E=(a("2376"),Object(b["a"])(N,C,P,!1,null,null,null)),S=E.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-modal",{ref:"memberEdit",attrs:{id:"edit"+e.edit._id,"hide-footer":"",centered:"","no-stacking":"",title:"Edit TEAM MEMBER"}},[a("form",{attrs:{name:"playerForm"},on:{submit:e.submitPlayerForm}},[a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"First Name:","label-for":"Firstname"}},[a("b-form-input",{attrs:{id:"Firstname",required:""},model:{value:e.playerDetail.firstName,callback:function(t){e.$set(e.playerDetail,"firstName",t)},expression:"playerDetail.firstName"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Middle Name:","label-for":"middleName"}},[a("b-form-input",{attrs:{id:"middleName"},model:{value:e.playerDetail.middleName,callback:function(t){e.$set(e.playerDetail,"middleName",t)},expression:"playerDetail.middleName"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Last Name:","label-for":"lastName"}},[a("b-form-input",{attrs:{id:"lastName",required:""},model:{value:e.playerDetail.surname,callback:function(t){e.$set(e.playerDetail,"surname",t)},expression:"playerDetail.surname"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Contact No:","label-for":"contact"}},[a("b-form-input",{attrs:{type:"tel",maxlength:"10",id:"contact",required:""},model:{value:e.playerDetail.mobile,callback:function(t){e.$set(e.playerDetail,"mobile",t)},expression:"playerDetail.mobile"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Email ID:","label-for":"email"}},[a("b-form-input",{attrs:{type:"email",id:"email"},model:{value:e.playerDetail.email,callback:function(t){e.$set(e.playerDetail,"email",t)},expression:"playerDetail.email"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Age:","label-for":"age"}},[a("b-form-input",{attrs:{id:"age",type:"tel",maxlength:"2",required:""},model:{value:e.playerDetail.age,callback:function(t){e.$set(e.playerDetail,"age",t)},expression:"playerDetail.age"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Key Role:","label-for":"key-role"}},[a("b-form-select",{attrs:{id:"key-role",options:e.keyRole,required:""},model:{value:e.playerDetail.keyRole,callback:function(t){e.$set(e.playerDetail,"keyRole",t)},expression:"playerDetail.keyRole"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Batting Type:","label-for":"battingType"}},[a("b-form-select",{attrs:{id:"battingType",options:e.battingType,required:""},model:{value:e.playerDetail.battingType,callback:function(t){e.$set(e.playerDetail,"battingType",t)},expression:"playerDetail.battingType"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Bowling Type:","label-for":"bowlingType"}},[a("b-form-select",{attrs:{id:"bowlingType",options:e.bowlingType,required:""},model:{value:e.playerDetail.bowlingType,callback:function(t){e.$set(e.playerDetail,"bowlingType",t)},expression:"playerDetail.bowlingType"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Wicket Keeper:","label-for":"wicketkeeper"}},[a("b-form-select",{attrs:{id:"wicketkeeper",options:e.wicketKeeper,required:""},model:{value:e.playerDetail.isWicketkeeper,callback:function(t){e.$set(e.playerDetail,"isWicketkeeper",t)},expression:"playerDetail.isWicketkeeper"}})],1),a("b-form-group",{attrs:{id:"exampleInputGroup1","label-for":"exampleInput1",required:""}},[a("b-button",{staticClass:"mt-3",attrs:{raised:"",variant:"primary"},on:{click:e.onClickFile}},[e._v("Upload Player Pic")]),a("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:e.onFilePicked}}),a("div",[a("span",[a("font",{staticClass:"note small",attrs:{color:"red"}},[e._v("Please Upload Square Shape Images and Size less than 1MB")])],1)])],1),e.playerDetail.photograph?a("b-form-group",[a("img",{attrs:{src:e._f("uploadpath")(e.playerDetail.photograph),width:"150",height:"auto"}})]):e._e(),e.errorCheck?a("div",[e._v(e._s(e.errMessage))]):e._e(),a("b-button",{staticClass:"mt-3",attrs:{type:"submit",variant:"success"}},[e._v("Submit")])],1)])],1)},A=[],R=(a("6b54"),{name:"MemberEdit",props:["edit"],data:function(){return{status:"",modal:"",playerDetail:{},errorCheck:!1,errMessage:"",mainImage:null,keyRole:[{value:"Batsman",text:"Batsman"},{value:"Bowler",text:"Bowler"},{value:"All rounder",text:"All rounder"}],battingType:[{value:"Right Hand",text:"Right Hand"},{value:"Left Hand",text:"Left Hand"}],bowlingType:[{value:"Right Arm Medium Pace",text:"Right Arm Medium Pace"},{value:"Left Arm Medium Pace",text:"Left Arm Medium Pace"},{value:"Left Arm Spinner",text:"Left Arm Spinner"},{value:"Off Spinner",text:"Off Spinner"},{value:"Leg Spinner",text:"Leg Spinner"},{value:"None",text:"None"}],wicketKeeper:[{value:!0,text:"Yes"},{value:!1,text:"No"}]}},created:function(){this.page=this.$route.params.page,this.playerDetail=this.edit},methods:{submitPlayerForm:function(e){var t=this;if(e.preventDefault(),this.playerDetail.mobile){var a=parseInt(this.playerDetail.mobile);a.toString().length<10?(this.errorCheck=!0,this.errMessage="Contact should be of 10 digits and valid."):this.playerDetail.mobile=a}if(this.playerDetail.age){var l=parseInt(this.playerDetail.age);0==l.toString().length||l.toString().length>2?(this.errorCheck=!0,this.errMessage="Age should be of 2 digits."):this.playerDetail.age=l}if(this.playerDetail.age&&this.playerDetail.battingType&&this.playerDetail.bowlingType&&this.playerDetail.firstName&&this.playerDetail.isWicketkeeper&&this.playerDetail.keyRole&&this.playerDetail.mobile&&this.playerDetail.surname){var r=this._.cloneDeep(this.playerDetail);delete r._id,u.updatePlayer(this.playerDetail._id,r,(function(e){1==e.data.nModified?(t.errorCheck=!1,t.$toasted.success("Member details updated successfully"),t.$router.go(0)):(t.errorCheck=!0,t.errMessage="Retry updating the member.")}))}else this.errorCheck=!0,this.errMessage="Except Email and Middle Name all the fields are compulsory"},onClickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(e){var t=this,a=e.target.files;if(a&&a.length>0&&a[0].name){var l=a[0].name;if(console.log("files",a),l.lastIndexOf(".")<=0)this.$toasted.error("Please Add Valid File!");else if(a[0].size>1048576)this.$toasted.error("Image size is greater than 1 MB");else{var r=new FileReader;r.addEventListener("load",(function(){t.imageUrl=r.result})),r.readAsDataURL(a[0]),this.image=a[0];var i=new FormData;i.append("file",this.image),u.upload(i,(function(e){e.data.data&&(t.$toasted.success("Image Uploaded Successfully"),t.playerDetail.photograph=e.data.data[0])}))}}else this.$toasted.error("Select Image")}}}),L=R,F=(a("5c21"),Object(b["a"])(L,M,A,!1,null,null,null)),I=F.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-modal",{ref:"memberRegistration",attrs:{id:"modal-1","hide-footer":"",centered:"","no-stacking":"",title:"ADD TEAM MEMBER"}},[a("form",{attrs:{name:"playerForm"},on:{submit:e.submitPlayerForm}},[a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"First Name:","label-for":"Firstname"}},[a("b-form-input",{attrs:{id:"Firstname",required:""},model:{value:e.playerDetail.firstName,callback:function(t){e.$set(e.playerDetail,"firstName",t)},expression:"playerDetail.firstName"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Middle Name:","label-for":"middleName"}},[a("b-form-input",{attrs:{id:"middleName"},model:{value:e.playerDetail.middleName,callback:function(t){e.$set(e.playerDetail,"middleName",t)},expression:"playerDetail.middleName"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Last Name:","label-for":"lastName"}},[a("b-form-input",{attrs:{id:"lastName",required:""},model:{value:e.playerDetail.surname,callback:function(t){e.$set(e.playerDetail,"surname",t)},expression:"playerDetail.surname"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Contact No:","label-for":"contact"}},[a("b-form-input",{attrs:{type:"tel",maxlength:"10",id:"contact",required:""},model:{value:e.playerDetail.mobile,callback:function(t){e.$set(e.playerDetail,"mobile",t)},expression:"playerDetail.mobile"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Email ID:","label-for":"email"}},[a("b-form-input",{attrs:{type:"email",id:"email"},model:{value:e.playerDetail.email,callback:function(t){e.$set(e.playerDetail,"email",t)},expression:"playerDetail.email"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Age:","label-for":"age"}},[a("b-form-input",{attrs:{id:"age",type:"tel",maxlength:"2",required:""},model:{value:e.playerDetail.age,callback:function(t){e.$set(e.playerDetail,"age",t)},expression:"playerDetail.age"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Key Role:","label-for":"key-role"}},[a("b-form-select",{attrs:{id:"key-role",options:e.keyRole,required:""},model:{value:e.playerDetail.keyRole,callback:function(t){e.$set(e.playerDetail,"keyRole",t)},expression:"playerDetail.keyRole"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Batting Type:","label-for":"battingType"}},[a("b-form-select",{attrs:{id:"battingType",options:e.battingType,required:""},model:{value:e.playerDetail.battingType,callback:function(t){e.$set(e.playerDetail,"battingType",t)},expression:"playerDetail.battingType"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Bowling Type:","label-for":"bowlingType"}},[a("b-form-select",{attrs:{id:"bowlingType",options:e.bowlingType,required:""},model:{value:e.playerDetail.bowlingType,callback:function(t){e.$set(e.playerDetail,"bowlingType",t)},expression:"playerDetail.bowlingType"}})],1),a("b-form-group",{attrs:{id:"fieldset-horizontal","label-cols-sm":"3","label-cols-lg":"3",label:"Wicket Keeper:","label-for":"wicketkeeper"}},[a("b-form-select",{attrs:{id:"wicketkeeper",options:e.wicketKeeper,required:""},model:{value:e.playerDetail.isWicketkeeper,callback:function(t){e.$set(e.playerDetail,"isWicketkeeper",t)},expression:"playerDetail.isWicketkeeper"}})],1),a("b-form-group",{attrs:{id:"exampleInputGroup1","label-for":"exampleInput1",required:""}},[a("b-button",{staticClass:"mt-3",attrs:{raised:"",variant:"primary"},on:{click:e.onClickFile}},[e._v("Upload Player Pic")]),a("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:e.onFilePicked}}),a("div",[a("span",[a("font",{staticClass:"note small",attrs:{color:"red"}},[e._v("Please Upload Square Shape Images and Size less than 1MB")])],1)])],1),e.mainImage?a("b-form-group",[a("img",{attrs:{src:e._f("uploadpath")(e.mainImage),width:"150",height:"auto"}})]):e._e(),e.errorCheck?a("div",[e._v(e._s(e.errMessage))]):e._e(),a("b-button",{staticClass:"mt-3",attrs:{type:"submit",variant:"success"}},[e._v("Submit")])],1)])],1)},z=[],B={name:"MemberRegistration",props:["teamId"],data:function(){return{status:"",modal:"",playerDetail:{},errorCheck:!1,errMessage:"",mainImage:null,keyRole:[{value:"Batsman",text:"Batsman"},{value:"Bowler",text:"Bowler"},{value:"All rounder",text:"All rounder"}],battingType:[{value:"Right Hand",text:"Right Hand"},{value:"Left Hand",text:"Left Hand"}],bowlingType:[{value:"Right Arm Medium Pace",text:"Right Arm Medium Pace"},{value:"Left Arm Medium Pace",text:"Left Arm Medium Pace"},{value:"Left Arm Spinner",text:"Left Arm Spinner"},{value:"Off Spinner",text:"Off Spinner"},{value:"Leg Spinner",text:"Leg Spinner"},{value:"None",text:"None"}],wicketKeeper:[{value:!0,text:"Yes"},{value:!1,text:"No"}]}},created:function(){this.page=this.$route.params.page},methods:{submitPlayerForm:function(e){var t=this;if(e.preventDefault(),this.playerDetail.mobile){var a=parseInt(this.playerDetail.mobile);a.toString().length<10?(this.errorCheck=!0,this.errMessage="Contact should be of 10 digits and valid."):this.playerDetail.mobile=a}if(this.playerDetail.age){var l=parseInt(this.playerDetail.age);0==l.toString().length||l.toString().length>2?(this.errorCheck=!0,this.errMessage="Age should be of 2 digits."):this.playerDetail.age=l}this.playerDetail.age&&this.playerDetail.battingType&&this.playerDetail.bowlingType&&this.playerDetail.firstName&&this.playerDetail.isWicketkeeper&&this.playerDetail.keyRole&&this.playerDetail.mobile&&this.playerDetail.surname?(this.playerDetail.team=this.teamId,u.savePlayer(this.playerDetail,(function(e){e.data?(t.errorCheck=!1,t.$toasted.success("Member details are added successfully"),t.$router.go(0)):(t.errorCheck=!0,t.errMessage="Retry adding the member.")}))):(this.errorCheck=!0,this.errMessage="Except Email and Middle Name all the fields are compulsory")},onClickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(e){var t=this,a=e.target.files;if(a&&a.length>0&&a[0].name){var l=a[0].name;if(console.log("files",a),l.lastIndexOf(".")<=0)this.$toasted.error("Please Add Valid File!");else if(a[0].size>1048576)this.$toasted.error("Image size is greater than 1 MB");else{var r=new FileReader;r.addEventListener("load",(function(){t.imageUrl=r.result})),r.readAsDataURL(a[0]),this.image=a[0];var i=new FormData;i.append("file",this.image),u.upload(i,(function(e){e.data.data&&(t.$toasted.success("Image Uploaded Successfully"),t.mainImage=e.data.data[0],t.playerDetail.photograph=t.mainImage)}))}}else this.$toasted.error("Select Image")}}},U=B,q=(a("11d9"),Object(b["a"])(U,O,z,!1,null,null,null)),j=q.exports,V={components:{memberRegistration:j,memberView:S,memberEdit:I,deleteView:x},data:function(){return{user:"",team:"",id:"",view:"",index:"",form:{},playerform:{},teamDetail:{},playerDetails:[],teamLogo:null,totalPlayers:0,addTeam:!0,showTeam:!1,showAddPlayers:!1,showPlayers:!1,checkError:!1}},created:function(){this.getPlayerCount(),this.checkUser()},methods:{getPlayerCount:function(){var e=this;u.getPlayerCount({},(function(t){t.data&&(e.totalPlayers=t.data[0].playerCount)}))},checkUser:function(){var e=this;this.$route.params.token?u.getOneByToken(this.$route.params.token,(function(t){t.data?(e.form.user=t.data._id,e.checkTeam(t.data._id)):e.$router.push({name:"Login"})})):this.$router.push({name:"Login"})},checkTeam:function(e){var t=this;u.getOneByUser(e,(function(e){e.data?(t.form=e.data,t.teamDetail=e.data,e.data.village&&(t.teamDetail.village=e.data.village),e.data.name&&(t.teamDetail.name=e.data.name),e.data.logo&&(t.teamDetail.logo=e.data.logo),t.addTeam=!1,t.showTeam=!0,t.showAddPlayers=!0,t.checkPlayer()):(t.addTeam=!0,t.showTeam=!1,t.showAddPlayers=!1)}))},checkPlayer:function(){var e=this;u.searchPlayer({team:this.teamDetail._id},(function(t){t.data?(e.playerDetails=t.data,e.addTeam=!1,e.showTeam=!0,e.showAddPlayers=!0,e.showPlayers=!0):(e.addTeam=!1,e.showTeam=!0,e.showAddPlayers=!0,e.showPlayers=!1)}))},addTeamForm:function(e){var t=this;e.preventDefault(),this.form.name?u.saveTeam(this.form,(function(e){e.data?(t.playerform.team=e.data._id,t.showTeam=!0,t.addTeam=!1,t.showAddPlayers=!0,t.checkError=!1,t.$toasted.success("Saved Team Details Successfully"),t.getOneTeam(e.data._id)):(t.checkError=!0,t.showTeam=!1,t.addTeam=!0,t.showAddPlayers=!1,t.message="Retry to create team.")})):(this.checkError=!0,this.message="Team name is required.")},getOneTeam:function(e){var t=this;u.getOneTeam(e,(function(e){e.data&&(e.data.village&&(t.teamDetail.village=e.data.village),e.data.name&&(t.teamDetail.name=e.data.name),e.data.logo&&(t.teamDetail.logo=e.data.logo))}))},updateTeam:function(){var e=this,t=this._.cloneDeep(this.teamDetail);delete t._id,t.name?u.updateTeam(this.teamDetail._id,t,(function(t){1==t.data.nModified?(e.checkError=!1,e.$router.go(0),e.$toasted.show("Updated Team Details Successfully")):(e.checkError=!0,e.message="Retry the editing of team details.")})):(this.checkError=!0,this.message="Team name is required.")},deleteAndRefresh:function(e){var t=this;u.deletePlayer(e._id,(function(e){t.checkPlayer()}))},passData:function(e){this.id=e},onClickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(e){var t=this,a=e.target.files;if(a&&a.length>0&&a[0].name){var l=a[0].name;if(console.log("files",a),l.lastIndexOf(".")<=0)this.$toasted.error("Please Add Valid File!");else if(a[0].size>1048576)this.$toasted.error("Image size is greater than 1 MB");else{var r=new FileReader;r.addEventListener("load",(function(){t.imageUrl=r.result})),r.readAsDataURL(a[0]),this.image=a[0];var i=new FormData;i.append("file",this.image),u.upload(i,(function(e){e.data.data&&(t.$toasted.success("Image Uploaded Successfully"),t.teamLogo=e.data.data[0],t.form.logo=t.teamLogo,t.teamDetail.logo=t.teamLogo)}))}}else this.$toasted.error("Select Image")},goToPage:function(){this.checkTeam(this.form.user)}}},W=V,H=(a("9a8d"),Object(b["a"])(W,y,v,!1,null,null,null)),K=H.exports;l["default"].use(i["a"]);var Y=new i["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:h},{path:"/team-detail/:token",name:"Team Detail",component:K},{path:"/validationPage",name:"validationPage",component:function(){return a.e("about").then(a.bind(null,"f625"))}}]}),G=a("2f62");l["default"].use(G["a"]);var J=new G["a"].Store({state:{},mutations:{},actions:{}}),Q=a("5f5b"),X=(a("f9e3"),a("2dd8"),a("1dce")),Z=a.n(X),ee=a("a65d"),te=a.n(ee),ae=a("4a7a"),le=a.n(ae),re=(a("6dfc"),a("8e5f")),ie=a.n(re),oe=(a("e607"),a("3a60")),se=a.n(oe),ne=a("f62e"),ce=a("415c"),de=a.n(ce),me=a("ecee"),ue=a("c074"),pe=a("ad3d"),fe=a("b702");l["default"].use(Q["a"]),l["default"].use(Z.a),l["default"].use(te.a,{position:"top-right",duration:5e3,keepOnHover:!0,theme:"bubble"}),l["default"].component("v-select",le.a),l["default"].component("vue-multiselect",ie.a),l["default"].use(se.a),l["default"].use(ne["b"]),l["default"].filter("uploadpath",(function(e,t,a,l){var r="";if(t&&""!==t&&(r+="&width="+t),a&&""!==a&&(r+="&height="+a),l&&""!==l&&(r+="&style="+l),e)return-1==e.indexOf("https://")?u.readFileUrl+"?file="+e+r:e})),l["default"].use(a("2ead")),window._=a("2ef0");var be={name:"lodash"};l["default"].use(de.a,be),me["c"].add(ue["c"]),me["c"].add(fe["b"],fe["a"]),me["c"].add(ue["b"],ue["a"],ue["d"]),l["default"].component("font-awesome-icon",pe["a"]),l["default"].config.productionTip=!1,new l["default"]({router:Y,store:J,render:function(e){return e(r["default"])}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var l=a("e332"),r=a.n(l);r.a},"5c21":function(e,t,a){"use strict";var l=a("4dc6"),r=a.n(l);r.a},"9a8d":function(e,t,a){"use strict";var l=a("25f4"),r=a.n(l);r.a},a87f:function(e,t,a){e.exports=a.p+"img/mtc-logo.c9b292c4.png"},b103:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[];a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return r}))},bdd2:function(e,t,a){},cefe:function(e,t,a){"use strict";var l=a("559a"),r=a.n(l);r.a},e332:function(e,t,a){},e50d:function(e,t,a){},ef48:function(e,t,a){}});
//# sourceMappingURL=app.cf8e824f.js.map