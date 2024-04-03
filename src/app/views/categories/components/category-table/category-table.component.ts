import { Component, Input } from '@angular/core';
import { Categories } from '@interfaces/categories/categories';

@Component({
  selector: 'category-table',
  standalone: true,
  imports: [],
  templateUrl: './category-table.component.html',
  styleUrl: './category-table.component.scss'
})
export class CategoryTableComponent {
  @Input({ required: true }) categories!: Categories[];
}
