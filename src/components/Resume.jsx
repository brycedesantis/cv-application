import "../styles/Resume.css"

function Resume({ general, practical, education }) {
	const generalItems = Object.keys(general).map((value, i) => {
		if (value !== "form") {
			return (
				<p className={value} key={i}>
					{general[value]}
				</p>
			)
		}
	})

	const practicalItems = Object.keys(practical).map((value, i) => {
		if (value !== "form") {
			return (
				<p className={value} key={i}>
					{practical[value]}
				</p>
			)
		}
	})

	const educationItems = Object.keys(education).map((value, i) => {
		if (value !== "form") {
			return (
				<p className={value} key={i}>
					{education[value]}
				</p>
			)
		}
	})

	return (
		<div className="resume-area">
			<div className="general">{generalItems}</div>
			<hr />
			<div className="education">
				<h2>Education</h2>
				{educationItems}
			</div>
			<hr />
			<div className="practical">
				<h2>Practical Experience</h2>
				{practicalItems}
			</div>
		</div>
	)
}
export default Resume
