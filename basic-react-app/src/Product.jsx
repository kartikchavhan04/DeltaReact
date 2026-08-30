import "./Product.css"
import Price from "./Price";

function Product({title}){
    let oldPrices = ["12,455","11,900","1,555","599"]
    let newPrices = ["8,999","7,555","655","255"]
    
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>description</p>
            <Price oldPrice="123" newPrice="345" />
            
        </div>
        
    );
}

export default Product;