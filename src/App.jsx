import { useState, useEffect } from "react";

import Nav from './components/nav'
import Product from "./components/product";

import axios from "axios";

function App() {
  const BASE_URL = "https://api.escuelajs.co/api/v1/products";
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get(BASE_URL);
    setProduct(response.data);
  }

  return (
    <>
      <Nav />
      <div className='container mt-5'>
        <div className="row">
          {
            products.map((product) =>
              <Product product={product} key={product.id} />
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
