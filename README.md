A lost & found website for UIUC students to post and browse lost items across campus buildings. Built as a CS 222 team project.
Tech stack

Frontend: React + Vite + Tailwind CSS + React Router
Backend: Supabase (Postgres, Auth, Storage)

Prerequisites
Before you start, make sure you have:

Node.js 20+ — check with node --version. If you don't have it, install from nodejs.org (grab the LTS version).
Git — check with git --version. Comes pre-installed on macOS and most Linux; Windows users grab it from git-scm.com.
A code editor — VS Code is what most of us use.


1. Clone the repo
-> bashgit clone https://github.com/SP26-UIUC-CS222/Team-26.122.git
-> cd Team-26.122

3. Install dependencies
-> The React app lives in the lost-and-found/ subfolder, so step into it first:
-> bashcd lost-and-found
-> npm install
   
This downloads everything listed in package.json into a node_modules/ folder. Takes 10–30 seconds.

5. Run the dev server
bashnpm run dev
You should see something like:
  VITE v5.x.x  ready in 300 ms
  ➜  Local:   http://localhost:5173/
Open that URL in your browser. You should see the browse page with mock item cards.
To stop the server, press Ctrl+C in the terminal.

