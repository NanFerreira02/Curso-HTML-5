// const email = 'renankferreira01@gmail.com'; Declarando uma constante

// // email = 'renan.ferreira@alefperetz.org.br';\

// console.log(email);
// console.log('O seu e-mail é ' + email);
// console.log(`O seu e-mail é ${email}`);

// document.getElementById('btn-submit').addEventListener('click', (e) => {
// 	console.log('O botão foi clicado');
// }); Identificando o clique do  mouse no botão e disparando uma mensagem

// document.getElementById('form-login').addEventListener('mouseenter', (e) => {
// 	console.log('O mouse está sobre o formulário');
// }); Identificando o cursor do mouse entrando na área do formulário

// document.querySelector('#form-login').addEventListener('mouseleave', (e) => {
// 	console.log('O mouse está fora do formulário');
// }); Identificando o cursor do mouse saindo da área do formulário

// Identificando o envio do formulário e manipulando os dados com JSON
document.querySelector('#form-login').addEventListener('submit', (e) => {
	e.preventDefault();

	let email = document.querySelector('#email').value;

	let password = document.querySelector('#password').value;

	// Definindo um objeto JSON que armazena as informações
	let json = {
		email: email, //Padrão JSON, porém quando o nome de uma variável é igual a propriedade
		password, // Poderá ser feito dessa forma, somente com a propriedade
	};

	// console.log(json);

	//Convertendo o JSON para uma string
	// let stringJSON = JSON.stringify(json);

	// console.log(stringJSON);

	//Identificando um texto(String) e transformando em objeto JSON
	// let jsonParse = JSON.parse(stringJSON);

	// console.log(jsonParse.email);
	// console.log(jsonParse.password);

	if (!json.email) {
		console.error('O campo e-mail deve ser preenchido!');
	} else if (!json.password) {
		console.error('Você deve inserir uma senha!');
	} else {
		console.info('Campos preenchidos');
	}
});
