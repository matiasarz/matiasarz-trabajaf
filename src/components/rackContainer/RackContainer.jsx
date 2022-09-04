import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getData } from "../pulmonContainer/PulmonContainer";
import RackItem from "../rackItem/RackItem";
import ButtonBack from "../buttonBack/ButtonBack";

const RackContainer = () => {
    const [data, setData] = useState([]);
    const [route, setRoute] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        getData("http://localhost:3000/data.json")
            .then((res) => res.json())
            .then((data) => {
                let idRoute = data.find((item) =>
                    item.pasillo.includes(parseInt(id))
                );

                let filtro = data.reduce((acc, item) => {
                    acc.push(item.rack);
                    return acc
                        .flat()
                        .filter((item) => item.pasillo === parseInt(id));
                }, []);

                setData(filtro.map((item) => item.racks).flat());
                setRoute(idRoute.pulmon);
            });
    }, [id]);

    if (!data) return <h2>Cargando...</h2>;

    return (
        <>
            <ButtonBack to={`/reposicion/pasillo/${route}`} />
            <div className="rackNumberContainer">
                {data.map((item) => (
                    <RackItem key={item} rack={item} />
                ))}
            </div>
        </>
    );
};

export default RackContainer;
