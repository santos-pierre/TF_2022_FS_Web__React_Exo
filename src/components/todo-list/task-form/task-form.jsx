import { nanoid } from "nanoid";
import { useState } from "react";
import { useForm } from "react-hook-form";

const priorities = ['low', 'medium', 'high'];

const TaskForm = ({ onAddTodo }) => {
	const { register, handleSubmit, reset, formState: { errors } } = useForm({
		mode: 'onSubmit',
		defaultValues: {
			name: 'Buy some coffee',
		}
	 });

	const onSubmit = (data) => {
		// Utilise la méthode du parent
		onAddTodo({
			id: nanoid(),
			isCompleted: false,
			...data,
		});
		reset();
	}

	return (<form onSubmit={handleSubmit(onSubmit)}>
		<div>
			<label htmlFor="name">Name:</label>
			<input type="text" {...register('name', { required: { message: 'Requis', value: true }, minLength: 10 })} />
			{ errors.name && errors.name.type === 'required' && <p>{ errors.name.message }</p> }
			{ errors.name && errors.name.type === 'minLength' && <p>Minimum 10 caractères</p> }
		</div>
		<div>
			<label htmlFor="description">Description:</label>
			<input type="text" {...register('description')}/>
		</div>
		<div>
			<label htmlFor="priority">Priority:</label>
			<select name="priority" id="priority" {...register('priority')}>
				{ priorities.map((priority) =>
					(<option key={priority} value={priority}>{priority}</option>))
				}
			</select>
		</div>
		<button>Add</button>
	</form>)


	// Sans React-hook-form
	// const [data, setData] = useState({ name: '', description: '', priority: '' });
	// const [error, setError] = useState();

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	// Reset les erreurs
	// 	setError('');

	// 	if (!data.name.trim()) {
	// 		setError('Field name required');
	// 	}else {
	// 		// Utilise la méthode du parent
	// 		onAddTodo({
	// 			id: nanoid(),
	// 			isCompleted: false,
	// 			...data
	// 		});
	// 		setData({ name: '', description: '', priority: '' });
	// 	}
	// }

	// /**
	//  * Met à jour les données du formulaire lorsqu'un champ est modifié.
 	// */
	// const handleChange = (e, field) => {
	// 	setData({ ...data, [field]: e.target.value });
	// }

	// return (<form onSubmit={handleSubmit}>
	// 	<div>
	// 		<label htmlFor="name">Name:</label>
	// 		<input type="text" value={data.name} onChange={(e) => handleChange(e, 'name')} />
	// 		{ error && <p className="red">{error}</p> }
	// 	</div>
	// 	<div>
	// 		<label htmlFor="description">Description:</label>
	// 		<input type="text" value={data.description} onChange={(e) => handleChange(e, 'description')} />
	// 	</div>
	// 	<div>
	// 		<label htmlFor="priority">Priority:</label>
	// 		<select name="priority" value={data.priority} id="priority" onChange={(e) => handleChange(e, 'priority')}>
	// 			{ priorities.map((priority) =>
	// 				(<option key={priority} value={priority}>{priority}</option>))
	// 			}
	// 		</select>
	// 	</div>
	// 	<button>Add</button>
	// </form>)
}

export default TaskForm;
