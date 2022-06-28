/* 
Exemplo de tabuada
*/

// Criando a função da tabela
function calculaTabuada() {
	// Obtendo do DOM o tbody da tabela
	let tabuada = document.querySelector('#tabuada tbody');

	// Obtendo o valor A do campo input number e convertendo em inteiro
	let valorA = parseInt(document.querySelector('#valorA').value);

	// Limpando o conteúdo do tbody
	tabuada.innerHTML = '';

	// Criando um laço de repetição de 0 a 10
	for (let valorB = 0; valorB <= 10; valorB++) {
		// Calculando o resultado da linha atual
		let resultado = valorA * valorB;

		// Criando o template das colunas da linha atual
		template = `
	        <td>${valorA}</td>
	        <td>X</td>
	        <td>${valorB}</td>
	        <td>=</td>
	        <td>${resultado}</td>    
	`;

		// var template = ''; Forma diferente de fazer o mesmo processo(tem que estar fora do escopo do for)

		// Criando o elemento tr
		let tr = document.createElement('tr');

		//Inserindo as colunas na linha
		tr.innerHTML = template;

		// Inserindo a linha na tabela
		tabuada.append(tr);

		// tabuada.innerHTML = template;
	} // Fechando o for
} // Fechando a função

// Chamando a função pela primeira vez
calculaTabuada();

// Adicionando o evento de alteração ao campo "valorA"
document.querySelector('#valorA').addEventListener('change', calculaTabuada);
