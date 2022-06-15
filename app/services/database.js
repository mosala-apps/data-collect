import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabase('database.db');

export const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS forms (
          id INTEGER PRIMARY KEY NOT NULL,
          date TEXT NOT NULL,
          status TEXT NOT NULL,
          formTitle TEXT NOT NULL,
          payload TEXT NOT NULL,
          error INTEGER DEFAULT 0,
          hospitalId INTEGER NOT NULL,
          formId INTEGER NOT NULL
        )`,
        [],
        () => {
          console.log('initDatabase success');
          resolve()
        },
        (_, error) => {
          console.log(error)
          reject(error)
        },
      );
    });
  });
}