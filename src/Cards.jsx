import "./styles/Card.css"

function Cards({ title, children, isActive, onShow }) {
	return (
		<div className="card-holder">
			<div className="card">
				<h1>{title}</h1>
				<button onClick={onShow}>V</button>
			</div>
			{isActive ? <div>{children}</div> : ""}
		</div>
	)
}

export default Cards
