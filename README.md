# Checkit Products App

A modern Next.js application showcasing a products listing page with pagination, search, and category filtering.

## Features

- **Products Listing**: Responsive card layout for displaying products
- **Pagination**: Faster load times and reduced API calls (instead of infinite scroll)
- **Search & Filtering**: URL-driven search and category filters with bookmarkable/shareable results
- **API Integration**: Uses [DummyJSON](https://dummyjson.com) for products, posts, and users (no API key required)
- **Next.js Optimization**: Automatic font optimization with `next/font` using the Geist font family
- **Deployment**: Deployed on [Vercel](https://https://check-tau-eight.vercel.app/) for fast and simple hosting

## Getting Started

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn package manager

### Installation

```bash
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Build & Deploy

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

### Deploy to Vercel

This project is optimized for deployment on [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

## Project Structure

- `/app` - Next.js app directory with pages and components
- `/components` - Reusable React components
- `/styles` - CSS styling files
- `/public` - Static assets

## Technologies Used

- **Next.js** - React framework
- **React** - UI library
- **DummyJSON** - Mock API
- **Vercel** - Hosting platform

## License

MIT License - feel free to use this project for learning and development.