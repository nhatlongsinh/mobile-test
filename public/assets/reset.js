"use strict";var e=require("react"),t=require("@ionic/react");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(e);function a(e,t,n,r){return new(n||(n=Promise))((function(a,l){function o(e){try{c(r.next(e))}catch(e){l(e)}}function u(e){try{c(r.throw(e))}catch(e){l(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}c((r=r.apply(e,t||[])).next())}))}function l(e,t){var n,r,a,l,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function u(l){return function(u){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(a=o.trys,(a=a.length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}}module.exports=function(n){var o=n.submit,u=n.onBack,c=e.useState(""),i=c[0],f=c[1];return r.default.createElement(r.default.Fragment,null,r.default.createElement(t.IonHeader,null,r.default.createElement(t.IonToolbar,{color:"light"},r.default.createElement(t.IonButtons,{slot:"start"},r.default.createElement(t.IonBackButton,{defaultHref:"/"})),r.default.createElement(t.IonTitle,null,"Reset Password"))),r.default.createElement(t.IonContent,{className:"form"},r.default.createElement("form",{onSubmit:function(e){return function(e){return a(void 0,void 0,void 0,(function(){return l(this,(function(t){return e.preventDefault(),o(i),[2]}))}))}(e)},action:"post"},r.default.createElement(t.IonList,null,r.default.createElement(t.IonItem,null,r.default.createElement(t.IonLabel,null,"Email"),r.default.createElement(t.IonInput,{type:"email",value:i,onInput:function(e){return f(e.currentTarget.value)}})),r.default.createElement(t.IonButton,{expand:"block",type:"submit"},"Reset Password"))),r.default.createElement("div",{className:"below-form"},r.default.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),u()}},"Back to login"))))};
