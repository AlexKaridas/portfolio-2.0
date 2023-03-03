import { ThemeProvider } from "next-themes";

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
