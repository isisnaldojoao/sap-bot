import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

export async function startBot(): Promise<Client> {
  const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true },
  });

  client.on('qr', (qr: string) => {
    qrcode.generate(qr, { small: true });
  });

  client.on('ready', () => {
    console.log('✅ Bot SAP pronto no WhatsApp!');
  });

  await client.initialize();
  return client;
}
