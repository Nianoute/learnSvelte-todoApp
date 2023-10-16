<script>
	import { createEventDispatcher } from "svelte";
	import { fly } from "svelte/transition";
	export let todo = {};

	const dispatch = createEventDispatcher();

	function onCheck() {
		dispatch("change", { completed: !todo.completed });
	}

	function onInput(e) {
		dispatch("change", { name: e.target.value });
	}

	function onDelete() {
		dispatch("delete");
	}
</script>

<li transition:fly>
	<input type="checkbox" checked={todo.completed} on:change={onCheck} />
	<input type="text" value={todo.name} on:input={onInput} />
	<span class="delete" on:click|preventDefault={onDelete}> Supprimer </span>
</li>

<style>
	.delete {
		color: red;
		font-size: 1.5em;
		cursor: pointer;
	}
</style>
