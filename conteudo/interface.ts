/* Com o Interface nós podemos descrever um objeto,
é parecida com o type mas tem algumas diferenças,
podendo por exemplo ser estendida e
definir propriedades opcionais com o símbolo de ? */
interface Geladeira {
  nome: string;
  descricao: string;
  modelo: string;
  funcionalidades?: string[]; // opcional
}

// declarando um objeto do tipo Geladeira
const Brastemp: Geladeira = {
  nome: "Brastemp Frost Free",
  descricao: "Geladeira bonita",
  modelo: "1231XHDDH"
}

interface Pessoa {
  altura: number;
  falar(msg: string): string;
}

// essa interface criará uma interseção com a primeira
// ou seja, a interface Pessoa é a junção da primeira com essa
interface Pessoa {
  andar(passos: number): string;
}

// possui todos os métodos e atributos de Pessoa
interface Programador extends Pessoa {
  tomarCafe(): void;
}

// utilizamos readonly para propriedades que são apenas para leitura
// elas disparam erro quando se tenta atualizá-las após definida
interface Identidade {
	readonly rg: string;
  emissor: string;
}

// Quando queremos omitir algumas propriedades K de uma interface T
// podemos utilizar o Omit:
interface Veiculo {
  descricao: string;
  marca: string; 
  motor: string;
  portas: number;
}

type Bicicleta = Omit<Veiculo, 'motor' | 'portas'>;

const minhaBike: Bicicleta = {
  descricao: 'Bike que ganhei de presente',
  marca: 'Monark'
};

// e quando queremos pegar algumas propriedades K de uma interface T podemos utilizar o Pick:
type BicicletaComPick = Pick<Veiculo, 'descricao' | 'marca'>;

const minhaSegundaBike: BicicletaComPick = {
  descricao: 'Bike que comprei',
  marca: 'Monark'
};