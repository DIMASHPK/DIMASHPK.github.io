import React from 'react';
import './Countries.css';



export const Countries = ({countries, active, addCityFormClose}) => {

    return(
        <div className="col-lg-3" >
            <div className="countries">
                <h2>Countries</h2>
                {countries.map((item)=>(
                    <div
                        onClick={()=> {
                            addCityFormClose()
                            active(item.id)
                        }}
                        className={`wrap ${item.active ? 'active' : ''}`}
                        key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                        <div className={'arrow'} />
                    </div>
                ))}
            </div>
        </div>
    )
}