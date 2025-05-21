import { startBot } from './src/bot/whatsapp';
import { startChecker } from './src/monitor/sefazChecker';

startBot().then((client) => {
  startChecker(client);
});
