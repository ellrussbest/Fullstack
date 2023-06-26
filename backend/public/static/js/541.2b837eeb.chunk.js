"use strict";(self.webpackChunkfullstack=self.webpackChunkfullstack||[]).push([[541],{3999:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(1087),a=t(184),i=function(e){var n=e.obj,t=e.children,i=n||{},o=i.href,s=i.size,u=i.inverse,c=i.danger,l=i.to,d=i.type,p=i.onClick,f=i.disabled,v=i.style;return o?(0,a.jsx)("a",{className:"button button--".concat(s||"default"," ").concat(u&&"button--inverse"," ").concat(c&&"button--danger"),href:o,children:t}):l?(0,a.jsx)(r.rU,{to:l,className:"button button--".concat(s||"default"," ").concat(u&&"button--inverse"," ").concat(c&&"button--danger"),children:t}):(0,a.jsx)("button",{className:"button button--".concat(s||"default"," ").concat(u&&"button--inverse"," ").concat(c&&"button--danger"),type:d,onClick:p,disabled:f,style:v,children:t})}},7212:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(9439),a=t(2791),i=t(3999),o=t(184),s=function(e){var n=e.obj,t=(0,a.useState)(),s=(0,r.Z)(t,2),u=s[0],c=s[1],l=(0,a.useState)(),d=(0,r.Z)(l,2),p=d[0],f=d[1],v=(0,a.useState)(!1),h=(0,r.Z)(v,2),m=h[0],b=h[1],j=n||{},x=j.id,y=j.center,g=j.onInput,Z=j.errorText,w=(0,a.useRef)();(0,a.useEffect)((function(){if(u){var e=new FileReader;e.onload=function(){f(e.result)},e.readAsDataURL(u)}}),[u]);return(0,o.jsxs)("div",{className:"form-control",children:[(0,o.jsx)("input",{id:x,ref:w,style:{display:"none"},type:"file",accept:".jpg, .png, .jpeg",onChange:function(e){var n,t=m;e.target.files&&1===e.target.files.length?(n=e.target.files[0],c(n),b(!0),t=!0):(b(!1),t=!1),g(x,n,t)}}),(0,o.jsx)("div",{className:"image-upload ".concat(y&&"center"),children:(0,o.jsx)(i.Z,{obj:{type:"button",onClick:function(){w.current.click()},style:{background:"white",border:"none",color:"black"}},children:(0,o.jsxs)("div",{className:"image-upload__preview",children:[p&&(0,o.jsx)("img",{src:p,alt:"Preview"}),!p&&(0,o.jsx)("p",{children:"Please pick an image."})]})})}),!m&&(0,o.jsx)("p",{children:Z})]})}},2810:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(9439),a=t(1413),i=t(2791),o=t(1595),s=t(184),u=function(e,n){switch(n.type){case"CHANGE":return(0,a.Z)((0,a.Z)({},e),{},{value:n.val,isValid:(0,o.Gu)(n.val,n.validators)});case"TOUCH":return(0,a.Z)((0,a.Z)({},e),{},{isTouched:!0});default:return e}},c=function(e){var n=e.obj||{},t=n.element,a=n.id,o=n.type,c=n.placeholder,l=n.rows,d=n.label,p=n.validators,f=n.errorText,v=n.onInput,h=n.value,m=n.valid,b=(0,i.useReducer)(u,{value:h||"",isValid:m||!1,isTouched:!1}),j=(0,r.Z)(b,2),x=j[0],y=j[1],g=x.value,Z=x.isValid,w=x.isTouched;(0,i.useEffect)((function(){v(a,g,Z)}),[a,g,Z,v]);var k=function(e){y({type:"CHANGE",val:e.target.value,validators:p})},C=function(){y({type:"TOUCH"})};return t="input"===t?(0,s.jsx)("input",{id:a,type:o,placeholder:c,onChange:k,value:g,onBlur:C}):(0,s.jsx)("textarea",{id:a,rows:l||3,onChange:k,onBlur:C,value:g}),(0,s.jsxs)("div",{className:"form-control ".concat(!Z&&w&&"form-control--invalid"),children:[(0,s.jsx)("label",{htmlFor:a,children:d}),t,!Z&&w&&(0,s.jsx)("p",{children:f})]})}},3373:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(184),a=function(e){var n=e.obj,t=e.children,a=n||{},i=a.className,o=a.style;return(0,r.jsx)("div",{className:"".concat(i," card"),style:o,children:t})}},5434:function(e,n,t){var r=t(2921),a=t(3999),i=t(184);n.Z=function(e){var n=e.obj||{},t=n.onClear,o=n.error;return(0,i.jsx)(r.Z,{obj:{onCancel:t,header:"An Error Occured!",show:!!o,footer:(0,i.jsx)(a.Z,{obj:{onClick:t},children:"Okay"})},children:(0,i.jsx)("p",{children:o})})}},2921:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(4164),a=t(9422),i=t(1176),o=t(184),s=function(e){var n=e.obj,t=e.children,a=n||{},i=a.className,s=a.style,u=a.headerClass,c=a.header,l=a.onSubmit,d=a.contentClass,p=a.footerClass,f=a.footer,v=(0,o.jsxs)("div",{className:"modal ".concat(i),style:s,children:[(0,o.jsx)("header",{className:"modal__header ".concat(u),children:(0,o.jsx)("h2",{children:c})}),(0,o.jsxs)("form",{onSubmit:l||function(e){return e.preventDefault()},children:[(0,o.jsx)("div",{className:"modal__content ".concat(d),children:t}),(0,o.jsx)("footer",{className:"modal__footer ".concat(p),children:f})]})]});return(0,r.createPortal)(v,document.getElementById("modal-hook"))},u=function(e){var n=e.obj,t=e.children,r=n||{},u=r.onCancel,c=r.show;return(0,o.jsxs)(o.Fragment,{children:[c&&(0,o.jsx)(a.Z,{obj:{onclick:u}}),(0,o.jsx)(i.Z,{in:c,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,o.jsx)(s,{obj:n,children:t})})]})}},5094:function(e,n,t){t.d(n,{c:function(){return u}});var r=t(9439),a=t(4942),i=t(1413),o=t(2791),s=function(e,n){switch(n.type){case"INPUT_CHANGE":var t=!0;for(var r in e.inputs)e.inputs[r]&&(t=r===n.inputId?t&&n.isValid:t&&e.inputs[r].isValid);return(0,i.Z)((0,i.Z)({},e),{},{inputs:(0,i.Z)((0,i.Z)({},e.inputs),{},(0,a.Z)({},n.inputId,{value:n.value,isValid:n.isValid})),isValid:t});case"SET_DATA":return{inputs:n.inputs,isValid:n.formIsValid};default:return e}},u=function(e){var n=e||{},t=n.initialInputs,a=n.initialFormValidity,i=(0,o.useReducer)(s,{inputs:t,isValid:a}),u=(0,r.Z)(i,2),c=u[0],l=u[1];return[c,(0,o.useCallback)((function(e,n,t){l({type:"INPUT_CHANGE",value:n,inputId:e,isValid:t})}),[]),(0,o.useCallback)((function(e,n){l({type:"SET_DATA",inputs:e,formIsValid:n})}),[])]}},8340:function(e,n,t){t.d(n,{x:function(){return s}});var r=t(4165),a=t(5861),i=t(9439),o=t(2791),s=function(){var e=(0,o.useState)(!1),n=(0,i.Z)(e,2),t=n[0],s=n[1],u=(0,o.useState)(),c=(0,i.Z)(u,2),l=c[0],d=c[1],p=(0,o.useRef)([]),f=(0,o.useCallback)(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,i,o,u,c,l=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2&&void 0!==l[2]?l[2]:null,i=l.length>3&&void 0!==l[3]?l[3]:{},s(!0),o=new AbortController,p.current.push(o),e.prev=6,e.next=9,fetch(n,{method:t,body:a,headers:i,signal:o.signal});case 9:return u=e.sent,e.next=12,u.json();case 12:if(c=e.sent,p.current=p.current.filter((function(e){return e!==o})),u.ok){e.next=16;break}throw new Error(c.message);case 16:return s(!1),e.abrupt("return",c);case 20:throw e.prev=20,e.t0=e.catch(6),d(e.t0.message),s(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(n){return e.apply(this,arguments)}}(),[]);return function(e){var n=(0,o.useRef)(e),t=(0,o.useRef)(),r=(0,o.useRef)(!1),a=(0,o.useRef)(!1),s=(0,o.useState)(0),u=(0,i.Z)(s,2)[1];r.current&&(a.current=!0),(0,o.useEffect)((function(){return r.current||(t.current=n.current(),r.current=!0),u((function(e){return e+1})),function(){a.current&&t.current&&t.current()}}),[])}((function(){return function(){p.current.forEach((function(e){return e.abort()}))}})),{isLoading:t,error:l,sendRequest:f,clearError:function(){d(null)}}}},1595:function(e,n,t){t.d(n,{CP:function(){return c},Gu:function(){return d},Ox:function(){return l},hg:function(){return u}});var r=t(7762),a="REQUIRE",i="MINLENGTH",o="MAXLENGTH",s="EMAIL",u=function(){return{type:a}},c=function(e){return{type:i,val:e}},l=function(){return{type:s}},d=function(e,n){var t,u=!0,c=(0,r.Z)(n);try{for(c.s();!(t=c.n()).done;){var l=t.value;l.type===a&&(u=u&&e.trim().length>0),l.type===i&&(u=u&&e.trim().length>=l.val),l.type===o&&(u=u&&e.trim().length<=l.val),"MIN"===l.type&&(u=u&&+e>=l.val),"MAX"===l.type&&(u=u&&+e<=l.val),l.type===s&&(u=u&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){c.e(d)}finally{c.f()}return u}},2541:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(4165),a=t(5861),i=t(1413),o=t(9439),s=t(2791),u=t(3999),c=t(2810),l=t(3373),d=t(3108),p=t(5094),f=t(1595),v=t(5434),h=t(9895),m=t(8340),b=t(7212),j=t(184),x=function(){var e=(0,m.x)(),n=e.isLoading,t=e.error,x=e.sendRequest,y=e.clearError,g=(0,s.useContext)(d.V).login,Z=(0,p.c)({initialInputs:{email:{value:"",isValid:!1},password:{value:"",isValid:!1}},initialFormValidity:!1}),w=(0,o.Z)(Z,3),k=w[0],C=w[1],N=w[2],O=(0,s.useState)(!0),E=(0,o.Z)(O,2),I=E[0],T=E[1],P=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!I){e.next=13;break}return e.prev=2,e.next=5,x("".concat("https://place-mern-app-backend.herokuapp.com/api","/users/login"),"POST",JSON.stringify({email:k.inputs.email.value,password:k.inputs.password.value}),{"Content-Type":"application/json"});case 5:t=e.sent,g(t.userId,t.token),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:e.next=27;break;case 13:return e.prev=13,(a=new FormData).append("email",k.inputs.email.value),a.append("name",k.inputs.name.value),a.append("password",k.inputs.password.value),a.append("image",k.inputs.image.value),e.next=21,x("".concat("https://place-mern-app-backend.herokuapp.com/api","/users/signup"),"POST",a);case 21:i=e.sent,g(i.userId,i.token),e.next=27;break;case 25:e.prev=25,e.t1=e.catch(13);case 27:case"end":return e.stop()}}),e,null,[[2,9],[13,25]])})));return function(n){return e.apply(this,arguments)}}();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(v.Z,{obj:{error:t,onClear:y}}),(0,j.jsxs)(l.Z,{obj:{className:"authentication"},children:[n&&(0,j.jsx)(h.Z,{obj:{asOverlay:!0}}),(0,j.jsx)("h2",{children:"Login Required"}),(0,j.jsx)("hr",{}),(0,j.jsxs)("form",{onSubmit:P,children:[!I&&(0,j.jsx)(c.Z,{obj:{element:"input",id:"name",type:"text",label:"Your Name",validators:[(0,f.hg)()],errorText:"Please enter a name",onInput:C}}),!I&&(0,j.jsx)(b.Z,{obj:{id:"image",center:!0,onInput:C,errorText:"Please provide an image"}}),(0,j.jsx)(c.Z,{obj:{id:"email",element:"input",type:"email",label:"E-Mail",validators:[(0,f.Ox)()],errorText:"Please enter a valid Email",onInput:C}}),(0,j.jsx)(c.Z,{obj:{id:"password",element:"input",type:"password",label:"Password",validators:[(0,f.CP)(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:C}}),(0,j.jsx)(u.Z,{obj:{type:"submit",disabled:!k.isValid},children:I?"LOGIN":"SIGNUP"})]}),(0,j.jsxs)(u.Z,{obj:{inverse:!0,onClick:function(){I?N((0,i.Z)((0,i.Z)({},k.inputs),{},{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):N((0,i.Z)((0,i.Z)({},k.inputs),{},{name:void 0,image:void 0}),k.inputs.email.isValid&&k.inputs.password.isValid),T((function(e){return!e}))}},children:["SWITCH TO ",I?"SIGNUP":"Login"]})]})]})}},1413:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(4942);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}}}]);
//# sourceMappingURL=541.2b837eeb.chunk.js.map