# Team-26.122 — UIUC Lost & Found

Hey team! This is our CS 222 project: a lost & found website for UIUC students where people can post things they've lost (or found) around campus buildings and browse what's out there.

## What we're using

- **Frontend:** React + Vite + Tailwind CSS + React Router
- **Backend:** Supabase (Postgres, Auth, Storage)

## Before you start

Make sure you have these installed:

- **Node.js 20+** — run `node --version` to check. If you don't have it, grab the LTS version from [nodejs.org](https://nodejs.org).
- **Git** — run `git --version` to check. 


## Getting it running

### 1. Clone the repo

```bash
git clone https://github.com/SP26-UIUC-CS222/Team-26.122.git
cd Team-26.122
```

### 2. Install dependencies

The React app lives inside the `lost-and-found/` folder, so cd into it first:

```bash
cd lost-and-found
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

You should see something like this in your terminal:

```
VITE v5.x.x  ready in 300 ms
Local:   http://localhost:5173/
```

Open the link after "Local: " in your browser and you should see the browse page with some sample mock items! 

