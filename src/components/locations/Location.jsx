import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ButtonBack from "../buttonBack/ButtonBack";
import { getData } from "../pulmonContainer/PulmonContainer";
import "./Location.css";

const Location = () => {
    const [location, setLocation] = useState([]);
    const [locationModule, setLocationModule] = useState([]);

    const { npulmon, npasillo, nrack } = useParams();

    const { protocol, host } = window.location;

    useEffect(() => {
        getData(`${protocol}//${host}/locations.json`)
            .then((res) => res.json())
            .then((data) => {
                // filtro por el pasillo que elijo
                let pasilloFilter = data.filter(
                    (item) => item[`pasillo_${npasillo}`]
                );

                // llega un array con racks que lo recorro y almaceno uno especifico en racks
                const dataPasillo = pasilloFilter.map(
                    (item) => item[`pasillo_${npasillo}`][`data_rack_${nrack}`]
                );

                const rackSelected = dataPasillo.map(
                    (item) => item[`rack_${nrack}`]
                );
                const moduleSelected = dataPasillo.map(
                    (item) => item[`modulo`]
                );

                setLocationModule(moduleSelected);
                setLocation(rackSelected.flat());
            });
    }, [npasillo, nrack, host, protocol]);

    return (
        <section className="locationContainer">
            <ButtonBack
                to={`/reposicion/pulmon/${npulmon}/pasillo/${npasillo}`}
            />
            <div className="title">
                <h1>Cantidad de posiciones: {location.length}</h1>
                <h4>
                    {npulmon} / {npasillo} / {nrack}
                </h4>
            </div>
            <p>
                Las posiciones del <b>rack {nrack}</b> están disponibles para
                reponer las cubetas con medicamentos que correspondan al{" "}
                <b>módulo {locationModule.flat().join(" y ")} del SDA.</b>
            </p>
            <article className="algoArticle">
                <ul className="algo">
                    {location.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </article>
        </section>
    );
};

export default Location;
