<script context="module">
  export async function load({ fetch }) {
    const articles = (await (await fetch('/api/post.json')).json()).data;
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
  <meta name="description" content="Catatan hati seorang programmer." />
</svelte:head>

<section class="post__list">
  <h2 class="text-xl font-bold">📝 Tulisan terbaru</h2>
  {#each articles as { title, published_at, updated_at }}
    <article>
      <a href={'post/' + title.split(' ').join('-').toLowerCase()}>
        <h1 class="text-normal font-semibold text-gray-600 active:text-black">
          {title}
        </h1>
        <p class="text-sm">
          {updated_at ? 'Last update: ' + updated_at : 'Pulished at: ' + published_at}
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
