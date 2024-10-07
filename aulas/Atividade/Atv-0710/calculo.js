function baskhara(a, b, c, x) {
    let res;

    if (a === 0) {
        res = 'impossivel calcular';
    } else {
        const delta = (b * b) - (4 * a * c);
        if (delta < 0) {
            res = 'impossivel calcular';
        } else {
            if (x === 1) {
                res = (-b + Math.sqrt(delta)) / (2 * a);
            } else if (x === 2) {
                res = (-b - Math.sqrt(delta)) / (2 * a);
            }
        }
    }

    return res;
}

function adicionarLinha() {
    //Entrada de valores do formulário
    /**
     * teste
     */
    const id =  document.getElementById('id').value;
    const produto = document.getElementById('produto').value;
    const marca = document.getElementById('marca').value;
    const segmento = document.getElementById('segmento').value;
    const valor = document.getElementById('valor').value;
    const datavenda = document.getElementById('datavenda').value;

    //Se for preenchido vazio
    if(id === '' || produto === '' ||marca === ''||segmento === ''|| valor === ''||datavenda ===''){
        alert("Preencha os valores do formulário!")
    } else {
        
    //Cria uma linha na tabela se não existir
    const tabela = document.getElementById('tabelaDados').getElementsByTagName('tbody')[0];

    //Inserindo uma nova linha 
    const novaLinha = tabela.insertRow();

    //Inserindo os valores da linha 
    const celid = novaLinha.insertCell(0);
    const celproduto = novaLinha.insertCell(1);
    const celmarca = novaLinha.insertCell(2);
    const celsegmento = novaLinha.insertCell(3);
    const celvalor = novaLinha.insertCell(4);
    const celdatavenda = novaLinha.insertCell(5);

    //inserindo os valores dentro das celulas
    celid.innerHTML = id;
    celproduto.innerHTML = produto;
    celmarca.innerHTML = marca;
    celsegmento.innerHTML = segmento;
    celvalor.innerHTML = valor;
    celdatavenda.innerHTML = datavenda;

    
    proximoId++

    //Limpar formulario
    document.getElementById('linhaForm').reset();

    }
}
