import { Injectable } from '@nestjs/common';

@Injectable()
export class PatientsService {
  readonly moduleKey = 'patients';

  health() {
    return { module: this.moduleKey, status: 'ready' as const };
  }
}
