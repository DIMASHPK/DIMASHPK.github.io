import React from "react";
import {Context} from "../../Context";



export const Sorts = ({toggleSortingFilter, applySort, visibleSort}) => {
    let {sorts, sort} = React.useContext(Context);

    return(
        <div className={`sort ${visibleSort ? 'noRadius' : ""}`} onClick={toggleSortingFilter}>
            <div className="activeSort">sorting by{sort ? ` ${sort}` : '...'}</div>
            {
                visibleSort &&
                <div className="possibleSorts">
                    {sorts.map(sort => (
                        <div
                            className="sortOption"
                            key={sort.id}
                            onClick={() => {applySort(sort.name)}}
                        >
                            {sort.name}
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}