import { useState } from "react";
import TaskForm from "../../components/todo-list/task-form/task-form";
import TaskList from "../../components/todo-list/task-list/task-list";
import { filterEnum } from "../../enums/filter.enum";

const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState(filterEnum.ALL);

	/**
	 * Ajoute une nouvelle tâche à la liste des tâches.
	 *
	 * @param newTask - La nouvelle tâche à ajouter.
	 * @returns {void}
 	*/
	const handleAddTodo = (newTask) => {
		setTodos([...todos, newTask]);
	}

	/**
	 * Supprime une tâche de la liste des tâches.
	 *
	 * @param {string} taskID - L'identifiant de la tâche à supprimer.
	 * @returns {void}
	*/
	const handleDeleteTodo = (taskID) => {
		const updatedTodos = todos.filter((todo) => todo.id !== taskID);
		setTodos(updatedTodos);
	}

	/**
	 * Met à jour le statut "isCompleted" d'une tâche dans la liste des tâches.
	 *
	 * @param {string} taskID - L'identifiant de la tâche à marquer comme complétée.
	 * @returns {void}
 	*/
	const handleCompleteTodo = (taskID) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === taskID) {
				return { ...todo, isCompleted: true };
			}else {
				return todo;
			}
		});
		setTodos(updatedTodos);
	}

	/**
	 * Génère des boutons pour filtrer les tâches en fonction des filtres disponibles.
	 */
	const filterTodo = (<div>
			{Object.keys(filterEnum).map((key) => {
				return <button key={key} onClick={() => setFilter(filterEnum[key])}>{filterEnum[key]}</button>
			})}
		</div>);

	// Filtre les tâches de la liste des tâches en fonction du filtre sélectionné.
	const todosFilter = todos.filter((todo) => {
		if (filter === filterEnum.ONGOING) {
			// Retourne toutes les tâches non terminées.
			return !todo.isCompleted;
		} else if (filter === filterEnum.HIGH) {
			// Retourne toutes les tâches ayant une priorité élevée.
			return todo.priority === 'high';
		} else if (filter === filterEnum.DONE) {
			// Retourne toutes les tâches terminées.
			return todo.isCompleted;
		} else {
			// Retourne toutes les tâches si aucun filtre n'est sélectionné.
			return true;
		}
	});

	return (<>
		{filterTodo}
		<TaskForm onAddTodo={handleAddTodo} />
		<TaskList tasks={todosFilter} onDelete={handleDeleteTodo} onComplete={handleCompleteTodo}/>
	</>);
}

export default TodoList;
