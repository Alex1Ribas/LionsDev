import mongoose from 'mongoose';
import { Iclient } from './interfaces/cliente';

export class client implements Iclient{
    _id?: string;
    name: string;
    age: Number;
    email: string;
    telefone?: number;

    constructor(client: Iclient){
        this._id = new mongoose.Types.ObjectId().toHexString();
        this.name = client.name;
        this.age = client.age;
        this.email = client.email;
    }

}