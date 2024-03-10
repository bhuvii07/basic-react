

import Product from "./Product";

function ProductGroup(){
//    let options=["fast","durable"];
// console.log(options);
//   let options=["fast","hii-tech","durable"]
let styles={
    height:"100vh",
      display:"flex",
      flexWrap:"nowwrap",
      justifyContent:"center",
      alignItems:"center"
}
    return(
    <div style={styles}>
       <Product title="Dell 15 Vastro 3510" desc="Rheinland Certified ComfortviewReduce Harmful Blue Light/Backlit KB+FPR/Win 11+MSO'21/15 Month" idx={0}/>
       <Product title="Boat airdobes 170" desc="Rheinland Certified ComfortviewReduce Harmful Blue Light/Backlit KB+FPR/Win 11+MSO'21/15 Month" idx={1}/>
       <Product title="Boult Z40" desc="Rheinland Certified ComfortviewReduce Harmful Blue Light/Backlit KB+FPR/Win 11+MSO'21/15 Month" idx={2}/>
       <Product title="Lenovo M105G" desc="Rheinland Certified ComfortviewReduce Harmful Blue Light/Backlit KB+FPR/Win 11+MSO'21/15 Month" idx={3}/>
    </div>
    )
}
export default ProductGroup;