import sql from "better-sqlite3";

const db = sql("billings.db");

export async function getUsers() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM users").all();
}

export async function saveUser(user) {
  db.prepare(
    `
    INSERT INTO users (firstName, lastName, phone, address)
    VALUES(
      @firstName,
      @lastName,
      @phone,
      @address
    )
  `
  ).run(user);
}

//create table for invoices
db.prepare(
  `
   CREATE TABLE IF NOT EXISTS invoices (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       customerId INTEGER NOT NULL,
       productDetails TEXT NOT NULL,
       items TEXT NOT NULL
    )
`
).run();
//Insert query for invoice
export async function saveInvoice(invoice) {
  db.prepare(
    `
    INSERT INTO invoices (customerId, productDetails, items)
    VALUES(
      @customerId,
      @productDetails,
      @items
    )
  `
  ).run(invoice);
}

//fetch query for innvoices
export async function getInvoices() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM invoices").all();
}
