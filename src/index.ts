// 	   /\_/\
//    ( o.o )
// 	   > ^ <
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//		─────▄████▀█▄
//		───▄█████████████████▄
//		─▄█████.▼.▼.▼.▼.▼.▼▼▼▼
//		▄███████▄.▲.▲▲▲▲▲▲▲▲
//		████████████████████▀▀

import express from "express";

import indexRoute from '@routes/index.routes'



const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.use('/', indexRoute)



app.listen(3000, () => console.log("server running port 3000"));
