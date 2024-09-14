import { Route, useParams } from "react-router-dom";

function ProductDetail() {
    let { id } = useParams();
    console.log(id);
    return (
        <>
            
        </>
    )
}

export default ProductDetail