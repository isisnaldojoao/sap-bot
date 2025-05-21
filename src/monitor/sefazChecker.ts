import axios from 'axios';
import cron from 'node-cron';
import { Client } from 'whatsapp-web.js';
import { getLastStatus, setStatus } from '../utils/statusCache';

const SEFAZ_URL = 'https://www.sefaz.ma.gov.br';
const NUMERO_DESTINO = '55XXXXXXXXXXX@c.us'; // Substitua com o número real

export function startChecker(client: Client): void {
  cron.schedule('*/5 * * * *', async () => {
    try {
      const response = await axios.get(SEFAZ_URL, { timeout: 5000 });

      if (response.status === 200) {
        if (getLastStatus() === false) {
          console.log('✅ SEFAZ-MA voltou ao ar.');
          await client.sendMessage(
            NUMERO_DESTINO,
            '✅ *Atualização*: A SEFAZ-MA voltou a ficar online.'
          );
        } else {
          console.log('✅ SEFAZ-MA está online.');
        }
        setStatus(true);
      }
    } catch (error) {
      if (getLastStatus() === true) {
        console.log('❌ SEFAZ-MA caiu!');
        await client.sendMessage(
          NUMERO_DESTINO,
          '❌ *Alerta*: A SEFAZ-MA parece estar fora do ar.'
        );
      } else {
        console.log('⏳ SEFAZ-MA continua offline...');
      }
      setStatus(false);
    }
  });
}
