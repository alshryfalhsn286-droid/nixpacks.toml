import { Injectable } from '@nestjs/common';

@Injectable()
export class PharmacyService {
  readonly moduleKey = 'pharmacy';

  health() {
    return { module: this.moduleKey, status: 'ready' as const };
  }
}
