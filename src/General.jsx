import { useState } from "react"
import Cards from "./Cards"
import "./styles/General.css"

function General() {
	const [nameValue, setNameValue] = useState("")
	const [emailValue, setEmailValue] = useState("")
	const [phoneValue, setPhoneValue] = useState("")

	const questions = [
		{
			id: 0,
			name: "name",
			type: "text",
		},
		{
			id: 1,
			name: "email",
			type: "email",
		},
		{
			id: 2,
			name: "phone",
			type: "tel",
		},
	]

	function handleChange(e) {
		const inputName = e.target.name
		const inputValue = e.target.value
		if (inputName === "name") {
			setNameValue(inputValue)
		} else if (inputName === "email") {
			setEmailValue(inputValue)
		} else if (inputName === "phone") {
			setPhoneValue(inputValue)
		}
	}

	function handleClick(e) {
		e.preventDefault()
		console.log(nameValue, emailValue, phoneValue)
	}

	return (
		<div>
			<Cards title={"general"}>
				<div className="general-information">
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

export default General
