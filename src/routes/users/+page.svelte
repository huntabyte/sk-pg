<script lang="ts">
	import { page } from '$app/stores';
	export let data;

	let pageSize = 10;
	$: totalItems = data.users.total;
	$: totalPages = Math.ceil(totalItems / pageSize);
	$: currentPage = (Number($page.url.searchParams.get('skip')) || 0) / pageSize;
</script>

<h1>Users</h1>
{#each data.users.users as user}
	<p>{user.id} - {user.email}</p>
{/each}
<div class="pagination">
	{#each Array(totalPages) as _, idx}
		<a
			href="/users?limit={pageSize}&skip={pageSize * idx}"
			class={currentPage === idx ? 'text-emerald-300' : ''}>
			{idx + 1}
		</a>
	{/each}
</div>
