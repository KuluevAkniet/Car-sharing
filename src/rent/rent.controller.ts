import { Controller, Get, Param } from '@nestjs/common';
import { RentService } from './rent.service';

@Controller('rent')
export class RentController {
    
     constructor( private readonly rentService: RentService){}

    @Get('total')
    async GetId(){
        return await this.rentService.GetId()
    }
}
