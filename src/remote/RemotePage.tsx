import React, { useMemo, Suspense } from 'react';
import { fetchComponent } from "./utils";

const DynamicComponent = ({ __id, children, ...props }: any) => {
  const Component = useMemo(() => {
    return React.lazy(async () => fetchComponent(__id))
  }, [__id]);

  return (
    <Suspense fallback={<div><div>Loading...</div></div>}>
      <Component {...props}>{children}</Component>
    </Suspense>
  )
};

export default React.memo(DynamicComponent);