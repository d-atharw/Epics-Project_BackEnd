console.log("CHAMA 🗿");

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");


dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// DB connect
connectDB();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Recyclopedia Backend CHAMA 🗿</h1>");
});

// Routes
app.use("/api/ideas", require("./routes/productIdeaRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));