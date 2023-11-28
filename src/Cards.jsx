import { useState } from "react"
import "./styles/Card.css"

function Cards({ title, children }) {
	const [isActive, setIsActive] = useState(false)
	return (
		<div className="card-holder">
			<div className="card">
				<h1>{title}</h1>
				<button onClick={() => setIsActive(!isActive)}>V</button>
			</div>
			{isActive ? <div>{children}</div> : ""}
		</div>
	)
}

export default Cards
