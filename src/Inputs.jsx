function Inputs({ name, type }) {
	return (
		<form>
			<label className="labels">
				{name}
				<input className="label-inputs" type={type} />
			</label>
		</form>
	)
}

export default Inputs
