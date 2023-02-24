import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { userInfo } from 'os';
import { AppService } from './app.service';
import { User } from './model/user.model';

@Controller('user')
export class AppController {
  constructor(private appService: AppService) {}

  @Get("users") //lấy về (đọc)
  getUser() {
    return this.appService.getUser();
  }

  @Get(":id")
  getByIdUser(@Param('id') id: number){
    return this.appService.getUserById(id);
  }

  @Post('addUser') // create
  addUser(@Body() user: User){
    return this.appService.addUser(user);
  }


  @Put('updateUser') //cập nhật
  updateUser(@Body() user: User){
    return this.appService.updateUser(user);
  }


  @Delete('deleteUser')
  deleteUser(@Body() user: User){
    return this.appService.deleteUser(user);
  }
  
  
}
