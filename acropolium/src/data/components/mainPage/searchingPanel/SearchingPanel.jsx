import React from "react";
import {Context} from "../../Context";
import {Search} from "./Search";
import {Sorts} from "./Sorting";
import {Filters} from "./Filters";
import './searchingPanel.scss'


export const SearchingPanel = () => {
    let [visibleSort, setVisibleSort] = React.useState(false);
    let [visibleFilters, setVisibleFilters] = React.useState(false);
    let { sortFriends, getFilter, getSort} = React.useContext(Context);

    const toggleSortingFilter =  () => setVisibleSort(!visibleSort);
    const toggleFilters =  () => setVisibleFilters(!visibleFilters);

    const applySort = (name) => {
        getSort(name);
        sortFriends(name);
        toggleSortingFilter();
    };
    const applyFilter = (filter) => {
        getFilter(filter);
        toggleFilters();
    };

    return (
        <section className="searchingSection">
            <div className="container">
                <div className="row">
                    <div className="searchingPanel">
                        <Search/>
                        <Sorts
                            toggleSortingFilter={toggleSortingFilter}
                            applySort={applySort}
                            visibleSort = {visibleSort}
                        />
                        <Filters
                            toggleFilters={toggleFilters}
                            visibleFilters = {visibleFilters}
                            applyFilter = {applyFilter}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}