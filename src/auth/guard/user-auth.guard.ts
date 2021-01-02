
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

export class UserAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ) {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  validateRequest(request: any) : boolean | Promise<boolean> | Observable<boolean> {
    return request.user.userId === parseInt(request.params.userId, 10);
  }
}