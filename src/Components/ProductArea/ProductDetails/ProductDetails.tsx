import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/notify";
import "./ProductDetails.css";
import { NavLink } from "react-router-dom";

export function ProductDetails(): JSX.Element {
    
    const navigate = useNavigate();
    const params = useParams();
    const id = +params.prodId;
    
    const [product, setProduct] = useState<ProductModel>();

    useEffect(()=>{
        productService.getOneProduct(id)
        .then(dbProduct=>{setProduct(dbProduct)})
        .catch(err=>notify.error(err));
    }, []);
    
    async function deleteMe(){
        try{
            await productService.deleteProduct(id);
            notify.success("deleted");
            navigate("/products");
        }
        catch(err: any){
            notify.error(err);
        }
    }

    return (
        <div className="ProductDetails">
			<h3>Name: {product?.name}</h3>
            <h3>Name: {product?.price}</h3>
            <h3>Name: {product?.stock}</h3>
            <img src={product?.imageUrl}/>

            <br/><br/>
            <NavLink to="/products">Back</NavLink>
            <span>|</span>
            <NavLink to={"/products/edit/"+product?.id}>Edit</NavLink>
            <span>|</span>
            <NavLink to="#" onClick={deleteMe}>Delete</NavLink>
        </div>
    );
}
