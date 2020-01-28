import React from 'react';
import {Countries} from "./countries/Countries";
import {Cities} from "./cities/Cities";



export const Main = ({info, active, addCityForm, addCityFormOpen, addCityFormClose}) => {

    return(
        <section className={'main'}>
            <div className="container">
                <div className="row">
                    <Countries
                        countries={info.countries}
                        active={active}
                        addCityFormClose = {addCityFormClose}
                    />
                    <Cities
                        info={info}
                        addCityFormOpen = {addCityFormOpen}
                        addCityFormClose = {addCityFormClose}
                        addCityForm = {addCityForm}
                    />
                </div>
            </div>
        </section>

    )
}