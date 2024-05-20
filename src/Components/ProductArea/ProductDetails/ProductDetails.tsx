import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { productService } from "../../../Services/ProductService";
import { ProductModel } from "../../../Models/ProductModel";

export function ProductDetails(): JSX.Element {
    
    const params = useParams();
    const id = +params.prodId;
    
    const [product, setProduct] = useState<ProductModel>();

    useEffect(()=>{
        productService.getOneProduct(id)
        .then(dbProduct=>{setProduct(dbProduct)})
        .catch(err=>alert(err.message));
    }, []);
    
    return (
        <div className="ProductDetails">
			<h3>Name: {product?.name}</h3>
            <h3>Name: {product?.price}</h3>
            <h3>Name: {product?.stock}</h3>
            <img src={product?.imageUrl}/>
        </div>
    );
}
