import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TourDto } from 'src/dto/tour-dto';
import { ITour, ITourClient } from 'src/interfaces/travel';
import { Tour, TourDocument } from 'src/shemas/tours';

@Injectable()
export class ToursService {
    private toursCount = 10;

    constructor(@InjectModel(Tour.name) private tourModul: Model<TourDocument>) {}

    async generateTours() : Promise<any> {
        for (let i = 0; i <= this.toursCount; i++) {
            const tour = new TourDto('test'+i, 'test desc', 'test operation', '300'+i, 'img');
            const tourData = new this.tourModul(tour);
            tourData.save();
        }
    }

    async deleteTours() : Promise<any> {
        return this.tourModul.deleteMany({})
    }

    async getAllTours(): Promise<ITour[]> {
        return this.tourModul.find()
    }

    async getTourById(id): Promise<ITour>{
        return this.tourModul.findById(id);
    }

    async uploadTour(body: ITourClient) {
        const tour = new TourDto(body.name, body.description, body.tourOperator, body.price, body.img);
        const tourData = new this.tourModul(tour);
        await tourData.save()
    }

    async getToursByName(name): Promise<ITour[]> {
        return this.tourModul.find({name: { "$regex": name, "$options": "i" }})
    }

    async createTour(body): Promise<ITourClient>{
        return this.tourModul.create(body);
    }

}
