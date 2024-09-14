import { Link } from "react-router-dom";

function Product({ product }) {
    return (
        <div className='col-4 mb-5'>
            <div className="card">
                <img src={product.images[0].replace("/\/","")} className="card-img-top" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description.substring(0, 200)}...</p>
                    <Link to={`/products/${product.id}`} className="btn btn-primary"> {product.price} Detay</Link>
                </div>
            </div>
        </div>
    )
}

export default Product