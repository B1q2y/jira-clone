# Jira Clone Hands‑On (Code With Antonio)

This repository contains my source code and study notes while following **Code With Antonio – “Build a Jira Clone With Next.js, React, Tailwind, Hono.js (2024)”**.  
The free tutorial is split into **Part 1/2** (`Av9C7xlV0fA`) and **Part 2/2** (`37v63U7-iG0`), for a total of ~16 hours.

> Part 1 video: <https://www.youtube.com/watch?v=Av9C7xlV0fA>  
> Part 2 video: <https://www.youtube.com/watch?v=37v63U7-iG0>

---

## Tech stack

- Next.js 14 / React 18 / TypeScript
- Tailwind CSS & shadcn/ui
- Hono.js API (Edge runtime)
- Appwrite (DB + Auth)
- UploadThing (images)
- Bun tooling

---

## 📋 Agenda

### Part 1 / 2 – Foundations & Workspace setup

| #   | Time    | Topic                          |
| --- | ------- | ------------------------------ |
| 1   | 00:00   | Intro & demo                   |
| 2   | 03:29   | Project setup                  |
| 3   | 09:25   | Adding a component library     |
| 4   | 21:41   | Customizing components         |
| 5   | 34:02   | Resolving lint errors          |
| 6   | 39:12   | Creating auth screens          |
| 7   | 1:34:17 | Setting up Hono API            |
| 8   | 1:48:11 | Creating auth API              |
| 9   | 2:21:49 | Setting up Appwrite & database |
| 10  | 2:51:10 | Building a session middleware  |
| 11  | 3:12:58 | Protecting routes              |
| 12  | 3:45:28 | Dashboard layout               |
| 13  | 4:07:02 | Workspace form                 |
| 14  | 4:37:36 | Image upload                   |
| 15  | 5:04:37 | Workspace switcher             |
| 16  | 5:22:36 | Workspace members              |
| 17  | 5:38:45 | Responsive modal               |
| 18  | 6:11:44 | Stand‑alone layout             |
| 19  | 6:22:51 | Workspace settings             |
| 20  | 7:02:38 | Refactoring server queries     |
| 21  | 7:12:03 | Delete functionality           |
| 22  | 7:35:03 | Reset invite functionality     |
| 23  | 7:47:03 | Invite system                  |
| 24  | 8:10:05 | Wrap‑up Part 1                 |

### Part 2 / 2 – Projects, tasks & analytics

| #   | Time     | Topic                         |
| --- | -------- | ----------------------------- |
| 25  | 00:34:28 | Adding workspace projects     |
| 26  | 00:40:04 | Building project settings     |
| 27  | 00:28:53 | Building a tasks API          |
| 28  | 00:27:18 | Building a task form          |
| 29  | 00:27:25 | Building data filters         |
| 30  | 00:29:13 | Building a data table         |
| 31  | 00:24:53 | Adding task settings          |
| 32  | 00:15:40 | Building a data kanban        |
| 33  | 00:43:15 | Kanban update API             |
| 34  | 00:31:23 | Building a data calendar      |
| 35  | 00:35:05 | Adding a task page            |
| 36  | 00:30:06 | Refactoring server components |
| 37  | 00:28:35 | Project analytics             |
| 38  | 00:26:23 | Workspace analytics           |
| 39  | 00:10:27 | Resolving build errors        |
| 40  | 00:16:06 | Implementing OAuth login      |
| 41  | 00:07:37 | Deployment                    |

---

## 🚀 Getting started

```bash
git clone https://github.com/<your-username>/jira-clone.git
cd jira-clone
bun install         # or pnpm / npm install
cp .env.example .env.local  # fill in Appwrite keys
bun run dev
```

Visit <http://localhost:3000>.

---
