let numero;
console.log("Escolha um numero");
function gerarTabuada(numero) {
  console.log(`\nTabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}
process.stdin.on("data", function (data) {
  if (!numero) {
    numero = Number(data.toString().trim()); {
      gerarTabuada(numero);
    }
    process.exit();
  }
});
