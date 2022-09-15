import "./RackItem.css";
import { Link, useParams } from "react-router-dom";

const RackItem = ({ rack }) => {
    const { npulmon, npasillo } = useParams();

    if (!rack) return <h2>Cargando...</h2>;

    return (
        <Link
            to={`/reposicion/pulmon/${npulmon}/pasillo/${npasillo}/rack/${rack}`}
            className="rackNumber"
        >
            <h2>{rack}</h2>
        </Link>
    );
};

export default RackItem;
