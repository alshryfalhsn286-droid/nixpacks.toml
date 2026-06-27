import { Module } from '@nestjs/common';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { AuditModule } from './modules/audit/audit.module';
import { AuthModule } from './modules/auth/auth.module';
import { BillingModule } from './modules/billing/billing.module';
import { ClinicalModule } from './modules/clinical/clinical.module';
import { LabsModule } from './modules/labs/labs.module';
import { PatientsModule } from './modules/patients/patients.module';
import { PharmacyModule } from './modules/pharmacy/pharmacy.module';

@Module({
  imports: [AuthModule, AuditModule, PatientsModule, AppointmentsModule, ClinicalModule, PharmacyModule, LabsModule, BillingModule]
})
export class AppModule {}
