<script lang="ts">
	export let currentPage: number;
	export let totalPages: number;
</script>

<div class="pagination">
	{#if currentPage > 1}
		<a href="/products">First</a>
		<a href="/products/{currentPage - 1}">...</a>
	{/if}
	{#each [3, 2, 1] as i}
		{#if currentPage - i > 0}
			<a href="/products/{currentPage - i}">
				{currentPage - i}
			</a>
		{/if}
	{/each}
	<span class="text-emerald-300">{currentPage}</span>
	{#each Array(3) as _, i}
		{#if currentPage + (i + 1) <= totalPages}
			<a href="/products/{currentPage + (i + 1)}">{currentPage + (i + 1)}</a>
		{/if}
	{/each}
	{#if currentPage < totalPages}
		<a href="/products/{currentPage + 1}">...</a>
		<a href="/products/{totalPages}">Last</a>
	{/if}
</div>
