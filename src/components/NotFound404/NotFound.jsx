import ButtonNavigation from '../button_navigation/ButtonNavigation';

const NotFound = () => {
	return (
		<>
			<ButtonNavigation
				toLink="/"
				title="volver"
				className="back"
			/>
			<h1>Esta pagina esta en mantenimiento, se resolvera pronto</h1>
		</>
	);
};

export default NotFound;
