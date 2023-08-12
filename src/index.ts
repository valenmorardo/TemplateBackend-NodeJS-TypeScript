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

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

app.listen(3000, () => console.log("server running port 3000"));
