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

- Node.js 18, Express, TypeScript
- Prisma ORM, PostgreSQL
- Redis (caching)
- JWT Authentication
- Jest, Supertest

### Database

- **Primary:** PostgreSQL (Relational data)
- **Cache:** Redis (Session data, frequently accessed data)

### Infrastructure

- Docker, Docker Compose
- AWS (S3, CloudFront, ECS, RDS)
- Terraform (IaC)
- Github Actions (CI/CD)

## Design Pattern

### 1. Backend for Frontend (BFF)

### 2. Repository Pattern

### 3. Dependency Injection

## Security Considerations

- HTTPS only
- JWT Authentication
- CORS configuration
- Input validation
- SQL injection prevention (Prisma ORM)
- XSS protection
- Rate limiting

## Scalability

- horizontal scaling for backend (ECS auto-scaling)
- CDB for frontend (CloudFront)
- Database read replicas (RDS)

## Deployment

- **Frontend**: S3 + CloudFront
- **Backend**: ECS Fargate
- **Database**: RDS PostgreSQL
- **CI/CD**: GitHub Actions

## 📁 Project Structure

\`\`\`
banking-dashboard/
├── apps/
│ ├── web-client/ # React frontend
│ └── bff-service/ # Node.js backend
├── packages/
│ └── shared-types/ # Shared TypeScript types
├── infrastructure/
│ ├── terraform/ # IaC
│ └── docker/ # Docker configs
├── docs/ # Documentation
└── .github/ # CI/CD workflows
\`\`\`

## 👤 Author

**HoangTuanAnh**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourname)
- Email: your.email@example.com

---
