import { Inter } from "next/font/google";

import { About } from "components/About/About";
import { FirstView } from "components/FirstView/FirstView";
import { Skills } from "components/Skills/Skills";
import { Values } from "components/Values/Values";
import { Future } from "components/Future/Future";
import { Layout } from "components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <FirstView title="メインタイトル" subTitle="サブタイトル" />
      <About title="私について" subTitle="ABOUT" />
      <Skills title="スキル" subTitle="SKILLS" />
      <Values title="価値観" subTitle="VALUES"/>
      <Future title="3年後にやりたいこと" subTitle="FUTURE"/>
    </Layout>
  );
}
