<script lang="ts">
	import { page } from '$app/stores';
	export let data;

	let pageSize = 10;
	$: totalItems = data.products.total;
	$: totalPages = Math.ceil(totalItems / pageSize);
	$: currentPage = Number($page.params.page) - 1;
</script>

<h1>Products</h1>
{#each data.products.products as product}
	<p>{product.id} - {product.title}</p>
{/each}
<div class="pagination">
	{#each Array(totalPages) as _, idx}
		<a href="/products/{idx + 1}" class={currentPage === idx ? 'text-emerald-300' : ''}>
			{idx + 1}
		</a>
	{/each}
</div>
