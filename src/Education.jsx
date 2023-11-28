import Cards from "./Cards"
import Inputs from "./Inputs"
import "./styles/Education.css"

function Education() {
	return (
		<div>
			<Cards title={"education"}>
				<div className="education-information">
					<Inputs name={"School Name"} type={"text"} />
					<Inputs name={"Field of study"} type={"text"} />
					<Inputs name={"Date of study"} type={"date"} />
				</div>
			</Cards>
		</div>
	)
}
export default Education
