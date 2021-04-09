# eferiado
Um pacote para descobrir se um determinado dia é feriado nacional ou regional 📅

### Como utilizar o pacote ? 📝

1. Instale o pacote 👇

```sh
   npm -i eferiado
   ```

2. Utilize ele em seu codigo 😁

* Nacionais

```js

const eFeriado = require('eferiado')
const _25deDezembro = eFeriado('25/12') // { nacionais: [ { nome: 'Natal' } ], regionais: [], data: '25/12' }

if(_25deDezembro.nacionais.length) {
    alert(`É ${_25deDezembro.nacionais[0].nome} hoje!`)
}

```

* Regionais
```js
const eFeriado = require('eferiado')
const revolucaoConstitucionalista = eFeriado('09/07') // { nacionais: [], regionais: [ { nome: 'Revolução Constitucionalista de 1932, também conhecida como Revolução de 1932 ou Guerra Paulista, foi o movimento armado ocorrido nos estados de São Paulo, Mato Grosso do Sul e Rio Grande do Sul, entre julho e outubro de 1932, que tinha por objetivo derrubar o governo provisório de Getúlio Vargas e convocar uma Assembleia Nacional Constituinte.', estado: 'SP' } ], data: '09/07' }

if(revolucaoConstitucionalista.regionais.length) {
    alert(`É ${revolucaoConstitucionalista.regionais[0].nome} hoje no estado de ${revolucaoConstitucionalista.regionais[0].estado}`)
}

```

#### Utilizando Date

* Nacionais
```js 
const eFeriado = require('eferiado')
const _25deDezembro = eFeriado(new Date("12-25-2021"))  // { nacionais: [ { nome: 'Natal' } ], regionais: [], data: '25/12' }

if(_25deDezembro.nacionais.length) {
    alert(`É ${_25deDezembro.nacionais[0].nome} hoje!`)
}
```

* Regionais
```js 
const eFeriado = require('eferiado')
const revolucaoConstitucionalista = eFeriado(new Date("07-09-2021")) // { nacionais: [], regionais: [ { nome: 'Revolução Constitucionalista de 1932, também conhecida como Revolução de 1932 ou Guerra Paulista, foi o movimento armado ocorrido nos estados de São Paulo, Mato Grosso do Sul e Rio Grande do Sul, entre julho e outubro de 1932, que tinha por objetivo derrubar o governo provisório de Getúlio Vargas e convocar uma Assembleia Nacional Constituinte.', estado: 'SP' } ], data: '09/07' }

if(revolucaoConstitucionalista.regionais.length) {
    alert(`É ${revolucaoConstitucionalista.regionais[0].nome} hoje no estado de ${revolucaoConstitucionalista.regionais[0].estado}`)
}
