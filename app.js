const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Pasta onde os arquivos serão armazenados
  },
  filename: (req, file, cb) => {
    const customFileName = "alunosOriente";
    const fileExtension = path.extname(file.originalname);
    cb(null, customFileName + fileExtension);
  },
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("Arquivo enviado com sucesso");
});
