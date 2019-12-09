import { Controller, Get, HttpCode, Query, Headers, Post, Body, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

let general:number=100;

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    const general:number=100;
  };

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // Suma
  @HttpCode(200)
  @Get('suma-headers')
  sumHeaders(
      @Headers() sumHeaders,
  ): string {
    const n1: number = +sumHeaders.number1;
    const n2: number = +sumHeaders.number2;

    console.log('Imprimo: ', n1,n2);
    const result: number = n1 + n2;

    general -= result;
    if(general<0){
      general =100;
      return 'Se acabo el valor PATO!';
    }
    return `GENERAL: ${general} y SUMA: ${result}`;
  }
  // resta
  @HttpCode(201)
  @Post('resta-body')
  substraction(
    @Body() bodyParams,
  ): string {
    // tslint:disable-next-line:no-console
    const n1: number = +bodyParams.number1;
    const n2: number = +bodyParams.number2;
    const result: number = n1 - n2;
    general -= result;
    if(general<0){
      general =100;
      return 'Se acabo el valor PATO!';
    }
    return `GENERAL: ${general} y RESTA: ${result}`;
  }

  @HttpCode(202)
  @Put('mult-query')
  multiplication(
    @Query() queryParams,
  ): string {
    // tslint:disable-next-line:no-console
    console.log(queryParams);
    const n1: number = +queryParams.number1;
    const n2: number = +queryParams.number2;
    const result: number = n1 * n2;
    general -= result;
    if(general<0){
      general =100;
      return 'Se acabo el valor PATO!';
    }
    return `GENERAL: ${general} y MULTIPLICACION: ${result}`;
  }

  @HttpCode(203)
  @Delete('div-query')
  division(
    @Query() queryParams,
    @Body() bodyParams,
    @Headers() headerParams,
  ): string {
    // tslint:disable-next-line:no-console
    console.log(queryParams);
    const n1: number = +queryParams.number1;
    const n2: number = +queryParams.number2;
    const result: number = n1 / n2;

    const n3: number = +bodyParams.number1;
    const n4: number = +bodyParams.number2;
    const result2: number = n3 / n4;

    const n5: number = +headerParams.number1;
    const n6: number = +headerParams.number2;
    const result3: number = n5 / n6;

    general -= result;
    if(general<0){
      general =100;
      return 'Se acabo el valor PATO!';
    }

    return `GENERAL: ${general} y  DIVISION QUERY: ${result}
            DIVISION BODY: ${result2}
            DIVISION HEATHER: ${result3}
    `;


  }
}
