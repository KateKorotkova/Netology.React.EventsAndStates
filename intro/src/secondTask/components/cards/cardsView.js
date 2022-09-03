import {ShopCard} from "./shopCard";


function CardsView({cards}) {
    let cardsHtml = cards.map(function(prod) {
        return <ShopCard product={prod}/>;
    });

    return (
        <>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {cardsHtml}
        </div>
        </>
    );
}

export {CardsView};