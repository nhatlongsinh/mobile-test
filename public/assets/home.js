"use strict";var e=require("react"),n=require("@ionic/react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=t(e),o=function(e){return"https://ionic-react-demos.s3.amazonaws.com/".concat(e)};function a(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var l=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&l.firstChild?l.insertBefore(o,l.firstChild):l.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}a(".new-track {\n  cursor: pointer;\n}");a(".form .below-form {\n  padding: 15px 0;\n  text-align: center;\n}\n\n.form ion-button {\n  margin: 16px 16px 0 16px;\n}\n\n.form a {\n  display: block;\n  margin-bottom: 15px;\n}\n\n.form a.create {\n  font-size: 18px;\n}\n\n.form a:last-child {\n  color: #aaa;\n  text-decoration: none;\n}\n");a(".test-component {\n  background-color: white;\n  border: 1px solid black;\n  padding: 16px;\n  width: 360px;\n  text-align: center;\n  color: gray;\n}\n.test-component .heading {\n  font-size: 64px;\n}\n.test-component.test-component-secondary {\n  background-color: black;\n  color: white;\n}\n\n.test-component {\n  background-color: white;\n  border: 1px solid black;\n  padding: 16px;\n  width: 360px;\n  text-align: center;\n  color: gray;\n}\n.test-component .heading {\n  font-size: 64px;\n}\n.test-component.test-component-secondary {\n  background-color: black;\n  color: white;\n}\n\n.test-component {\n  background-color: white;\n  border: 1px solid black;\n  padding: 16px;\n  width: 360px;\n  text-align: center;\n  color: gray;\n}\n.test-component .heading {\n  font-size: 64px;\n}\n.test-component.test-component-secondary {\n  background-color: black;\n  color: white;\n}");module.exports=function(e){var t=e.hotTracks,a=e.newTracks,r=e.doPlay;return l.default.createElement(l.default.Fragment,null,l.default.createElement(n.IonHeader,null,l.default.createElement(n.IonToolbar,null,l.default.createElement(n.IonTitle,null,"Music"))),l.default.createElement(n.IonContent,null,l.default.createElement(n.IonList,null,l.default.createElement(n.IonListHeader,null,l.default.createElement(n.IonLabel,null,"Hot Tracks")),t.map((function(e){return l.default.createElement(n.IonItem,{key:e.title,onClick:function(){return r(e)},button:!0},l.default.createElement(n.IonThumbnail,{slot:"start"},l.default.createElement("img",{src:o(e.img)})),l.default.createElement(n.IonLabel,null,l.default.createElement("h2",null,e.title),l.default.createElement("p",null,e.artist)))}))),l.default.createElement(n.IonList,null,l.default.createElement(n.IonListHeader,null,l.default.createElement(n.IonLabel,null,"New Music")),l.default.createElement(n.IonGrid,null,l.default.createElement(n.IonRow,null,a.map((function(e){return l.default.createElement(n.IonCol,{size:"6",className:"new-track",key:e.title,onClick:function(){return r(e)}},l.default.createElement("img",{src:o(e.img)}),l.default.createElement(n.IonItem,{lines:"none"},l.default.createElement(n.IonLabel,null,l.default.createElement("h3",null,e.title),l.default.createElement("p",null,e.artist))))})))))))};
