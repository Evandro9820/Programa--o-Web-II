/// Criar objeto
const pessoa = {
  nome: "João",
  sobrenome: "Silva",
  idade: 25,
};

let tela = document.getElementById("Tela");

tela.innerHTML = JSON.stringify(pessoa, null, 1);
// Desestruturação de objeto
const { nome, sobrenome, idade } = pessoa;

tela.innerHTML = `Nome: ${nome} <br> Sobrenome: ${sobrenome} <br> Idade: ${idade}`;
