import Script from "next/script";
import { THEME_STORAGE_KEY } from "@/lib/theme";

export default function ThemeScript() {
  return (
    <Script id="theme-init" strategy="beforeInteractive">
      {`(function(){try{if(localStorage.getItem("${THEME_STORAGE_KEY}")==="light"){document.documentElement.classList.add("light")}}catch(e){}})();`}
    </Script>
  );
}
