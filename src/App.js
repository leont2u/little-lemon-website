import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
