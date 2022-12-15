import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuards } from 'src/auth/jwt-auth.guards';
import { CreateRentDto } from './dto/create-rent.dto';
import { RentService } from './rent.service';

@Controller('rent')
export class RentController {

    constructor(private rentService: RentService){}

    @Post()
    @UseGuards(JwtAuthGuards)
    create(@Body() rentDto : CreateRentDto){
        return this.rentService.create(rentDto);
    }
    @Get()
    @UseGuards(JwtAuthGuards)
    getAllRents(){
        return this.rentService.findAll();
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuards)
    removeRent(@Param('id') id : number){
        return this.rentService.remove(id)
    }

    @Get(':id')
    @UseGuards(JwtAuthGuards)
    getAll(@Param('id') id : number){
        return this.rentService.findAllActive(id)
    }
}
