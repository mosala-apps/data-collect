import {db} from './database'

export const fetchAllForms = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
      "SELECT * FROM forms",
      [],
      (_, result) => {
        console.log('form/index', result)
        resolve(result);
      },
      (_, err) => {
        console.log('form/index', error)
        reject(err);
      }
      );
    });
  });
}

export const storeForm = ({ payload, hospitalId, date, status }) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO forms (payload, hospitalId, date, status) VALUES (?, ?, ?, ?)`,
        [payload, hospitalId, date, status],
        (_, result) => {
          console.log('form/store', result)
          resolve(result.insertId)
        },
        (_, error) => {
          console.log('form/store', error)
          reject(error)
        },
      );
    });
  });
}

export const fetchFormsByHospital = ({hospitalId}) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
      "SELECT * FROM forms WHERE hospitalId = ?",
      [hospitalId],
      (_, result) => {
        console.log('form/fetchByHospital', result)
        resolve(result);
      },
      (_, err) => {
        console.log('form/fetchByHospital', error)
        reject(err);
      }
      );
    });
  });
}

export const destroyForm = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM forms WHERE id = ?',
        [id],
        resolve,
        (_, error) => {
          console.log('form/destroy', error)
          reject(error)
        }
      );
    });
  });
}