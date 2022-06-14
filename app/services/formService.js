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

export const updateForm = (id, {payload, hospitalId, date, status, formTitle, formId, error }) => {
  let setters = []
  let args = []
  if (payload) {
    setters.push(`payload = ?`)
    args.push(payload)
  }
  if (hospitalId) {
    setters.push(`hospitalId = ?`)
    args.push(hospitalId)
  }
  if (date) {
    setters.push(`date = ?`)
    args.push(date)
  }
  if (status) {
    setters.push(`status = ?`)
    args.push(status)
  }
  if (formTitle) {
    setters.push(`formTitle = ?`)
    args.push(formTitle)
  }
  if (formId) {
    setters.push(`formId = ?`)
    args.push(+formId)
  }
  if (error !== undefined && error !== null) {
    setters.push(`error = ?`)
    args.push(error)
  }

  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `UPDATE forms SET ${setters.join(',')} WHERE id = ?`,
        [...args, id],
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

export const fetchFormsByStatus = (status) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM forms WHERE status = ? ORDER BY error",
        [status],
        (_, result) => {
          resolve(result.rows._array);
        },
        (_, err) => {
          console.log('form/fetchFormsByStatus', err)
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