import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getItems(@Query() queryParams): Promise<string> {
    return (Object.keys(queryParams).length === 0) ? 'get items' : `get item by ${JSON.stringify(queryParams)}`;
  }

  @Post()
  async post(@Body() body): Promise<string> {
    return `created item ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<string> {
    return `deleted item id: ${id}`;
  }

  @Put(':id')
  async put(@Param('id') id: number): Promise<string> {
    return `updated item id:${id}`;
  }
}
