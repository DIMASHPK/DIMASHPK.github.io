import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import {Main} from "./components/main/Main";
import './App.css';

function App({info}) {
    let [activeCountry, setActiveCountry] = React.useState(info.countries)
    let [addCityForm, setAddCityForm] = React.useState(false)


    let active = (id) => {
        setActiveCountry(activeCountry.map(item => {
            /*item.id === id ? item.active = true : item.active = false*/
            item.active = item.id === id
            return item
            })
        )
    }

    return (
        <>
            <header className="App-header">
                <div className="container">
                    <h1>Countries of the world</h1>
                </div>
            </header>
            <Main
                info={info}
                active={active}
                addCityFormOpen = {()=>setAddCityForm(addCityForm = true)}
                addCityFormClose = {()=>setAddCityForm(addCityForm = false)}
                addCityForm = {addCityForm}
            />
            <footer className={'navbar-fixed-bottom row-fluid'}>
                <div className="container">
                    <h4>test work</h4>
                </div>
            </footer>
        </>
    );
}

export default App;
