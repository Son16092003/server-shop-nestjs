import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ItemModel } from 'src/model/item.model';
import { ItemService } from 'src/services/item/item.service';

@Controller('item')
export class ItemController {

    constructor( private itemService: ItemService){}

  @Get() //lấy về (đọc)
  getAllItems() {
    return this.itemService.getAllItems();
  }

  @Get("/:id")
  getItemById(@Param('id') id: number){
    return this.itemService.getItemById(id);
  }

  @Post('create') // create
  createItem(@Body() item: ItemModel){
    return this.itemService.createItem(item);
  }


  @Put('update') //cập nhật
  updateItem(@Body() item: ItemModel){
    return this.itemService.updateItem(item);
  }


  @Delete('delete/:id')
  deleteItemById(@Param('id') id: number){
    return this.itemService.deleteItemById(id);
  }
}
