import { NextResponse } from "next/server";

export async function GET() {
    try {

        //const weather = await axios.get(https://api.openweathermap.org/data/3.0/onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&exclude=minutely&appid=${apiKey}) process.env.apid=$
        console.log(process.env.API_KEY);
        //return the value you're wanting
        return NextResponse.json({message: "Hello World", key: DB_PASS })
    } catch (error) {
        return NextResponse.error();
    }
}