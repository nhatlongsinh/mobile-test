import React from "react";
import { FailedToRender } from "./FailedToRender";
import packages from "./packages";

function getParsedModule(
  code: string,
  moduleName: string,
  packages: [
    string,
    () => {
      exports: any;
    }
  ][]
) {
  const _this = Object.create(packages);
  function require(name: string) {
    if (!(name in _this) && moduleName === name) {
      let module = { exports: {} };
      _this[name] = () => module;
      let wrapper = Function("require, exports, module", code);
      wrapper(require, module.exports, module);
    } else if (!(name in _this)) {
      throw `Module '${name}' not found`;
    }
    return _this[name]().exports;
  }
  const result = require(moduleName);
  console.log(result);
  return result.default;
}

export async function fetchComponent(id: string) {
  try {
    const text = await fetch(`/assets/${id}.js`).then((a) => {
      if (!a.ok) {
        throw new Error("Network response was not ok");
      }
      return a.text();
    });
    return { default: getParsedModule(text, id, packages) };
  } catch (error) {
    console.log(error);
    return {
      default: FailedToRender,
    };
  }
}
