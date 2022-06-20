// seg, ter, qua, qui, sex, sab, dom, seg

let faturamento = [150, 100, 2000, 4000, 300, 0, 0, 300] // Total: 6850
  /*
   TESTE
   
    Valores esperados: 
   
    O menor valor é: 100 no dia 2

    O maior valor é: 4000 no dia 4

    O maior valor é: 4000 no dia 4

    O faturamento diário foi maior que a média no dia 3, com o valor de 2000
    Maiores detalhes:
          Valor diário: 2000
          Média: 1141.6666666666667
          Dia: 3
          

    O faturamento diário foi maior que a média no dia 4, com o valor de 4000
    Maiores detalhes:
          Valor diário: 4000
          Média: 1141.6666666666667
          Dia: 4


    Todos os testes foram validados! OK
  */

const calculaMenor = () => {
  /* O menor valor de faturamento ocorrido em um dia do ano; */
  let menorValor = faturamento[0]
  let dia_menor = 1

  for (let i = 0; i < faturamento.length; i++){
    
    // Sábado e Domingo não entram na conta
    if((i+1)%6 == 0 || (i+1)%7 == 0){
      // Não faz nada por enquanto
    }else{
      if(faturamento[i] < menorValor){
        menorValor = faturamento[i]
        dia_menor = i + 1
      }
    }
  }

  console.log(`\nO menor valor é: ${menorValor} no dia ${dia_menor}`)
  let result = [menorValor, dia_menor]
  return menorValor
}

const calculaMaior = () => {
  /* O maior valor de faturamento ocorrido em um dia do ano; */

  let maiorValor = faturamento[0]
  let dia_2

  for (let i = 0; i < faturamento.length; i++){
    if(faturamento[i] > maiorValor){
      maiorValor = faturamento[i]
      dia_2 = i + 1
    }
  }

  console.log(`\nO maior valor é: ${maiorValor} no dia ${dia_2}`)
  return maiorValor
}

const calculaMedia = () => {
  let total = 0
  let maior = calculaMaior();
  let finalDeSemana = 0
  
  for (i = 0; i < faturamento.length; i++){
    // Sábado e Domingo não entram na conta
    if((i+1)%6 == 0 || (i+1)%7 == 0){
      finalDeSemana++
    }else{
      total += faturamento[i]
    }
    
  }

  let media = total / (faturamento.length - finalDeSemana)
  
  return media
}

/* Número de dias no ano em que o valor de faturamento diário foi superior à média anual. */
const calculoSuperioridadeFaturamentoDiario = () => {
  let dia
  let media = calculaMedia()
  for (let i = 0; i < faturamento.length; i++){
    if(faturamento[i] > media){
      dia = i + 1
      console.log(`\nO faturamento diário foi maior que a média no dia ${dia}, com o valor de ${faturamento[i]}`)
      console.log(`Maiores detalhes:
      Valor diário: ${faturamento[i]}
      Média: ${media}
      Dia: ${dia}
      `);
    }
  }
}

calculaMenor()
calculaMaior()
calculoSuperioridadeFaturamentoDiario()
