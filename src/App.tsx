import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

import Header from "./components/Header";
import About from "./components/About";
import Aim from "./components/Aim";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <About />
      <Aim />
      <Features />
      <Footer />
    </ThemeProvider>
  );
}
