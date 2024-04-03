import { CustomerResponse } from '@model/customers/customer-response';
import { customers } from '../const-data/customers';
import { CustomersMapper } from '@mapper/customers/customers-mapper';
import { Customer } from '@interfaces/customers/customers';

export class CustomerService {

    getAllCustomers(): Customer[] {
        const customersResponse = customers.map(customer => new CustomerResponse(customer));
        const customerMapper = customersResponse.map(customer => CustomersMapper.map(customer));
        return customerMapper;
    }
}