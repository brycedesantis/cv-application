import { useState } from "react"
import Cards from "./Cards"
import "../styles/General.css"

function General(props) {
	const [nameValue, setNameValue] = useState("")
	const [emailValue, setEmailValue] = useState("")
	const [phoneValue, setPhoneValue] = useState("")
	const [editMode, setEditMode] = useState(false)
	const [form, setForm] = useState("generalData")

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

	function saveInfo(e) {
		e.preventDefault()
		const formData = {
			name: nameValue,
			email: emailValue,
			phone: phoneValue,
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
			<Cards title={"general"}>
				<div className="general-information">
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
								<p className="name">{nameValue}</p>
								<p className="email">{emailValue}</p>
								<p className="phone">{phoneValue}</p>
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

export default General
