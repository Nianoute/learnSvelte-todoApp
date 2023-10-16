<script>
	import Todo from "./Todo.svelte";
	import { todos } from "./store.js";

	let name = "world";
	let newTodo = "";
	let showCompleted = true;

	$: filteredTodos = $todos.filter((t) =>
		showCompleted === true ? true : t.completed === false
	);

	function addTodo(e) {
		$todos = [
			...$todos,
			{
				name: newTodo,
				completed: false,
			},
		];
		newTodo = "";
	}

	function changeTodo(todo) {
		$todos = $todos.map((t) => {
			if (t === todo) {
				return { ...todo, completed: !t.completed };
			}
			return t;
		});
	}

	function deleteTodo(todo) {
		$todos = $todos.filter((t) => t !== todo);
	}
</script>

<h1>Hello {name}!</h1>
<label>
	<input type="checkbox" bind:checked={showCompleted} /> Afficher les tâches complétées
</label>
<ul>
	{#each filteredTodos as todo (todo.id)}
		<Todo
			{todo}
			on:change={(e) => changeTodo(todo, e.detail)}
			on:delete={() => deleteTodo(todo)}
		/>
	{/each}
</ul>

<input type="text" bind:value={newTodo} />
<button on:click|preventDefault={addTodo}>Ajouter</button>
