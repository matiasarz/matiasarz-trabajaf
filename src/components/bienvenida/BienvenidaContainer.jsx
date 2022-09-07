import { useEffect, useState } from "react";
import Avatar from "../avatar/Avatar";
import { getData } from "../pulmonContainer/PulmonContainer";
import "./BienvenidaContainer.css";

const BienvenidaContainer = ({ title }) => {
    const [avatar, setAvatar] = useState([]);

    const { protocol, host } = window.location;

    useEffect(() => {
        getData(`${protocol}//${host}/avatar.json`)
            .then((res) => res.json())
            .then((data) => setAvatar(data));
    }, [host, protocol]);

    return (
        <section className="bienvenidoContainer">
            <h1>{title}</h1>
            <div className="avatarContainer">
                {avatar.map((avatar) => (
                    <Avatar key={avatar.id} data={avatar} />
                ))}
            </div>
        </section>
    );
};

export default BienvenidaContainer;
