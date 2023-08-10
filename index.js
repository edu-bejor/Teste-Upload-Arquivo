const readline = require("readline");
const fs = require("fs");

const line = readline.createInterface({
  input: fs.createReadStream("uploads/alunosOriente.csv"),
});

let = firstLine = true;

line.on("line", (data) => {
  let csv = data.split(",");

  if (firstLine) {
    firstLine = false;
    return;
  }
  console.log(
    `curso: ${csv[0]} - componente: ${csv[1]} - turma: ${csv[2]} - cod: ${csv[3]} - nome: ${csv[4]} - tipo: ${csv[5]} - unidade: ${csv[6]} - escola: ${csv[7]}`
  );
});
