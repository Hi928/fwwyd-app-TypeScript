import Head from "next/head";

import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mt-2">{children}</main>
      <Footer name="名前 太郎" copyRight="©︎2021 KIKAGAKU" />
    </>
  );
};
