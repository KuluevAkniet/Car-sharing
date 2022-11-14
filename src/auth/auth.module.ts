import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import {JwtModule} from '@nestjs/jwt'

@Module({
  providers: [AuthService],
  imports:[UserModule,
           JwtModule.register({
             secret: process.env.PRIVATE_KEY || 'SECRET',
             signOptions:{
              expiresIn: '24h'
             }
           })
  ]
})
     
export class AuthModule {}
