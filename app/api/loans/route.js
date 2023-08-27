import { NextResponse } from "next/server";
import Db from "../../../lib/DBHandle";
import Model from "../../../lib/models/model";
var table = "loans"

export async function PUT(request){
    const { number, fields } = await request.json();
    let record = Db.getTable(table)[number];
    if(record!==undefined){
        Object.keys(fields).forEach(key=>{
            record[key]=fields[key];
        })
        Db.update(table,number,record)
        return NextResponse.json({message:"updated Successfully..."},{status:201});
    }else{
        return NextResponse.json({message:"No record Found..."},{status:404});
    }
}

export async function POST(request){
    const { fields } = await request.json();
    let newCustomer = Model.customer;
    Object.keys(fields).forEach(key => {
        newCustomer[key]= fields[key];
    })
    Db.insert(table,newCustomer)
    return NextResponse.json({message:"New Record Added Successfully..."},{status:201});
}
