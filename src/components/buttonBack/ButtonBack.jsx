import "./ButtonBack.css";
import { Link } from "react-router-dom";

const ButtonBack = ({ to }) => {
    return (
        <Link to={to}>
            <button className="back">Volver</button>
        </Link>
    );
};

export default ButtonBack;
