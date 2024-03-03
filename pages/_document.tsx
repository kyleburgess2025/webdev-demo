import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from "next/document";
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from "@mui/material-nextjs/v13-pagesRouter";
import type { DocumentHeadTagsProps } from "@mui/material-nextjs/v13-pagesRouter";
import { usePathname } from "next/navigation";

export default function Document(props: DocumentProps & DocumentHeadTagsProps) {
  // Get current URL and change Document based on page
  const url = usePathname();
  const isMuiPage = url === "/mui";
  const isMantinePage = url === "/mantine";
  const isShadcnPage = url === "/shadcn";

  return (
    <Html lang="en">
      {isMuiPage && <DocumentHeadTags {...props} />}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
