import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuards } from 'src/auth/jwt-auth.guards';
import { CreateRentDto } from './dto/create-rent.dto';
import { RentService } from './rent.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Rent')
@Controller('rent')
export class RentController {

    constructor(private rentService: RentService){}

    @Post()
    @UseGuards(JwtAuthGuards)
    @ApiOperation({summary:'Successfully create rent'})
    @ApiResponse({    
        status: 200, 
        description: 'Successfully create rent',
        type: String,})
    create(@Body() rentDto : CreateRentDto){
        return this.rentService.create(rentDto);
    }

    @Get()
    @UseGuards(JwtAuthGuards)
    @ApiOperation({summary:'Successfully get rent by id'})
    @ApiResponse({    
        status: 200, 
        description: 'Successfully create rent by id',
        type: String,})
    getAllRents(){
        return this.rentService.findAll();
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuards)
    @ApiOperation({summary:'Successfully delete rent by id'})
    @ApiResponse({    
        status: 200, 
        description: 'Successfully delete rent by id',
        type: String,})
    removeRent(@Param('id') id : number){
        return this.rentService.remove(id)
    }

    @Get(':id')
    @UseGuards(JwtAuthGuards)
    @ApiOperation({summary:'Successfully get rent by id'})
    @ApiResponse({    
        status: 200, 
        description: 'Successfully create rent by id',
        type: String,})
    getAll(@Param('id') id : number){
        return this.rentService.findAllActive(id)
    }
}
