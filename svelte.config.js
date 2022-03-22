import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';
import path from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter(),
		vite: {
			// ssr: {
			// 	noExternal: Object.keys(pkg.dependencies || {}),
			// },
			resolve: {
				alias: {
					// these are the aliases and paths to them
					'$components/': path.resolve('./src/components/'),
					'$components/*': path.resolve('./src/components/*'),
					'$lib/': path.resolve('./src/lib/'),
					'$lib/*': path.resolve('./src/lib/*'),
					'$data/': path.resolve('./src/data/'),
					'$data/*': path.resolve('./src/data/*')
				}
			}
		}
	}
};

export default config;
