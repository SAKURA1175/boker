<div align="center">
  <img width="1200" height="475" alt="SONG.XP Portfolio Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

  <h1>SONG.XP / Boker</h1>

  <p>
    一个用于展示我个人能力、真实项目与交互表达的作品集网站。
  </p>

  <p>
    <img alt="React" src="https://img.shields.io/badge/React-19-111827?style=flat-square&logo=react&logoColor=61dafb" />
    <img alt="Vite" src="https://img.shields.io/badge/Vite-6-111827?style=flat-square&logo=vite&logoColor=646cff" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-111827?style=flat-square&logo=typescript&logoColor=3178c6" />
    <img alt="Three.js" src="https://img.shields.io/badge/Three.js-3D-111827?style=flat-square&logo=three.js&logoColor=ffffff" />
    <img alt="Motion" src="https://img.shields.io/badge/Motion-UI-111827?style=flat-square&logo=framer&logoColor=ffffff" />
  </p>

  <p>
    <a href="./README.md">English</a> · <a href="./README.zh-CN.md">简体中文</a>
  </p>
</div>

## 项目简介

这个仓库是我的个人作品集网站，用来集中展示：

- 个人定位与技术方向
- GitHub 上的真实项目，而不是占位卡片
- 更有辨识度的视觉表达与动效设计
- 带有 3D 吊牌交互的联系区

## 当前亮点

- 首页入场动画与页面过渡
- Hero、技术栈、关于我、项目、联系等完整模块
- 项目轮播区接入真实仓库内容，并加入本地封面图
- 联系区加入可交互的 3D 吊牌卡片
- 支持静态部署，适合直接发布到公网

## 技术栈

- `React 19`
- `Vite 6`
- `TypeScript`
- `Tailwind CSS`
- `motion`
- `three`、`@react-three/fiber`、`@react-three/drei`
- `@react-three/rapier`、`meshline`

## 本地启动

### 环境要求

- `Node.js 18+`
- `npm`

### 安装依赖

```bash
npm install
```

### 启动开发环境

```bash
npm run dev
```

默认本地地址：

```text
http://localhost:3000
```

### 生产构建

```bash
npm run build
```

### 本地预览构建结果

```bash
npm run preview
```

## 环境变量

当前这个作品集的展示层可以直接作为静态站点运行，不强制依赖额外密钥。

如果你后续重新启用或扩展 AI 相关能力，可以补充：

```bash
GEMINI_API_KEY=your_key_here
```

## 目录结构

```text
src/
  components/
    Hero.tsx
    TechStack.tsx
    About.tsx
    Projects.tsx
    Footer.tsx
    Lanyard.tsx
  assets/
    lanyard/
    projects/
png/
```

## 设计方向

- 黑白为主、低饱和点缀的整体基调
- 强调排版、留白与作品集气质
- 项目卡片使用本地封面图增强识别度
- 联系区不再只是普通底部信息块，而是更具记忆点的交互展示区

## 部署

该项目适合部署到以下静态平台：

- `Vercel`
- `Netlify`
- `GitHub Pages`
- `Nginx` 静态托管

构建输出目录：

```text
dist/
```

## 仓库说明

- 项目区目前接入的是 `SAKURA1175` 账号下的真实仓库
- 联系区吊牌卡片正反面使用本地 PNG 贴图
- 项目封面图保存在仓库内，保证 GitHub 展示稳定一致

## 作者

**宋新鹏 / Song Xinpeng**

- GitHub: `https://github.com/SAKURA1175`
- Repository: `https://github.com/SAKURA1175/boker`
