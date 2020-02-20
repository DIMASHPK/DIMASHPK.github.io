import React from "react";
import {NavLink} from "react-router-dom";
import "./friend.scss"


export const Friend = ({idForLink, id, img, name, age, house, gender, clickId}) =>
    <div className="col-lg-4 col-md-6">
        <NavLink to={`/friend/${idForLink}`}>
            <div className="friend" onClick={() => clickId(id)}>
                <div className="avatarWrap">
                    <img src={img} alt="avatar" title={'avatar of friend'}/>
                </div>
                <div className="contentWrap">
                    <h3 className={"name"}>{name}</h3>
                    <p>created: {age ? age : "unknown"}</p>
                    <p>house: {house ? house : "unknown"}</p>
                    <p>gender: {gender}</p>
                </div>
            </div>
        </NavLink>
    </div>
