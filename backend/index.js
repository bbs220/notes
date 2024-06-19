import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./database/connectToDatabase.js";
import router from "./routes/notesRoutes.js";
dotenv.config();

// local port
const PORT = process.env.PORT || 5000;

// sets up express server
const app = express();

// middleware to catch or transform into json
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    allowedHeaders: ["Content-Type", "application/json"],
  })
);

app.use("/api", router);

// dummy response better delete this later
app.get("/", (req, res) => {
  res.status(200).json({ message: "✨ API is alive" });
});

// // always keep the static and wildcard last in route so it doesn't interfere with other routes
// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// // for showing the build page from same origin
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

// server status
app.listen(PORT, async () => {
  await connectToDB();
  console.log(`Server listening at port ${PORT} 🚀`);
});
