import Header from "./components/Header/Header";
import ButtonTop from "./components/ButtonTop/ButtonTop";
import SectionOne from "./components/SectionOne/SectionOne";
import Product from "./components/Product/Product";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Order from "./components/Order/Order";
import Comment from "./components/Comment/Comment";
import Galery from "./components/Galery/Galery";
import Media from "./components/Media/Media";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Loading from "./components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  window.onload = () => {
    setLoading(false);
  };
  return (
    <div className="main-container">
      <Header />
      <ButtonTop />
      <SectionOne />
      <Product />
      <Services />
      <About />
      <Order />
      <Comment />
      <Galery />
      <Media />
      <Footer />
      {loading && <Loading />}
    </div>
  );
}

export default App;
