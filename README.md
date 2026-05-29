# Team-26.122 — UIUC Lost & Found

Hi there! Welcome to Lost & Found, a full-stack web app built for UIUC students to report and browse lost items across the UIUC campus buildings. Users can post found items, search by location, and reconnect with their belongings through a clean, intuitive platform. 

## Developers
- **Mighty Burapachaisri:** Frontend Lead + Post management (item cards)
- **Man Kwanpracha:** Supabase lead + item detail
- **Yohali Bopeya:** Reporting lost items button and image upload. 
- **Sommasichukwu Egbuna:**  Browse feed + search/filter

## What we're using
- **Frontend:** React + Vite + Tailwind CSS + React Router
- **Backend:** Supabase (Postgres, Auth, Storage)
## Technical Architecture

<img width="1075" height="315" alt="component-arch" src="https://github.com/user-attachments/assets/af38f066-19af-482d-9e4b-fc963fccd25b" />

## Enviroment Setup
Before you start make sure you have these installed:

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

