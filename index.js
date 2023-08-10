const readline = require("readline");
const fs = require("fs");

const line = readline.createInterface({
  input: fs.createReadStream("uploads/alunosOriente.csv"),
});

let firstLine = true;
const jsonData = [];

line.on("line", (data) => {
  if (firstLine) {
    firstLine = false;
    return;
  }

  const csv = data.split(",");
  const aluno = {
    curso: csv[0].replace(/"/g, ""), // Remove aspas e barra a mais
    componente: csv[1].replace(/"/g, ""),
    turma: csv[2].replace(/"/g, ""),
    cod: csv[3].replace(/"/g, ""),
    nome: csv[4].replace(/"/g, ""),
    tipo: csv[5].replace(/"/g, ""),
    unidade: csv[6].replace(/"/g, ""),
    escola: csv[7].replace(/"/g, ""),
  };

  jsonData.push(aluno);
});

line.on("close", () => {
  const jsonContent = JSON.stringify(jsonData, null, 2);

  fs.writeFileSync("uploads/alunosOriente.json", jsonContent, "utf8");

  console.log("Arquivo JSON gerado com sucesso!");
});
