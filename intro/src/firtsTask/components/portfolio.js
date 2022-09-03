import React, {useState} from "react";
import {Toolbar} from "./toolbar";
import {ProjectList} from "./projectList";
import projectsJson from "../data/projects.json"



function Portfolio() {
    const [selectedFilter, setSelectedFilterValue] = useState("All");

    const onSelectedFilterChange = (ev) => {
        setSelectedFilterValue(ev.target.innerHTML);
    }

    let filteredProjects = selectedFilter === "All" ? projectsJson : projectsJson.filter((p) => p.category == selectedFilter);

    return (
        <>
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={selectedFilter}
                onSelectFilter={onSelectedFilterChange}/>

            <ProjectList projects={filteredProjects}/>
       </>
      );
}



export {Portfolio};