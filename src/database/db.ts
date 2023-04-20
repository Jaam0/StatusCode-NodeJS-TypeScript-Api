import sqlite3 from "sqlite3";
import fs from "fs";

export function createDbConnection() {
  const filepath = "./statusCode.db";

  if (fs.existsSync(filepath)) {
    return new sqlite3.Database(filepath);
  } else {
    const db = new sqlite3.Database(filepath, (error) => {
      if (error) {
        return console.error(error.message);
      }
      createTable(db);
    });
    console.log("Connection with SQLite has been established");
    return db;
  }
}

function createTable(db) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS statusCode
    (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      code INTERGER NOT NULL,
      name   VARCHAR(60) NOT NULL,
      codeStatus VARCHAR(50) NOT NULL,
      note   VARCHAR(200) NOT NULL,
      status VARCHAR(20) NOT NULL
    );
  `);
}

// const db = new sqlite3.Database(':memory:');

// db.serialize(() => {
//     db.run("CREATE TABLE lorem (info TEXT)");

//     // const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//     // for (let i = 0; i < 10; i++) {
//     //     stmt.run("Ipsum " + i);
//     // }
//     // stmt.finalize();

//     db.each("SELECT rowid AS id, info FROM lorem", (err, row:any) => {
//         console.log(row.id + ": " + row.info);
//     });
// });

// db.close();
