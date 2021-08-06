import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#FD5B61"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        options={{ showSpinner: false }}
        showSpinner={false}
        showOnShallow={true}
      />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
