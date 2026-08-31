import "./Product.css"
import Price from "./Price";

function Product({title , idx}){
    let oldPrices = ["12,455","11,900","1,555","599"];
    let newPrices = ["8,999","7,555","655","255"];
    let description =[
        "8,000 DPI",
        "intuitive surface",
        "designed for iPad Pro ",
        "wireless",
    ];
    
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
            
        </div>
        
    );
}

export default Product;