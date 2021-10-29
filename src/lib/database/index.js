import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POST_PATH = path.resolve('./src/routes/post');

export function getArticles() {
	return fs.readdirSync(POST_PATH).map((file) => {
		const CONTENT = fs.readFileSync(`${POST_PATH}/${file}`, { encoding: 'utf-8' });
		const RESULT = matter(CONTENT);
		return RESULT;
	});
}
