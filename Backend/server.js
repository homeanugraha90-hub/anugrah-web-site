const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path");
const faqRoutes = require("./routes/faqRoutes");
// const whyJewareRoutes = require("./routes/whyjewareRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Static folder for uploads
app.use(
  "/upload",
  express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res, filePath) => {
      if (path.extname(filePath) === ".mp4") {
        res.setHeader("Content-Type", "video/mp4");
      }
    }
  })
);

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/media", require("./routes/mediaRoutes"));
app.use("/api/why-jeware", require("./routes/whyjewareRoutes"));
app.use("/api/home", require("./routes/homeRoutes"));
app.use("/api/about", require("./routes/aboutRoutes"));
app.use("/api/articles", require("./routes/articleRoutes"));
app.use("/api/faqs", faqRoutes);
app.use("/api/logs", require("./routes/logRoutes"));





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
