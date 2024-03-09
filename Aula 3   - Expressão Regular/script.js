/* let texto =
  "O lore do Paladino é um lendário guerreiro que foi criado pela magia de Arthas Menethil para liderar os humanos em uma guerra contra o exército orc de Orgrimmar.";

const regex = /lore\s+do\s+Paladino/gi;

alert(texto.match(regex));
console.log(texto.match(regex)); */

function validarLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  const regexUsuario = /^[a-zA-Z0-9]{3,15}$/;
  const regexSenha = /^(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

  if (!regexUsuario.test(usuario)) {
    alert("Usuário inválido");
    return false;
  }

  if (!regexSenha.test(senha)) {
    alert("Senha inválida");
    return false;
  }

  return true;
}

function validarSenha() {
  const senha = document.getElementById("senha").value;

  const regexSenha = /^(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

  if (!regexSenha.test(senha)) {
    alert("Senha inválida");
    return false;
  }

  return true;
}
