let proximoId = 1; 

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
            } else {
                res = 'invalido'; 
            }
        }
    }

    return res;
}

function adicionarLinha() {
    // Entrada de valores do formulário
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const x = parseInt(document.getElementById('x').value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(x)) {
        alert("Preencha os valores do formulário!");
    } else {
        // Cria uma linha na tabela
        const tabela = document.getElementById('tabelaDados').getElementsByTagName('tbody')[0];
        const novaLinha = tabela.insertRow();

        // Inserindo os valores da linha 
        const cela = novaLinha.insertCell(0);
        const celb = novaLinha.insertCell(1);
        const celc = novaLinha.insertCell(2);
        const celx = novaLinha.insertCell(3);
        const celres = novaLinha.insertCell(4); 
       
        const res = baskhara(a, b, c, x);

        cela.innerHTML = a;
        celb.innerHTML = b;
        celc.innerHTML = c;
        celx.innerHTML = x;
        celres.innerHTML = res; 

        proximoId++;

        document.getElementById('linhaForm').reset();
    }
}
