import { Injectable } from '@nestjs/common';

@Injectable()
export class AppointmentsService {
  readonly moduleKey = 'appointments';

  health() {
    return { module: this.moduleKey, status: 'ready' as const };
  }
}
