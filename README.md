# Movie Search App 🎥

A responsive movie discovery application built with Next.js, TypeScript, and TMDB API as part of Noon's technical assessment.


## 🌟 Features
- Instant movie search with real-time API results
- Responsive design for all devices
- Type-safe React components
- Optimized performance with lazy loading
- LocalStorage integration for favorites 

## 🛠 Installation Guide

### Prerequisites
- Node.js (v18+)
- npm/yarn
- TMDB API key

### Steps

# 1. Clone repository
git clone https://github.com/MohammedKhalidMahmoud/Noon-assesment-task.git
cd Noon-assesment-task

# 2. Install dependencies
npm install

# 3. Set up environment variables
echo "NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here" > .env.local

# 4. Run development server
npm run dev



Open http://localhost:3000 in your browser.

🧠 Design Decisions & Challenges
Technical Choices
Next.js App Router

Enabled efficient routing and static generation

Implemented dynamic imports for code splitting

TypeScript Integration to reduce runtime errors.

Created interfaces for API responses (e.g., Movie interface)


Performance Optimization

// Example: Dynamic component loading
const CardList = dynamic(() => import('./CardList'), { 
  loading: () => <SkeletonLoader /> 
});

Challenges Faced
Challenge	Solution
API rate limiting	Implemented client-side caching
Hydration errors	Used useEffect for client-side operations


📈 Potential Improvements
Add Jest/React Testing Library

Implement server-side caching

Dark mode toggle
