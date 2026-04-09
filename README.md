# The Matrix (LateCode)

The Matrix is a dual-environment educational platform designed to gamify and structure software engineering learning. Inspired by the architectural and visual themes of the iconic film franchise, the platform forces users to make a choice upon initialization, branching into two entirely distinct learning operating systems.

## Dual-World Architecture

Upon initialization, users undergo a cinematic sequence ending in the permanent choice between the Red Pill and the Blue Pill. This choice fundamentally alters the environment variables, UI aesthetic, and the user's educational trajectory.

### Path 1: The Matrix (Red Pill)
Selecting the Red Pill launches the Matrix DSA Tracker. This is a brutalist, neon-green terminal environment focused strictly on mastering Data Structures and Algorithms.

**Features of the Matrix Tracker:**
- **Comprehensive Problem Database:** A MongoDB-backed repository of algorithmic problems (Arrays, Trees, Graphs, Dynamic Programming).
- **Progress Analytics:** Real-time tracking of completion rates across different difficulty tiers (Easy, Medium, Hard).
- **Streak Mechanisms:** Daily activity trackers designed to enforce consistency and discipline in coding practice.
- **Search and Filtering:** High-speed querying capabilities to locate specific algorithm patterns within the archive.
- **Aesthetic:** Dark void backgrounds, toxic green text, CRT scanline effects, and cascading code visuals.

### Path 2: The Construct (Blue Pill)
Selecting the Blue Pill launches The Construct OS. This is a cerebral, electric-blue simulation environment designed as a zero-to-pro interactive Python curriculum.

**Features of the Construct OS:**
- **Integrated Browser Execution (WASM):** Complete bypassing of backend execution latency via Pyodide. Python code compiles and runs entirely within the client's browser through WebAssembly.
- **Monaco Engine:** Professional-grade IDE integration using the Monaco Editor (the engine powering VS Code) directly in the browser.
- **Curriculum Tree:** A massive 7-module JSON-driven curriculum guiding users from basic syntax down to advanced Object-Oriented Programming and System Architecture.
- **Phased Learning Loops:** Each module consists of Markdown-rendered Theory panels, interactive Task workbenches with automated test assertions, and Multiple-Choice Quizzes.
- **Gamified Progression:** As users pass WASM-executed tests and quizzes, they accumulate Experience Points (XP) and ascend through ranks (Unplugged, Awakened, Hacker, The One).
- **Aesthetic:** Deep midnight navy backgrounds, electric blue glassmorphism panels, sharp geometric borders, and a surgical digital void sensory experience.

## Technology Stack

- **Frontend:** React.js powered by Vite for high-speed hot-module replacement and optimized builds.
- **Styling:** Tailwind CSS combined with dynamic CSS variables to handle the massive contextual theme shifts between the Green and Blue worlds.
- **Backend:** Node.js and Express.js providing lightweight, high-performance REST APIs.
- **Database:** MongoDB via Mongoose for persistent tracking of problem metadata, user progress, and system statistics.
- **Execution Engine:** WebAssembly (WASM) Pyodide runtime to securely execute arbitrary Python logic within the client sandbox.

## Local Environment Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB running locally, or a valid MongoDB Atlas URI

### Initialization Steps

1. Clone the repository and navigate into the root directory.
   ```bash
   git clone <repository_url>
   cd Latecode
   ```

2. Establish local environment variables. Create a `.env` file at the root of the project to define the local connections:
   ```env
   MONGO_URI=mongodb://localhost:27017/latecode
   VITE_API_URL=http://localhost:5000/api
   ```

3. Install frontend dependencies and start the Vite development server:
   ```bash
   npm install
   npm run dev
   ```

4. Open a second terminal to manage the backend infrastructure:
   ```bash
   npm install
   npm run server
   ```

The system will now be accessible on your local port (defaulting to localhost:5173). Follow the initialization sequence and make your choice.

## Production Deployment

The project architecture has been decoupled to allow deploying the frontend and backend to separate hosting providers.

### Backend (Render)
1. In the Render dashboard, create a new Web Service tied to the repository.
2. Specify the Build Command as `npm install`.
3. Specify the Start Command as `npm run server`.
4. Define your production `MONGO_URI` environment variable within the Render dashboard settings.

### Frontend (Vercel)
1. Import the repository as a new Vite project in Vercel.
2. The project contains a `vercel.json` file designed to natively handle client-side routing on Vercel without returning 404 errors.
3. In the Vercel dashboard, specify the `VITE_API_URL` environment variable to point to your new Render backend production URL (ensure `/api` is appended).
4. Deploy the application.
