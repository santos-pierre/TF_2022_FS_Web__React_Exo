const TaskList = ({ tasks, onDelete, onComplete }) => {
	if (tasks.length === 0) {
		return <h1>Todo empty</h1>
	}

	return (<section>
		{tasks.map((task) => {
			return <div key={task.id} className={task.isCompleted ? 'complete-todo' : ''}>
				<h3>{ task.name }</h3>
				<p>{ task.description }</p>
				<p className={ task.priority === 'high' ? 'red' : '' }>{ task.priority }</p>
				<div>
					<button type="button" disabled={task.isCompleted} onClick={() => onComplete(task.id)}>Done</button>
					<button type="button" onClick={() => onDelete(task.id)}>Delete</button>
				</div>
			</div>
		})}
	</section>);
}

export default TaskList;
