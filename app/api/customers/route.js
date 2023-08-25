import { NextResponse } from "next/server";
import Db from "../../../lib/DBHandle";
var table = "customers"

export async function PUT(request){
    const { number, fields } = await request.json();
    let record = Db.getTable(table)[number];
    if(record!==undefined){
        Object.keys(fields).forEach(key=>{
            record[key]=fields[key];
        })
        Db.update(table,number,record)
        return NextResponse.json(fields);
    }else{
        return NextResponse.json();
    }
}

