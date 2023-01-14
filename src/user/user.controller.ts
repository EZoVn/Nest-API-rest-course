import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { JwtGuard } from '../auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  // GET/users/me
  @Get('me')
  getMe(@GetUser() user: User) {
    console.log(user);
    return user;
  }

  @Patch()
  editUser() {}
}
