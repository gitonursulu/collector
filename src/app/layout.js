"use client";

import "./globals.css";
import { ThemeProvider, defaultTheme, Pane } from 'evergreen-ui';
import ProfileDropdown from "./components/ProfileDropdown";
import Sidebar from "./components/Sidenav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
      <ThemeProvider value={defaultTheme}>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
          <Sidebar />
          <div style={{ flex: 1 }}>
            <ProfileDropdown />
            {children}
          </div>
        </div>
      </ThemeProvider>
    </body>
  </html>
  );
}
