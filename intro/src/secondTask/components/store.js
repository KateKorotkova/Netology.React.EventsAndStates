import React, {useState} from "react";
import productsJson from "../data/products.json";
import {IconSwitch} from "./iconSwitch";
import {CardsView} from "./cards/cardsView";
import {ListView} from "./list/listView";


function Store() {
    const [state, setState] = useState("view_list");
    

    const changeView = (ev) => {
        let newState = ev.target.innerHTML === "view_list" ? "view_module" : "view_list";
       setState(newState);
    };

    return (
        <>
           <IconSwitch icon={state} onSwitch={changeView}/>
           {state === "view_list" ? <CardsView cards={productsJson}/> : <ListView items={productsJson}/> } 
        </>
    );
}

export {Store};