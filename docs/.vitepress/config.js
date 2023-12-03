import { defineConfig } from 'vitepress';
import { applyPlugins } from '@ruabick/md-demo-plugins';
import { genTemp } from '@ruabick/vite-plugin-gen-temp';
import { genApiDoc } from '@ruabick/vite-plugin-gen-api-doc';
import { sidebar } from './sidebar.js';
import { resolve } from 'path';

export default defineConfig({
  lang: 'zh',
  lastUpdated: true,
  base: process.env.NODE_ENV === 'production' ? '/enhanced_element_plus' : '/',
  locales: {
    '/': {
      // lang: 'zh',
      title: 'enhanced_element_plus',
      description: '',
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    localeLinks: {
      text: '',
      items: [
        { text: '中文', link: '/' },
      ],
    },
    nav: [{ text: '指南', link: '/guide' }],
    sidebar,
    algolia: {},
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yamapi0103/EnhancedElementPlus/' },
    ],
  },
  vue: {},
  vite: {
    plugins: [genTemp(), genApiDoc()],
    resolve: {
      alias: {
        '@src': resolve('./src/'),
      },
    },
  },
  markdown: {
    config: (md) => {
      applyPlugins(md);
    },
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  buildEnd() {
    process.exit(0);
  },
});
