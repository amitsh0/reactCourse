import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Home } from "../../HomeArea/Home/Home";
import { ProductList } from "../../ProductArea/ProductList/ProductList";
//import { About } from "../../AboutArea/About/About";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { Suspense, lazy } from "react";
import { ProductDetails } from "../../ProductArea/ProductDetails/ProductDetails";
import { EmployeeList } from "../../EmployeeArea/EmployeeList/EmployeeList";

export function Routing(): JSX.Element {
    
    const LazyAbout = lazy(()=>import("../../AboutArea/About/About"))
    
    const suspenseAbout = <Suspense> <LazyAbout/> </Suspense>

    return (
        <div className="Routing">
			<Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/products" element={<ProductList/>}/>
                <Route path="/products/details/:prodId" element={<ProductDetails/>}/>
                <Route path="/employees" element={<EmployeeList/>}/>
                <Route path="/about" element={suspenseAbout}/>
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path = "*" element={<PageNotFound/>}/>
            </Routes>
        </div>
    );
}
