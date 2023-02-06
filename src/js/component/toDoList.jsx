import React, { useState } from "react";

//create your first component
const ToDoList = () => {
	const [dato, setdato] = useState("");
	const [save, setSave] = useState([]);

	function handledato(e) {
		setdato(e.target.value);
	}

	function enviardato(e) {
		e.preventDefault();
		setSave(save.concat(dato));
		setdato("");
	}

	function eliminardato(eliminarli) {
		const nuevasTareas = save.filter(function (item, index) {
			return index !== eliminarli;
		});
		console.log(eliminarli);
		console.log(nuevasTareas);
		setSave(nuevasTareas);
	}

	console.log(save);

	return (
		<>
			<div>
				<h1 className="d-flex justify-content-center text-primary">TO DO LIST</h1>
				<div className="container col-md-4  mt-3">
					<input
						id="exampledato"
						onChange={(e) => {
							setdato(e.target.value);
						}}
						type="text"
						className="form-control"
						value={dato}
					/>
					<button
						className="btn btn-success container col-md-4  mt-3 d-flex justify-content-center"
						type="button"
						id="enviar"
						onClick={enviardato}
					>
						ADD TASK
					</button>
				</div>
			</div>
			<div className=" d-flex justify-content-center mt-3">
				<ul className="list-group ">
					{save.map((item, index) => (
						<li key={index} class="list-group-item">
							{" "}
							{item}{" "}
							<button
								className="btn btn-danger justify-content-right"
								type="button"
								id="eliminar"
								onClick={() => eliminardato(index)}
							>
								X
							</button>{" "}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default ToDoList;
