<div align="center">
  <img width="1200" height="475" alt="SONG.XP Portfolio Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

  <h1>SONG.XP / Boker</h1>

  <p>
    A personal portfolio site focused on full-stack development, AI applications, and interactive visual presentation.
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

## Overview

This repository is my public portfolio website.

It is built to present:

- personal introduction and positioning
- real GitHub projects instead of placeholder cards
- a more expressive contact section with an interactive 3D lanyard card
- a cleaner visual language for portfolio-style self presentation

## Highlights

- Intro animation and smooth page transitions
- Hero, tech stack, about, projects, and contact sections
- Project carousel with real repository data and custom cover images
- Interactive 3D lanyard in the contact section
- Static deployment friendly build output

## Tech Stack

- `React 19`
- `Vite 6`
- `TypeScript`
- `Tailwind CSS`
- `motion`
- `three`, `@react-three/fiber`, `@react-three/drei`
- `@react-three/rapier`, `meshline`

## Local Development

### Prerequisites

- `Node.js 18+`
- `npm`

### Install

```bash
npm install
```

### Start dev server

```bash
npm run dev
```

Default local URL:

```text
http://localhost:3000
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Environment Variables

This portfolio can run as a static site without extra secrets for its current presentation layer.

If you later re-enable or extend AI-related runtime features, you may need:

```bash
GEMINI_API_KEY=your_key_here
```

## Project Structure

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

## Current Design Direction

- Minimal black/white base with restrained accent colors
- Strong typography and portfolio-focused section rhythm
- More recognizable project cards with custom cover art
- Interactive contact experience instead of a plain footer block

## Deployment

This project is suitable for static deployment on platforms such as:

- `Vercel`
- `Netlify`
- `GitHub Pages`
- `Nginx` static hosting

Build output directory:

```text
dist/
```

## Repository Notes

- The project cards now point to real repositories under `SAKURA1175`
- The contact card uses local PNG assets for front and back textures
- Project covers are stored locally to keep the GitHub presentation stable

## Author

**Song Xinpeng / 宋新鹏**

- GitHub: `https://github.com/SAKURA1175`
- Repo: `https://github.com/SAKURA1175/boker`
