const fs = require("fs");
const path = require("path");

let dbPath;

dbPath = path.join(process.cwd(), "src/datenbank/db.json");

export function readDatabase() {
  const data = fs.readFileSync(dbPath, "utf-8");
  if (data) {
    return JSON.parse(data);
  }
  return false;
}

export function writeDatabase(data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(dbPath, json, "utf-8");
  return true;
}
