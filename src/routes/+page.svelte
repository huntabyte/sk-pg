<script lang="ts">
	export let data;

	let limit = 10;

	$: numPages = Math.ceil(data.products.total / limit);
	$: currentPage = Math.floor(data.products.skip / numPages);
</script>

<div class="flex items-center gap-4">
	<a href="/users">Users</a>
	<a href="/products">Products</a>
	<a href="/songs">Songs</a>
</div>
