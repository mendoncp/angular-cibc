import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from '../../transactions.service';
import { Transactions } from '../../interfaces/transactions';
@Component({
  selector: 'app-trans-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trans-details.component.html',
  styleUrl: './trans-details.component.css'
})
export class TransDetailsComponent {

  tansactionService = inject(TransactionsService)
  route: ActivatedRoute =  inject(ActivatedRoute);
  transaction_dtls: Transactions | undefined;
  transdtls_id = 0;

  constructor() {
    const transdtls_id = Number(this.route.snapshot.params['id']);
    this.transaction_dtls = this.tansactionService.getTransactionsById(transdtls_id);
  }

}
