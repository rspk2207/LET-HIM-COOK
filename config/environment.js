require('dotenv').config()

const DB_NAME = process.env.DB_NAME;
const API_KEY = process.env.RAPID_API_KEY;
const DB_PORT = process.env.DB_PORT;
const SERVER_PORT = process.env.PORT
const MONGODB_USER = process.env.MONGODB_USER
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD
const DB_HOST = process.env.DB_HOST
console.log(API_KEY);
module.exports = {DB_NAME,API_KEY,DB_PORT,SERVER_PORT,MONGODB_USER,MONGODB_PASSWORD,DB_HOST}