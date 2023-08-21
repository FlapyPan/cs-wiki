# cs-wiki

<https://cswiki.flapypan.top/>

欢迎来到 FlapyPan CS Wiki，这里是我的计算机学习指南。

这里收集和整理了一些我自己学习或广受好评的计算机相关课程指南。

> 目前大部分文章来源于 [HAUE CS WIKI](https://hauecs.wiki/)

## 如何使用该WIKI

本WIKI是一个大量有口皆碑的计算机课程指南，目的是帮助使用者筛选出一些值得信赖的课程，以便节省大量花费在挑选学习课程上的时间。

## Q&A

### 如何判断自己是否适合自学？

* 首先，学习是每一个人与生俱来的天赋。
* 不妨先试着学习一门教学进度内的课程，尝试提前学习教学的章节，然后利用课堂检验自学的成果作为判断依据。
* 大部分情况下，一开始自学效果不佳，这是十分正常的，但是不用担心，从零开始坚持自学，一点一点进步。

### 成为贡献者？

如果你有推荐的课程或资料分享，欢迎提交pr或发邮件给我 [flapypan@gmail.com](flapypan@gmail.com)。

提交 pr 前请**仔细**阅读本项目的 [README.md](https://github.com/FlapyPan/cs-wiki/blob/main/README.md)
以及 [文章模板](/docs-template)

## 特别鸣谢

* 感谢[HAUE CS WIKI](https://hauecs.wiki/)提供的灵感。
* 以及阅读了这本 WIKI 并慷慨地给点了 Star⭐ 的你😘。

## 项目结构

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

在文件夹 `src/content/docs/` 中 后缀名 `.md` 或者 `.mdx` 的文件将被渲染成 html 页面。

图片可以放置在 `src/assets/` 文件夹然后使用相对路径访问。

静态文件放置在 `public/` 文件夹。

## 指令

本项目使用 pnpm 管理依赖

| Command                    | Action                                 |
|:---------------------------|:---------------------------------------|
| `pnpm install`             | 安装依赖                                   |
| `pnpm run dev`             | 运行开发服务器 `localhost:3000`               |
| `pnpm run build`           | 构建产物 `./dist/`                         |
| `pnpm run preview`         | 预览构建的产物                                |
| `pnpm run astro ...`       | 运行 astro 命令 `astro add`, `astro check` |
| `pnpm run astro -- --help` | 获取 astro 命令帮助                          |
