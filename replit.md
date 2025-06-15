# Portfolio Application

## Overview

This is a modern full-stack portfolio application built for A Adarsh, a Software Developer and GenAI Engineer. The application showcases professional experience, skills, achievements, and provides contact information through an elegant, responsive web interface.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript throughout the stack
- **API Structure**: RESTful endpoints under `/api` prefix
- **File Serving**: Static file serving for resume downloads
- **Development**: Hot reload with Vite middleware integration

### Data Storage Solutions
- **Database**: PostgreSQL configured with Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations
- **In-Memory Storage**: Temporary MemStorage implementation for development
- **Connection**: Neon Database serverless PostgreSQL connection

### Authentication and Authorization
- Currently implements basic user schema with username/password structure
- Session management configured with connect-pg-simple for PostgreSQL session storage
- Authentication endpoints ready for implementation

## Key Components

### Portfolio Sections
1. **Hero Section**: Introduction with download resume functionality
2. **About Section**: Professional background and education details
3. **Skills Section**: Technical skills organized by categories
4. **Experience Section**: Professional work history with detailed project information
5. **Achievements Section**: Competition wins and leadership roles
6. **Contact Section**: Professional contact information and social links

### Technical Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Scroll Animations**: Intersection Observer API for smooth reveal animations
- **Floating Navigation**: Sticky navigation with active section highlighting
- **Progress Indicator**: Visual scroll progress bar
- **Glass Morphism**: Modern UI effects with backdrop blur

### UI Components
- Comprehensive component library based on Radix UI
- Custom styling with CSS variables for theme consistency
- Reusable components for cards, buttons, badges, and form elements
- Accessible design patterns throughout

## Data Flow

1. **Client Request**: Browser requests portfolio page
2. **Server Response**: Express serves React application via Vite middleware
3. **Static Assets**: Resume and other assets served from server
4. **API Calls**: Client makes requests to `/api` endpoints for dynamic content
5. **Database Queries**: Server queries PostgreSQL via Drizzle ORM
6. **Response Delivery**: JSON responses sent back to client

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **class-variance-authority**: Component variant management

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **react-icons**: Icon library including Simple Icons
- **embla-carousel-react**: Carousel functionality
- **date-fns**: Date utility library

### Development Dependencies
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundling for production
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev`
- **Port**: 5000 (configurable)
- **Hot Reload**: Vite middleware with Express integration
- **Database**: PostgreSQL via environment variable `DATABASE_URL`

### Production Build
- **Build Command**: `npm run build`
- **Build Process**: 
  1. Vite builds client-side assets
  2. esbuild bundles server code
  3. Static assets placed in `dist/public`
- **Start Command**: `npm run start`
- **Deployment Target**: Autoscale on Replit

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **Port Configuration**: 5000 internal, 80 external

## Changelog

```
Changelog:
- June 15, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```