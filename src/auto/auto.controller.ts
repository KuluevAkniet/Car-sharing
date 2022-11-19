import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateRentDto } from 'src/rent/dto/create-rent.dto';
import { AutoService } from './auto.service';
import { ChangeAutoDto } from './dto/change-auto.dto';
import { CreateAutoDto } from './dto/create-auto.dto';

@Controller('auto')
export class AutoController {
    
    constructor(private autoService : AutoService){}

    @Post()
    create(@Body() autoDto : CreateAutoDto){
        return this.autoService.create(autoDto);
    }
    @Get()
    getAll(){
        return this.autoService.findAll();
    }
    @Get(':id')
    getOne(@Param('id') id : number){
        return this.autoService.findOne(id);
    }
    @Put(':id')
    updateOne(@Param('id') id : number, @Body() autoDto : ChangeAutoDto){
        return this.autoService.update(id, autoDto);
    }
    @Delete(':id')
    removeOne(@Param('id') id : number){
        return this.autoService.remove(id);
    }
    
}
