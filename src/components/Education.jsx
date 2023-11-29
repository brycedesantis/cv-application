import { useState } from "react"
import Cards from "./Cards"
import "../styles/Education.css"

function Education(props) {
	const [schoolName, setSchoolName] = useState("")
	const [studyField, setStudyField] = useState("")
	const [studyDate, setStudyDate] = useState("")
	const [editMode, setEditMode] = useState(false)
	const [form, setForm] = useState("educationData")

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

	function saveInfo(e) {
		e.preventDefault()
		const formData = {
			schoolName: schoolName,
			studyField: studyField,
			studyDate: studyDate,
			form: form,
		}
		props.saveData(formData)
		setEditMode(true)
	}

	function changeMode(e) {
		e.preventDefault()
		setEditMode(false)
	}

	return (
		<div>
			<Cards title={"education"}>
				<div className="education-information">
					{!editMode ? (
						<form action="" onSubmit={saveInfo}>
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
							<button type="submit" className="save-button">
								Save
							</button>
						</form>
					) : (
						<>
							<div className="edited">
								<p className="schoolName">{schoolName}</p>
								<p className="studyField">{studyField}</p>
								<p className="studyDate">{studyDate}</p>
							</div>
							<button className="edit-button" onClick={changeMode}>
								Edit
							</button>
						</>
					)}
				</div>
			</Cards>
		</div>
	)
}
export default Education
