'use client';

import { ThemeProvider } from "@material-tailwind/react";


export function Providers({ children }: any) {
  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  );
}