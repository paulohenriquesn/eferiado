# eferiado
Um pacote para descobrir se um determinado dia é feriado nacional 📅

### Como utilizar o pacote ? 📝

1. Instale o pacote 👇

```sh
   npm -i eferiado
   ```

2. Utilize ele em seu codigo 😁

```js

const eFeriado = require('eferiado')
const _25deDezembro = eFeriado('25/12') // { "eFeriado": true, "nome": "Natal" }

if(_25deDezembro.eFeriado) {
    alert(`É ${_25deDezembro.nome} hoje!`)
}

```