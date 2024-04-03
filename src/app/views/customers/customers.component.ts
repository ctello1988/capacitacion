import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Customer } from '@interfaces/customers/customers';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { octEye } from '@ng-icons/octicons';
import { CustomerService } from '@service/customer.service';
import { customerComponents } from './components/customer-components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'customers',
  standalone: true,
  imports: [CommonModule, NgIconComponent, ...customerComponents],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
  viewProviders: [provideIcons({ octEye })],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomersComponent {
  customers = signal<Customer[]>(new CustomerService().getAllCustomers());
  showForm = signal<boolean>(false);

  showFormFn(): void {
    this.showForm.set(!this.showForm());
  }
}
