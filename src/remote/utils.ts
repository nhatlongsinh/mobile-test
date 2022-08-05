import React, { ComponentType, createElement, lazy } from "react";
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
    const result = _this[name]();
    return result.exports;
  }
  const result = require(moduleName);
  // console.log(result);
  if (result.default) return result.default;
  return result;
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
export const parallel = <T>(
  list: (() => Promise<T>)[],
  ops: {
    max: number;
    onComplete?: (result: T) => Promise<void> | void;
    onError?: (error: any) => Promise<void> | void;
  } = {
    max: 10,
  }
) => {
  return new Promise((resolve, reject) => {
    // init
    let finishedIndex = 0;
    let runningTasks = 0;
    const length = list.length;
    let { max, onComplete, onError } = ops;
    // max
    if (max > length) max = length;
    // execute
    const execute = async (func: () => Promise<T>) => {
      try {
        const result = await func();
        if (onComplete) {
          await onComplete(result);
        }
      } catch (error: any) {
        if (onError) {
          await onError(error);
        }
      } finally {
        runningTasks -= 1;
        next();
      }
    };
    // next
    const next = () => {
      while (runningTasks < max) {
        // stop
        if (finishedIndex >= length) {
          resolve(true);
          return;
        }
        // continue
        runningTasks += 1;
        const func = list[finishedIndex];
        execute(func);
        finishedIndex += 1;
      }
    };
    // start
    next();
  });
};
type PreloadableComponent<T extends ComponentType<any>> = T & {
  preload: () => Promise<void>;
};
export const lazyWithPreload = <T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) => {
  let LoadedComponent: T | undefined;
  let factoryPromise: Promise<void> | undefined;

  const LazyComponent = lazy(factory);

  const loadComponent = () =>
    factory().then((module) => {
      LoadedComponent = module.default;
    });

  const Component = ((props) =>
    createElement(
      LoadedComponent || LazyComponent,
      props
    )) as PreloadableComponent<T>;

  Component.preload = () => factoryPromise || loadComponent();

  return Component;
};
