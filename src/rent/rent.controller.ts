import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

    @Delete(':id')
    removeRent(@Param('id') id : number){
        return this.rentService.remove(id)
    }
}
