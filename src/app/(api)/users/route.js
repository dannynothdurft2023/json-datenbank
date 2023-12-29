import { NextResponse } from "next/server";
import { readDatabase, writeDatabase } from "@/hooks/db";

export default (req, res) => {
  res.status(200).json(database);
};

export async function GET(req) {
  const database = readDatabase();

  try {
    const db = await database;

    return NextResponse.json(
      {
        success: true,
        message: "Daten gefunden",
        data: db,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "keine verbindung" }, { status: 400 });
  }
}

export async function POST(req) {
  const database = await readDatabase();

  try {
    const { data } = await req.json();
    console.log("data: ", data);

    database.push(data);

    console.log("nach pusch");

    writeDatabase(database);

    console.log("nach schreiben");

    return NextResponse.json(
      {
        success: true,
        message: "Daten gefunden",
        data: database,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "keine verbindung" }, { status: 400 });
  }
}
