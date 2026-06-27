import { Injectable } from '@nestjs/common';

@Injectable()
export class AuditService {
  readonly moduleKey = 'audit';

  health() {
    return { module: this.moduleKey, status: 'ready' as const };
  }
}
