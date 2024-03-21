function reajuste(){
    var NOMEFUNC = prompt('O nome do funcionário: ')
    var SALARIO = parseFloat(prompt('Informe o valor do salário de ' + NOMEFUNC + ': '))
    var porcentagem = parseFloat(prompt('Qual a porcentagem que o salário de ' + NOMEFUNC + ' será ajustado? '))
    nome.innerHTML = NOMEFUNC
    funcionario.innerHTML = NOMEFUNC
    salario.innerHTML = SALARIO 
    porcentagem.innerHTML = PORC
    soma = (PORC*SALARIO)/100
    aumento.innerHTML = soma
    final.innerHTML= SALARIO + soma

}