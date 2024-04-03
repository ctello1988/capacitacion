import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { fieldsComponents } from '../../../../shared/fields/fields-components';
import { Customer } from '@interfaces/customers/customers';


type FormData = {
  [key in keyof Customer]: FormControl<Customer[key] | unknown>
};

@Component({
  selector: 'customer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, fieldsComponents],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {
  @Output() addData: EventEmitter<Customer> = new EventEmitter<Customer>();
  form: FormGroup<FormData> = new FormGroup<FormData>({
    id: new FormControl({ value: 0, disabled: true }),
    name: new FormControl(),
    address: new FormControl(),
    birthday: new FormControl(),
    gender: new FormControl(),
    mail: new FormControl(),
    notes: new FormControl(),
    phone: new FormControl(),
    picture: new FormControl(),
  });

  saveData(): void {
    console.log(this.form.value);
  }

}
