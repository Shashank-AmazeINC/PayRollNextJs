import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

 function ReactDatePicker() {
const [startDate, setStartDate] = useState(new Date());

return (
	<div>
	{/* <h4> DatePicker</h4> */}
	<DatePicker selected={startDate} onChange=
			{(date) => setStartDate(date)} />
	</div>
);
}
export default ReactDatePicker;