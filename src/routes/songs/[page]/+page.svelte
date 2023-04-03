<script lang="ts">
	import { page } from '$app/stores';
	export let data;

	let pageSize = 10;
	$: totalItems = data.totalSongs;
	$: totalPages = Math.ceil(totalItems / pageSize);
	$: currentPage = Number($page.params.page) - 1;
</script>

<h1>Songs</h1>
{#each data.songs as song}
	<p>{song.title} - {song.artist}</p>
{/each}
<div class="pagination">
	{#each Array(totalPages) as _, idx}
		<a href="/songs/{idx + 1}" class={currentPage === idx ? 'text-emerald-300' : ''}>
			{idx + 1}
		</a>
	{/each}
</div>
