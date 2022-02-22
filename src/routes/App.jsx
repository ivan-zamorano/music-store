import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Carrito from "../containers/Carrito";
import Productos from "../containers/Productos";
import Error404 from "../containers/Error404";
import Layout from "../components/Layout";
import Data from "../context/Data";

const App = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <BrowserRouter>
        <Data>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/productos" element={<Productos />} />
              <Route path="" element={<Error404 />} />
            </Routes>
          </Layout>
        </Data>
      </BrowserRouter>
    </>
  );
};

export default App;
