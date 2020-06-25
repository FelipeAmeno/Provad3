import { Injectable } from '@angular/core';
import { Pessoa } from '../app/pessoa';
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {

  constructor(private storage: Storage) { }

  async insert(user: Pessoa) {
    const pessoa: Pessoa[] = (await this.storage.get("pessoa")) || [];
    user.id = pessoa.length + 1;
    return this.storage.set("pessoa", [...pessoa, user]);
  }

  async findId(id) {
    const pessoa: Pessoa[] = (await this.storage.get("pessoa")) || [];
    return pessoa.find((pessoa) => pessoa.id == id);
  }

  async



}

getPessoa(racaCor) {



  console.log()

}


getPessoa1(id) {

  console.log()
}
}
