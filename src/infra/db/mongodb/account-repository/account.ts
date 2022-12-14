import { AddAccountRepository } from '../../../../data/protocols/add-account-repository';
import { AccountModel } from '../../../../domain/models/account';
import { AddAccountModel } from '../../../../domain/usecases/add-account';
import { MongoHelper } from '../helpers/mongo-helper';

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    // seleciona a coleção que deseja realizar operações
    const accountCollection = MongoHelper.getCollection('accounts');

    // insere os dados no banco
    await (await accountCollection).insertOne(accountData);

    // retorna para o front com o id no formato sem o underline
    return MongoHelper.map(accountData);
  }
}
