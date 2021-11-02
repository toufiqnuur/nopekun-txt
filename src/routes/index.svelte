<script context="module">
	export async function load({ fetch }) {
		const articles = await (await fetch('/api/post.json')).json();
		return { props: { articles } };
	}
</script>

<script>
	import { page } from '$app/stores';
	export let articles;
</script>

<svelte:head>
	<title>Nopekun.txt - Catatan hati seorang programmer</title>
	<link rel="canonical" href={`https://${$page.host}`} />
</svelte:head>

<section class="post__list">
	<h2 class="text-xl font-bold">📝 Tulisan terbaru</h2>
	{#each articles.data as item}
		<article>
			<a href={'post/' + item.data.title.split(' ').join('-').toLowerCase()}>
				<h1 class="text-normal font-semibold text-gray-600 active:text-black">
					{item.data.title}
				</h1>
				<p class="text-sm">
					{item.data.updated_at
						? 'Last update: ' + item.data.updated_at
						: 'Pulished at: ' + item.data.published_at}
				</p>
			</a>
		</article>
	{/each}
</section>

<style>
	.post__list {
		@apply flex flex-col space-y-3;
	}
</style>
