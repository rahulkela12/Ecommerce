import { FaPlus } from "react-icons/fa";
import { server } from "../redux/store";
import { CartItem } from "../types/types";

type ProductsProps = {
    productId:string,
   photo:string,
   name:string,
   price:number,
   stock:number, 
   handler:(cartItem: CartItem) => string | undefined;

}

//link of server


const ProductCard = ({name,photo,productId,price,stock,handler}:ProductsProps) => {
  return (
    <div className="product-card">
        <img src={`${server}/${photo}`} alt={name} />
        <p>{name}</p>
         <span>₹{price}</span>
         <div>
            <button onClick={()=>handler({name,photo,productId,price,stock,quantity:1})}>
                <FaPlus/>
            </button>
         </div>
    </div>
  )
}

export default ProductCard;