<script>
	import '../app.css';
	import '@fontsource/inter/300.css';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
</script>

<svelte:head>
	<meta name="theme-color" content="#34D399" />
	<link rel="manifest" href="/manifest.json" />
	<link rel="apple-touch-icon" href="/images/touch/192.png" />
</svelte:head>

<div class="w-full max-w-xl mx-auto">
	<picture>
		<source type="image/avif" srcset="/images/banner.avif" />
		<img src="/images/banner.webp" width="1280" height="426" alt="banner nopekun.txt" />
	</picture>
</div>

<nav class="navbar">
	<a class="navbar__brand" href="/">Nopekun.txt</a>
	<button class="navbar__button" type="button" aria-label="search">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/>
		</svg>
	</button>
	<button class="navbar__button" type="button" aria-label="menu">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/>
		</svg>
	</button>
</nav>

<p class="text-green-700 font-light text-center italic">
	Berisi dokumentasi pribadi dan hal-hal random seputar programming
</p>

<main>
	<slot />
</main>
