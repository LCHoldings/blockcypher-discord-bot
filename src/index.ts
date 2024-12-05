import 'dotenv/config';
import express from "express";
import { Router } from "./routes/config.routes";

const app = express();

const PORT = process.env.PORT || 3000;
app.use('/v1', Router);

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
