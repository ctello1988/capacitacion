import { Customer } from '@interfaces/customers/customers';
import { CustomerResponse } from '@model/customers/customer-response';

export class CustomersMapper {

    static map(data: CustomerResponse): Customer {
        return {
            id: data.id,
            name: data.nombre_completo,
            phone: data.telefono,
            mail: data.correo_electronico,
            birthday: data.fecha_nacimiento,
            address: data.direccion,
            notes: data.notas,
            picture: data.foto,
            gender: data.genero,
        };
    }
}