import { useDispatch, useSelector } from "react-redux";
import { Product } from "./Product";
import { SubTotal } from "./SubTotal";
export function AddToCartList() { 
    const dispatch = useDispatch();
    const productList = useSelector((state)=>state.myProductList.productListData);
    console.log(productList);
    return (
        <div>
            {productList.map((pd, index) => (
                <Product key={index} product={pd} />
            ))}           
             <SubTotal />
        </div>
    );
}