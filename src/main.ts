import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start(){
    const PORT = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule); 

    app.useGlobalPipes(new ValidationPipe())
 

    const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('car', app, document);

  await app.listen(PORT);
}


start();