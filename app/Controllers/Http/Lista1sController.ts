// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Lista1sController {
    
    ex1({ request }){
    
        /*
        1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a
            média aritmética das notas e a mensagem de aprovado para média superior ou
            igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.
                Bônus: nenhuma nota pode passar de 10.
        */
    
        const n1 = request.body.nota1*1
        const n2 = request.body.nota2*1
        const n3 = request.body.nota3*1
        const n4 = request.body.nota4*1
    
        const soma = n1 + n2 + n3 + n4
        const media = soma / 4 
    
        const resposta = {
            soma: soma,
            media: media,
            resultado: '',
            type: 'SUCESS!'
        }
        
        if (media < 5) {
            resposta.resultado = 'REPROVADO'
        } else if (media < 7) {
            resposta.resultado = 'RECUPERAÇÂO'
        } else if (media <= 10) {
            resposta.resultado = 'APROVADO'
        } else {
            resposta.resultado = 'Nota maior do que 10!'
            resposta.type = 'ERROR!'
        }
    
        return resposta
    }
    
    ex2({ request }){
        /*
        2. Escreva um script para ler o número total de eleitores de um município, o
            número de votos brancos, nulos e válidos. Calcular e escrever o percentual que
            cada um representa em relação ao total de eleitores.
                Bônus: A soma dos números não pode passar o total de eleitores.
        */
        
        const total = request.body.total*1
        const brancos =  request.body.brancos*1
        const nulos = request.body.nulos*1
        const validos = total - (brancos + nulos)
        
        const resultado = {
            total: total,
            validos: `${validos} votos validos, com percentual de ${((validos / total) * 100).toFixed(2)}%`,
            brancos: `${brancos} votos brancos, com percentual de ${((brancos / total) * 100).toFixed(2)}%`,
            nulos: `${nulos} de votos nulos, com percentual de ${((nulos / total) * 100).toFixed(2)}%`,
            mensagem: 'Total respeitado!',
            type: 'SUCESS!'
        }
    
        const bonus = brancos + nulos + validos
        if (bonus != total){
            resultado.mensagem = 'Total não respeitado! Houve erro durante a eleição!'
            resultado.type = 'ERROR!'
        }
        
        return resultado
    }
    
    ex3({ request }){
        /*
        3. Escreva um script para ler o salário mensal atual de um funcionário e o
            percentual de reajuste. Calcular e escrever o valor do novo salário.
        */
    
        const salario = request.body.salario * 1
        const reajuste = request.body.reajuste * 1
    
        const calculo = (salario * reajuste/100) + salario 
    
        const resultado = {
            salario: salario,
            reajuste: reajuste,
            calculo: `O novo salário, com o reajuste de ${reajuste}%, será de R$${calculo.toFixed(2).replace('.', ',')}`
        }
        
        return resultado
    }
    
    ex4({ request }){
    
        /*
        4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a
            porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
            Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%,
            escrever um script para ler o custo de fábrica de um carro, calcular e escrever o
            custo final ao consumidor.
        */
    
        const custo = request.body.custo*1
        const dis = 0.28
        const imp = 0.45
        
        const calculo = (custo * dis) + (custo * imp)
    
        const resultado = {
            custo: `R$${custo.toFixed(2).replace('.', ',')}`,
            distribuicao: `${(dis * 100).toFixed(1)}%`,
            imposto: `${(imp * 100).toFixed(1)}%`,
            custoFinal: `R$${(calculo + custo).toFixed(2).replace('.', ',')}`
        }
    
        return resultado
    }
    
    ex5({ request }){
        
        /*
        5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a
            porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
            Escreva um script para ler o custo de fábrica de um carro, a porcentagem do
            distribuidor e o imposto, e calcular e escrever o custo final ao consumidor
        */
    
        const custo = request.body.custo*1
        const dis = request.body.distribuicao*1
        const imp = request.body.imposto*1
        
        const calculo = (custo * (dis / 100)) + (custo * (imp / 100))
    
        const resultado = {
            custo: `R$${custo.toFixed(2).replace('.', ',')}`,
            distribuicao: `${(dis).toFixed(1)}%`,
            imposto: `${(imp).toFixed(1)}%`,
            custoFinal: `R$${(calculo + custo).toFixed(2).replace('.', ',')}`
        }
        
        return resultado
    }
    
    ex6({ request }){
        /*
        6. Uma revendedora de carros usados paga a seus funcionários vendedores um
            salário fixo por mês, mais uma comissão também fixa para cada carro vendido e
            mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o
            número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e
            o valor e percentual que ele recebe por carro vendido. Calcule e escreva o salário
            final do vendedor.
        */
    
        const salarioFixo = request.body.salarioFixo*1
        const carrosVendidos = request.body.carrosVendidos*1
        const venda = request.body.venda*1
        const comissao = request.body.comissao*1
    
        const novoSalario = (salarioFixo * (1 + (carrosVendidos * (comissao / 100)))  + (venda * 0.05))
    
        const resultado = {
            salarioFixo: `R$${salarioFixo.toFixed(2).replace('.', ',')}`,
            carrosVendidos: carrosVendidos,
            venda: `R$${venda.toFixed(2).replace('.', ',')}`,
            comissao: `${comissao}% por veículo`,
            novoSalario : `R$${novoSalario.toFixed(2).replace('.', ',')}`
        }
    
        return resultado
    }
    
    ex7({ request }){
        /*
        7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final
            deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.
        */
    
        const n1 = request.body.nota1*1
        const n2 = request.body.nota2*1
        
        const media = ((n1 * 4) + (n2 * 6)) / 10
    
        const resposta = {
            nota1: n1,
            nota2: n2,
            media: media,
            resultado: '',
            type: 'SUCESS!'
        }
    
        if (media < 5) {
            resposta.resultado = 'REPROVADO'
        } else if (media < 7) {
            resposta.resultado = 'RECUPERAÇÂO'
        } else if (media <= 10) {
            resposta.resultado = 'APROVADO'
        } else {
            resposta.resultado = 'Nota maior do que 10!'
            resposta.type = 'ERROR!'
        }
    
        return resposta
    }
    
    ex8({ request }){
        /*
        8. Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo
            que o raio e a altura devem ser fornecidos.
                OBS: V = PI * Raio^2 * Altura
        */
    
        const r = request.body.raio*1
        const h = request.body.altura*1
        
        const volume = 3.14 * r**2 * h
    
        const resposta = {
            raio: r,
            altura: h,
            volume: volume.toFixed(2)
        }
    
        return resposta
    }
    
    ex9({ request }){
        /*
        9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro
            número.
        */
    
        const num1 = request.body.numero1*1
        const num2 = request.body.numero2*1
    
        const resposta = {
            numero1: num1,
            numero2: num2,
            soma: num1 + num2,
            multiplicacao: (num1 + num2) * num1
        }
    
        return resposta
    }    
}
