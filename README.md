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
const _25deDezembro = eFeriado('25/12') // { eFeriadoNacional: true, eFeriadoRegional: false, feriadoNacional: 'Natal', feriadosRegionais: null }

if(_25deDezembro.eFeriadoNacional) {
    alert(`É ${_25deDezembro.feriadoNacional} hoje!`)
}

```

* Regionais
```js
const eFeriado = require('eferiado')
const revolucaoConstitucionalista = eFeriado('07/09') // { eFeriadoNacional: true, eFeriadoRegional: true, feriadoNacional: 'Dia da Indepedência do Brasil', feriadosRegionais: [ { nome: 'Revolução Constitucionalista de 1932, também conhecida como Revolução de 1932 ou Guerra Paulista, foi o movimento armado ocorrido nos estados de São Paulo, Mato Grosso do Sul e Rio Grande do Sul, entre julho e outubro de 1932, que tinha por objetivo derrubar o governo provisório de Getúlio Vargas e convocar uma Assembleia Nacional Constituinte.', estado: 'SP' } ] }

if(revolucaoConstitucionalista.eFeriadoRegional) {
    alert(`É ${revolucaoConstitucionalista.feriadosRegionais[0].nome} hoje no estado de ${revolucaoConstitucionalista.feriadosRegionais[0].estado}`)
}

```

#### Utilizando Date

* Nacionais
```js 
const eFeriado = require('eferiado')
const _25deDezembro = eFeriado(new Date(2021,12,25)) // { eFeriadoNacional: true, eFeriadoRegional: false, feriadoNacional: 'Natal', feriadosRegionais: null }

if(_25deDezembro.eFeriadoNacional) {
    alert(`É ${_25deDezembro.feriadoNacional} hoje!`)
}
```

* Regionais
```js 
const eFeriado = require('eferiado')
const revolucaoConstitucionalista = eFeriado(new Date(2021,09,07)) // { eFeriadoNacional: true, eFeriadoRegional: true, feriadoNacional: 'Dia da Indepedência do Brasil', feriadosRegionais: [ { nome: 'Revolução Constitucionalista de 1932, também conhecida como Revolução de 1932 ou Guerra Paulista, foi o movimento armado ocorrido nos estados de São Paulo, Mato Grosso do Sul e Rio Grande do Sul, entre julho e outubro de 1932, que tinha por objetivo derrubar o governo provisório de Getúlio Vargas e convocar uma Assembleia Nacional Constituinte.', estado: 'SP' } ] }

if(revolucaoConstitucionalista.eFeriadoRegional) {
    alert(`É ${revolucaoConstitucionalista.feriadosRegionais[0].nome} hoje no estado de ${revolucaoConstitucionalista.feriadosRegionais[0].estado}`)
}
