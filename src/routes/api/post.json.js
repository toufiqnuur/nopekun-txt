import { getArticles } from '$lib/database';

export async function get() {
	return {
		body: {
			data: getArticles()
		}
	};
}
