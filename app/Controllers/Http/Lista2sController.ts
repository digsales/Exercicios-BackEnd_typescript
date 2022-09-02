/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// lista 2 concluida

export default class Lista2sController {

    /*
    Questão 1
    Faça um script para calcular o estoque médio de uma peça, sendo que
    ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE
    MÁXIMA) /2.
    */
    ex1({ request }) {
      const dados = request.body()
      const resultado = (dados.qtdMin - dados.qtdMax) / 2
      return { resultado }
    }

    /*
    Questão 2
    Escrever um script que lê o nome de um funcionário, o número de horas
    trabalhadas, o valor que recebe por hora e o número de filhos. Com estas
    informações, calcular o salário deste funcionário, sabendo que para cada filho, o
    funcionário recebe 3% a mais, calculado sobre o salário bruto.
    */
    ex2({ request }) {
      const dados = request.body()
      const salario1 = dados.horas * 1 * dados.porHora * 1
      const numFilhos = dados.filhos * 1 * 0.03
      const res = salario1 * numFilhos + salario1
  
      const resultado = {
        nome: dados.nome,
        horas: dados.horas,
        porHora: dados.porHora,
        filhos: dados.filhos,
        res,
      }
      return resultado
    }

    /*
    Questão 3
    Faça um script que leia a idade de uma pessoa expressa em anos, meses e dias e
    mostre-a expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.
    */
    ex3({ request }) {
      const dados = request.body()
  
      function calc(ano: number, mes: number, dia: number) {
        if (dia >= 30) {
          mes++
          dia -= 30
        } else if (mes >= 12) {
          ano++
          mes -= 12
        }
        const meses = mes * 1 * 30
        const anos = ano * 1 * 365
        const res = meses + anos + dia * 1
        return { res }
      }
  
      return calc(dados.ano, dados.mes, dados.dia)
    }

    /*
    Questão 4
    Faça um script que leia a idade de uma pessoa expressa em dias e mostre-a expressa
    em anos, meses e dias. Considerar ano com 365 dias e mês com 30 dias.
    */
    ex4({ request }) {
        const dados = request.body()

        let dias = dados.dias
        let anos = 0
        let meses = 0

        while(dias >= 365){
            dias -= 365
            anos++
        }
        while(dias >= 30){
            dias -= 30
            meses++
        }

        const resultado = {
            anos: anos,
            meses: meses,
            dias: dias
        }

        return resultado
    }

    /*
    Questão 5
    Faça um script que leia as 3 notas de um aluno e calcule a média final deste aluno.
    Considerar que a média é ponderada e que o peso das notas é: 2, 3 e 5,
    respectivamente.
    */
    ex5({ request }) {
        const dados = request.body()

        const media = (nota1, nota2, nota3) => {
            const calc = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10
            return calc
        }
    
        return media(dados.nota1, dados.nota2, dados.nota3)
    }

    /*
    Questão 6
    Faça um script que leia o tempo de duração de um evento em uma fábrica expressa
    em segundos e mostre-o expresso em horas, minutos e segundos.
    */

    ex6({ request }) {

      const dados = request.body()

      let segundos = dados.segundos
      let horas = 0
      let minutos = 0

      while(segundos >= 60){
          segundos -= 60
          minutos++
      }
      while(minutos >= 60){
          minutos -= 60
          horas++
      }

      const resultado = {
          horas: horas,
          minutos: minutos,
          segundos: segundos
      }

      return resultado
    }

    /*
    Questão 7
    Escrever um script que lê o nome de um vendedor, o seu salário fixo, o total de vendas
    por ele efetuadas e o percentual que ganha sobre o total de vendas. Calcular o salário
    total do vendedor. Escrever o nome do vendedor e seu salário total.
    */
    ex7({ request }) {
      const dados = request.body()

      const nome = dados.nome
      const totalVendas = dados.totalVendas
      const comissao = dados.comissao

      const salario = totalVendas * (1 + (comissao / 100))

      const resultado = {
          nome: nome,
          salario: `R$${salario.toFixed(2).replace('.', ',')}`
      }

      return resultado
    }

    /*
    Questão 8
    Faça um script que leia o nome de um piloto, uma distância percorrida em km e o
    tempo que o piloto levou para percorrê-la (em horas). O programa deve calcular a
    velocidade média - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte
    frase: A velocidade média do &lt;nome do piloto&gt; foi &lt;velocidade media calculada&gt;
    km/h.
    */
    ex8({ request }) {
      const dados = request.body()

      const nome = dados.nome
      const distancia = dados.distancia
      const tempo = dados.tempo

      const velocidadeMedia = distancia / tempo

      return `A velocidade média do ${nome} foi ${velocidadeMedia} km/h.`
    }

    /*
    Questão 9
    Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a
    1.000 reais. Escreva um Programa que receba o salário de um funcionário e imprima o
    valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito ao
    aumento.
    */
    ex9({ request }) {
      const dados = request.body()

      const salario = dados.salario
      
      if(salario >= 1000){
        const resposta = {
          salario: `R$${salario.toFixed(2).replace('.', ',')}`,
          mensagem: `Salário superior ou igual a R$1000,00, sem reajuste.`
        }
        return resposta
      }else{
        const novoSalario = salario * 1.3
        const resposta = {
          salario: `R$${salario.toFixed(2).replace('.', ',')}`,
          mensagem: `Salário inferior a R$1000,00.`,
          novoSalario: `R$${novoSalario.toFixed(2).replace('.', ',')}`
        }
        return resposta
      }
    }
  }