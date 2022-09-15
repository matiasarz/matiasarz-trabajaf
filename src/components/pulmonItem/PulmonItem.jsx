import "./PulmonItem.css";
import { Link } from "react-router-dom";

const PulmonItem = ({ data }) => {
    return (
        <div className="pulmonItem">
            <Link
                to={`/reposicion/pulmon/${data.id}`}
                className="pulmonItemLink"
            >
                <h2>{data.pulmon}</h2>
            </Link>
        </div>
    );
};

export default PulmonItem;
