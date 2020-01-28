import React from "react";
import {City} from "./city/City";
import {AddNewCity} from "./addNewCity/AddNewCity";
import {EditCity} from "./editCity/EditCity";
import './Cities.css'


export const Cities = ({info, addCityForm, addCityFormOpen, addCityFormClose}) => {
    let [cities, setCities] = React.useState(info.cities)
    let [newCity, setNewCity] = React.useState([{"title": "", "desc": ""}])
    let [copyOfCities, setCopyOfCities] = React.useState(cities.map(item => ({...item})))


    let citiesOfActiveCountry = info.countries.filter((country) => country.active && country.id).pop()

    let handleChangeNewCity = (event) => {

        setNewCity(newCity.map(city => {

            city[event.target.name] = event.target.value

            return city
        }))

    }

    let addNewCity = () => {

        setCities(cities = cities.concat({
            edit: true,
            "id": cities.length + 1,
            "country_id": citiesOfActiveCountry.id,
            "title": newCity[0].title,
            "desc": newCity[0].desc
        }))
        newCity[0].title = ''
        newCity[0].desc = ''
        addCityFormClose()
        setCopyOfCities(copyOfCities = cities.map(item => ({...item})))

    }

    let removeCity = (id) => {
        setCities(cities.filter(city => city.id !== id))
    }

    let editCityOpen = (id) => {
        setCities(cities.map(city => {
            if (city.id === id) {
                city.edit = !city.edit
            }
            return city
        }))
    }

    let editCity = (id, event) => {

        setCopyOfCities(copyOfCities.map(city => {
            if (city.id === id) {
                city[event.target.name] = event.target.value
            }

            return city
        }))

    }

    let setEdit = (id) => {
        setCities(cities = copyOfCities.map(city => {
            if (city.id === id) {
                city.edit = true
            }
            return {...city}
        }))
        setCopyOfCities(copyOfCities = cities.map(item => ({...item})))


    }

    let cancelEdit = (id) => {
        setCopyOfCities(copyOfCities = cities.map(item => ({...item})))
        return editCityOpen(id)
    }


    return (
        <div className={'col-lg-9'}>
            <h2>Cities</h2>
            <div className="citiesWrap">
                {!addCityForm &&
                <div className="buttonWrap">
                    <button
                        onClick={() => addCityFormOpen()}
                        className={'buttonFrst'}
                    >
                        +Add city
                    </button>
                </div>
                }
                {addCityForm &&
                <AddNewCity
                    addNewCityForm={() => addCityFormClose()}
                    setCity={newCity}
                    handleChange={handleChangeNewCity}
                    addNewCity={addNewCity}

                />}
                {cities.map((city, i) => {
                    let changeCity

                    if(city.edit){
                        changeCity =  <City
                            name={city.title}
                            description={city.desc}
                            id={city.id}
                            remove={removeCity}
                            edit={editCityOpen}
                        />
                    }else{
                        changeCity = <EditCity
                            id={city.id}
                            value={[copyOfCities[i].title, copyOfCities[i].desc]}
                            editCity={editCity}
                            setEdit={setEdit}
                            cancelEdit={cancelEdit}
                        />
                    }


                    return (
                        <React.Fragment key={city.id}>
                            {city.country_id === citiesOfActiveCountry.id && changeCity}
                        </React.Fragment>
                    )
                })}
            </div>

        </div>
    )
}