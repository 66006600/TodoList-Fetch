import React from "react";
import { FiltersContainer,  FilterButton, FilterButtonContainer, ItemsLeft } from "./TodoFilters.components";

const TodoFilters = () => {
    return (
        <FiltersContainer>
            <ItemsLeft />
            <FilterButtonContainer>
                
                <FilterButton action={() => {}} active="All" filter='All' />
                <FilterButton action={() => {}} active="All" filter='Active' />
                <FilterButton action={() => {}} active="All" filter='Complited'/>

            </FilterButtonContainer>

            <button className="text-gray-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
                Clear Complited 

            </button>


        </FiltersContainer>


    )

}

export default TodoFilters;