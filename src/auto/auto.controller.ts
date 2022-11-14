import { Controller,Post,Body,Get,Param,Put,Delete, UsePipes, ValidationPipe, ParseIntPipe} from '@nestjs/common';
import { AutoService } from './auto.service';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAuto } from './dto/update-auto.dto';

@Controller('auto')
export class AutoController {
    constructor(private readonly autoService: AutoService){}
     
   
     @Post('autos')
     @UsePipes(new ValidationPipe({transform: true}))
     async create(@Body()  createAutoDto:CreateAutoDto){
        return await this.autoService.create(createAutoDto);
      }

     @Get('all')
     async Getcar(){
           return await this.autoService.Getcar()
      }

     @Get(':id')
      async findOne(@Param('id') id:string){
          return await this.autoService.findOne(+id)
      }

      
     @Get('total')    
     async GetId(){
     
       return await  this.autoService.GetId()
 }


      @Put(':id')
      async Update(@Param('id') id:string, @Body() updateAuto: UpdateAuto){
         return await this.autoService.Update(+id,updateAuto)
      }

      
      @Delete(':id')
      async Delete(@Param('id') id:string): Promise<void>{
         await this.autoService.Delete(+id);
      }
     
}
