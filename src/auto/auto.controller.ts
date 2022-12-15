import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuards } from 'src/auth/jwt-auth.guards';
import { AutoService } from './auto.service';
import { ChangeAutoDto } from './dto/change-auto.dto';
import { CreateAutoDto } from './dto/create-auto.dto';

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

@Controller('statistic')
export class AutoStatController {
    
    constructor(private autoService : AutoService){}

    @Get()
    @UseGuards(JwtAuthGuards)
    getAllCar(){
        return this.autoService.findAllStat();
    }
    @Get(':id')
    @UseGuards(JwtAuthGuards)
    getOne(@Param('id') id : number){
        return this.autoService.findOneStat(id);
    }
}
