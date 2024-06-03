import express from 'express';
import { connectDB } from './utils/features.js';
import { errorMiddleware } from './middlewares/error.js';
import NodeCache from 'node-cache';
import { config } from 'dotenv';
import morgan from 'morgan';
//importing routes
import userRoute from './routes/user.js';
import productRoute from './routes/products.js';
import orderRoute from './routes/orders.js';

config({
    path:"./.env",
});
const port = process.env.PORT || 5000;

const mongoURL = process.env.MONGO_URL || "";

connectDB(mongoURL);

export const myCache = new NodeCache();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
// using routes

app.get("/",(req,res)=>{
    res.send("Api working with /api/v1");
})

app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order",orderRoute)

app.use("/uploads",express.static("uploads"))
app.use(errorMiddleware);

app.listen(port,()=>{
    console.log(`Server is working on http://localhost:${port}`);
})