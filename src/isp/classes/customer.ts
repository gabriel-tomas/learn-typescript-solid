import {
  IndividualCustomerProtocol,
  CompanyCustomerProtocol,
} from './contracts/customerProtocol';

export class IndividualCustomer implements IndividualCustomerProtocol {
  constructor(
    public firstName: string,
    public lastName: string,
    public cpf: string,
  ) {}
}

export class CompanyCustomer implements CompanyCustomerProtocol {
  constructor(
    public name: string,
    public alias: string,
    public cnpj: string,
  ) {}
}
