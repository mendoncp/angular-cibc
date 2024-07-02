import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponentComponent } from '../shared/table-component/table-component.component';
import { Transactions } from '../interfaces/transactions';
import { TransactionsService } from '../transactions.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule,TableComponentComponent, RouterModule ],
  templateUrl:'./display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {
  transactionsList : Transactions[] = [];

  transactionsService: TransactionsService = inject(TransactionsService);

  constructor () {
    this.transactionsService.getAllTransactions().then((transactionsList: Transactions[]) => {
      this.transactionsList = transactionsList;
    });
  }

}
