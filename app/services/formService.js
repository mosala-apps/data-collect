import {db} from './database'

export const fetchAllForms = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
      "SELECT * FROM forms",
      [],
      (_, result) => {
        resolve(result.rows._array);
      },
      (_, err) => {
        console.log('form/index', err)
        reject(err);
      }
      );
    });
  });
}

export const fetchForm = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
      "SELECT * FROM forms WHERE id = ?",
      [id],
      (_, result) => {
        resolve(result.rows._array[0]);
      },
      (_, err) => {
        console.log('form/show', err)
        reject(err);
      }
      );
    });
  });
}

export const storeForm = ({ payload, hospitalId, date, status, formTitle, formId }) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO forms (payload, hospitalId, date, status, formTitle, formId) VALUES (?, ?, ?, ?, ?, ?)`,
        [payload, hospitalId, date, status, formTitle, +formId],
        (_, result) => {
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

export const updateForm = (id, {payload, hospitalId, date, status, formTitle, formId }) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `UPDATE forms
          SET payload = ? , hospitalId = ?, date = ?, status = ?, formTitle = ?, formId = ?
          WHERE id = ?
        `,
        [payload, hospitalId, date, status, formTitle, +formId, id],
        (_, result) => {
          resolve(result.insertId)
        },
        (_, error) => {
          console.log('form/update', error)
          reject(error)
        },
      );
    });
  });
}

export const fetchFormsByHospital = ({hospitalId, status}) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM forms WHERE hospitalId = ? AND status = ?",
        [hospitalId, status],
        (_, result) => {
          resolve(result.rows._array);
        },
        (_, err) => {
          console.log('form/fetchByHospital', err)
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