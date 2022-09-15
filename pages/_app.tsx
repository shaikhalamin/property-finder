import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import SSRProvider from "react-bootstrap/SSRProvider";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  if (!Component.getLayout) {
    return (
      <SSRProvider>
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      </SSRProvider>
    );
  }

  return getLayout(
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}
