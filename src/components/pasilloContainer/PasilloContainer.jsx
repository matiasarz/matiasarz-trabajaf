import { Link, useParams } from "react-router-dom";
import { getData } from "../pulmonContainer/PulmonContainer";
import { useState, useEffect } from "react";
import "./PasilloContainer.css";
import ButtonBack from "../buttonBack/ButtonBack";
import LinkNavigate from "../linkNavigate/LinkNavigate";

const PasilloContainer = () => {
    const [data, setData] = useState([]);

    const { npulmon } = useParams();

    const { protocol, host } = window.location;

    useEffect(() => {
        getData(`${protocol}//${host}/data.json`)
            .then((res) => res.json())
            .then((data) =>
                setData(data.find((item) => item.id === parseInt(npulmon)))
            );
    }, [npulmon, protocol, host]);

    const { pasillo } = data;

    if (!pasillo) return <h2>Cargando</h2>;

    return (
        <section className="pasilloContainer">
            <ButtonBack to="/reposicion" />
            <h1>Pasillo</h1>

            <LinkNavigate
                links={[
                    { link: "/", name: "Inicio" },
                    { link: "/reposicion", name: "Pulmones" },
                ]}
            />
            <p>
                <b>
                    Una vez realizado el paso anterior llevamos las cubetas al
                    pasillo correspondiente.
                </b>
            </p>
            <div className="pasilloContainer">
                {pasillo.map((item, index) => (
                    <Link
                        className="pasilloLink"
                        to={`/reposicion/pulmon/${data.pulmon}/pasillo/${item}`}
                        key={index}
                    >
                        <h2>{item}</h2>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default PasilloContainer;
