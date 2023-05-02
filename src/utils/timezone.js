import axios from "axios";

const timezone = async () => {
	const res = await axios.get("https://front.opperdev.com/api/timezone");
	const time = await res.data;
	return time.timezone;
};

export default timezone;
