import { sql } from './db.js'

sql`
  CREATE TABLE frangoDoG (
      id text PRIMARY KEY,
      name character varying(255),
      password character varying(255),
      profissao character varying(255),
      earning character varying(255)
  );
`.then(() => {
  console.log('tabela criada');
})