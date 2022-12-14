import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getData } from "../pulmonContainer/PulmonContainer";
import RackItem from "../rackItem/RackItem";
import ButtonBack from "../buttonBack/ButtonBack";
import LinkNavigate from "../linkNavigate/LinkNavigate";

const RackContainer = () => {
    const [data, setData] = useState([]);

    const { npulmon, npasillo } = useParams();

    const { protocol, host } = window.location;

    useEffect(() => {
        getData(`${protocol}//${host}/data.json`)
            .then((res) => res.json())
            .then((data) => {
                let filtro = data.reduce((acc, item) => {
                    acc.push(item.rack);
                    return acc
                        .flat()
                        .filter((item) => item.pasillo === parseInt(npasillo));
                }, []);

                setData(filtro.map((item) => item.racks).flat());
            });
    }, [npasillo, host, protocol]);

    if (!data) return <h2>Cargando...</h2>;

    return (
        <section className="rackContainer">
            <ButtonBack to={`/reposicion/pulmon/${npulmon}`} />
            <h1>Racks</h1>
            <LinkNavigate
                links={[
                    { link: "/", name: "Inicio" },
                    { link: "/reposicion", name: "Pulmones" },
                    { link: `/reposicion/pulmon/${npulmon}`, name: "Pasillo" },
                ]}
            />
            <p>
                <b>
                    Las cubetas se deberan reponer lo más proximas posible a la
                    posicion del 28 del SDA "Sistema de automatización".
                </b>
            </p>
            <div className="rackNumberContainer">
                {data.map((item) => (
                    <RackItem key={item} rack={item} />
                ))}
            </div>
        </section>
    );
};

export default RackContainer;
