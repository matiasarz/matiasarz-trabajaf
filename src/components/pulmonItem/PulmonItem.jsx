import "./PulmonItem.css";
import { Link } from "react-router-dom";

const PulmonItem = ({ data }) => {
    return (
        <div className="pulmonItem">
            <Link to={`/reposicion/pasillo/${data.id}`}>
                <h1>{data.pulmon}</h1>
            </Link>
        </div>
    );
};

export default PulmonItem;
