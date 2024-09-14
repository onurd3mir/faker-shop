import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
    let { id } = useParams();

    const BASE_URL = "https://api.escuelajs.co/api/v1/products/" + id;

    const [product, setProduct] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        const response = await axios.get(BASE_URL);
        setProduct(response.data);
        setLoad(true);
        console.log(response.data);
    }

    return (
        <div className="row">
            {
                load ? <>
                    <div className="col-6">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                {
                                    product.images.map(function (item, i) {

                                        console.log(i);
                                        return <div className={`carousel-item ${i == 0 ? "active" : ""}`} key={i}>
                                            <img src={item} className="d-block w-100" alt="..." />
                                        </div>
                                    })
                                }
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className="col-6">
                        <h1>{product.title}</h1>
                        <p className="text-primary"><small>{product?.category?.name}</small></p>
                        <p>{product.description}</p>
                        <button className="btn btn-primary">{product.price.toFixed(2)} € add to cart</button>
                    </div>
                </> : "Yükleniyor"
            }
        </div>
    )
}

export default ProductDetail