// @ts-check
import { defineConfig } from 'astro/config';

const isProd = process.env.NODE_ENV === 'production';
const base = isProd ? '/hrpro' : '/';
const site = 'https://ddos-spec.github.io/hrpro';

// https://astro.build/config
export default defineConfig({
	outDir: './docs',
	site,
	base,
});
