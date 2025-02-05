import { globalStyles } from "@/styles/GlobalStyles";
import { Global } from "@emotion/react";
import NavBar from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: true,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <div className={inter.className}>
        <NavBar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
