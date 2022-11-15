import { useEffect, useState } from "react";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => { });
  return (
    <ThemeProvider>
      <div>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
