// Enum númerico
enum Resposta {
  Sim = 1,
  Nao = 0
}

console.log(Resposta.Sim); // 1
console.log(Resposta.Nao); // 0

// Ele tem um "auto complete" quando não é definido, achei muito pica
enum Direcao {
  Cima = 1,
  Baixo, // 2
  Esquerda, // 3
  Direita //4 
}

// Enum string
enum DirecaoSting {
  Cima = 'CIMA',
  Baixo = 'BAIXO',
  Esquerda = 'ESQUERDA',
  Direita = 'DIREITA'
}

// Enum com expressões
enum AcessarArquivo {
  Nada,
  Ler = 1 << 1,
  Escrever = 1 << 2,
  EscreverELer = Ler | Escrever,
  G = "123".length
}