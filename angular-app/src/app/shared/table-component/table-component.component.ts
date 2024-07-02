import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transactions } from '../../interfaces/transactions';
import { TransDetailsComponent } from '../trans-details/trans-details.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [CommonModule, TransDetailsComponent, RouterModule],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css'
})
export class TableComponentComponent {
  @Input() transactions !: Transactions[];

}
