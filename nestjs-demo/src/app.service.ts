import { Injectable } from '@nestjs/common';
import { User } from "../src/model/user.model"

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  userList = [
    {
      id: 1,
      name: "son",
      email: "son123@gmail.com",
      password: "son123123",
    },
    {
      id: 2,
      name: "giang",
      email: "giang123@gmail.com",
      password: "giang123123",
    },
    {
      id: 3,
      name: "chuyen",
      email: "chuyen123@gmail.com",
      password: "chuyen123123",
    },
    {
      id: 4,
      name: "dung",
      email: "dung123@gmail.com",
      password: "dung123123",
    },
  ]


  getUser(){
    return this.userList;
  }

  getUserById(id: number ){
    return this.userList.find(user=>user.id==id)
  }

  addUser(user: User){
    this.userList.push(user);
    console.log(this.userList);
  }

  updateUser(user: User){
    for(let i=0; i < this.userList.length; i++)
      if(this.userList[i].id === user.id){
        this.userList[i] = user;
      }
      console.log(this.userList);
  }

  deleteUser(user : User){
    for(let i = 0; i<this.userList.length;i++){
      if(this.userList[i].id === user.id){
      this.userList.splice(i,1);
    }
  };
  console.log(this.userList);
  }

  
}
