import { Link, useParams } from "react-router-dom";
import { getData } from "../pulmonContainer/PulmonContainer";
import { useState, useEffect } from "react";
import "./PasilloContainer.css";
import ButtonBack from "../buttonBack/ButtonBack";

const PasilloContainer = () => {
    const [data, setData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getData(`https://${window.location.host}/data.json`)
            .then((res) => res.json())
            .then((data) =>
                setData(data.find((item) => item.id === parseInt(id)))
            );
    }, [id]);

    const { pasillo } = data;
    if (!pasillo) return <h2>Cargando</h2>;

    return (
        <section className="pasilloContainer">
            <ButtonBack to="/reposicion" />
            <h1>Pasillo</h1>
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
                        to={`/reposicion/pasillo/${data.pulmon}/${item}`}
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
