<script lang="ts">
	import '../app.css';
</script>

<div class="container mx-auto w-full">
	<div class="flex w-full items-center">
		<div class="w-1/2">
			<p class="font-medium">SvelteKit Pagination</p>
		</div>
		<div class="w-1/2">
			<nav class="flex justify-end">
				<a href="/users" class="p-4 hover:text-emerald-200">Users</a>
				<a href="/products" class="p-4 hover:text-emerald-200">Products</a>
				<a href="/songs" class="p-4 hover:text-emerald-200">Songs</a>
			</nav>
		</div>
	</div>
	<div class="py-12">
		<slot />
	</div>
</div>
