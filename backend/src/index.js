import express from "express";
import cors from "cors";

import { PORT } from "./config/serverConfig.js";
import apiRouter from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use("/api", apiRouter);

app.get("/test", (req, res) => {
  return res.json({
    msg: "Testing ",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
