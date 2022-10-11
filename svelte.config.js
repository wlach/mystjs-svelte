import adapter from '@sveltejs/adapter-auto';
import { mystjs } from './src/lib/index.js';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		mystjs({ extensions: 'md' }),
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
