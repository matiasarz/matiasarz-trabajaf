import { Link } from "react-router-dom";
import "./LinkNavigate.css";

const LinkNavigate = ({ links }) => {
    return (
        <div className="linkContainer">
            {links.map((item) => (
                <Link to={item.link} key={item.link} className="link">
                    {item.name} <span>{" > "}</span>
                </Link>
            ))}
        </div>
    );
};

export default LinkNavigate;
