import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req) {
  try {
    // api call to convert name to coordinates
    const coord = await getLonLatByCity(req.nextUrl.searchParams.get("city"));
    console.log(coord, "COORD");
    // const lon = 1;
    // const lat = 2;
    const weather = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&exclude=minutely$&appid=${process.env.API_KEY}`
    );

    //https://api.openweathermap.org/data/3.0/onecall?lat=51.508&lon=-0.126&appid=

    //return the value you’re wanting
    console.log(weather);
    return NextResponse.json({
      status: 200,
      body: weather.data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

async function getLonLatByCity(city) {
  //const city = city.nextUrl.searchParams.get("city")
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.API_KEY}`
    );
    return response.data[0];
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}
