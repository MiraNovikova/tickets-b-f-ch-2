import { Module } from '@nestjs/common';
import { ToursController } from './tours.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tour, TourSchema } from 'src/shemas/tours';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/static/private/constants';
import { ToursService } from 'src/services/tours/tours/tours.service';
import { JwtStrategyService } from 'src/services/Authentication/jwt-strategy/jwt-strategy.service';
import { TourItemController } from 'src/controllers/tour-item/tour-item.controller';

@Module({
    controllers: [ToursController, TourItemController],
    imports: [MongooseModule.forFeature([{ name: Tour.name, schema: TourSchema }]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret
        })],
        providers: [ToursService, JwtStrategyService]
})
export class ToursModule { }
