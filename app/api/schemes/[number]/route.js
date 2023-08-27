import { NextResponse } from "next/server";
import Db from "../../../../lib/DBHandle";
var table = "schemes"
export async function DELETE(request,{params}) {
    const {number} = params;
    Db.deleted(table,number);
    return NextResponse.json({message:"Deleted Successfully..."},{status:200});
}