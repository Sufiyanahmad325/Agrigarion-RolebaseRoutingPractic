import app from "./app.js";
import dotenv from "dotenv"
import connectionWithDB from "./DB/DbConnection.js";
import seedAdmin from "./seeds/seedAdmin.js";




dotenv.config({path : "./.env"})

seedAdmin();
connectionWithDB().then(() => {
    app.listen(8000, () => {
        console.log(`server is running on http://localhost:8000`);
    });
});