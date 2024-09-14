import { useState, useEffect } from "react";

import Product from "../components/product";

import axios from "axios";

function Products() {
    const BASE_URL = "https://api.escuelajs.co/api/v1/products?offset=0&limit=36";
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get(BASE_URL);
        setProduct(response.data);
    }

    return (
        <div className="row">
            {
                products.map((product) =>
                    <Product product={product} key={product.id} />
                )
            }
        </div>
    )
}

export default Products