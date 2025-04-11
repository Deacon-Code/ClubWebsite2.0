import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import CalendarComponent from "../components/Calendar";
import useScrollToTop from "../components/Hooks/useScrollToTop.js";

const Calendar = () => {
	useScrollToTop();
	return (
		<div>
			<Navbar />
			<HeroImage
				icon="calendar"
				heading="Calendar"
				text="Check out our upcoming events!"
			/>
			<CalendarComponent />
			<Footer />
		</div>
	);
};

export default Calendar;
