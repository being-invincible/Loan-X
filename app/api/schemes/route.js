import { NextResponse } from "next/server";
import Db from "../../../lib/DBHandle";
var table = "schemes"

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
    const { number, fields } = await request.json();
}


