import React, { useMemo, Suspense } from 'react';
import { useRemoteComponent } from './useRemoteComponent';
import { fetchComponent, lazyWithPreload } from './utils';

const DynamicComponent = ({ __id, children, ...props }: any) => {
  // const Component = React.lazy(async () => fetchComponent(__id));

  const Component = useRemoteComponent(__id);
  if (!Component) return null;
  return (
    <Suspense fallback={<div><div>Loading...</div></div>}>
      <Component {...props}>{children}</Component>
    </Suspense>
  )
};

export default React.memo(DynamicComponent);