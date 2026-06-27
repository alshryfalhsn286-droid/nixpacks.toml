export type Role =
  | 'SYSTEM_ADMIN'
  | 'HOSPITAL_ADMIN'
  | 'DOCTOR'
  | 'NURSE'
  | 'PHARMACIST'
  | 'LAB_TECH'
  | 'RECEPTIONIST'
  | 'BILLING_OFFICER'
  | 'PATIENT';

export type AppointmentStatus = 'REQUESTED' | 'SCHEDULED' | 'CHECKED_IN' | 'COMPLETED' | 'CANCELLED' | 'NO_SHOW';
export type EncounterStatus = 'OPEN' | 'SIGNED' | 'AMENDED' | 'CANCELLED';
export type InvoiceStatus = 'DRAFT' | 'ISSUED' | 'PAID' | 'VOID' | 'PARTIALLY_PAID';

export interface PatientSummary {
  id: string;
  medicalRecordNumber: string;
  fullName: string;
  dateOfBirth: string;
  phone?: string;
}

export interface ModuleDefinition {
  key: string;
  displayName: string;
  permissions: string[];
}

export const hmsModules: ModuleDefinition[] = [
  { key: 'auth', displayName: 'Identity & Access', permissions: ['users:read', 'users:write', 'roles:manage'] },
  { key: 'patients', displayName: 'Patient Administration', permissions: ['patients:read', 'patients:write'] },
  { key: 'appointments', displayName: 'Appointments', permissions: ['appointments:read', 'appointments:write'] },
  { key: 'clinical', displayName: 'Clinical Records', permissions: ['encounters:read', 'encounters:write'] },
  { key: 'pharmacy', displayName: 'Pharmacy', permissions: ['prescriptions:read', 'prescriptions:dispense'] },
  { key: 'labs', displayName: 'Laboratory', permissions: ['labs:read', 'labs:result'] },
  { key: 'billing', displayName: 'Billing', permissions: ['invoices:read', 'invoices:write', 'claims:manage'] },
  { key: 'audit', displayName: 'Audit Trail', permissions: ['audit:read'] }
];
