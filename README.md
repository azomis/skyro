# Superhero Directory

A React web application for searching and viewing superhero information. Built with [Vite](https://vite.dev/), [React 19](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), and [React Query](https://tanstack.com/query).

## Features

- Search superheroes by name
- View detailed superhero information (powerstats, biography, appearance, etc.)
- Debounced search input
- Error handling with user-friendly messages

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Create environment file:

```bash
cp .env.example .env.local
```

3. Get your API key from [superheroapi.com](https://superheroapi.com/) and add it to `.env.local`:

```
VITE_API_TOKEN=your_api_key_here
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run prettier:check` | Check code formatting |
| `npm run prettier:fix` | Fix code formatting |

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/           # App configuration, providers, layout
  entities/      # Business entities (superhero)
  pages/         # Page components
  shared/        # Shared utilities, UI components, config
```

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **React Query** - Data fetching
- **React Router** - Routing
