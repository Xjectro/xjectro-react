'use client';

import React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function Provider({ children }: React.PropsWithChildren) {
  return (
    <React.Fragment>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        enableColorScheme
      >
        {children}
      </NextThemesProvider>
    </React.Fragment>
  );
}
