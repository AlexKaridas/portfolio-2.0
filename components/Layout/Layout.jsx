import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
});
const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div lang="en" className={notoSansJP.className}>
        <Head>
          <title key="title">Alex Karidas</title>
        </Head>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
