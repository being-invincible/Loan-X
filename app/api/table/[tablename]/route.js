import { NextResponse } from "next/server";
import Db from "../../../../lib/DBHandle";
export async function GET(request,{params}) {
    const {tablename} = params;
    console.log(tablename);
    let table = Db.getTable(tablename);
   
    return NextResponse.json(table,{status:200})
}