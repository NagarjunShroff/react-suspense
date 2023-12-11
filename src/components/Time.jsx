import React from "react";
import fetchData from "../api/fetchData";

const resource = fetchData("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

const Time = () => {

    const time = resource.read();

    return (
        <div>
            The current UTC time is: {time.datetime}
        </div>
    )
};

export default Time;