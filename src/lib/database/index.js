import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POST_PATH = path.resolve('./src/routes/post');

export function getArticles() {
  return fs
    .readdirSync(POST_PATH)
    .map((file) => {
      const CONTENT = fs.readFileSync(`${POST_PATH}/${file}`, { encoding: 'utf-8' });
      const METADATA = matter(CONTENT).data;
      return METADATA;
    })
    .sort((a, b) =>
      Date.parse(a.updated_at || a.published_at) > Date.parse(b.updated_at || b.published_at)
        ? -1
        : 1
    );
}
