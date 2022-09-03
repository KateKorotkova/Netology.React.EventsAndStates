

function ProjectList({projects}){
    
    let projectsHtm = projects.map(function(proj) {
        return <img className="filter-img" src={proj.img} />
    });

    return <div>{projectsHtm}</div>;
}



export {ProjectList};