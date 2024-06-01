import { Controller, Post, UseInterceptors, Body, UploadedFile, Param } from '@nestjs/common';
import { ITour, ITourClient } from '../../interfaces/travel'
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ToursService } from 'src/services/tours/tours/tours.service';

@Controller('tour-item')
export class TourItemController {
    constructor(private toursService: ToursService) { }

    static imgName: string;

    @Post()
    @UseInterceptors(FileInterceptor('img', {

        storage: diskStorage({
            destination: './public',
            filename: (req, file, cb) => {
                const imgType = file.mimetype.split('/');
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                const imgName = file.fieldname + '-' + uniqueSuffix + '.' + imgType[1]

                cb(null, imgName);
                TourItemController.imgName = imgName;
            }
        })
    })
    )
    initTours(@Body() body: ITourClient) : void {
        body.img = TourItemController.imgName;
        this.toursService.uploadTour(body)
    }

    getToursByName(@Param('name') name) : Promise<ITour[]>{
        return this.toursService.getToursByName(name)
    }

}
