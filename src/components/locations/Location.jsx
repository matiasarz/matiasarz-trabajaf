import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../pulmonContainer/PulmonContainer";

const Location = () => {
    const [location, setLocation] = useState([]);

    const { nrack } = useParams();

    const { protocol, host } = window.location;

    useEffect(() => {
        getData(`${protocol}//${host}/locations.json`)
            .then((res) => res.json())
            .then((data) => {
                let a = data.filter((item) =>
                    Object.keys(item).toString().split("_").includes(nrack)
                );
                setLocation(a);
            });
    }, [nrack, host, protocol]);

    let allLocations = location.map((item) => item[`rack_${nrack}`]).flat();

    return (
        <div>
            <ul>
                {allLocations.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Location;
