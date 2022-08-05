"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
const e = require("react/jsx-runtime"),
  i = require("@ionic/react");
exports.default = () =>
  (0, e.jsxs)(e.Fragment, {
    children: [
      (0, e.jsx)(i.IonHeader, {
        children: (0, e.jsx)(i.IonToolbar, {
          children: (0, e.jsx)(i.IonTitle, { children: "Readme" }),
        }),
      }),
      (0, e.jsxs)(
        i.IonContent,
        Object.assign(
          { className: "ion-padding" },
          {
            children: [
              (0, e.jsx)("h2", { children: "Built with Ionic React" }),
              (0, e.jsx)("p", {
                children: (0, e.jsx)("b", {
                  children:
                    "Disclaimer: this app does not actually play audio (due to licensing and lack of public APIs reasons)",
                }),
              }),
              (0, e.jsxs)("p", {
                children: [
                  "This is a demo built with ",
                  (0, e.jsx)(
                    "a",
                    Object.assign(
                      {
                        target: "_blank",
                        href: "http://ionicframework.com/docs/react",
                      },
                      { children: "Ionic React" }
                    )
                  ),
                  ", JavaScript (rather than TS).",
                ],
              }),
              (0, e.jsx)("p", {
                children:
                  "This app follows many Ionic React best practices and is a great starting point or reference for building a complex app with tabs and authentication pages.",
              }),
              (0, e.jsxs)("p", {
                children: [
                  "This app will run on iOS, Android, or the Web (as a Progressive Web App) using the power of ",
                  (0, e.jsx)(
                    "a",
                    Object.assign(
                      {
                        target: "_blank",
                        href: "http://capacitor.ionicframework.com/",
                      },
                      { children: "Capacitor" }
                    )
                  ),
                  " to access Native and Web APIs.",
                ],
              }),
              (0, e.jsx)("p", {
                children: (0, e.jsx)("i", {
                  children:
                    "Note: if you notice any CSS weirdness refresh the stackblitz editor as hot reload can sometimes get out of sync",
                }),
              }),
            ],
          }
        )
      ),
    ],
  });
