import React from "react"
import ReactDOM from "react-dom/client"
// import App from "./App.jsx"
import General from "./General"
import Education from "./Education"
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<General />
		<Education />
	</React.StrictMode>
)
