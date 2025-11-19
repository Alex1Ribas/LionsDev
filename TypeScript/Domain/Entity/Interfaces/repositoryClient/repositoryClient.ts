import mongoose from "mongoose";
import { Iclient } from "../interfaces/cliente";


//ts-chceck

export interface IParamsGetclients{
    _id?: string;
    name: string;
    age: Number;
    email:string;
    telefone?: Number
}



export interface IclienteReposityRead{
    getClients(params: IParamsGetclients): Promise<Iclient>
}