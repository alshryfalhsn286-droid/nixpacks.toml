import { Injectable } from '@nestjs/common';

@Injectable()
export class LabsService {
  readonly moduleKey = 'labs';

  health() {
    return { module: this.moduleKey, status: 'ready' as const };
  }
}
