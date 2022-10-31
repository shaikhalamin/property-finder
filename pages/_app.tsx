import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import SSRProvider from "react-bootstrap/SSRProvider";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PropertyLayout from "@/components/layouts/PropertyLayout";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout<P = {}> = AppProps<P> & {
  Component: NextPageWithLayout;
};

const MyApp = ({
  Component,
  pageProps,
}: AppPropsWithLayout<{ session: Session }>) => {

  const getLayout = Component.getLayout ?? ((page) => page);
  const { session, ...allProps  } = pageProps;

  if (!Component.getLayout) {
    return (
      <SessionProvider session={session}>
        <SSRProvider>
          <PropertyLayout>
            <Component {...allProps} />
          </PropertyLayout>
        </SSRProvider>
      </SessionProvider>
    );
  }

  return getLayout(
    <SSRProvider>
      <Component {...allProps} />
    </SSRProvider>
  );
};

export default MyApp;
