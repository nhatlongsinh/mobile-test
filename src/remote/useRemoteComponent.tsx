import React, { lazy, useEffect, useMemo, useState } from "react";
import { fetchComponent, lazyWithPreload, parallel } from "./utils";

const components = [
  "home",
  "login",
  "readme",
  "reset",
  "search",
  "signup",
  "you",
];

type RemoteContextType = {
  [key: string]: React.LazyExoticComponent<any>;
};
const RemoteContext = React.createContext<RemoteContextType>({});
export const useRemoteComponents = () => React.useContext(RemoteContext);
export const useRemoteComponent = (__id: string) => {
  const components = useRemoteComponents();
  return components[__id];
}
export const RemoteComponentProvider = ({ children }: { children: React.ReactNode }) => {
  const [loadedComponents, setLoadedComponents] = useState<RemoteContextType>({});
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const start = Date.now();
    const remoteComponents: RemoteContextType = {};
    for (const __id of components) {
      const Component = lazyWithPreload(() => fetchComponent(__id));
      Component.preload!();
      remoteComponents[__id] = Component;
    }
    setLoadedComponents(remoteComponents);
    setLoaded(true);
    const end = Date.now();
    console.log('load time', end - start);
  }, [setLoadedComponents])

  return (
    <RemoteContext.Provider value={loadedComponents}>
      {loaded ? children : null}
    </RemoteContext.Provider>
  )
};
export default undefined;
