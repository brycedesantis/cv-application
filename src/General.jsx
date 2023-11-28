// import { useState } from "react"
import Cards from "./Cards"
import Inputs from "./Inputs"
import "./styles/General.css"

function General() {
	return (
		<div>
			<Cards title={"general"}>
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
