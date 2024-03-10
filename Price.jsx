

function Price({oldPrice,newPrice}){
    let price={
marginTop:"50px"
    }
    let styles={
        textDecoration:"line-through",
        fontSize:"2rem"
    }
    return(
        <div style={price}>
            <span style={styles}>{oldPrice}</span>
           &nbsp; &nbsp; &nbsp; &nbsp;
            <span>{newPrice}</span>
        </div>
    )
}
export default Price;