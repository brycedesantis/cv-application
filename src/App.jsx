import General from "./General"
import Education from "./Education"
import Practical from "./Practical"
import Resume from "./Resume"
import "./styles/App.css"

function App() {
	return (
		<>
			<div className="form-section">
				<General />
				<Education />
				<Practical />
			</div>
			<Resume />
		</>
	)
}

export default App
