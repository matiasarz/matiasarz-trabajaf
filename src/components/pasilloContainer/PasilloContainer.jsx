import { Link, useParams } from "react-router-dom";
import { getData } from "../pulmonContainer/PulmonContainer";
import { useState, useEffect } from "react";
import "./PasilloContainer.css";
import ButtonBack from "../buttonBack/ButtonBack";

const PasilloContainer = () => {
    const [data, setData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        getData("http://localhost:3000/data.json")
            .then((res) => res.json())
            .then((data) => setData(data.filter((item) => item.id == id)));
    }, []);

    const [objeto] = data;
    if (!objeto) {
        return <h2>Cargando</h2>;
    }
    const { pasillo } = objeto;

    return (
        <div>
            <ButtonBack to="/reposicion" />
            <h1>PasilloContainer</h1>
            <div className="pasilloContainer">
                {pasillo.map((item, index) => (
                    <Link
                        to={`/reposicion/pasillo/${objeto.pulmon}/${item}`}
                        key={index}
                    >
                        <h2>{item}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PasilloContainer;
