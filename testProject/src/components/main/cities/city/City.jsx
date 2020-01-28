import React from "react";
import styles from './City.module.css'



export const City = ({id, name, description, remove, edit}) => {

    return(
        <div className={styles.cityWrap}>
            <div className="cityInfo">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className={styles.buttons}>
                <span onClick={() => edit(id)}>&#128396;</span>
                <span onClick={() => remove(id)}>&#128465;</span>
            </div>

        </div>
    )
}