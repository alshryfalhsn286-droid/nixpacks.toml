import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  readonly moduleKey = 'auth';

  health() {
    return { module: this.moduleKey, status: 'ready' as const };
  }
}
