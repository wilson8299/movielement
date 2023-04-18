import Router from "./router";
import { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { GlobalStyles, darkTheme } from "@/components/Styles";
import { Header, Footer } from "@/components";

const suspenseStyle = {
  height: "100vh",
  width: "100vw",
  backgroundColor: "#171d27",
};

function App() {
  const ScrollToTop = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Suspense fallback={<div style={suspenseStyle}></div>}>
        <Header />
        <ScrollToTop>
          <Router />
        </ScrollToTop>
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
