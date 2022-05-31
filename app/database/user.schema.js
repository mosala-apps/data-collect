import { async } from 'rxjs';
import { stopCoronaLocal } from './RxDB';

const UserSchema = {
  title: 'user schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      minimum: 0,
      maximum: 150,
      multipleOf: 1,
    },
    name: {
      type: 'string',
      maxLength: 100,
    },
    userame: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
  },
};

export const userCollections = async () => {
  await stopCoronaLocal.addCollections({
    users: {
      schema: UserSchema,
    },
  });
};
userCollections()
export const RXDB__addUser = async (user) => {
  await stopCoronaLocal.users.insert(user);
};
