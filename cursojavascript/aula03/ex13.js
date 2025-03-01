
//condições aninhadas

/*var idade = 20
if (idade < 16){
    console.log('Não vota')
}else if (idade < 18 || idade >=60){
    
    console.log('Voto opcional')

}else if(idade >= 18){
    console.log('Voto obrigatório')
}*/

//Como pegar a hora no seu sistema

/*var agora = new Date()
var hora = agora.getHours()
console.log(`São ${hora} Hrs`)*/



// CONDIÇÃO MÚLTIPLA

//Temos um comando no JS que é o "Switch(){}". Dentro da chave do switch vocÇe terá vários cases com seus respectivos valores, cada um com um bloco de código, se nenhum deles for satifeito então acontecerá algo descrito no default. Para cada case você precisa colocar um comando break(senão vai executar todos os comandos procurando um break), é uma regra obrigatória.
// O switch só funciona com núeros inteiros e com caracteres
// O switch é bom para testar dados pontuais e não intervalos, é mais limitado que o if/else.

var agora = new Date()
var diaSem = agora.getDay() // O dia em Js é representado por número entao por ex dom == 0.

switch(diaSem){ // coloque a váriavel que vai receber o valor

    case 0: // coloque o valor da variável
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabádo')
        break
    default:
        console.log('Dia inválido')
        break
}