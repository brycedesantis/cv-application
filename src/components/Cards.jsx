import { useState } from "react"
import expandUp from "../assets/expandUp.svg"
import expandDown from "../assets/expandDown.svg"
import "../styles/Card.css"

function Cards({ title, children }) {
	const [isActive, setIsActive] = useState(false)

	return (
		<div className="card-holder">
			<div className="card">
				<h1>{title}</h1>
				<button onClick={() => setIsActive(!isActive)}>
					{isActive ? (
						<img src={expandUp} className="expand-logo" alt="Up arrow" />
					) : (
						<img src={expandDown} className="expand-logo" alt="Down arrow" />
					)}
				</button>
			</div>
			{isActive ? (
				<>
					<div>{children}</div>
				</>
			) : (
				""
			)}
		</div>
	)
}

export default Cards
