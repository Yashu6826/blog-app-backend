const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const userRoute = require("./routes/user");
const categoryRoute = require("./routes/categories");
const app = express();

dotenv.config();
app.use(express.json());
mongoose.set('strictQuery', true);
mongoose.connect(process.env.Mongo_URL).then(console.log("Connected to MONGODB"))
.catch((error) =>console.log(error))

app.get("/",(req,res) =>{
res.send("App is running")
})

app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);
app.use("/api/users", userRoute);
app.use("/api/categories",categoryRoute);



const PORT = process.env.PORT  || 6009;

app.listen(PORT,console.log(`Server running on port ${PORT}`));

