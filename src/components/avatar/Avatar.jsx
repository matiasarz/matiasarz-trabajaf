import React from "react";
import { Link } from "react-router-dom";

const Avatar = ({ data }) => {
    const { nombre, saludo, sector } = data;
    return (
        <Link to={sector}>
            <div className="avatar">
                <h2>{nombre}</h2>
                <h4>{saludo}</h4>
            </div>
        </Link>
    );
};

export default Avatar;
