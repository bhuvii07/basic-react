import "./Product.css";
import Price from "./Price";

function Product({title,desc,idx}){
    // let list=features.map((feature)=><li>{feature}</li>)
//    if(price>=20000)
// let isDiscount=price>=20000 ? "Discount of 5%" : "";
let oldPrices=["12,000","10,000","1,200","1,000"];
let newPrices=["10,000","8,000","1,000","800"];
let button={
    height:"40px",
    width:"120px",
    backgroundColor:"black",
    color:"white",
    borderRadius:"20px",
    marginTop:"50px"
}
    return (
        <div className="Product">
         <h3>{title}</h3>
         <p>{desc}</p>
         <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
         <button style={button}>order now</button>
            {/* <p>Discount of 5%</p> */}
            {/* <p>{isDiscount}</p> */}
           
        </div>
    )
   
//    else {
//     return (
//         <div className="Product">
//             <h4>{title}</h4>
//             <p>Price :{price}</p>
           
//         </div>
//     )
   }
   
//  return (
//          <div className="Product">
//              <h4>{title}</h4>
//              <p>Price :{price}</p>
//             {/* <h3>{list}</h3> */}
//          </div>
//      )

export default Product;