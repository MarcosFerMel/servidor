import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  private readonly authService = new AuthService();

  @Post('register')
  async register(@Body() dto: RegisterDto, @Res() res: Response) {
    try {
      const result = await this.authService.register(dto);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
