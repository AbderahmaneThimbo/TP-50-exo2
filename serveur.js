// index.js
import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import taskRoutes from "./routes/task.js";

dotenv.config();

const app = express();
app.use(express.json());

// Synchroniser la base de données
sequelize
  .sync({ force: true })
  .then(() => console.log("MySQL Database synced"))
  .catch(err => console.error("Unable to sync the database:", err));

app.use("/api", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
