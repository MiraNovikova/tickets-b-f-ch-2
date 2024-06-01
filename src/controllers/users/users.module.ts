import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from 'src/services/users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/shemas/customer';
import { AuthService } from 'src/services/Authentication/auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/static/private/constants';
import { JwtStrategyService } from 'src/services/Authentication/jwt-strategy/jwt-strategy.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
     PassportModule,
    JwtModule.register({
        secret: jwtConstants.secret
    })],
    controllers: [UsersController],
     providers: [UsersService, AuthService, JwtStrategyService],
})
export class UsersModule {} 
 