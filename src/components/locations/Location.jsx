import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ButtonBack from "../buttonBack/ButtonBack";
import { getData } from "../pulmonContainer/PulmonContainer";
import "./Location.css";
import { FaRegLaughWink } from "react-icons/fa";
import LinkNavigate from "../linkNavigate/LinkNavigate";

const Location = () => {
    const [location, setLocation] = useState([]);
    const [locationModule, setLocationModule] = useState([]);
    const [showModal, setShowModal] = useState(false);

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

    let repeticiones = [1, 2, 3, 4, 5];

    return (
        <section className="locationContainer">
            <ButtonBack
                to={`/reposicion/pulmon/${npulmon}/pasillo/${npasillo}`}
            />
            <div className="title">
                <h1>Cantidad de posiciones: {location.length}</h1>
                <h4 onClick={() => setShowModal(true)}>
                    {npulmon} / {npasillo} / {nrack}
                </h4>
                {showModal ? (
                    <h5 onClick={() => setShowModal(false)} className="modal">
                        Estos números representan:
                        <div>Pulmón / Pasillo / Rack</div>
                        Hacer click en cualquier parte del modal para volver
                        {repeticiones.map((item) => (
                            <FaRegLaughWink key={item} />
                        ))}
                    </h5>
                ) : null}
            </div>

            <LinkNavigate
                links={[
                    { link: "/", name: "Inicio" },
                    { link: "/reposicion", name: "Pulmones" },
                    { link: `/reposicion/pulmon/${npulmon}`, name: "Pasillo" },
                    {
                        link: `/reposicion/pulmon/${npulmon}/pasillo/${npasillo}`,
                        name: "Rack",
                    },
                ]}
            />

            <p>
                Las posiciones del <b>rack {nrack}</b> están disponibles para
                reponer las cubetas con medicamentos que correspondan al{" "}
                <b>
                    pasillo {npasillo} del módulo{" "}
                    {locationModule.flat().join(" y ")} del SDA.
                </b>
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
