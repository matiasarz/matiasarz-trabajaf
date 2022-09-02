import { useState } from "react";
import { Link } from "react-router-dom";

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
                <div
                    className="avatarInfo"
                    style={hide ? styleHide : styleShow}
                >
                    <h2>{nombre}</h2>
                    <h4>{saludo}</h4>
                </div>
                <img
                    src={imgUrl}
                    alt={nombre}
                    style={hide ? styleShow : styleHide}
                />
            </div>
        </Link>
    );
};

export default Avatar;
