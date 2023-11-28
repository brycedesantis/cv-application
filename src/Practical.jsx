import Cards from "./Cards"
import Inputs from "./Inputs"

function Practical() {
	return (
		<div>
			<Cards title={"Practical Experience"}>
				<div className="practical-information">
					<Inputs name={"Company name"} type={"text"} />
					<Inputs name={"Position title"} type={"text"} />
					<Inputs name={"Main responsibilities"} type={"text"} />
					<Inputs name={"Start date"} type={"date"} />
					<Inputs name={"End date"} type={"date"} />
				</div>
			</Cards>
		</div>
	)
}

export default Practical
