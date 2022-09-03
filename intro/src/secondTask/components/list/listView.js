import {ShopItem} from "./shopItem";


function ListView({items}) {
    let listHtml = items.map((item) =>{
        return <ShopItem item={item} />
    });

    return (
        <table> {listHtml} </table>
    );
}

export {ListView};