import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

console.log("USER:", process.env.DB_USER);
console.log("PASS:", process.env.DB_PASSWORD);
console.log("TYPE:", typeof process.env.DB_PASSWORD);
