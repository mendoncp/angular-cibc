import { Injectable } from '@angular/core';
import { Transactions } from './interfaces/transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  readonly url = 'http://localhost:3000/transactions';

  protected transactionsList: Transactions[] = []

 async getAllTransactions(): Promise<Transactions[]> {
    const response = await fetch(this.url);
    const data =  (await response.json()) ?? [];
    this.transactionsList = data.data;
    console.log('transactionsList',this.transactionsList)
    return this.transactionsList;
  }

  getTransactionsById(id: Number): Transactions | undefined  {
    console.log('transactionsList', this.transactionsList)
    return this.transactionsList.find(transaction => transaction.id === id)
  }





}
