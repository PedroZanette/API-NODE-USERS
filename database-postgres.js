import { randomUUID } from "crypto";
import { sql } from './db.js';

export class FrangoDoGAll { 
  async listFrangoDoG() {
    const frangoDoG = await sql`select * from frangoDoG`;
    return frangoDoG;
  }

  async createFrangoDoG(frangoDoG) {
    console.log('FRANGO', frangoDoG);
    const id = randomUUID();
    console.log('id', id);
    const name = frangoDoG.name;
    const password = frangoDoG.password;
    const profissao = frangoDoG.profissao;
        const earning = frangoDoG.earning;
    
    await sql`insert into frangoDoG (id, name, password, profissao, earning)
    values (${id}, ${name}, ${password}, ${profissao}, ${earning})`
  }

  async updateFrangoDoG(id, frangoDoG) {
    const name = frangoDoG.name;
    const password = frangoDoG.password;
    const profissao = frangoDoG.profissao;
    const earning = frangoDoG.earning;

    await sql`update frangoDoG set 
        name = ${name},
        password = ${password},
        profissao = ${profissao},
        earning = ${earning}
        where id = ${id}
    `;
  }

  async deleteFrangoDoG(id) {
    await sql`delete from frangoDoG where id = ${id}`
  }

}