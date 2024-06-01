import { Delete, Get, Injectable, Param, Post, Put } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../../shemas/customer";
import { UserDto } from 'src/dto/user-dto';
import { access } from 'fs';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';


@Injectable()
export class UsersService {
  //jwtService: any;
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
              private jwtService: JwtService) {
    console.log('userService run')
  }


  async getAllUsers(): Promise<User[]> {
    return this.userModel.find();
  }

  async getUserById(id): Promise<User> {
    return this.userModel.findById(id);
  }

  async sendUser(data): Promise<User> {
    const userData = new this.userModel(data);
    return userData.save();
  }

  async updateUsers(id: string, body): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, body);
  }

  async deleteUsers(): Promise<any> {
    return this.userModel.deleteMany()
  }

  async deleteUserById(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id);
  }

  async checkAuthUser(login: string, psw: string): Promise<User[] | null> {
    const userArr = await this.userModel.find({ login: login, psw: psw});
    if(!userArr) {
      return null
    }
    //if(!await compare(psw, userArr.psw)) {
    //  return null
    //}
    return userArr.length === 0 ? null : userArr
  }

  async checkRegUser(login: string): Promise<User[]> {
    return this.userModel.find({ login: login });
  }

  async login (user: UserDto) {
    const payload = {login: user.login, psw: user.psw};
    const userFromDb = await this.userModel.find({login: user.login});
    return {
      id: userFromDb[0]._id,
      access_token: this.jwtService.sign(payload)
    }
  }
}
