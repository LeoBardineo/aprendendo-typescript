/* O Optional Chaining é um operador que permite
fazer a verificação de um objeto de uma maneira mais curta/simples,
somente adicionando um ?. antes de acessar a propriedade a ser testada. */

const person = {
  firstName: 'Marcio',
  lastName: 'Rodrigues',
  animals: {
    dog: 'Eros',
    cat: 'Felicia'
  },
  company: 'Empresa'
}

const dogName = person.animals?.dog;
const companyName = person?.company;