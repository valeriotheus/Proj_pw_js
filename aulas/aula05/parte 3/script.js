var nome = window.prompt("Digite o seu nome: ")
var idade = Number(window.prompt("Digite sua Idade: "))
document.write(`Seu nome é <b>${nome}</b> e tem <b>${idade} anos de idade.</b>`);
document.write(`Seu nome tem <b>${nome.length}</b> caracteres.</b>`);
document.write(`Seu nome em letras maiusculas é <b>${nome.toUpperCase()}</b>.<br>`);