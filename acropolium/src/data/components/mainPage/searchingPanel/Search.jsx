import React from "react";
import {Context} from "../../Context";



export const Search = () => {
    let {handleChange, value} = React.useContext(Context);

    return(
        <div className="search">
            <input
                type="text"
                onChange={handleChange}
                value={value}
                placeholder={"chose filter and then enter value..."}
            />
        </div>
    )
}
