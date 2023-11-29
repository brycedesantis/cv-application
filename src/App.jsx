import General from "./General"
import Education from "./Education"
import Practical from "./Practical"
import Resume from "./Resume"
import "./styles/App.css"
import { useState } from "react"

function App() {
	const [generalData, setGeneralData] = useState("")
	const [eduData, setEduData] = useState("")
	const [pracData, setPracData] = useState("")

	function saveData(data) {
		switch (data.form) {
			case "generalData":
				setGeneralData(data)
				break
			case "practicalData":
				setPracData(data)
				break
			case "educationData":
				setEduData(data)
				break
			default:
				break
		}
	}

	return (
		<>
			<div className="form-section">
				<General saveData={saveData} />
				<Education saveData={saveData} />
				<Practical saveData={saveData} />
			</div>
			<Resume general={generalData} practical={pracData} education={eduData} />
		</>
	)
}

export default App
