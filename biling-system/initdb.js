const sql = require("better-sqlite3");
const db = sql("billings.db");

const dummyUser = [
  {
    firstName: "Vipul",
    lastName: "Dev",
    phone: "97121456",
    address: "Surat",
  },
  {
    firstName: "Vipul",
    lastName: "Test",
    phone: "11313",
    address: "Anand",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS users (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       firstName TEXT NOT NULL,
       lastName TEXT NOT NULL,
       phone TEXT NOT NULL,
       address TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO users VALUES (
         null,
         @firstName,
         @lastName,
         @phone,
         @address
      )
   `);

  for (const user of dummyUser) {
    stmt.run(user);
  }
}

initData();
