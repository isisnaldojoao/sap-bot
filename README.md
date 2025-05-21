
## Como configurar para um grupo no WhatsApp
Para enviar mensagens para um grupo, você precisa:

#🔍 Obter o ID do grupo (chat ID)
A. Temporariamente edite o src/index.ts para listar os chats:

import { startBot } from './bot/whatsapp';

startBot().then(async (client) => {
  const chats = await client.getChats();
  for (const chat of chats) {
    if (chat.isGroup) {
      console.log(`Grupo: ${chat.name} | ID: ${chat.id._serialized}`);
    }
  }
});
Rode o projeto (npm run dev)

Aguarde a saída no terminal — ele listará todos os grupos dos quais seu número faz parte

#✏️ Edite o sefazChecker.ts e substitua o número individual:
ts
Copiar
Editar
// Em vez de:
const NUMERO_DESTINO = '55XXXXXXXXXXX@c.us';

// Use o ID do grupo:
const NUMERO_DESTINO = '120377218757559031@g.us'; // Exemplo de ID de grupo
⚠️ Atenção: o número que escaneia o QR precisa ser membro do grupo.



## Documentação da API

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.

