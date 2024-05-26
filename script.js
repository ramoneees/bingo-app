// Array para armazenar os números já sorteados
let numerosSorteados = [];

// Função para sortear um número
function sortearNumero() {
    let numeroSorteado;

    // Verificar se todos os números foram sorteados
    if (numerosSorteados.length < 75) {
        // Sortear um número aleatório que ainda não foi sorteado
        do {
            numeroSorteado = Math.floor(Math.random() * 75) + 1;
        } while (numerosSorteados.includes(numeroSorteado));

        // Adicionar o número sorteado ao array de números sorteados
        numerosSorteados.push(numeroSorteado);

        // Atualizar o número sorteado na página
        document.getElementById('numero-sorteado').innerText = 'Número Sorteado: ' + numeroSorteado;

        let list = document.getElementById('numeros-sorteados');
 

        let ul = `<ul>${numerosSorteados.map(n =>
            `<li>${n}</li>`).join('')}
                  </ul>`;
 
        // Set the inner HTML of the list container
        list.innerHTML = ul;
    } else {
        alert('Todos os números já foram sorteados!');
    }
}

// Adicionar um evento de clique ao botão de sorteio
document.getElementById('sortear-btn').addEventListener('click', sortearNumero);
