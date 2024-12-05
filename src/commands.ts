import 'dotenv/config';
import { InstallGlobalCommands } from './utils.ts';
const  TRANSACTION_LOOKUP_COMMAND = {
  name: 'transactionlookup',
  type: 3,
  integration_types: [1],
  contexts: [2],
};
const  TRANSACTION_SEARCH_COMMAND = {
  name: 'transactionsearch',
  type: 1,
  description: 'Search for a transaction by hash, url or address using the Blockcypher API',
  integration_types: [1],
  contexts: [0, 1, 2],
  options: [
    {
      name: 'transaction',
      description: 'The transaction hash or url or adress to search for',
      type: 3,
      required: true,
    },
  ]
};
const ALL_COMMANDS = [
  TRANSACTION_LOOKUP_COMMAND,
  TRANSACTION_SEARCH_COMMAND,
];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
