import Product from "./Product"

function Products(){
    const prodStyle = { display: "flex", justifyContent: "center", fontSize: "20px"};
    const borderStyle = {boxShadow:"10px 10px 8px 10px #888888", margin:"10px",padding:"35px"};
    const centerStyle = { textAlign: "center", width: "450", margin: "auto"};
    return (
       // <div style={borderStyle}>
        <div style={prodStyle}>
        
        
            <Product price="99.99$"  src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" title="Winter Jacket" />
            <Product price="99.99$"  src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" title="Winter Jacket"/>
            <Product price="99.99$"  src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" title="Winter Jacket"/>
        </div>
        
      //  </div>
    
    )
}

export default Products;