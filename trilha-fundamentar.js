
## Guia Estelar JavaScript



### Fluxo de caixa familiar

let family = {
  entradas: [2500, 350, 45.55, 87.44, 322],
  despesas: [45, 560, 77.99, 1505, 500, 300, 244]
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value
  }
  return total
}

function calculaCaixa() {
  const calculaEntradas = sum(family.entradas)
  const calculaDespesas = sum(family.despesas) 
  
  const total = calculaEntradas - calculaDespesas
  
  const itsOk = total >=0
  
  let statusSaldo = "negativo"
  
  if (itsOk) {
    statusSaldo = "positivo"
  }
  
  console.log(`Seu saldo é ${statusSaldo}: R$ ${total.toFixed(2)}`)
}

calculaCaixa()
