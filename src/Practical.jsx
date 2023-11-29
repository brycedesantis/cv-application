import { useState } from "react"
import Cards from "./Cards"
import "./styles/Practical.css"

function Practical() {
	const [companyName, setCompanyName] = useState("")
	const [positionTitle, setPositionTitle] = useState("")
	const [mainRespon, setMainRespon] = useState("")
	const [startDate, setStartDate] = useState("")
	const [endDate, setEndDate] = useState("")

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
		} else if (inputName === "Start Date") {
			setStartDate(inputValue)
		} else if (inputName === "End date") {
			setEndDate(inputValue)
		}
	}

	function handleClick(e) {
		e.preventDefault()
		console.log(companyName, positionTitle, mainRespon, startDate, endDate)
	}

	return (
		<div>
			<Cards title={"Practical Experience"}>
				<div className="practical-information">
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

export default Practical
