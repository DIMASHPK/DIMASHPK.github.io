import React from "react";
import { Friend } from "./friend/Friend";
import { Context } from "../../Context";
import { Preloader } from "../../preloader/Preloader";
import "./allFriends.scss";

export const AllFriends = () => {
  let { friends, clickId, isFetching, searchBy, filterBy } = React.useContext(
    Context
  );

  return (
    <section className={"allFriends"}>
      <div className="container">
        <h2>All friends</h2>
        <div className="row">
          {friends.map(
            ({ id, image, created, name, location, gender, status }, i) => (
              <React.Fragment key={id}>
                {searchBy(name) && filterBy(status, gender) && (
                  <Friend
                    id={id}
                    idForLink={i}
                    img={image}
                    name={name}
                    age={new Date(created).toLocaleDateString()}
                    house={location.name}
                    gender={gender}
                    key={id}
                    clickId={clickId}
                    status={status}
                  />
                )}
              </React.Fragment>
            )
          )}
        </div>
      </div>
      {isFetching && <Preloader />}
    </section>
  );
};
