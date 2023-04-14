import { Link } from 'react-router-dom';
import './button_navigation.css';

const ButtonNavigation = ({ title, toLink, className }) => {
	return (
		<Link to={toLink}>
			{title == 'volver' ? (
				<button className={className}>{title}</button>
			) : (
				<h2 className={className}>{title}</h2>
			)}
		</Link>
	);
};
export default ButtonNavigation;
