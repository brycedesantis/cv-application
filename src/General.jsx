import { useState } from "react"
import Cards from "./Cards"
import "./styles/General.css"

function Inputs({ name }) {
	return (
		<form>
			<label className="labels">
				{name}
				<input
					className="label-inputs"
					type={name === "phone" ? "tel" : name}
				/>
			</label>
		</form>
	)
}

function General() {
	const [activeIndex, setActiveIndex] = useState(0)
	return (
		<div>
			<Cards
				title={"general"}
				isActive={activeIndex === 0}
				onShow={() => setActiveIndex(0)}
			>
				<div className="general-information">
					<Inputs name={"name"} />
					<Inputs name={"email"} />
					<Inputs name={"phone"} />
				</div>
			</Cards>
		</div>
	)
}

export default General
