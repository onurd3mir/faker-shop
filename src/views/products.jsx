import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Product from "../components/product";

import axios from "axios";
import Category from "../components/category";

function Products() {
    let { id } = useParams();

    const BASE_URL = "https://api.escuelajs.co/api/v1/products?offset=0&limit=36";
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get(BASE_URL);
        setProduct(response.data);
    }

    const getProductByCategory = async () => {
        //const response = await axios.get("https://api.escuelajs.co/api/v1/products/?categoryId="+id);
        //setProduct(response.data);
    }

    return (
        <div className="row">
            <div className="col-9">
                <div className="row">
                    {
                        products.map((product) =>
                            <Product product={product} key={product.id} />
                        )
                    }
                </div>
            </div>
            <div className="col-3">
                <Category getProduct={getProductByCategory} />
            </div>
        </div>
    )
}

export default Products