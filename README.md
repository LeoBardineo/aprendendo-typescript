# Aprendendo TypeScript

Este repositório será onde irei registrar meus estudos acerca do TypeScript. Fique a vontade se quiser contribuir, me ajudar com erros que cometi, ou estudar TypeScript por meio do repositório ❤

## O que é o TypeScript

O TypeScript é um superset de JavaScript, ele adiciona tipagens estáticas ao código. O TypeScript pode conviver junto a outros arquivos JavaScript, já que ele é compilado para JavaScript.

## Por que usar TypeScript?

O uso dele traz segurança na detecção de erros inesperados. Por exemplo, uma função soma que recebe a e b e retorna a soma deles por meio do operador +, no JavaScript, caso passemos argumentos com a tipagem errada pra função, passando uma string por exemplo, irá retornar uma concatenação e vez de uma soma. E isso pode ser evitado caso as variáveis fossem tipadas como números.

```js
function soma(a, b) {
  return a + b
}

soma(2, 2) // 4
soma('2', '2') // '22'
```

Outras vantagens ao utilizar TypeScript são o IntelliSense, a possiblidade de usar parâmetros opcionais e a tipagem funcionar como uma mini documentação, o que ajuda em futuras manutenções e traga uma camada a mais de segurança pro código.

## Conteúdo

- [Enum](./conteudo/enum.ts)
- [Type](./conteudo/type.ts)
- [Interface](./conteudo/interface.ts)
- [Generics](./conteudo/generics.ts)
- [Optional Chaining](./conteudo/optionalchaining.ts)

## Referências

- [TypeScript4Noobs](https://github.com/Carolis/typescript4noobs)