import { useEffect } from "react";
import { useState } from "react";

const Clock = () => {
	const [time, setTime] = useState(new Date());

	// SET INTERVAL
	// useEffect(() => {
	// 	const timerId = setInterval(() => {
	// 		setTime(new Date());
	// 	}, 200);

	// 	return () => {
	// 		clearInterval(timerId);
	// 	}
	// }, []);

	// SET TIMEOUT
	useEffect(() => {
		const timerId = setTimeout(() => {
			setTime(new Date());
		}, 200);

		return () => {
			clearTimeout(timerId);
		}
	});

	const hours = time.getHours().toString().padStart(2, 0) // 01 / 10
	const minutes = time.getMinutes().toString().padStart(2, 0)
	const secondes = time.getSeconds().toString().padStart(2, 0)

	return <p>{hours} : {minutes} : {secondes}</p>
}

export default Clock;
