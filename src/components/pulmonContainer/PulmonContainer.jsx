import { useEffect, useState } from "react";
import ButtonBack from "../buttonBack/ButtonBack";
import PulmonItem from "../pulmonItem/PulmonItem";
import "./PulmonContainer.css";

export const getData = (url) => fetch(url);

const PulmonContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData("http://localhost:3000/data.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <section className="pulmonContainer">
            <ButtonBack to="/" />
            <h1>Pulmones</h1>
            <div className="pulmonItemContainer">
                {data.map((item) => (
                    <PulmonItem key={item.id} data={item} />
                ))}
            </div>
        </section>
    );
};

export default PulmonContainer;
