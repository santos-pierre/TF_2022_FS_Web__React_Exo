import { useState } from "react";
import Clock from "../../components/exo-life-cycle/clock/clock";
import DayDisplay from "../../components/exo-life-cycle/day-display/day-display";

const ExoLifeCycle = () => {
	const [displayTime, setDisplayTime] = useState(false);

	const handleSwitch = () => {
		setDisplayTime(!displayTime);
	}

	return <>
		{
			displayTime ? (
					<Clock/>
				) : (
					<DayDisplay />
				)
		}
		<button onClick={handleSwitch}>Switch Display</button>
	</>
}

export default ExoLifeCycle;
