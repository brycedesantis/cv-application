import { useState } from "react"

function Inputs({ name, type, key }) {
	const [inputValue, setInputValue] = useState("")
	return (
		<>
			<label key={key} className="labels">
				{name}
				<input className="label-inputs" type={type} onChange={setInputValue} />
			</label>
		</>
	)
}

export default Inputs
