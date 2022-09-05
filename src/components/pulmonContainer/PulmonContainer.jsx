import { useEffect, useState } from "react";
import ButtonBack from "../buttonBack/ButtonBack";
import PulmonItem from "../pulmonItem/PulmonItem";
import "./PulmonContainer.css";

export const getData = (url) => fetch(url);

const PulmonContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData(`http://${window.location.host}/data.json`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <section className="pulmonContainer">
            <ButtonBack to="/" />
            <h1>Pulmones</h1>
            <p>
                <b>
                    Es donde llegan las cubetas cuando se envian de el sector
                    31. Con el interno del pulmón o buffer cargamos las cubetas
                    al sistema desde la pocket. Luego procedemos a la reposición
                    de las cubetas según el pasillo y rack que corresponda.
                </b>
            </p>
            <div className="pulmonItemContainer">
                {data.map((item) => (
                    <PulmonItem key={item.id} data={item} />
                ))}
            </div>
        </section>
    );
};

export default PulmonContainer;
