// app/analytics.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-4SMSJP6WDY", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
