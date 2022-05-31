import { createRxDatabase } from 'rxdb';

import { getRxStoragePouch, addPouchPlugin } from 'rxdb/plugins/pouchdb';
import * as puch from 'pouchdb-adapter-idb'

addPouchPlugin(puch);

export const stopCoronaLocal = async () => await createRxDatabase({
  name: 'stopcovid_db',
  storage: getRxStoragePouch('idb'),
});
