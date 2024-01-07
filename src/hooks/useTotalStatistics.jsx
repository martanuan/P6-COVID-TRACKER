import { useState, useEffect } from "react";
import { API_URL } from "../configuration/config";

export function useTotalStatistics () {
    const [totalStatistics, setTotalStatistics] = useState([]);

    useEffect(() => {
        const myEndpoint = `${API_URL}all`;
        fetch(myEndpoint)
            .then(request => request.json())
            .then(json => {
                const dataStatistics = [
                    {
                        title: "Total Case",
                        today: json.todayCases,
                        total: json.cases,
                        color: "#f00",
                        backgroundColor: "#fff2f2"
                    },
                    {
                        title: "Active Case",
                        today: null,
                        total: json.active,
                        color: "#ff6a07",
                        backgroundColor: "#fff9f1"
                    },
                    {
                        title: "Recovered Case",
                        today: json.todayRecovered,
                        total: json.recovered,
                        color: "#82c519",
                        backgroundColor: "#edffec"
                    },
                    {
                        title: "Deaths Case",
                        today: json.todayDeaths,
                        total: json.deaths,
                        color: "#3639ae",
                        backgroundColor: "#eefbff"
                    }
                ];
                setTotalStatistics(dataStatistics);
            })
    }, [setTotalStatistics]);

    return totalStatistics;
}
