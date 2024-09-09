let proximoId = 1

function adicionarLinha() {
    //Entrada de valores do formulário
    /**
     * teste
     */
    const nome =  document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const admissão = document.getElementById("admissão").value;
    const demissão = document.getElementById("demissão").value;

    //Se for preenchido vazio
    if(nome === '' || idade === '' ||admissão === ''){
        alert("Preencha os valores do formulário!")
    }
    //Cria uma linha na tabela se não existir
    const tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];

    //Inserindo uma nova linha 
    const novaLinha = tabela.insertRow;

    //Inserindo os valores da linha 
    const celId = novaLinha.insertCell(0);
    const celNome = novaLinha.insertCell(1);
    const celIdade = novaLinha.insertCell(2);
    const celAdmissão = novaLinha.insertCell(3);
    const celDemissão = novaLinha.insertCell(4);

    //inserindo os valores dentro das celulas
    celId.innerHTML = proximoID;
    celNome.innerHTML = nome;
    celIdade.innerHTML = admissão;
    celDemissão.innerHTML = demissão;
    
    proximoId++

    //Limpar formulario
    document.getElementById("linhaForm").reset();
}

