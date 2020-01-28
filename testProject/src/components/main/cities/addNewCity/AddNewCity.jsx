import React from "react";
import './AddNewCity.css'


export const AddNewCity = ({addNewCityForm, setCity, handleChange, addNewCity}) => {

    return (
        <div className={'addCityWrap'}>
            <h3>Add city</h3>
            <input
                name={'title'}
                type="text"
                placeholder={'City name...'}
                value={setCity.title}
                onChange={handleChange}
            />
            <textarea
                name="desc"
                cols="30"
                rows="4"
                placeholder={'City description...'}
                value={setCity.title}
                onChange={handleChange}
            />
            <div className="buttons">
                <button
                    className={'buttonFrst'}
                    onClick={addNewCity}
                >
                    Submit
                </button>
                <button
                    className={'buttonScnd'}
                    onClick={addNewCityForm}
                >
                    Cancel
                </button>
            </div>


        </div>
    )
}





