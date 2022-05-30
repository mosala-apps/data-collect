import { createRxDatabase } from 'rxdb';

import { getRxStoragePouch, addPouchPlugin } from 'rxdb/plugins/pouchdb';

addPouchPlugin(require('pouchdb-adapter-idb'));

export const stopCoronaLocal = await createRxDatabase({
  name: 'stopcovid_db',
  storage: getRxStoragePouch('idb'),
});