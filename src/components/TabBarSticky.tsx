import React, { useEffect, useState } from 'react';

const waitForElement = (sel: string, cb: { (tabBar: any): void; (arg0: any): void; }) => {
  const el = document.querySelector<HTMLElement>(sel);

  if (!el || !el.offsetHeight) {
    requestAnimationFrame(() => waitForElement(sel, cb));
  } else {
    cb(el);
  }
}

const TabBarSticky = ({ children }: any) => {
  const [top, setTop] = useState(0);

  useEffect(() => {
    waitForElement('ion-tab-bar', (tabBar: { getBoundingClientRect: () => any; }) => {
      if (tabBar) {
        const box = tabBar.getBoundingClientRect();
        setTop(window.innerHeight - box.top);
      }
    })

  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: `${top}px`,
      width: '100%',
      zIndex: '1000'
    }}>
      {children}
    </div>
  );
};

export default TabBarSticky;