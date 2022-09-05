import { useState } from "react";
import { Link } from "react-router-dom";
import "./Avatar.css";

const Avatar = ({ data }) => {
    const { nombre, saludo, sector, imgUrl } = data;

    const [hide, setHide] = useState(false);

    const turnOnElement = () => setHide(true);
    const turnOffElement = () => setHide(false);

    const styleShow = {
        visibility: "visible",
    };
    const styleHide = {
        visibility: "hidden",
    };

    return (
        <Link
            to={sector}
            onMouseEnter={turnOnElement}
            onMouseLeave={turnOffElement}
        >
            <div className="avatar">
                <div className={hide ? "" : "avatarInfo"}>
                    <h2>{nombre}</h2>
                    <h4>{saludo}</h4>
                </div>
                <img
                    src={imgUrl}
                    alt={nombre}
                    className={hide ? "imgEmployee" : ""}
                />
            </div>
        </Link>
    );
};

export default Avatar;
