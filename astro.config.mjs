import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    logo: {
      src: './src/assets/pictures/avatar.webp',
    },
    title: 'FlapyPan CS Wiki',
    locales: {
      root: {
        label: '简体中文',
        lang: 'zh-CN',
      },
    },
    head: [
      {
        tag: 'link',
        attrs: {
          rel: 'stylesheet',
          href: 'https://cdn.staticfile.org/lxgw-wenkai-screen-webfont/1.7.0/style.min.css',
        },
      },
    ],
    social: {
      github: 'https://github.com/FlapyPan/cs-wiki',
    },
    sidebar: [
      { label: '前言', link: '' },
      {
        label: '新手入门',
        collapsed: true,
        autogenerate: {
          directory: 'start-here',
        },
      },
      {
        label: '推荐工具',
        collapsed: true,
        autogenerate: {
          directory: 'tools',
        },
      },
      {
        label: '编程语言基础',
        collapsed: true,
        autogenerate: {
          directory: 'language',
        },
      },
      {
        label: '后端开发',
        collapsed: true,
        autogenerate: {
          directory: 'backend',
        },
      },
    ],
    lastUpdated: true,
    editLink: {
      baseUrl: 'https://github.com/FlapyPan/cs-wiki/edit/main/',
    },
    customCss: ['./src/assets/main.css'],
  })],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
})
