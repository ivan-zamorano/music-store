import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from "../containers/Carrito";
import Productos from "../containers/Productos";
import Error404 from "../containers/Error404";
import Detalle from "../containers/Detalle";
import Test from "../containers/Test";
import Layout from "../components/Layout";
import ContextProvider from "../context/ContextProvider";
import { FilterProvider } from "../context/FilterProvider";

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
        <ContextProvider>
          <FilterProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Productos />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/detalle" element={<Detalle />} />
                <Route path="/test" element={<Test />} />
                <Route path="" element={<Error404 />} />
              </Routes>
            </Layout>
          </FilterProvider>
        </ContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
