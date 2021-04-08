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
const _25deDezembro = eFeriado('25/12') // { "eFeriado": true, "feriadoNome": "Natal" }

if(_25deDezembro.eFeriado) {
    alert(`É ${_25deDezembro.nome} hoje!`)
}

```

* Regionais
```js
const eFeriado = require('eferiado')
const _RevolucaoConstitucionalista = eFeriado('07/09') // { "eFeriadoRegional": true, "feriadoRegionalNome": "Revolução Constitucionalista de 1932","feriadoRegionalEstado": "SP" }

if(_RevolucaoConstitucionalista.eFeriadoRegional) {
    alert(`É ${_RevolucaoConstitucionalista.nome} hoje no estado de ${_RevolucaoConstitucionalista.estado}`)
}

```

#### Utilizando Date

* Nacionais
```js 
const eFeriado = require('eferiado')
const _25deDezembro = eFeriado(new Date(2021,12,25)) // { "eFeriado": true, "nome": "Natal" }

if(_25deDezembro.eFeriado) {
    alert(`É ${_25deDezembro.nome} hoje!`)
}
```

* Regionais
```js 
const eFeriado = require('eferiado')
const _RevolucaoConstitucionalista = eFeriado(new Date(2021,09,07)) // { "eFeriadoRegional": true, "feriadoRegionalNome": "Revolução Constitucionalista de 1932","feriadoRegionalEstado": "SP" }

if(_RevolucaoConstitucionalista.eFeriadoRegional) {
    alert(`É ${_RevolucaoConstitucionalista.nome} hoje no estado de ${_RevolucaoConstitucionalista.estado}`)
}
