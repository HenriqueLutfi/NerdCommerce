import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
// import { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import Navbar from "@/Components/navbar/navbar";
import "@/styles/globals.css";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   require("bootstrap/dist/js/bootstrap");
  // }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}
