import { Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { log } from 'console';
import { ITour, ITourClient } from 'src/interfaces/travel';
import { JwtAuthGuardService } from 'src/services/Authentication/jwt-auth.guard/jwt-auth-guard.service';
import { ToursService } from 'src/services/tours/tours/tours.service';

@Controller('tours')
export class ToursController {
    constructor (private toursService: ToursService) {}

    
    @UseGuards(JwtAuthGuardService)

    @Post()
    initTours(): Promise<ITour[]> {
        this.toursService.generateTours();
        return this.toursService.getAllTours();
    }

    @Delete()
    removeAllTours(): void {
       this.toursService.deleteTours();
    }

    @Get()
    getAllTours(): Promise<ITour[]>{
        return this.toursService.getAllTours()
    }

    @Get(':id')
    getTourById(@Param('id') id): Promise<ITour>{
        return this.toursService.getTourById(id)
    }

    @Post('body')
    createTour(@Param('body') body) : Promise<ITourClient> {
        return this.toursService.createTour(body)
    }
  
}
