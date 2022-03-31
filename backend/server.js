const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();
//midelware
app.use(express.json());

const port = process.env.Port || 8000;
app.listen(port, () => console.log(`server runnig on port ${port}`));
