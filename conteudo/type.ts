// Por meio do type nós criamos o nosso próprio tipo, tipar objetos, e tudo mais
type LadoQuadrado = number;

type Triangulo = {
  lado1: number;
  lado2: number;
  lado3: number;

  area(altura: number, base: number): number;
  // ou
  area: (altura: number, base: number) => number;
}

const triangulo: Triangulo = {
  lado1: 3,
  lado2: 4,
  lado3: 5,
  area(altura: number, base: number): number {
    return altura * base / 3
  }
}

// Também é possível definir constantes literais
type Sim = 'sim';
type Lado1 = 44.5;
let lado1: Lado1 = 44.5;
lado1 += 2; // o compilador aceita mas não é recomendável