import { Link } from 'react-router-dom';
import './LinkNavigate.css';

const LinkNavigate = ({ links }) => {
	return (
		<div className="link-container">
			{links.map((pathname) => (
				<Link
					to={pathname.link}
					key={pathname.link}
					className="link"
				>
					{pathname.name} <span>{' > '}</span>
				</Link>
			))}
		</div>
	);
};

export default LinkNavigate;
