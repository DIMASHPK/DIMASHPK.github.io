import React from "react";
import '../addNewCity/AddNewCity.css'


export const EditCity = ({id, cancelEdit, value, editCity, setEdit}) => {

    return (
        <div className={'addCityWrap'}>
            <h3>Change city</h3>
            <input
                name={'title'}
                type="text"
                placeholder={'City name...'}
                value={value[0]}
                onChange={e => editCity(id, e) }

            />
            <textarea
                name={"desc"}
                cols="30"
                rows="4"
                placeholder={'City description...'}
                value={value[1]}
                onChange={e => editCity(id, e) }

            />
            <div className="buttons">
                <button
                    className={'buttonFrst'}
                    onClick={() => setEdit(id)}
                >
                    Submit
                </button>
                <button
                    className={'buttonScnd'}
                    onClick={() => cancelEdit(id) }
                >
                    Cancel
                </button>
            </div>


        </div>
    )
}





