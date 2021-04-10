# eferiado
Um pacote para descobrir se um determinado dia é feriado nacional ou regional 📅

![](https://img.shields.io/npm/dw/eferiado)
![](https://img.shields.io/npm/v/eferiado)
![](https://img.shields.io/github/contributors/paulohenriquesn/eferiado)
![](https://img.shields.io/npm/l/eferiado)
![](https://img.shields.io/github/license/paulohenriquesn/eferiado)

### Como utilizar o pacote ? 📝

1. Instale o pacote 👇

```sh
   npm -i eferiado | yarn add eferiado
   ```

2. Utilize ele em seu codigo 😁

* Nacionais

```js

const { getHolidaysByDate } = require('eferiado')
const _25deDezembro = getHolidaysByDate('25/12') // { nacionais: [ { nome: 'Natal' } ], regionais: [], data: '25/12' }

if(_25deDezembro.nacionais.length) {
    alert(`É ${_25deDezembro.nacionais[0].nome} hoje!`)
}

```

* Regionais
```js
const { getHolidaysByState } = require('eferiado')
const revolucaoConstitucionalista = getHolidaysByState('SP', '09/07') // [ { estado: 'SP', data: '09/07', nome: 'Revolução Constitucionalista de 1932, também conhecida como Revolução de 1932 ou Guerra Paulista, foi o movimento armado ocorrido nos estados de São Paulo, Mato Grosso do Sul e Rio Grande do Sul, entre julho e outubro de 1932, que tinha por objetivo derrubar o governo provisório de Getúlio Vargas e convocar uma Assembleia Nacional Constituinte.' } ]

if(revolucaoConstitucionalista.length) {
    alert(`É ${revolucaoConstitucionalista[0].nome} hoje no estado de ${revolucaoConstitucionalista[0].estado}`)
}

```

#### Utilizando Date

* Nacionais
```js 
const { getHolidaysByDate } = require('eferiado')
const _25deDezembro = getHolidaysByDate(new Date("12-25-2021")) // { nacionais: [ { nome: 'Natal' } ], regionais: [], data: '25/12' }

if(_25deDezembro.nacionais.length) {
    alert(`É ${_25deDezembro.nacionais[0].nome} hoje!`)
}
```

* Regionais
```js 
const { getHolidaysByState } = require('eferiado')
const revolucaoConstitucionalista = getHolidaysByState("SP", new Date("07-09-2021")) // [ { estado: 'SP', data: '09/07', nome: 'Revolução Constitucionalista de 1932, também conhecida como Revolução de 1932 ou Guerra Paulista, foi o movimento armado ocorrido nos estados de São Paulo, Mato Grosso do Sul e Rio Grande do Sul, entre julho e outubro de 1932, que tinha por objetivo derrubar o governo provisório de Getúlio Vargas e convocar uma Assembleia Nacional Constituinte.' } ]

if(revolucaoConstitucionalista.length) {
    alert(`É ${revolucaoConstitucionalista[0].nome} hoje no estado de ${revolucaoConstitucionalista[0].estado}`)
}
