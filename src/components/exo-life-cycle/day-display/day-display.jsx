const DayDisplay = () => {
	const today = new Date();

	return <p>{today.toLocaleDateString('fr-be')}</p>
}

export default DayDisplay;
