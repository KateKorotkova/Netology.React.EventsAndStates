import React, {useState} from "react";



function Toolbar({filters, selected, onSelectFilter}) {

    let filtersHtml = filters.map(function(f) {
                let selectedFilterClass = f === selected ? "filter-selected" : "";
                return <button onClick={onSelectFilter} className={`filter ${selectedFilterClass}`}>{f}</button>;
            });

    return <h1>{filtersHtml}</h1>;
}



export {Toolbar};