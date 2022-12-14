import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "src/exception/validation.exception";

@Injectable()

export class   ValidationPipe implements PipeTransform<any> {
  async  transform(value: any, metadata: ArgumentMetadata): Promise<any> {
         const object = plainToClass(metadata.metatype, value);
         const errors = await validate(object);


         if(errors.length){
                throw new ValidationException('')
         }
    }
}