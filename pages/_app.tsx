import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { usePathname } from "next/navigation";
import CssBaseline from "@mui/material/CssBaseline";
import { MantineProvider } from "@mantine/core";

export default function App(props: AppProps) {
  const url = usePathname();
  const isMuiPage = url === "/mui";
  const isMantinePage = url === "/mantine";
  const isHome = url === "/";

  const { Component, pageProps } = props;
  if (isMuiPage) {
    return (
      <AppCacheProvider {...props}>
        <CssBaseline />
        <Component {...pageProps} />
      </AppCacheProvider>
    );
  } else if (isMantinePage || isHome) {
    return (
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    );
  } else {
    return <Component {...pageProps} />;
  }
}
