// import { useState } from "react"
import Cards from "./Cards"
import Inputs from "./Inputs"
import "./styles/General.css"

function General() {
	// const [activeIndex, setActiveIndex] = useState(0)
	return (
		<div>
			<Cards
				title={"general"}
				// isActive={activeIndex === 0}
				// onShow={() => setActiveIndex(0)}
			>
				<div className="general-information">
					<Inputs name={"name"} type={"text"} />
					<Inputs name={"email"} type={"email"} />
					<Inputs name={"phone"} type={"tel"} />
				</div>
			</Cards>
		</div>
	)
}

export default General
