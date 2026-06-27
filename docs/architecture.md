# Architecture

The hospital management system uses a modular monolith API as the first production milestone. Each domain module owns its application services, authorization checks, validation, audit events, and persistence boundaries. The architecture can later split high-throughput domains such as notifications, billing integrations, or reporting into independent services.

## Core modules

- Auth and access control
- Audit trail
- Patient administration
- Appointments and scheduling
- Clinical records
- Pharmacy
- Laboratory
- Billing and claims

## Cross-cutting requirements

- Every PHI read/write should be authorized and auditable.
- Sensitive data must be encrypted in transit and at rest.
- Background jobs should be idempotent and traceable.
- External integrations should use adapter interfaces to isolate vendor-specific protocols.
