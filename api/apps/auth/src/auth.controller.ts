import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @MessagePattern({ cmd: 'get-users' })
  //rabbitMq context
  async getUser(@Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const origilanMessage = context.getMessage();
    channel.ack(origilanMessage);

    return this.authService.getUsers();
  }

  @MessagePattern({ cmd: 'post-user' })
  //rabbitMq context
  async postUser(@Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    channel.ack(originalMessage);

    return this.authService.postUser();
  }
}
