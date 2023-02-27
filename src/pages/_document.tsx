import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "@/styles";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="../../public/assets/fonts/cyberpunk/CyberwayRiders-lg97d.ttf"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
