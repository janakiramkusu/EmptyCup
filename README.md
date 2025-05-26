#  EmptyCup

This project displays a list of interior designers active on **EmptyCup’s platform**. Homeowners interested in collaborating with a designer can browse this listings page to find professionals available for business.

##  Features

- Lists all active interior designers
- Allows users to shortlist favorite designers
- Built with React (Vite), Express.js, MongoDB
- Dockerized for local development
- Deployed via Render (Backend) & Vercel (Frontend)

---

## 📦 Tech Stack

| Layer        | Technology           |
|--------------|----------------------|
| Frontend     | React (Vite)         |
| Backend      | Express.js           |
| Database     | MongoDB              |
| Deployment   | Vercel (Frontend), Render (Backend) |
| Local Dev    | Docker + Docker Compose |

---

## 🛠 Local Development Setup (Offline Ready with Docker)

This project is containerized using Docker. You can run both frontend and backend locally without needing an internet connection once the images are built.

### ✅ Prerequisites
- [Docker](https://docs.docker.com/get-docker/) installed

### 🐳 Run Both Frontend & Backend with Docker

1. Clone the repository:
   ```bash
   git clone https://github.com/janakiramkusu/EmptyCup.git
   cd EmptyCup
   
2. Backend (Docker)

To build and run the backend server using Docker, run:

```bash
docker-compose up --build

3. frontend

To build and run the frontend server using Docker, run:

```bash
npm install
npm run dev
