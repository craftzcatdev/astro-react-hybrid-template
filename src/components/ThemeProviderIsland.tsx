import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export function ThemeProviderIsland() {
  useEffect(() => {
    console.log("ThemeProvider mounted");
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="theme"
    >
      {/* Just provide context only */}
      <div style={{ display: "none" }} />
    </ThemeProvider>
  );
}
