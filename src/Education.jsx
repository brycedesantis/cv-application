import { useState } from "react"
import Cards from "./Cards"
import "./styles/Education.css"

function Education() {
	const [schoolName, setSchoolName] = useState("")
	const [studyField, setStudyField] = useState("")
	const [studyDate, setStudyDate] = useState("")

	const questions = [
		{
			id: 0,
			name: "School name",
			type: "text",
		},
		{
			id: 1,
			name: "Field of study",
			type: "text",
		},
		{
			id: 2,
			name: "Date of study",
			type: "date",
		},
	]

	function handleChange(e) {
		const inputName = e.target.name
		const inputValue = e.target.value
		if (inputName === "School name") {
			setSchoolName(inputValue)
		} else if (inputName === "Field of study") {
			setStudyField(inputValue)
		} else if (inputName === "Date of study") {
			setStudyDate(inputValue)
		}
	}

	function handleClick(e) {
		e.preventDefault()
		console.log(schoolName, studyField, studyDate)
	}

	return (
		<div>
			<Cards title={"education"}>
				<div className="education-information">
					<form action="">
						{questions.map((question) => (
							<label key={question.id} className="labels">
								{question.name}
								<input
									name={question.name}
									onChange={handleChange}
									className="label-inputs"
									type={question.type}
								/>
							</label>
						))}
						<button onClick={handleClick} type="submit" className="save-button">
							Save
						</button>
					</form>
				</div>
			</Cards>
		</div>
	)
}
export default Education
