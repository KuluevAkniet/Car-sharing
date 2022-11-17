import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRentDto } from './dto/create-rent.dto';
import { RentService } from './rent.service';

@Controller('rent')
export class RentController {

    constructor(private rentService: RentService){}
    @Post()
    create(@Body() autoDto : CreateRentDto){
        return this.rentService.create(autoDto);
    }
    @Get()
    getAllRents(){
        return this.rentService.findAll();
    }
}
