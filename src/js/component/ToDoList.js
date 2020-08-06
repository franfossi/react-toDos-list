import React, { useState } from "react";

//include images into your bundle

//create your first component
export function ToDoList(props) {
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);

	const handleSubmit = () => {
		setTasks([...tasks, task]);
		setTask("");
	};

	//  Función que busca la tarea (task) a eliminar por el index
	const handleDelete = indexToDelete => {
		const newTasks = tasks.filter((task, index) => {
			return index != indexToDelete;
		});
		setTasks(newTasks);
	};

	return (
		<div className="container">
			<div className="d-flex flex-column justify-content-center p-5 mt-5">
				<h1 className="m-auto text-center p-1 title">
					<font size="+6">to-dos</font>
				</h1>

				<div className="col todoList">
					<ul className="m-auto list-group list-group">
						<li className="list-group-item d-flex justify-content-between">
							<input
								type="text"
								size="50"
								placeholder="What's to be done?"
								value={task}
								onChange={e => setTask(e.target.value)}
							/>

							<button
								type="button"
								className="btn btn-light btn-sm"
								onClick={handleSubmit}>
								{"Add"}
							</button>
						</li>

						{tasks.map((task, index) => {
							return (
								<li
									className="list-group-item d-flex justify-content-between align-items-center myLI"
									key={"index"}
									onClick={event => handleDelete(index)}>
									{task}
									<span className="badge badge-light badge-pill">
										X
									</span>
								</li>
							);
						})}
						<li className="list-group-item d-flex">
							<p>
								<span>{tasks.length} </span>
								items Left
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
