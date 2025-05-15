'use client';

import { Toaster as Sonner, ToasterProps } from 'sonner';

const Toaster = (props: ToasterProps) => {
  return (
    <Sonner
      className="toaster group cursor-grab"
      style={
        {
          '--normal-bg': 'var(--surface-100)',
          '--normal-text': 'var(--typography-50)',
          '--normal-border': 'var(--surface-500)',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
