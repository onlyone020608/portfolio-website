import { globalStyles } from "@/styles/GlobalStyles";
import { Global } from "@emotion/react";
import NavBar from "@/components/Navbar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
