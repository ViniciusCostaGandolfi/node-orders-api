import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';


dotenv.config();


async function conectToDb() {
    const connectionString = process.env.DB_CONNECTION_STRING ?? '';

    try{
        mongoose.connect(connectionString);
        }
        catch {
            console.log("Error connecting to database");
            console.log(connectionString);
            if (connectionString === '') {
                console.log("Cant access a database name in .env file");
            }
        }
    return mongoose.connection;
};

export default conectToDb;