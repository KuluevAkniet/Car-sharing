import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuards } from 'src/auth/jwt-auth.guards';
import { AutoService } from './auto.service';
import { ChangeAutoDto } from './dto/change-auto.dto';
import { CreateAutoDto } from './dto/create-auto.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auto')
@Controller('auto')
export class AutoController {
    
    constructor(private autoService : AutoService){}

    @Post()
    @UseGuards(JwtAuthGuards)
    create(@Body() autoDto : CreateAutoDto){
        return this.autoService.create(autoDto);
    }
    @Get()
    @UseGuards(JwtAuthGuards)
    getAll(){
        return this.autoService.findAll();
    }
    @Get(':id')
    @UseGuards(JwtAuthGuards)
    getOne(@Param('id') id : number){
        return this.autoService.findOne(id);
    }
    @Put(':id')
    @UseGuards(JwtAuthGuards)
    updateOne(@Param('id') id : number, @Body() autoDto : ChangeAutoDto){
        return this.autoService.update(id, autoDto);
    }
    @Delete(':id')
    @UseGuards(JwtAuthGuards)
    removeOne(@Param('id') id : number){
        return this.autoService.remove(id);
    }
}
@ApiTags('Statistic')
@Controller('statistic')
export class AutoStatController {
    
    constructor(private autoService : AutoService){}

    @Get()
    @UseGuards(JwtAuthGuards)
    @ApiOperation({summary:'get car'})
    @ApiResponse({    
        status: 200, 
        description: 'Successfully get car',
        type: String,})
    getAllCar(){
        return this.autoService.findAllStat();
    }

    @Get(':id')
    @UseGuards(JwtAuthGuards)
    @ApiOperation({summary:'get car by id'})
    @ApiResponse({    
        status: 200, 
        description: 'Successfully get car by id',
        type: String,})
    getOne(@Param('id') id : number){
        return this.autoService.findOneStat(id);
    }
}
