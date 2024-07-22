import React, { useState } from 'react';

const ToDoList = () => {
	const [task, setTask] = useState('');
	const [tasks, setTasks] = useState([]);

	const handleInputChange = (e) => {
		setTask(e.target.value)};

		const handleDelete = (index) => {
			const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
			setTasks(newTasks);

		};

		const handleKeyPress = (e) => {
			if (e.key === 'Enter' && task.trim() !== '') {
				setTasks([...tasks, task]);
				setTask('');
			}
		};

		return (
			<div className="container">
				<h1>Todos</h1>
				<input
					type="text"
					className="todo-input"
					placeholder="What needs to be done?"
					value={task}
					onChange={handleInputChange}
					onKeyPress={handleKeyPress}/>
				<ul className="todo-list">
					{tasks.map((task, index) => (
						<li key={index} className="todo-item">
							<p>{task}</p>
							<button className="btn-delete" onClick={() => handleDelete(index)}>
								&times;
							</button>
						</li>
					))}
				</ul>
			</div>
		);
	};

	export default ToDoList;