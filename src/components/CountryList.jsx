import React from "react";
import fetchData from "../api/fetchData";

/**
 * In-order to show the error boundary scenario I have entered the wrong URL
 * correct URL is https://restcountries.com/v3.1/all
 */

const resource = fetchData("https://restcountries.com/v3.1/al")

const CountryList = () => {
    const countryList = resource.read();
    return (
        <div>
            {countryList.map(({name}) => <li>{name.common}</li>)}
        </div>
    );
}

export default CountryList;