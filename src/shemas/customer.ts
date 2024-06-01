import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { hashSync } from 'bcrypt';
import { HydratedDocument } from 'mongoose';
import { IUser } from 'src/interfaces/user';
import * as bcrypt from 'bcrypt';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User implements IUser {

    @Prop() psw: string;

    @Prop() cardNumber: string;

    @Prop() login: string

    @Prop() email: string

    @Prop() id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

//hash

let psw = " ";
let hashPassword = async function () {
    console.log(bcrypt.hash(psw, 10));
    let hashPwd = await bcrypt.hash(psw, 10);
    console.log(hashPwd);
}

hashPassword(); 
