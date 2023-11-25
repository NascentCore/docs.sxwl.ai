# docs.sxwl.ai

算想未来文档

## 技术栈

- Docusaurus: 一个基于 React 的静态网站生成器，用于构建文档网站和博客。
- React: 用于构建用户界面的 JavaScript 库。
- TypeScript: 一种静态类型检查的 JavaScript 超集。

## 安装和使用

node 版本 >= 18

```bash
yarn install # 安装依赖包
yarn start # 启动开发服务器
yarn build # 打包
```

## 博客使用方式

创建文档：

1. 选择文档目录： 文档存储在 docs 目录下。可以选择在此目录下创建一个新的子目录来组织文档内容。

2. 创建文档文件： 在选定的文档目录下，可以使用 .md 扩展名，例如 my-document.md。

3. 添加文档内容： 打开 Markdown 文件，并开始编写文档内容。可以使用标准的 Markdown 语法来添加标题、段落、列表、链接、代码块等。

4. 添加 YAML 头信息（可选）： 在 Markdown 文件的开头，可以添加 YAML 头信息，用于定义文档的元数据。例如：

```
---
id: doc-with-tags
title: 一篇包含标签的文档
tags:
  - 演示
  - 开始上手
---

```

YAML 头信息中的 title 用于指定文档的标题。

5：本地预览

在终端中，返回到项目根目录并运行以下命令，以启动本地开发服务器以预览：

```
yarn start
```

在浏览器中访问 http://localhost:3000，能够看到新创建的文章。

6：部署

希望将其发布到网站上，运行以下命令来构建静态文件：

```
yarn build
```

生成的静态文件将存储在 build 文件夹中。可以将这些文件部署到静态文件托管服务上，在互联网上分享。
