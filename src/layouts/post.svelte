<script>
	import { page } from '$app/stores';
	export let title, published_at, updated_at, author;

	const BASE_URL = 'https://github.com/toufiqnuur/nopekun-txt/blob/main/src/routes/post/';
	const EDIT_URL = BASE_URL + title.split(' ').join('-').toLowerCase() + '.svx';
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="canonical" href={`https://${$page.host + $page.path}`} />
</svelte:head>

<div class="flex items-start flex-col md:flex-row md:space-x-3">
	<div class="mb-6 md:mb-0 md:p-3 md:w-8/12 md:border md:border-black">
		<h1 class="text-2xl font-semibold">{title}</h1>
		<slot />
	</div>
	<div class="md:w-4/12 md:p-3 md:border md:border-black">
		<p>Ditulis oleh: {author}</p>
		<p>{updated_at ? 'Diperbarui: ' + updated_at : 'Diupload: ' + published_at}</p>
		<p><a class="text-blue-600 hover:underline" href={EDIT_URL}>Edit</a> halaman ini.</p>
	</div>
</div>
