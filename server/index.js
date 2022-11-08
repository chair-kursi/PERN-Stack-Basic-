const 
    express = require("express"),
    app = express(),
    PORT = 4000 || process.env.PORT,
    bodyParser = require("body-parser"),
    pool = require("./db"),
    cors = require("cors");

//IMPORTING ROUTES
const employeesRoute = require("./routes/employees")


//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());


//USING ROUTES AS MIDDLEWARES
app.use("/employees", employeesRoute);

app.listen(PORT, ()=>{
    console.log("App started with Port - ", PORT);
})
