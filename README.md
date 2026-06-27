# Hospital Management System Starter

This repository contains a complete implementation plan and starter code for a modular hospital management system (HMS). It is designed as a TypeScript monorepo with a NestJS API, React web app, shared packages, database schema, infrastructure stubs, and documentation.

## Recommended tech stack

| Layer | Recommendation | Why |
| --- | --- | --- |
| Frontend | React + TypeScript + Vite | Fast development, strong ecosystem, type safety |
| Backend API | NestJS + TypeScript | Modular architecture, dependency injection, OpenAPI support |
| Database | PostgreSQL + Prisma | Reliable relational storage with typed schema migrations |
| Cache / queues | Redis + BullMQ | Background jobs, notifications, appointment reminders |
| Auth | JWT access tokens + refresh tokens + RBAC | Supports staff, clinicians, admins, and patients |
| File storage | S3-compatible object storage | Medical documents, lab attachments, consent files |
| Observability | OpenTelemetry + structured logs | Auditability and production diagnostics |
| Deployment | Docker Compose for local, Kubernetes-ready services | Portable local development and scalable production path |
| Testing | Vitest/Jest, Supertest, Playwright | Unit, integration, API, and end-to-end coverage |

> Compliance note: this starter is not production-ready for regulated PHI workloads until security, privacy, audit, encryption, backup, and operational controls have been validated against applicable regulations.

## Milestones

### Milestone 1: Product discovery and compliance baseline
- Define user roles: system admin, hospital admin, doctor, nurse, pharmacist, lab technician, receptionist, billing officer, patient.
- Document workflows: registration, triage, appointments, encounters, prescriptions, lab orders, billing, discharge.
- Identify regulatory obligations such as HIPAA, local retention rules, consent management, and audit logging.
- Produce data classification, threat model, and access-control matrix.

### Milestone 2: Platform foundation
- Create the monorepo, shared linting, formatting, test commands, and CI pipeline.
- Stand up PostgreSQL, Redis, API, and web app locally with Docker Compose.
- Implement configuration, health checks, structured logging, and global API error handling.
- Define shared domain types and OpenAPI documentation conventions.

### Milestone 3: Identity, access, and audit
- Implement authentication, refresh tokens, password policies, and account lifecycle flows.
- Add role-based access control and route/module guards.
- Add immutable audit events for sensitive actions.
- Add session management and admin user provisioning.

### Milestone 4: Patient administration
- Build patient registration, demographic profiles, contacts, insurance, and document metadata.
- Add patient search with safe minimum query requirements.
- Track allergies, conditions, and emergency contacts.
- Provide patient portal profile endpoints.

### Milestone 5: Appointments and scheduling
- Model providers, departments, rooms, appointment types, schedules, and availability.
- Implement create/reschedule/cancel/check-in flows.
- Add queue views for reception and clinical teams.
- Add notification hooks for reminders.

### Milestone 6: Clinical records and encounters
- Implement encounters, vitals, notes, diagnosis codes, care plans, and discharge summaries.
- Add clinical timeline views and access-controlled chart retrieval.
- Support attachments and signed clinical notes.
- Add clinical decision support extension points.

### Milestone 7: Pharmacy and lab
- Implement prescriptions, medication catalog, dispensing workflow, and stock reservations.
- Implement lab catalog, lab orders, specimen tracking, result entry, and result review.
- Add alerting for abnormal results and medication conflicts.
- Integrate with external lab/pharmacy systems where required.

### Milestone 8: Billing, claims, and finance
- Model charge items, invoices, payments, payer plans, and insurance claims.
- Generate invoices from appointments, procedures, pharmacy, and lab services.
- Track claim submission, rejection, adjustment, and settlement states.
- Add financial reports and exports.

### Milestone 9: Reporting and operations
- Build dashboards for bed occupancy, appointments, revenue, lab turnaround, pharmacy stock.
- Add scheduled exports and operational reports.
- Implement backup/restore runbooks and disaster recovery checks.
- Add performance testing and production readiness gates.

### Milestone 10: Hardening and launch
- Complete penetration testing, accessibility review, and privacy review.
- Validate audit trails, encryption at rest/in transit, retention, and break-glass workflows.
- Train users, migrate seed data, and run pilot rollout.
- Launch with monitoring, support procedures, and rollback plans.

## Generated folder structure

```text
.
├── apps
│   ├── api
│   │   └── src
│   │       ├── modules
│   │       │   ├── appointments
│   │       │   ├── audit
│   │       │   ├── auth
│   │       │   ├── billing
│   │       │   ├── clinical
│   │       │   ├── labs
│   │       │   ├── patients
│   │       │   └── pharmacy
│   │       ├── app.module.ts
│   │       └── main.ts
│   └── web
│       └── src
│           ├── modules
│           ├── App.tsx
│           └── main.tsx
├── docs
│   ├── architecture.md
│   └── implementation-plan.md
├── infra
│   └── docker-compose.yml
├── packages
│   └── shared
│       └── src
│           └── index.ts
├── prisma
│   ├── schema.prisma
│   └── seed.ts
├── package.json
└── tsconfig.base.json
```

## Getting started

```bash
npm install
npm run dev
```

For local dependencies:

```bash
docker compose -f infra/docker-compose.yml up -d
```

## Module overview

- `auth`: login, identity, sessions, RBAC, password lifecycle.
- `audit`: immutable audit trail for sensitive domain and security actions.
- `patients`: demographics, insurance, contacts, allergies, patient search.
- `appointments`: scheduling, provider availability, check-in, cancellations.
- `clinical`: encounters, vitals, notes, diagnoses, care plans.
- `pharmacy`: prescriptions, dispensing, inventory, medication catalog.
- `labs`: lab orders, specimens, result entry, abnormal flags.
- `billing`: invoices, payments, claims, charge capture.
