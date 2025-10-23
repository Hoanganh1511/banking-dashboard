# Banking Dashboard

> A modern, secure banking dashboard built with React, TypeScript and Microservices architecture

## Highlights

- **Modern Frontend:** React 18 + Typescript + Vite
- **Backend for Frontend:** Node.js + Express + GraphQL
- **Cloud Native:** Deployed on AWS (S3 + CloudFront + ECS)
- **CI/CD:** Automated testing and deployment with GitHub Actions
- **Well Tested:** 85%+ test coverage (Unit + Integration + E2E)
- **Accessible:** WCAG 2.1 AA compliant
- **Secure:** OWASP Top 10 compliance, JWT Auth, encrypted data

### Core Features

- **Account Management** View and manage multiple accounts (checking, savings, credit)
- **Transaction Tracking** Real-time transaction history with filtering and search
- **Budget Management** Create and track budgets by category
- **Dashboard Analytics** Interactive charts and spending insights
- **Authentication** Secure login with JWT and OAuth 2.0

### Technical Features

- **Responsive Design** Mobile-first approach, works on all devices
- **Real-time Updates** WebSocket support for live data
- **Offline support** Service Worker for offline capability
- **Performance** Code splitting, lazy loading, optimized bundles
- **Accessibility** Keyboard navigation, screen reader support

## Architecture

```
┌─────────────┐      HTTPS/GraphQL     ┌─────────────┐
│   React     │ ←──────────────────→   │  Node.js    │
│   Frontend  │                         │  BFF        │
│ (CloudFront)│                         │  (ECS)      │
└─────────────┘                         └──────┬──────┘
                                               │
                                               ▼
                                        ┌─────────────┐
                                        │ PostgreSQL  │
                                        │   (RDS)     │
                                        └─────────────┘
```

## Tech Stack

### Frontend

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **State Management:** Zustand
- **Data Fetching:** Tanstack Query (React Query)
- **Routing:** React Router v6
- **UI Library:** Matetial UI (MUI)
- **Styling:** TailwindCSS + CSS Modules
- **Forms:** React Hook Form + Zod
- **Charts:** Recharts
- **Testing:** Vitest + React Testing Library + Playwright

### Backend

### Infrastructure
