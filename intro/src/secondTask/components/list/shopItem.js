
function ShopItem({item}) {

    return (
        <>
            <tr>
                <td><img width={"200px"} src={item.img}/></td>
                <td className="name">{item.name}</td>
                <td>{item.color}</td>
                <td className="price">${item.price}</td>
                <td><button className="add-to-cart-btn">ADD TO CARD</button></td>
            </tr>
        </>
    );
}

export {ShopItem};