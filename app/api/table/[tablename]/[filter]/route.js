import { NextResponse } from "next/server";
import Db from "../../../../../lib/DBHandle";

export async function GET(request,params) {
    
    const {tablename,filter} = params.params;

    let table = db.filter(tablename,filter);

    return NextResponse.json(table,{status:201})
}   