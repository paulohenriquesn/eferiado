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
const natal = eFeriado('25/12') // [true,{"nome": "Natal"}]

if(natal[0]) {
    alert(`É ${natal[1].nome} hoje!`)
}

```