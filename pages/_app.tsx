import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { usePathname } from "next/navigation";
import CssBaseline from "@mui/material/CssBaseline";

export default function App(props: AppProps) {
  const url = usePathname();
  const isMuiPage = url === "/mui";
  const isMantinePage = url === "/mantine";
  const isShadcnPage = url === "/shadcn";

  const { Component, pageProps } = props;
  if (isMuiPage) {
    return (
      <AppCacheProvider {...props}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </AppCacheProvider>
    );
  } else {
    return <Component {...pageProps} />;
  }
}
