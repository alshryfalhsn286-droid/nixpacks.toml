import { Injectable } from '@nestjs/common';

@Injectable()
export class ClinicalService {
  readonly moduleKey = 'clinical';

  health() {
    return { module: this.moduleKey, status: 'ready' as const };
  }
}
