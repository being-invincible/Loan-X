import { NextRequest, NextResponse } from "next/server";
import Db from "../../../lib/DBHandle"
import Module from "../../../lib/models/model";
const table = "fundDetails";
const month = new Date().getMonth();
var records = "";

export async function GET(request){
    records = Db.getTable(table);
    // check for the data avaliablity
    if(records[month]===undefined){
        let newfund = Module.fundDetails
        if(records[month-1]===undefined){
            Db.insertbynumber(table,month,newfund)
        }
        else{
            newfund.totalFund = records[month-1].totalFund
            Db.insertbynumber(table,month,newfund)
        }
    }
    // export the output as json format
    return NextResponse.json(Db.getTable(table)[month],{status:203});
}   

export async function PUT(request){
    records = Db.getTable(table);
     const { totalFund,type } = await request.json();

    let statement = statements
    let record = records[month]
    // check for the in or out of the money and create the record
    if(type === "credit"){
        record.totalFund+=totalFund;
        Db.update(table,month,record)
    }else{
        records[month].totalFund-=totalFund;
        Db.update(table,month,record)
    }   
    statement.amount = totalFund;
    statement.type = type;
    statement.user = "true";
    Db.insert("statements",statement);

return NextResponse.json("ok");
}