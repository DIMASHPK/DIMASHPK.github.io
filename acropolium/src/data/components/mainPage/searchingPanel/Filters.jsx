import React from "react";
import {Context} from "../../Context";



export const Filters = ({toggleFilters, visibleFilters, applyFilter}) => {

    let {filters, filter} = React.useContext(Context);

    return(
        <div className={`filters ${visibleFilters ? 'noRadius' : ""}`} onClick={toggleFilters}>
            <div className="activeSort">filters by{filter ? ` ${filter}` : '...'}</div>
            {
                visibleFilters &&
                <div className="possibleFilters">
                    {filters.map(filter => (
                        <div
                            className="sortOption"
                            key={filter.id}
                            onClick={() => applyFilter(filter.name)}
                        >
                            {filter.name}
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}