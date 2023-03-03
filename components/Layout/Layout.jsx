import { ThemeProvider } from "next-themes";
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div>
        <Head>
          <title key="title">Alex Karidas</title>
        </Head>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
