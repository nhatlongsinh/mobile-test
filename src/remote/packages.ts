import * as React from "react";
import * as IonicReact from "@ionic/react";
// these are packages that remote pages need to use
const Packages: { [key: string]: any } = {
  react: () => React,
  "@ionic/react": () => IonicReact,
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
