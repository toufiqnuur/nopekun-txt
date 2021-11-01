const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	layout: {
		_: './src/layouts/post.svelte'
	},

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
};

export default config;
