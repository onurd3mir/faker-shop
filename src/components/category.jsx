import { Link } from "react-router-dom";

export default function Category({ getProduct }) {
    return (
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <Link to='/products'> All</Link>
            </li>
            <li className="list-group-item">
                <Link to='/products/category/1' onClick={ getProduct(5)} >Clothes</Link>
            </li>
            <li className="list-group-item">
                <Link to='/products/category/2' onClick={ getProduct(5)} >Electronik</Link>
            </li>
            <li className="list-group-item">
                <Link to='/products/category/3' onClick={ getProduct(5)} >Furniture</Link>
            </li>
            <li className="list-group-item">
                <Link to='/products/category/4' onClick={ getProduct(5)} >Shoes</Link>
            </li>
            <li className="list-group-item" >
                <Link to='/products/category/5' onClick={ getProduct(5)} >Miscellaneous</Link>
            </li>
        </ul>
    )
}