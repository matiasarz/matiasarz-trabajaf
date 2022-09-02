import React from "react";
import { Link } from "react-router-dom";

const ButtonBack = ({ to }) => {
    return (
        <Link to={to}>
            <button>Volver</button>
        </Link>
    );
};

export default ButtonBack;
