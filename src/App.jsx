import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import Home from "./views";
import { Footer, Header } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
