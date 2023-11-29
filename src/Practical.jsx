import { useState } from "react"
import Cards from "./Cards"
import "./styles/Practical.css"

function Practical(props) {
	const [companyName, setCompanyName] = useState("")
	const [positionTitle, setPositionTitle] = useState("")
	const [mainRespon, setMainRespon] = useState("")
	const [startDate, setStartDate] = useState("")
	const [endDate, setEndDate] = useState("")
	const [form, setForm] = useState("practicalData")

	const questions = [
		{
			id: 0,
			name: "Company name",
			type: "text",
		},
		{
			id: 1,
			name: "Position title",
			type: "text",
		},
		{
			id: 2,
			name: "Main responsibilities",
			type: "text",
		},
		{
			id: 3,
			name: "Start date",
			type: "date",
		},
		{
			id: 4,
			name: "End date",
			type: "date",
		},
	]

	function handleChange(e) {
		const inputName = e.target.name
		const inputValue = e.target.value
		if (inputName === "Company name") {
			setCompanyName(inputValue)
		} else if (inputName === "Position title") {
			setPositionTitle(inputValue)
		} else if (inputName === "Main responsibilities") {
			setMainRespon(inputValue)
		} else if (inputName === "Start date") {
			setStartDate(inputValue)
		} else if (inputName === "End date") {
			setEndDate(inputValue)
		}
	}

	function handleClick(e) {
		e.preventDefault()
		const formData = {
			companyName: companyName,
			positionTitle: positionTitle,
			mainRespon: mainRespon,
			startDate: startDate,
			endDate: endDate,
			form: form,
		}
		props.saveData(formData)
	}

	return (
		<div>
			<Cards title={"Practical Experience"}>
				<div className="practical-information">
					<form action="" onSubmit={handleClick}>
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
				</div>
			</Cards>
		</div>
	)
}

export default Practical
