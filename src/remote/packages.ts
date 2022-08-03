import * as React from "react";
import * as ReactRuntime from "react/jsx-runtime";
import * as IonicReact from "@ionic/react";
import * as tslib from "tslib";
// these are packages that remote pages need to use
const Packages: { [key: string]: any } = {
  react: () => React,
  "react/jsx-runtime": () => ReactRuntime,
  "@ionic/react": () => IonicReact,
  tslib: () => tslib,
};

const fromPairs = (pairs: [string, any][]) =>
  Object.assign({}, ...pairs.map(([k, v]) => ({ [k]: v })));
const AllPackages: [
  string,
  () => {
    exports: any;
  }
][] = fromPairs(
  Object.keys(Packages).map((k) => [k, () => ({ exports: Packages[k]() })])
);

export default AllPackages;
