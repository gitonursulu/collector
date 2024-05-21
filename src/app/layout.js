"use client";

import "./globals.css";
import { ThemeProvider, defaultTheme } from 'evergreen-ui';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
      <ThemeProvider value={defaultTheme}>
        {children}
      </ThemeProvider>
    </body>
  </html>
  );
}
