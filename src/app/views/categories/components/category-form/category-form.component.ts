import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Categories } from '@interfaces/categories/categories';
import { fieldsComponents } from '../../../../shared/fields/fields-components';

type FormData = {
  [key in keyof Categories]: FormControl<Categories[key] | unknown>
};

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ...fieldsComponents],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss'
})
export class CategoryFormComponent {
  @Output() addData: EventEmitter<Categories> = new EventEmitter<Categories>();

  form: FormGroup<FormData> = new FormGroup<FormData>({
    id: new FormControl({ value: 0, disabled: true }),
    name: new FormControl(),
    description: new FormControl(),
    state: new FormControl(),
  });


  constructor() {
  }

  saveData(): void {
    const data = this.form.getRawValue();
    this.addData.next(data as Categories);
  }

}
