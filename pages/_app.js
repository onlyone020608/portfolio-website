import { globalStyles } from "@/styles/GlobalStyles";
import { Global } from "@emotion/react";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}
