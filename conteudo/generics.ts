/* É comum se deparar com uma funçaõ que pode receber
qualquer tipode variável como parâmetro.
No JS, isso não é um problema, já que tem tipagem fraca,
mas isso pode acarretar em problemas, como visto antes.
No TS. nós podemos usar o any, mas isso não é uma boa prática,
então, nós usamos o Generics. */

// Podemos receber QUALQUER coisa quando colocamos o tipo any,
// o que é um problema.
function logger(variable: any): void {
  console.log(variable);
}

logger(' Hello WOrld');
logger(1234);
logger(null);

// O Generic cria um "molde" que permite definir para
// diversos tipos de variáveis e aumentar a
// compenentização e flexibilização do nosso código
// sem ferir os princípios do SOLID
function loggerGeneric<T>(variable: T): void {
  console.log(variable);
}

loggerGeneric<string>(' Hello WOrld');
loggerGeneric<number>(1234);

// Exemplo de uso do Generic

//Aqui estamos fazendo uma chamada para a API recebendo um array de numbers
const Axios = require('axios');

const numbers = async () => await Axios.get('URL');

console.log(numbers);

//Aqui estamos fazendo uma chamada para a API recebendo um Array de objs do tipo User.
import Axios from 'axios';

interface User {
  id: number;
  email: string;
}

const userList: User[] = async () => await Axios.get<User[]>('URL');

console.log(userList);
