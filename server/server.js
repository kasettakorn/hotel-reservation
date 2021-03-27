const express = require("express");


const app = express();

const connectDB = require("./config/db");

const PORT = process.env.PORT || 9000;

app.use(express.json({
    extended: false
}))

app.use('/api/user', require("./routes/api/user"));
app.use('/api/auth', require("./routes/api/auth"));
app.use('/api/room', require("./routes/api/room"));



app.listen(PORT, () => console.log(`Server started on PORT ${PORT} 🚀`));
connectDB();