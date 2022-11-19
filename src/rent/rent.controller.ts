import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateRentDto } from './dto/create-rent.dto';
import { RentService } from './rent.service';

@Controller('rent')
export class RentController {

    constructor(private rentService: RentService){}

    @Post()
    create(@Body() rentDto : CreateRentDto){
        return this.rentService.create(rentDto);
    }
    @Get()
    getAllRents(){
        return this.rentService.findAll();
    }

    @Delete(':id')
    removeRent(@Param('id') id : number){
        return this.rentService.remove(id)
    }

    @Get(':id')
    getAll(@Param('id') id : number){
        return this.rentService.findAllActive(id)
    }
}
