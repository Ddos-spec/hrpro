// @ts-check
import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';
const base = isProd ? '/github' : '/';
const site = 'https://hrproduction.id/github';

// https://astro.build/config
export default defineConfig({
	site,
	base,
});
