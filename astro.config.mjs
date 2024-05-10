import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
	integrations: [react(), playformCompress()],
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'fr'],
		routing: {
			prefixDefaultLocale: false
		}
	}
});