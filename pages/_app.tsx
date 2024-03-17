import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { usePathname } from "next/navigation";
import CssBaseline from "@mui/material/CssBaseline";
import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Monospace, sans-serif",
  primaryColor: "cyan",
  defaultRadius: "xl",
});

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
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <Component {...pageProps} />
      </MantineProvider>
    );
  } else {
    return <Component {...pageProps} />;
  }
}
