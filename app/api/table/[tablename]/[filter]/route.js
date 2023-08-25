import { NextResponse } from "next/server";
import Db from "../../../../../lib/DBHandle";

export async function GET(request, params) {

    const { tablename, filter } = params.params;

    let table = Db.filter(tablename, filter);

    if (table !== undefined) {
        return NextResponse.json({ message: table }, { status: 200 })
    } else {
        return NextResponse.json({ message: "No Data Found, Please check the Table Name." }, { status: 404 })
    }

}   