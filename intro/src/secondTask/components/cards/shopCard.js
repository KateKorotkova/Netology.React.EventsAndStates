
function ShopCard({product}) {
    return (
        <>
            <div className="shop-card">
                <div className="shop-card-header">
                    <div className="name">{product.name}</div>
                    <div>{product.color}</div>
                    <img className="shop-card-img" src={product.img} />
                </div>
               
                <span className="price">${product.price}</span> 
                <button style={{float: 'right'}} className="add-to-cart-btn">ADD TO CARD</button>
            </div>
        </>
    );
}

export {ShopCard};