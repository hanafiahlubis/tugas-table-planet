import express from "express";
import { client } from "./db-pg.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.use((req, _res, next) => {

    console.log(req.url);
    next();
})

app.get("/api/planet",async (_req,res)=>{
    const result = await client.query("select * from planet");
    console.log(result);
    res.send(await result.rows);
})

app.listen(3000);