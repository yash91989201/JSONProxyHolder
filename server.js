import fetch from "node-fetch";
import cors from "cors";
import express from "express";
const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:3000/",
    methods: ["GET"],
  })
);

app.use((_, res, next) => {
  res.append("x-codedamn-project", "jsonproxyholder");
  res.append("Access-Control-Allow-Headers", "x-codedamn-project");
  next();
});

app.get("/posts", (_, res) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err.message }));
});

app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err.message }));
});

app.get("/posts/:id/comments", (req, res) => {
  const id = req.params.id;
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((res) => res.json())
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err.message }));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(3000, (err) => {
  err ? `Error occoured ${err.message}` : "Server running at port 3001";
});