import { Customer } from '../interfaces/customer';
import { Vehicle } from '../interfaces/vehicle';

export interface CreateCustomerVehicle {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}
