import { Injectable } from '@nestjs/common';

@Injectable()
export class BillingService {
  readonly moduleKey = 'billing';

  health() {
    return { module: this.moduleKey, status: 'ready' as const };
  }
}
